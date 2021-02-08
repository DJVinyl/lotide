const assertObjectsEqual = function(actual, expected) {
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
const eqArrays = require('./eqArrays');

const eqObjects = function(object1,object2) {
  let equalCondition = true;
  //This if statement may notbe neccessary due to eqArray function
  if (Object.keys(object1).length === Object.keys(object2).length) {
    const keysObject1 = Object.keys(object1);
    const keysObject2 = Object.keys(object2);
    const keysBool = eqArrays(keysObject1,keysObject2);
    if (keysBool === true) {
      //now compares the keys with values
      for (let i = 0; i < keysObject1.length; i++) {
        let key = keysObject1[i];
        let valueActual = object1[key];
        let valueExpected = object2[key];
        if (valueActual !== valueExpected) {
          equalCondition = false;
        }
      }
    }
  } else {
    equalCondition = false;
  }
  return equalCondition;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false
module.exports = eqObjects;