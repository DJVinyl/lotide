const without = function(source, itemsToRemove) {
  const sourceCopy = [...source];
  // console.log(sourceCopy);
  // console.log(sourceCopy.slice(0))
  for (let i = 0; i < sourceCopy.length; i++) {
    //console.log(sourceCopy[i]);
    for (let j = 0; j < itemsToRemove.length; j++) {
      //console.log(itemsToRemove[j])
      if (sourceCopy[i] === itemsToRemove[j]) {
        //console.log(`Im splicing i: ${i} j:${j}`)
        sourceCopy.splice(i,1);
      }
    }
  }

  return sourceCopy;
};


module.exports = without;