var util = require('./util')

function mapSquares (i) {
  return Math.pow(i, 2)
}

function dimensions (vector) {
  return vector.length
}

function magnitude (vector, dimension) {
  if(dimension != null) {
    return vector[dimension]
  }
  else {
    return Math.sqrt(util.rumpOgitaOishiSummation(vector.map(mapSquares)))
  }
}

function dot (a, b) {
  var i = 0
    , ii = dimensions(b)

  if(dimensions(a) != ii) { throw new Error('Dot product requires two vectors with same dims') }

  var result = new Array(ii)

  for(; i<ii; ++i) {
    result[i] = a[i] * b[i]
  }

  return util.rumpOgitaOishiSummation(result)
}

module.exports = {
  dimensions: dimensions
, magnitude: magnitude
, dot: dot
}
