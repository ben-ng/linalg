# LinAlg

[![Build Status](https://travis-ci.org/ben-ng/linalg.svg?branch=master)](https://travis-ci.org/ben-ng/linalg)

A linear algebra module with an emphasis on correctness and performance (in that order).

## At A Glance

 * 100% statement and branch coverage
 * Emphasis on numerical accuracy
 * Work in any number of dimensions
 * Sticks to the Mathematica API whenever possible

## Warning!

Please use a mature library when doing mission-critical work. I am no expert in numerical analysis. (If you are, let me know so I can add you as a contributor!)

## Usage

`linalg` uses native arrays because of their raw speed.

```javascript
l = require('linalg')
assert = require('assert')

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

// feel free to string these along
A = l.dot(hang, stretch, align)

// this (matrix . vector) operation should do nothing
assert.deepEqual(l.dot(A, point), point)
```

## Motivation

I needed a performance focused linear algebra module for visualizing data in 10+ dimensions, and implementing machine learning algorithms. I quickly learned that naive solutions to linear algebra operations can produce numerical errors so significant they are utterly useless for anything other than casual playtime. After that, I prioritized correctness over performance.

I started out with a chainable, [vektor](https://www.npmjs.org/package/vektor)-like API, but found that no matter how hard I tried, using anything other than native `Array` resulted in a 20-500x slowdown depending on the operation.

I'd like this module to be a low-level framework for others to build upon. It should just be a library of the best known linear algebra algorithms, with minimal sugar added.
