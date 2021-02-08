const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

console.log(letterPositions("hello world"));

describe("#letterPositions", () => {
  it("returns pos [1] for 'hello'.e ", () => {
    //assert.strictEqual(letterPositions("hello").e, [1]);
    const result = letterPositions("hello").e;
    assert.deepEqual(result,[1]);
  });
  it("returns pos [0] for 'hello'.h ", () => {
    //assert.strictEqual(letterPositions("hello").e, [1]);
    const result = letterPositions("hello").h;
    assert.deepEqual(result,[0]);
  });
  it("returns pos [1] for 'hello'.o ", () => {
    //assert.strictEqual(letterPositions("hello").e, [1]);
    const result = letterPositions("hello").o;
    assert.deepEqual(result,[4]);
  });
  it("returns pos [0] for 'world'.w ", () => {
    //assert.strictEqual(letterPositions("hello").e, [1]);
    const result = letterPositions("world").w;
    assert.deepEqual(result,[0]);
  });
});