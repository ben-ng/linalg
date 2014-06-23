# LinAlg

## Usage

```javascript
var l = require('linalg')
  , assert = require('assert')
  , identity
  , frame
  , hang
  , stretch
  , align
  , A
  , point

identity = l.diagonalMatrix(1, 1, 1)


point = [2, 4, 6]
frame = identity
hang = l.transpose(identity)
stretch = identity
align = identity

A = l.dot(hang, stretch, align)

assert.deepEqual(point, l.dot(A, point))
```
