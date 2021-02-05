// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`👎 Assertion failed: ${actual} !== ${expected}`);
  }
};

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

// //Additonal Tests
// assertEqual("LHL", "LHL");
// assertEqual("LHL", "Lowtide house Lab - or - atory");
// assertEqual(12, 12);
// assertEqual(14, 1);
// assertEqual("1", 1);


module.exports = assertEqual; 