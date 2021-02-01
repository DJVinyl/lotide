const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) === true && Array.isArray(expected) === true) {
    if (arrayEquals(actual,expected) === true) {
      return console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`👎 Assertion failed: ${actual} !== ${expected}`);
    }
  } else {
    if (actual === expected) {
      return console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`👎 Assertion failed: ${actual} !== ${expected}`);
    }
  }
};

//Located this function on: https://masteringjs.io/tutorials/fundamentals/compare-arrays
const arrayEquals = function(a, b) {
  return a.length === b.length &&
    a.every((val, index) => val === b[index]);
};

const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1) {
    return [];
  } else {
    let finalArr = [];
    finalArr = arr.splice(1, arr.length - 1);
    return finalArr;
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);


assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
