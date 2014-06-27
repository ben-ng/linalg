var vector = require('./vector')
  , add = require('add')

// matrix dimensions are rows X columns
function dimensions (matrix) {
  return [matrix.length, matrix[0].length]
}

function isMatrix (thing) {
  return Array.isArray(thing) && thing.length && Array.isArray(thing[0])
}

function dot (a, b) {
  var i
    , adims = dimensions(a)
    , bdims = dimensions(b)
    , aCols = adims[1]
    , resultRows = adims[0]
    , resultColumns = bdims[1]
    , j
    , k
    , result
    , t = new Array(aCols)

  // But we can't do vector . matrix
  if(!isMatrix(a) && isMatrix(b)) {
    throw new Error('Multiplications of the form (vector . matrix) are not possible')
  }

  if(!isMatrix(b) && isMatrix(a)) {
    // We can do matrix . vector but only if vector.length = matrix.columns
    if(vector.dimensions(b) != adims[1]) { throw new Error('Multiplying (matrix . vector) requires matrix.columns = vector.dimensions') }

    result = new Array(b.length)

    for(i=0, j=b.length; i<j; ++i) {
      result[i] = vector.dot(b, a[i])
    }

    return result
  }

  if(adims[1] != bdims[0]) { throw new Error('Matrix multiplication requires matrices a, b where a.columns = b.rows') }

  result = new Array(resultRows)

  for(i=0; i < resultRows; ++i) {
    result[i] = new Array(resultColumns)

    for(j=0; j < resultColumns; ++j) {
      result[i][j] = 0

      // t is initialized up above and just overwritten to save on time
      for(k=0; k < aCols; ++k) {
        t[k] = a[i][k] * b[k][j]
      }

      result[i][j] = add(t)
    }
  }

  return result
}

function diagonalMatrix (entries) {
  if(arguments.length > 1) {
    entries = Array.prototype.slice.call(arguments)
  }

  var i = 0
    , j
    , sideDimension = entries.length
    , result = new Array(sideDimension)

  for(; i < sideDimension; ++i) {
    result[i] = new Array(sideDimension)
    // Fill with zeros quickly
    for(result[i] = [], j = sideDimension; 0 < j; j -= 1, result[i][j] = 0);
    result[i][i] = entries[i]
  }

  return result
}

function identity (dimensions) {
  // Fill with ones quickly
  for(var ones = []; 0 < dimensions; dimensions -= 1, ones[dimensions] = 1);
  return diagonalMatrix(ones)
}

function transpose (matrix) {
  var i
    , j
    , ii
    , temp
    , result
    , l = dimensions(matrix)

  // Square matrices can be transposed in-place
  if(l[0] === l[1]) {
    for(i=0, l = l[0]; i<l; ++i) {
      for(j=0; j<i; ++j) {
        temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
      }
    }
  }
  // Otherwise, i guess we'll blow away some memory and get on with life
  else {
    result = new Array(l[1])

    for(i=0, ii=l[1]; i<ii; ++i) {
      result[i] = new Array(l)
      for(j=0; j<l[0]; ++j) {
        result[i][j] = matrix[j][i]
      }
    }

    matrix.splice.apply(matrix, [0, matrix.length].concat(result))
  }

  return matrix
}

module.exports = {
  isMatrix: isMatrix
, dimensions: dimensions
, dot: dot
, transpose: transpose
, diagonalMatrix: diagonalMatrix
, identity: identity
}
