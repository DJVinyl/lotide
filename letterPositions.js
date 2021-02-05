const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = []; // intialize
        results[sentence[i]].push(i); //give the key a value
      }
    }
  }
  return results;
};

//console.log(letterPositions("hello world"));

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").o, [4]);
assertArraysEqual(letterPositions("world").w, [0]);