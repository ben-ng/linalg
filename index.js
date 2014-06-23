// mixin methods to the exports
var k
  , vector = require('./lib/vector')
  , matrix = require('./lib/matrix')

// Applies the Right Thing depending on what the arguments are
function disambiguate(vectorFunc, matrixFunc) {
  function _disambiguated (a, b) {
    if(matrix.isMatrix(a) || matrix.isMatrix(b)) {
      return matrixFunc(a, b)
    }

    return vectorFunc(a, b)
  }

  return function disambiguated (arg) {
    if(arguments.length >= 2) {
      return Array.prototype.slice.call(arguments).reduce(_disambiguated)
    }
    else {
      return _disambiguated(arg, null)
    }
  }
}

for (k in vector) {
  exports[k] = vector[k]
}

for (k in matrix) {
  if(exports[k]) {
    exports[k] = disambiguate(exports[k], matrix[k])
  }
  else {
    exports[k] = matrix[k]
  }
}
