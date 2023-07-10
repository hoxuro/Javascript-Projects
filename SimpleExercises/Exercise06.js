// 6. Calculate the sum of all the even numbers on the one hand, and on the other, that of all the odd ones; from 1 to
// N, where N is a positive integer entered from the keyboard.

"use strict";

const n = readInt("Enter an integer: ");

if (n <= 0) {
  console.log("The number must be greater than 0!!!");
} else {
  let odd = 0;
  let even = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
      even += i;
    } else {
      odd += i;
    }
  }

  console.log("Even sum: " + even);
  console.log("Odd sum: " + odd);
}
