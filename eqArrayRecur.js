//Recursive
const eqArraysRecur = function(actual,expected) {
  console.log('passed in : actual:', actual,'expected:', expected);
  if (actual.length === expected.length) {
    if (actual.length === 0 && expected.length === 0) {
      //Base case;
      //console.log('returning true')
      return true;
    }
    if (Array.isArray(actual[0]) && Array.isArray(expected[0])) {
      return eqArraysRecur(actual.flat(),expected.flat());
    } else if (actual[0] !== expected[0]) {
      //console.log(actual[0], expected[0]);
      console.log("elements aren't equal");
      return false;
    } else {

      console.log(actual[0], expected[0]);
      actual.shift();
      expected.shift();
      return eqArraysRecur(actual,expected);
    }
  } else {
    //console.log('returning false');
    return false;
  }
};

module.exports = eqArraysRecur;

// console.log(eqArraysRecur([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArraysRecur([1, 2, 3], [3, 2, 1])) // => false
// console.log(eqArraysRecur(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArraysRecur(["1", "2", "3"], ["1", "2", 3]))// => false

//console.log(eqArraysRecur([[2, 3], [4]], [[2, 3], [4]])) // => true

//eqArraysRecur([[2, 3], [4]], [[2, 3], [4, 5]]) // => false
//console.log(eqArraysRecur([[2, 3], [4]], [[2, 3], 4])); // => false

//assertEqual(eqArraysRecur([1, 2, 3], [1, 2, 3]), true);