# LinAlg

## Usage

```javascript
var l = require('linalg')
  , assert = require('assert')
  , frame
  , hang
  , stretch
  , align
  , A
  , point

frame = l.matrix(la.vector(1, 0, 0), la.vector(0, 1, 0), la.vector(0, 0, 1))

point = l.point(2, 4, 6)

hang = frame.copy().transpose()
stretch = l.diagonalMatrix(1, 1, 1)
align = frame.copy()

A = hang.dot(stretch).dot(align)

assert.ok(A.dot(point).equals(point))
```
