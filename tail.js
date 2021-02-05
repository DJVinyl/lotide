const assertArrayEqual = require('./assertArrayEqual');

const tail = function(arr) {
  if (arr.length === 0) {
    return undefined;
  } else if (arr.length === 1) {
    return [];
  } else {
    let finalArr = [];
    finalArr = arr.splice(1, arr.length - 1);
    return finalArr;
  }
};

const result = tail(["Hello", "Lighthouse", "Labs"]);


assertArraysEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
