// 10. Ask for a number between 0 and 9999 and say how many digits it has (using / and % of integers).
"use strict";

const enteredNum = readInt("Enter a number between 1 and 9999");
let num = enteredNum;
let digits = 0;
do {
  digits++;
  num = Math.floor(num / 10);
} while (num != 0);

console.log(enteredNum + " has " + digits + " digits.");
