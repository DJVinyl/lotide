const lotide = require('../index');
const middle = lotide.middle;
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns [2,3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });
  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});


