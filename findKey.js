const findKey = (obj, callback) => {
  for (const elem in obj) {
    let result = callback(obj[elem]);
    if (result === true) {
      return elem;
    }
  }
};

module.exports = findKey;