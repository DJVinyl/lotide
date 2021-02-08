const eqArrays = require('./eqArrays');

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

module.exports = assertArraysEqual;