// mixin methods to the exports
var k
  , vector = require('./lib/vector')
  , matrix = require('./lib/matrix')

// Applies the Right Thing depending on what the arguments are
function disambiguate(vectorFunc, matrixFunc) {
  return function disambiguated () {
    // If any argument is a matrix, use the matrix version
    for(var i=0, ii=arguments.length; i<ii; ++i) {
      if(matrix.isMatrix(arguments[i])) {
        return matrixFunc.apply(this, arguments)
      }
    }

    return vectorFunc.apply(this, arguments)
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
