const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove)
{
  const sourceCopy = [...source];
  // console.log(sourceCopy);
  // console.log(sourceCopy.slice(0))
  for (let i = 0; i < sourceCopy.length; i++)
  {
    //console.log(sourceCopy[i]);
    for(let j = 0; j< itemsToRemove.length; j++)
    {
      //console.log(itemsToRemove[j])
      if (sourceCopy[i] === itemsToRemove[j])
      {
        //console.log(`Im splicing i: ${i} j:${j}`)
        sourceCopy.splice(i,1);
      }
    }
  }

  return sourceCopy;
}

// console.log(without([1, 2, 3], [1]) )// => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])) // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(words);
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);