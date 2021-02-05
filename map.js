const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);


assertArraysEqual(map(['holy', 'moly'], word => word[0]), ['h','m']);
assertArraysEqual(map(['test', 'case'], word => word[0]), ['t','c']);
assertArraysEqual(map(['Mitchll', 'Lighthouse'], word => word[0]), ['M','L']);

console.log(results1);

