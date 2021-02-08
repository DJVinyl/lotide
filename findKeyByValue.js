const findKeyByValue = function(obj, show) {
  const objKeys = Object.keys(obj);
  for (let key of objKeys) {
    if (obj[key] === show) {
      return key;
    }
  }
};

module.exports = findKeyByValue;