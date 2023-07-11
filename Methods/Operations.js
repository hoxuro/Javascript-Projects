"use strict";

/**
 * Function that calculates a random number within a range determined by the
 * user.
 * @param {Number} min the number where the random number starts to be generated.
 * @param {Number} max the last number where the random number is generated.
 * @returns a random number within a user given range.
 */
function calcRandomInt(min, max) {
  return Math.trunc(Math.random() * (max + 1 - min) + min);
}
