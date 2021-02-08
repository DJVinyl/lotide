const lotide = require('../index');
const tail = lotide.tail;
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2,3,4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2,3,4]);
  });
  it("returns ['Hello', 'Lighthouse', 'Labs'] for ['Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ['Lighthouse', 'Labs']);
  });
});