"use strict";

/**
 * Function to enter by keyboard a Real number.
 *
 * @param {String} message
 * @returns an number entered by the user
 */
function readNum(message) {
  let num = Number(prompt(message));

  do {
    if (!num) {
      alert("Please enter the data correctly");
      num = Number(prompt(message));
    }
  } while (!num);

  return num;
}

/**
 * Function to enter by keyboard an integer number.
 *
 * @param {String} message the message for the prompt
 * @returns an integer entered by the user
 */
function readInt(message) {
  let num = Number(prompt(message));

  do {
    if (!Number.isInteger(num)) {
      alert("The number is not an integer");
      num = Number(prompt(message));
    }
  } while (!Number.isInteger(num));

  return num;
}

/**
 * Function to enter by keyboard a string.
 *
 * @param {String} message
 * @returns a String entered by the user
 */
function readString(message) {
  let str = prompt(message);

  do {
    if (!str) {
      str = prompt("Please, enter the data correctly");
    }
  } while (!str);

  return str;
}
