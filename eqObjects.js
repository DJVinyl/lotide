const eqArrays = function(actual,expected) {
  let equalCondition = true;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] !== expected[i]) {
        equalCondition = false;
        break;
      }
    }
  } else {
    equalCondition = false;
  }
  return equalCondition;
};

const eqObjects = function(object1,object2) {
  let equalCondition = true;
  //This if statement may notbe neccessary due to eqArray function, however it is a quick check
  if (Object.keys(object1).length === Object.keys(object2).length) { 
    const keysObject1 = Object.keys(object1);
    const keysObject2 = Object.keys(object2);
    const keysBool = eqArrays(keysObject1,keysObject2);
    if (keysBool === true)
    {
      //now compares the keys with values
      for(let i = 0; i < keysObject1.length; i++)
      {
        let key = keysObject1[i];
        let valueObject1 = object1[key]
        let valueObject2 = object2[key];
        if (valueObject1 !== valueObject2){
          equalCondition = false;
          break;
        }
      }
    }
  } else {
   equalCondition = false;
  }
  return equalCondition;
};


//Tester calls

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjects(ab, abc)); // => false


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjects(cd, cd2)); // => false