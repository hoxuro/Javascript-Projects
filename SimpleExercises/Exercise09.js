// Calculate the power y=X^n. The base X can be any real number and the exponent n will be of integer type. X
// y n will be entered by keyboard, having to calculate the value of y. Use a From loop.

"use strict";

const x = Number(prompt("Enter a base: "));
const y = readInt("Enter an exponent");

console.log(x + "^" + y + "= " + Math.pow(x, y));
