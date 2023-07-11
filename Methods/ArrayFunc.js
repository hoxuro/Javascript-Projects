"use strict";

/**
 *  Prints in screen your array.
 *
 * @param {Array} array the array you want to print on screen
 */
function display(array) {
  for (let elem of array) {
    console.log(elem);
  }
}

/**
 * Prints in screen in your array upside down.
 *
 * @param {Array} array the array you want to print upside down on screen
 */
function displayReverse(array) {
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

/**
 * Creates a random array whose elements range from 0 to 9.
 *
 * @param {Number} elements the length of the array.
 * @returns an array whose elements have been generated randomly.
 */
function fillRandom(length) {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.trunc(Math.random() * 10));
  }

  return array;
}

/**
 * Creates a random array whose elements range from min to max entered by the user.
 *
 * @param {Number} length the array length.
 * @param {Number} min the integer from which the random can start to be generated.
 * @param {Number} max the integer from which the random stops being generated.
 * @returns an array whose elements have been generated randomly from a range
 * entered by the user.
 */
function fillRandom(length, min, max) {
  let array = [];

  for (let i = 0; i < length; i++) {
    array.push(Math.trunc(Math.random() * (max + 1 - min) + min));
  }

  return array;
}

/**
 * Creates an array whose elements are squares from others of the array.
 *
 * @param {Array} array the array you want to extract other with only squares of
 * other elements.
 * @returns an array whose elements are squares from others of the introduced
 * array.
 */
function fillSquare(array) {
  let arraySquares = [];

  for (let elem = 0; elem < array.length; elem++) {
    if (!Number(array[elem])) {
      throw Error("All the elements of the array must be numbers");
    }

    for (let elem2 = 0; elem2 < array.length; elem2++) {
      if (!Number(array[elem2])) {
        throw Error("All the elements of the array must be numbers");
      }

      //if the indexes are different
      if (elem != elem2) {
        if (array[elem] === Math.pow(array[elem2], 2)) {
          arraySquares.push(array[elem]);
        }
      }
    }
  }

  return arraySquares;
}

/**
 * Creates an array whose elements are cubes from others of the array.
 *
 * @param {Array} array the array you want to extract other with only cubes of
 * other elements.
 * @returns an array whose elements are cubes from others of the introduced
 * array.
 */
function fillCubes(array) {
  let arrayCubes = [];

  for (let elem = 0; elem < array.length; elem++) {
    if (!Number(array[elem])) {
      throw Error("All the elements of the array must be numbers");
    }

    for (let elem2 = 0; elem2 < array.length; elem2++) {
      if (!Number(array[elem2])) {
        throw Error("All the elements of the array must be numbers");
      }

      //if the indexes are different
      if (elem != elem2) {
        if (array[elem] === Math.pow(array[elem2], 3)) {
          arrayCubes.push(array[elem]);
        }
      }
    }
  }

  return arrayCubes;
}

/**
 * returns the smallest number in the array.
 *
 * @param {Array} array the array you want to extract the smallest number.
 * @returns the smallest number in the array.
 */
function returnMin(array) {
  let min = array[0];

  for (let elem of array) {
    if (elem < min) {
      min = elem;
    }
  }

  return min;
}

/**
 * returns the largest number in the array.
 *
 * @param {Array} array the array you want to extract the largest number.
 * @returns the largest number in the array.
 */
function returnMax(array) {
  let max = array[0];

  for (let elem of array) {
    if (elem > max) {
      max = elem;
    }
  }

  return max;
}

/**
 * Calculates the average of the sum of the elements of the array.
 *
 * @param {Array} array the array we want to calculate the average
 * @returns a double value that represents the average of the elements sum of
 * the array with two decimals
 */
function calcAverage(array) {
  let avg = 0;
  for (let elem of array) {
    avg += elem;
  }

  return (avg / array.length).toFixed(2);
}

/**
 * Check element of the array that repeats itself more often.
 * @param {Array} array  the array we are going to search the element.
 * @returns the element that repeats itself more often.
 */
function calcTrend(array) {
  let numReps = 1;
  let trendReps = 1;
  let trend = array[0];

  for (let elem of array) {
    for (let elem2 of array) {
      if (elem === elem2) {
        numReps++;
      }
    }

    if (numReps > trendReps) {
      trend = elem;
      trendReps = numReps;
    }

    numReps = 1;
  }

  return trend;
}

/**
 * Sorts the entered array in ascending order.
 *
 * @param {Array} array
 */
function order(array) {
  //for each element of the array
  for (let elem = 0; elem < array.length; elem++) {
    //I get the value of the following element
    let nextElem = elem + 1;

    //as long as the next element is less than the length of the array
    while (nextElem < array.length) {
      //if the next element is less than the current element
      if (array[nextElem] < array[elem]) {
        //exchange positions
        let container = array[elem];
        array[elem] = array[nextElem];
        array[nextElem] = container;
      }

      nextElem++;
    }
  }
}

/**
 * Compacts an array. Eliminates the element whose index we introduce by
 * parameter, compacts the array and returns a new array without the element.
 *
 * @param {Array} array the array we want to compact
 * @param {Number} index the index of the element we are going to eliminate
 * @returns a new array compacted
 */
function compact(array, index) {
  let compact = [];

  for (let elem of array.slice(0, index)) {
    compact.push(elem);
  }

  for (let elem of array.slice(index + 1, array.length)) {
    compact.push(elem);
  }

  return compact;
}
