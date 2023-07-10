// Make a program that with all the numbers between -50 and +50 (both included) calculates the
// sum of all multiples of 5, the number of even numbers, and the product of the negative numbers.

"use strict";
let sum5 = 0;
let countEven = 0;
let prodNeg = 1n;

for (let i = -50; i <= 50; i++) {
  if (i < 0) {
    if (i % 2 == 0) {
      countEven++;
      if (i % 5 == 0) {
        sum5 += i;
      }
    } else if (i % 5 == 0) {
      sum5 += i;
    }

    prodNeg = prodNeg * BigInt(i);
  } else if (i > 0) {
    if (i % 2 == 0) {
      countEven++;
      if (i % 5 == 0) {
        sum5 += i;
      }
    } else if (i % 5 == 0) {
      sum5 += i;
    }
  }
}

console.log(
  "Addition multiples of 5:" +
    sum5 +
    ", Number of pairs:" +
    countEven +
    ", Product of negative numbers:" +
    prodNeg
);
