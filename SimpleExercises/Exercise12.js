// 12. Ask for a number between 0 and 9999, tell if it's palindromic (using / and % integers).

"use strict";

const enteredNum = readInt("Enter a number between 1 and 9999");
if (enteredNum <= 0) {
  throw Error("The number must be greater than 1 and lower than 9999");
}
let num = enteredNum;
let arrayCifras = new Array();
let contador = 0;
do {
  let iter = num / 10;
  arrayCifras[contador] = Number(iter - Math.floor(iter)).toFixed(1) * 10;
  num = Math.floor(iter);
  contador++;
} while (num / 10 != 0);

let isAPalindrome = false;
if (arrayCifras.length === 1 || enteredNum <= 0) {
  isAPalindrome = false;
} else if (arrayCifras.length === 2) {
  if (arrayCifras[0] === arrayCifras[arrayCifras.length - 1]) {
    isAPalindrome = true;
  }
} else if (arrayCifras.length === 3) {
  if (arrayCifras[0] === arrayCifras[arrayCifras.length - 1]) {
    isAPalindrome = true;
  }
} else {
  if (
    arrayCifras[0] === arrayCifras[arrayCifras.length - 1] &&
    arrayCifras[1] === arrayCifras[arrayCifras.length - 2]
  ) {
    isAPalindrome = true;
  }
}

if (isAPalindrome) {
  console.log(enteredNum + " is a palindrome");
} else {
  console.log(enteredNum + " is not a palindrome");
}
