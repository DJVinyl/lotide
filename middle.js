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

const middle = function(arr){
  if (arr.length < 3) {
    return [];
  } else {
    const middleArr = [];
    if (arr.length % 2  === 0) {
      middleArr.push(arr[(arr.length/2) - 1]);
      middleArr.push(arr[(arr.length/2)]);
    } else {
      middleArr.push(arr[(Math.ceil(arr.length/2) - 1)]);
    }
    return middleArr;
  }
};

//test arrays


console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
