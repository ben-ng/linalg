var lib = require('../index')
  , assert = require('assert')

assert.deepEqual(lib.dot(
  [
    [1, 2]
  , [2, 1]
  ]
, [2, 2]
, [3, 4])
, 42, 'should use (matrix . vector) = vector, then (vector . vector) = scalar')

assert.equal(lib.dot([1, 2, 3], [2, 3, 4]), 1*2 + 2*3 + 3*4, 'should use vector dot product')

assert.equal(lib.dot([1, 2, 3], [2, 3, 4]), 1*2 + 2*3 + 3*4, 'should use vector dot product')

assert.equal(lib.dimensions([1, 2, 3]), 3, 'should use vector dimensions')

assert.deepEqual(lib.dimensions([[1, 0], [0, 1]]), [2, 2], 'should use matrix dimensions')
