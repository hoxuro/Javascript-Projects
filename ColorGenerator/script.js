"use strict";

const btnEl = document.querySelector(".btn");
const hexEl = document.querySelector(".hex");
const body = document.querySelector("body");

const genRandomHex = function () {
  const hexValues = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B",  "C", "D", "E", "F",];

  return `#${hexValues[Math.trunc(Math.random() * (15 + 1))]}${ hexValues[Math.trunc(Math.random() * (15 + 1))] }${hexValues[Math.trunc(Math.random() * (15 + 1))]}${ hexValues[Math.trunc(Math.random() * (15 + 1))] }${hexValues[Math.trunc(Math.random() * (15 + 1))]}${ hexValues[Math.trunc(Math.random() * (15 + 1))]}`;
};

btnEl.addEventListener("click", function () {
  const randomColor = genRandomHex();
  body.style.backgroundColor = randomColor;
  hexEl.textContent = randomColor;
});