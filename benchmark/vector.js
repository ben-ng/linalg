var vector = require('../lib/vector')
  , Benchmark = require('Benchmark')
  , suite = new Benchmark.Suite
  , i
  , ii
  , someFunc

someFunc = function (a, b) {
  return a + b
}

// add tests
suite.add('Initalize 100000 2-D vectors', function() {
  for(i=0, ii=100000; i<ii; ++i) {
    vector(i, i+1)
  }
}).add('Initalize 100000 2-D arrays', function() {
  for(i=0, ii=100000; i<ii; ++i) {
    new Array(i, i+1)
  }
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
// run async
.run();
