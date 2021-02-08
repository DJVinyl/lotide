const lotide = require('../index');
const flatten = lotide.flatten;
const assert = require('chai').assert;

describe("#Flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] for [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});



//  const result = flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
//  console.log(result);

// assertArraysEqual(result, [1, 2, 3, 4, 5, 6] );