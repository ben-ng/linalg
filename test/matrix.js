var matrix = require('../lib/matrix')
  , assert = require('assert')

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
