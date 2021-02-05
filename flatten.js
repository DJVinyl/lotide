const assertArraysEqual = require('./assertArraysEqual');

const flatten = array => array.flat();

const result = flatten([1, 2, [3, 4], 5, [6]]) // => [1, 2, 3, 4, 5, 6]
console.log(result);

assertArraysEqual(result, [1, 2, 3, 4, 5, 6] );