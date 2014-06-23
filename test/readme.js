var l = require('../index')
  , assert = require('assert')
  , identity
  , frame
  , hang
  , stretch
  , align
  , A
  , point

// identity is now a 2-D Array
identity = l.diagonalMatrix(1, 1, 1)

// points are 1-D arrays
point = [2, 4, 6]

// let's create a stupid simple 3D perpendicular frame
frame = identity

// singular values
hang = l.transpose(identity)
stretch = identity
align = identity

// cook up a matrix that does nothing
A = l.dot(hang, stretch, align)

// make sure it actually does nothing
assert.deepEqual(l.dot(A, point), point)
