"use strict";

/**
 * Function to enter by keyboard an integer number.
 *
 * @param {String} message the message for the prompt
 * @returns an integer entered by the user
 */
function readInt(message) {
  const num = Number(prompt(message));

  if (!Number.isInteger(num)) {
    throw new Error("The number is not an integer");
  }

  return num;
}
