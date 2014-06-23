function mapSquares (i) {
  return Math.pow(i, 2)
}

function reduceSum (a, b) {
  return a + b
}

function dimensions (vector) {
  return vector.length
}

function magnitude (vector, dimension) {
  if(dimension != null) {
    return vector[dimension]
  }
  else {
    return Math.sqrt(vector.map(mapSquares).reduce(reduceSum, 0))
  }
}

function dot (a, b) {
  var i = 0
    , ii = dimensions(b)

  if(dimensions(a) != ii) { throw new Error('Dot product requires two vectors with same dims') }

  var result = 0

  for(; i<ii; ++i) {
    result += a[i] * b[i]
  }

  return result
}

module.exports = {
  dimensions: dimensions
, magnitude: magnitude
, dot: dot
}
