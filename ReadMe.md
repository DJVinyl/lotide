# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

Created by Mitchell Gonzalez, Student of Lighthouse Labs in Calgary - Feb 01, 2021 Cohort

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @mitchelldevg/lotide`

**Require it:**

`const _ = require('@mitchelldevg/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* AssertArrayEqual
  * console.logs whether two arrays are Equal
* AssertEqual
  * console.logs whether two values are equal
* AssertObjectsEqual
  * console.logs whether two objects are equal
* countLetters
  * counts how many times a letter is occuring in a string. **case-insensitive**
* countOnly
  * counts how many times a value occurs in an array given a specific valuv
* eqArrayRecur
  * equates whether two arrays are equal using recursion
* eqArray
  * equates whether two array are equal not using recursion
* eqObjects
  * equates whether two objects are equal not using recursion
* eqObjectsRecur
  * equates whether two objects are equal using recursion
* findKey
  * given an object and a callback function, locates on the first in which the callback condition is satisfied.
* findKeyByValue
  * given an object and a value, locates the key in which the value is paired to.
* flatten
  * Given a nested array, "flattens" the array into a 1D array.
* head
  * Gives the first element of an array.
* letterPositions
  * given a string, returns an array of indices for each char in string
* map
  * remake of the Array.map() function. Accepts an array and callback function.
* middle
  * returns the middle of an array. If array is of even length, returns 2 middle indices. If array is odd, returns middle indice.
* tail
  * returns the last value in an array
* takeUntil
  * given a array and a callback, return all values in which callback condition is met
* without
  * given an array, and an array of values that need to be excluded, returns an array of in which excluded values are excluded.

