// 4. Display the sum of the first N numbers. N will be entered on the keyboard and must be a positive integer

"use strict";

const n = readInt("Enter an integer: ");

if (n <= 0) {
  console.log("The numer must be greater than 0!!");
} else {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += Number(i);
  }

  console.log(sum);
}

//function to read an integer by console
function readInt(message) {
  const num = Number(prompt(message));

  if (!Number.isInteger(num)) {
    throw new Error("The number is not an integer");
  }

  return num;
}
