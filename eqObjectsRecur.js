const eqArraysRecur = function(actual,expected) {
  //console.log('passed in : actual:', actual,'expected:', expected);
  if (actual.length === expected.length) {
    if (actual.length === 0 && expected.length === 0) {
      //Base case;
      //console.log('returning true')
      return true;
    }
    if (Array.isArray(actual[0]) && Array.isArray(expected[0])) {
      return eqArraysRecur(actual.flat(),expected.flat());
    } else if (actual[0] !== expected[0]) {
      //console.log(actual[0], expected[0]);
      //console.log("elements aren't equal");
      return false;
    } else {
      //console.log(actual[0], expected[0]);
      actual.shift();
      expected.shift();
      return eqArraysRecur(actual,expected);
    }
  } else {
    //console.log('returning false');
    return false;
  }
};

const eqObjectsRecur = function(object1,object2) {

  // ORDER IS EXTREMELY CRUCIAL TO BE TETSING WITH RECURSION.
  //If no sorting is done, looping will have to be done and recursion
  //is either difficult or impossible.
  const ordered1 = Object.keys(object1).sort().reduce(
    (obj, key) => {
      obj[key] = object1[key];
      return obj;
    },
    {}
  );
  const ordered2 = Object.keys(object2).sort().reduce(
    (obj, key) => {
      obj[key] = object2[key];
      return obj;
    },
    {}
  );

  // Here we obtain the keys and the values
  const keysObject1 = Object.keys(ordered1);
  const keysObject2 = Object.keys(ordered2);
  const valObject1 = Object.values(ordered1);
  const valObject2 = Object.values(ordered2);

  //set a condition to confirm true cases.
  //technically unnecessary but kept for readability.
  let condition = true;

  //We check to ensure the values are of the same size, if they're not the same size,
  //we return false. If they are the same length, lets compare keys.
  if ((keysObject1.length === keysObject2.length)
    && (valObject1.length === valObject2.length)) {
    let copyKeysObject1 = [...keysObject1];
    let copyKeysObject2 = [...keysObject2];
    let keyBool = eqArraysRecur(copyKeysObject1, copyKeysObject2);
    if (keyBool === false) {
      return false;
    } else {
      for (let key of keysObject1) {
        //console.log(key);
        if ((typeof ordered1[key] === 'object' && ordered1[key] !== null) &&
        (typeof ordered2[key] === 'object' && ordered2[key] !== null)) {
          // Tester console.logs
          // console.log(`I have obejcts! within my parent object!`)
          // console.log(ordered1[key]);
          // console.log(ordered2[key]);
          return eqObjectsRecur(ordered1[key],ordered2[key]);
        } else if (ordered1[key] === ordered2[key]) {
          //If its not an object, then we need to compare values at key
          //already checked keys so if we entered here, were comparing values
          //maintains condition var at true if these values are the same.

          // Tester console logs
          // console.log('values are the same');
          // console.log(ordered1[key]);
          // console.log(ordered2[key]);
          // console.log()
          condition = true;
        } else {
          //No need to keep looping
          // condition = false; // unnecessary. We can just return false. No more comparison required.

          // Tester console logs
          // console.log('values are not the same');
          // console.log(ordered1[key]);
          // console.log(ordered2[key]);
          // console.log()
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return condition;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// console.log(eqObjectsRecur(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// console.log(eqObjectsRecur(ab, abc)); // => false

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// console.log(eqObjectsRecur(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// console.log(eqObjectsRecur(cd, cd2)); // => false


//console.log(eqObjectsRecur({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
//console.log(eqObjectsRecur({ a: { z: 1, x: 6 }, b: 2 }, { a: { z: 1, x: 7 }, b: 2 })); // => false
// console.log(eqObjectsRecur({ a: { z: 1, t: { x: 6 }}, b: 2 }, { a: { z: 1, t: { x: 6 }}, b: 2 })); // => true
// console.log(eqObjectsRecur({ a: { z: 1, t: { x: 10 }}, b: 2 }, { a: { z: 1, t: { x: 6 }}, b: 2 })); // => false
//console.log(eqObjectsRecur({ a: { z: 1, t: { x: 6, y: 0}}, b: 2 }, { a: { z: 1, t: { x: 6, y: 0 }}, b: 2 })); // => true\
//console.log(eqObjectsRecur({ a: { z: 1, t: { x: 6, y: 2}}, b: 2 }, { a: { z: 1, t: { x: 6, y: 0 }}, b: 2 })); // false
//console.log(eqObjectsRecur({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })) // => false
//console.log(eqObjectsRecur({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) )// => false