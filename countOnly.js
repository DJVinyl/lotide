const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`👏 Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`👎 Assertion failed: ${actual} !== ${expected}`);
  }
};

// countOnly will be given an array and an object. 
// It will return an object containing counts of everything that the input object listed.
// My implementation before read the whole section.
// const countOnly = function(allItems, itemsToCount) {
//   const counted = {};
//   for (firstName in itemsToCount) {
//     let counter = 0;
//     let testName = firstName;
//       for (let i = 0; i < allItems.length; i++) {
//         if (firstName === allItems[i])
//         {
//           counter++;
//         }
//       }
//     counted[testName] = counter;
//   }

//   for (firstName in counted)
//   {
//     if (counted[firstName] === 0){
//       counted[firstName] = undefined;
//     }
//   }

//   return counted;
// }

const countOnly = function(allItems, itemsToCount) {
  const results = {}
  for (const item of allItems) {
    if (itemsToCount[item]) { 
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(result1);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);