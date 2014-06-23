var matrix = require('../lib/matrix')
  , assert = require('assert')

assert.throws(function () {
  matrix.dot([[1]], [1, 2])
}, /Dot product requires matrix.columns = vector\.dimensions/)

assert.throws(function () {
  matrix.dot([1, 2], [[1]])
}, /Dot products of the form \(vector \. matrix\) are not possible/)

assert.throws(function () {
  matrix.dot([[1], [3], [5]], [[1, 2], [4, 5]])
}, /Dot product requires two matrices a, b where a\.columns = b\.rows/)

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

assert.deepEqual(matrix.dot(
  [
    [1, 2, 3]
  , [4, 5, 6]
  ]
, [
    [7, 8]
  , [9, 10]
  , [11, 12]
  ]
, matrix.identity(2)
, [
    [2, 4]
  , [6, 8]
  ])
, [
    [58 * 2 + 64 * 6, 58 * 4 + 64 * 8]
  , [139 * 2 + 154 * 6, 139 * 4 + 154 * 8]
  ], 'chaining matrix multiplication should work')

assert.deepEqual(matrix.transpose([[2, 3], [4, 5]])
  , [[2, 4], [3, 5]]
  , 'in-place transpose should work')

assert.deepEqual(matrix.transpose([[2, 3, 4], [4, 5, 6]])
  , [[2, 4], [3, 5], [4, 6]]
  , 'rectangular matrix transpose should work')
