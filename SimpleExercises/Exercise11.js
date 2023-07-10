// 11. Request a time in the form of hours, minutes, and seconds, and display the time to the next second.
"use strict";

/**
 *
 * @returns an hour entered by the user.
 * @throws Error if the hour entered is negative
 * @throws Error if the hour is lower than 0 or greater than 23
 */
function askHour() {
  const hour = readInt("Enter the current hour: ");
  if (hour < 0) {
    throw Error("Negative hours are not allowed.");
  }
  if (hour >= 24) {
    throw Error("Hour out of range.");
  }

  return hour;
}

/**
 *
 * @returns a minute entered by the user.
 * @throws Error if the minutes entered is negative
 * @throws Error if the minutes is lower than 0 or greater than 59
 */
function askMinutes() {
  const minute = readInt("Enter the current minute: ");
  if (minute < 0) {
    throw Error("Negative minutes are not allowed");
  }
  if (minute >= 60) {
    throw Error("Minutes out of range.");
  }

  return minute;
}

/**
 *
 * @returns a second entered by the user.
 * @throws Error if the second entered is negative
 * @throws Error if the second is lower than 0 or greater than 59
 */
function askSeconds() {
  const second = readInt("Enter the current seconds: ");
  if (second < 0) {
    throw Error("Negative seconds are not allowed");
  }
  if (second >= 60) {
    throw Error("Seconds out of range.");
  }

  return second;
}

const hour = Number(askHour());
const minutes = Number(askMinutes());
const seconds = Number(askSeconds());

let hourAfter = hour;
let minutesAfter = minutes;
let secondsAfter = seconds;

if (seconds === 59 && minutes === 59 && hour === 23) {
  hourAfter = 0;
  minutesAfter = 0;
  secondsAfter = 0;
} else if (seconds === 59 && minutes === 59) {
  minutesAfter = 0;
  secondsAfter = 0;
  hourAfter = hour + 1;
} else if (seconds === 59) {
  secondsAfter = 0;
  minutesAfter = minutes + 1;
  hourAfter = hour;
} else {
  secondsAfter += 1;
}

const hourStr = Math.floor(hour / 10) != 0 ? hour : "0" + hour;
const minutesStr = Math.floor(minutes / 10) != 0 ? minutes : "0" + minutes;
const secondsStr = Math.floor(seconds / 10) != 0 ? seconds : "0" + seconds;

const hourAfterStr =
  Math.floor(hourAfter / 10) != 0 ? hourAfter : "0" + hourAfter;
const minutesAfterStr =
  Math.floor(minutesAfter / 10) != 0 ? minutesAfter : "0" + minutesAfter;
const secondsAfterStr =
  Math.floor(secondsAfter / 10) != 0 ? secondsAfter : "0" + secondsAfter;

console.log("Hour entered: " + hourStr + "/" + minutesStr + "/" + secondsStr);
console.log(
  "A second later... " +
    hourAfterStr +
    "/" +
    minutesAfterStr +
    "/" +
    secondsAfterStr
);
