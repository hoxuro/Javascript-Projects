"use strict";

const timerEl = document.querySelector(".timer");

const timeDown = function () {
  let time = 600;

  setInterval(function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);

    timerEl.textContent = `${min}:${sec}`;

    time--;
  }, 1000);
};

timeDown();
