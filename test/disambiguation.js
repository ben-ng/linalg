var lib = require('../index')
  , assert = require('assert')

assert.deepEqual(lib.dot(
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
  ], 'should use matrix multiplication')

assert.equal(lib.dot([1, 2, 3], [2, 3, 4]), 1*2 + 2*3 + 3*4, 'should use vector dot product')
