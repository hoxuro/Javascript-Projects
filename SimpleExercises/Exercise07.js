// 7. Show the largest and smallest of a series of five numbers that we are entering by keyboard (using
// loops).
"use strict";

let array = new Array();
array[0] = readInt("Enter the first number: ");
array[1] = readInt("Enter the second number: ");
array[2] = readInt("Enter the third number: ");
array[3] = readInt("Enter the fourth number: ");
array[4] = readInt("Enter the fifth number: ");

let min = array[0];
let max = array[0];
for (let i = 1; i < 5; i++) {
  if (array[i] < min) {
    min = array[i];
  }
  if (array[i] > max) {
    max = array[i];
  }
}

console.log("The greatest number enter is: " + max);
console.log("The lowest number enter is: " + min);
