const assertEqual = function(actual, expected) {
  if (Array.isArray(actual) && Array.isArray(expected)) {
    return eqArrays(actual, expected);
  } else {
    if (actual === expected) {
      return console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
    } else {
      return console.log(`👎 Assertion failed: ${actual} !== ${expected}`);
    }
  }
};

const eqArrays = function(actual,expected){
  let equalCondition = true;
  if (actual.length === expected.length)
  {
    for(let i = 0; i < actual.length; i++)
    {
      if (actual[i] !== expected[i])
      {
        equalCondition = false;
        break;
      }
    }
  }
  else
  {
    equalCondition = false;
  }
  return equalCondition;
}

//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]) )// => false

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);