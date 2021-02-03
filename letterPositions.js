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

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
     }
  }
  return results;
};

//console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);