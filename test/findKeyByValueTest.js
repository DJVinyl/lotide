const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

describe("#FindKeyByValue", () => {
  it("returns drama for the Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });
  it("returns undefined for The 70s show", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
  it("returns comedy for Brooklyn 99)", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), 'comedy');
  });
  it("returns undefined for Breaking Bad)", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "Breaking Bad"), undefined);
  });
});