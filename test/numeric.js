/**
* Tests for numeric stability
*/
var util = require('../lib/util')
  , assert = require('assert')
  , stupidAccumulate = function (a, b) { return a + b }
  , badVector
  , temp

badVector = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7]

temp = util.twoSum(1/3, 1/6)
assert.equal(temp[0], 0.5, 'Result should have been returned')
assert.equal(temp[1], -2.7755575615628914e-17, 'Error should have been returned')

assert.deepEqual(temp
                , util.fastTwoSum(1/3, 1/6)
                , 'Fast and slow twoSum should have the same result')

assert.equal(util.nextPowerTwo(1534)
            , 2048
            , 'Should be Math.pow(2, Math.ceil(util.logBase2(Math.abs(1534))))')

assert.equal(util.rumpOgitaOishiSummation([1,2,3,4]), 10, 'Integer sum should work')

assert.equal(badVector.reduce(stupidAccumulate), 15.299999999999999, 'Inaccurate summation using naive method')

assert.equal(util.kahanSummation(badVector), 15.3, 'Kahan summation of insidious sum')

assert.equal(util.rumpOgitaOishiSummation(badVector), 15.3, 'Rump-Ogita-Oishi summation of insidious sum')

assert.equal(util.rumpOgitaOishiSummation([0]), 0, 'Rump-Ogita-Oishi summation of zero array')

util.rumpOgitaOishiSummation([2e52, 2e-52])
