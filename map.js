const assertArraysEqual = function(actual, expected) {
  let equalCondition;
  if (Array.isArray(actual) && Array.isArray(expected)) {
    equalCondition = eqArrays(actual, expected);
  } else {
    equalCondition = false;
  }
  if (equalCondition === true) {
    return console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`👎 Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(actual,expected) {
  let equalCondition = true;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        equalCondition = false;
        break;
      }
    }
  } else {
    equalCondition = false;
  }
  return equalCondition;
};


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

