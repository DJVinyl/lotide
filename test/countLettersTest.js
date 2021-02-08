const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns { L: 2, H: 1, t: 2, e: 1, s: 1 } for LHL test", () => {
    const actual = countLetters("LHL test");
    const expected = {L: 2, H: 1, t: 2, e: 1, s: 1};
    assert.deepEqual(actual, expected);
  });
});