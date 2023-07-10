// Show the first N multiples of 3. N will be entered from the keyboard and must be a positive integer.

"use strict";

const n = readInt("Enter an integer: ");

if (n <= 0) {
  console.log("The number must be greater than 0!!!");
} else {
  let count = 1;
  do {
    console.log(3 * count);
    count++;
  } while (count <= n);
}
