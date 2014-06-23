# LinAlg

[![Build Status](https://travis-ci.org/ben-ng/linalg.svg?branch=master)](https://travis-ci.org/ben-ng/linalg)

A performance-focused linear algebra module.

## At A Glance

 * 100% statement and branch coverage
 * Work in any number of dimensions
 * Sticks to the Mathematica API whenever possible

## Warning!

Please use a mature library when doing mission-critical work. [There are accuracy problems with naive solutions to linear algebra problems](http://gauss.uc3m.es/web/personal_web/fdopico/talks/2013-cedya.pdf).

I may not be an expert in numerical analysis, but I know enough to warn you about the dangers of running Javascript on the International Space Station.

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

I needed a performance focused linear algebra module for visualizing data in 10+ dimensions, and implementing machine learning algorithms.

I started out with a chainable, [vektor](https://www.npmjs.org/package/vektor)-like API, but found that no matter how hard I tried, using anything other than native `Array` resulted in a 20-500x slowdown depending on the operation.

With that in mind, I'd like this module to be a low-level framework for others to build upon.
