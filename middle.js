const middle = function(arr) {
  if (arr.length < 3) {
    return [];
  } else {
    const middleArr = [];
    if (arr.length % 2  === 0) {
      middleArr.push(arr[(arr.length / 2) - 1]);
      middleArr.push(arr[(arr.length / 2)]);
    } else {
      middleArr.push(arr[(Math.ceil(arr.length / 2) - 1)]);
    }
    return middleArr;
  }
};

module.exports = middle;
