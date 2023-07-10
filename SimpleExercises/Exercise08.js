// 8. Write a flowchart algorithm that reads a year from the keyboard and indicates whether it is a leap year or not (A year is
// leap if it is divisible by 4, except the last of each century, those divisible by 100, which to be leap years,
// must also be divisible by 400.)

"use strict";
const year = readInt("Enter a year");

if (year <= 0) {
  console.log("The number must be greater than 0!!");
} else {
  let isLeap = false;

  let lastYear = year
    .toString()
    .substring(year.toString().length - 2, year.toString().length);

  if (year % 4 === 0 && lastYear != "99") {
    isLeap = true;
  } else if (year % 100 === 0 && year % 400 === 0) {
    isLeap = true;
  }

  const answer = isLeap ? "Is leap" : "Is not leap";

  console.log(year, answer);
}
