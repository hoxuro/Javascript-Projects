// 20. Given a number N, check if it is prime.
"use strict";

let n = askPrime();

let numDiv = 0;

for (let i = 1; i < n && numDiv < 2; i++) {
  if (n % i === 0) {
    numDiv++;
  }
}

if (numDiv > 1) {
  console.log(n + " is not a prime");
} else {
  console.log(n + " is a prime");
}

function askPrime() {
  let n = readInt("Enter a number to know if it is a prime");
  if (n <= 0) {
    throw Error("The number must be greater than 0.");
  }
  return n;
}
