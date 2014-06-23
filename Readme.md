# LinAlg

A performance-focused linear algebra module for working in an arbitrary number of dimensions.

Sticks to the Mathematica API whenever possible.

## Usage

`linalg` uses native arrays because of their raw speed.

```javascript
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

// singular value decomposition to come...
hang = l.transpose(identity)
stretch = identity
align = identity

// the associative property rocks
A = l.dot(hang, stretch, align)

// this (matrix . vector) operation should do nothing
assert.deepEqual(l.dot(A, point), point)
```

## Motivation

I needed a performance focused linear algebra module for visualizing data in 10+ dimensions, and implementing machine learning algorithms.

I started out with a friendlier, [vektor](https://www.npmjs.org/package/vektor)-like API, but found that no matter how hard I tried using anything other than native `Array` resulted in a 20-500x slowdown depending on the operation.
