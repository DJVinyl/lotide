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

module.exports = tail;
