const map = require('../map');
const assert = require('chai').assert;

describe("#map", () => {
  it("returns ['h','m'] for ['holy', 'moly']", () => {
    const result = map(['holy', 'moly'], word => word[0]);
    assert.deepEqual(result, ['h','m']);
  });
  it("returns ['t','c'] for ['test', 'case']", () => {
    const result = map(['test', 'case'], word => word[0]);
    assert.deepEqual(result, ['t','c']);
  });
  it("returns ['i','i'] for ['Mitchell', 'Lighthouse']", () => {
    const result = map(['Mitchell', 'Lighthouse'], word => word[1]);
    assert.deepEqual(result, ['i','i']);
  });
});


