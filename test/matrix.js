var matrix = require('../lib/matrix')
  , assert = require('assert')

assert.throws(function () {
  matrix.dot([[1]], [1, 2])
}, /Multiplying \(matrix \. vector\) requires matrix.columns = vector\.dimensions/)

assert.throws(function () {
  matrix.dot([1, 2], [[1]])
}, /Multiplications of the form \(vector \. matrix\) are not possible/)

assert.throws(function () {
  matrix.dot([[1], [3], [5]], [[1, 2], [4, 5]])
}, /Matrix multiplication requires matrices a, b where a\.columns = b\.rows/)

assert.deepEqual(matrix.diagonalMatrix([1, 2]), [[1, 0], [0, 2]], 'diagonalMatrix should work with array')
assert.deepEqual(matrix.diagonalMatrix(1, 2), [[1, 0], [0, 2]], 'diagonalMatrix should work with multiple args')
assert.deepEqual(matrix.identity(3), matrix.diagonalMatrix(1, 1, 1), 'identityMatrix should be a diagonalMatrix')

assert.deepEqual(matrix.dot(
  [
    [1, 2, 3]
  , [4, 5, 6]
  ]
, [
    [7, 8]
  , [9, 10]
  , [11, 12]
  ])
, [
    [58, 64]
  , [139, 154]
  ], 'matrix dot matrix should work')

assert.deepEqual(matrix.transpose([[2, 3], [4, 5]])
  , [[2, 4], [3, 5]]
  , 'in-place transpose should work')

assert.deepEqual(matrix.transpose([[2, 3, 4], [4, 5, 6]])
  , [[2, 4], [3, 5], [4, 6]]
  , 'rectangular matrix transpose should work')
