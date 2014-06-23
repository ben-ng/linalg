var v = require('../lib/vector')
  , assert = require('assert')

assert.equal(v.dot([1, 2, 3], [2, 3, 4]), 1*2 + 2*3 + 3*4, 'Check dot product')

assert.equal(v.magnitude([1]), 1, 'Check 1-D magnitude')

assert.equal(v.magnitude([3, 4]), 5, 'Check 2-D magnitude')

assert.equal(v.magnitude([1, 1, 1]).toFixed(2), '1.73', 'Check 3-D magnitude')
