var Epsilon = Math.pow(2, -53)
  , Eta = Math.pow(2, -1074)

/**
* S. M. RUMP, T. OGITA AND S. OISHI
* http://www.ti3.tu-harburg.de/paper/rump/RuOgOi07I.pdf
*/

// Page 4
// x is result, y is error
function twoSum (a, b) {
  var x = a + b
    , z = x - a
    , y = (a - (x - z)) + (b - z)

  return [x, y, null]
}

// Page 8
// x is result, y is error
// third is so the array is allocated for 4 spaces
// it speeds up transform
function fastTwoSum(a, b) {
  var x = a + b
    , q = x - a
    , y = b - q

  return [x, y, null]
}

// Page 12
// p = q + p'
// sigma is a power of 2 greater than or equal to |p|
function extractScalar(sigma, p) {
  var q = (sigma + p) - sigma
    , pPrime = p - q

  return [q, pPrime]
}

// Page 12
function extractVector(sigma, p) {
  var tau = 0.0
    , extracted
    , i = 0
    , ii = p.length
    , pPrime = new Array(ii)

  for(; i<ii; ++i) {
    extracted = extractScalar(sigma, p[i])
    pPrime[i] = extracted[1]
    tau += extracted[0]
  }

  return [tau, pPrime]
}

// Finds the immediate power of 2 that is larger than p
function nextPowerTwo (p) {
  var q = (1 / Epsilon) * p
    , L = Math.abs((q + p) - q)

  if(L === 0)
    return Math.abs(p)

  return L
}

// Helper, gets the maximum of the absolute values of an array
function maxAbs(arr) {
  var i = 0
    , ii = arr.length
    , best = -1

  for(; i<ii; ++i) {
    if(Math.abs(arr[i]) > best) {
      best = arr[i]
    }
  }

  return best
}

function transform (p) {
  var mu = maxAbs(p)
    , M
    , sigmaPrime
    , tPrime
    , t
    , tau
    , sigma
    , extracted
    , res

      // Not part of the original paper, here for optimization
    , temp
    , bigPow
    , limitA
    , limitB = 0.5 * (1/Epsilon) * Eta

  if(mu === 0) {
    return [0, 0, p, 0]
  }

  M = nextPowerTwo(p.length + 2)
  bigPow = Math.pow(2, 2 * M)
  sigmaPrime = Math.pow(2, M) * nextPowerTwo(mu)
  tPrime = 0

  do {
    t = tPrime
    sigma = sigmaPrime
    extracted = extractVector(sigma, p)
    tau = extracted[0]
    tPrime = t + tau
    p = extracted[1]

    if(tPrime === 0) {
      return transform(p)
    }

    temp = Epsilon * sigma
    sigmaPrime = Math.pow(2, M) * temp
    limitA = bigPow * temp
  }
  while( Math.abs(tPrime) < limitA && sigma > limitB )

  // res already allocated for 4
  res = fastTwoSum(t, tau)
  res[2] = p

  return res
}

function accSum(p) {
  var tfmd = transform(p)

  return tfmd[0] + (tfmd[1] + tfmd[2].reduce(function (a,b){return a+b}))
}

/**
* A less fancy summation algorithm
*/
function kahanSummation(arr) {
  var sum = 0.0
    , c = 0.0
    , y
    , t
    , i = 0
    , ii = arr.length

  for(; i<ii; ++i) {
    y = arr[i] - c
    t = sum + y
    c = (t - sum) - y
    sum = t
  }

  return sum
}

module.exports = {
  kahanSummation: kahanSummation
, rumpOgitaOishiSummation: accSum
, twoSum: twoSum
, fastTwoSum: fastTwoSum
, nextPowerTwo: nextPowerTwo
}
