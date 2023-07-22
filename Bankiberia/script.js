"use strict";

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIBERIA APP (INSPIRED BY BANKIST APP BY Jonas Schmedtmann )

// USERS DATA

const account1 = {
  owner: "Alejandro Martinez",
  movements: [2000, 231, -32, -55.8, 33, 12, 76, -23, 1.0],
  interestRate: 1.2,
  pin: 1234,

  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-02-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2023-07-17T23:36:17.929Z",
    "2023-07-20T10:51:36.790Z",
    "2023-07-21T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "es-ES", // de-DE0}
};

const account2 = {
  owner: "Jessica Miller",
  movements: [12, 33.2, -32.21, 28, 2.32, -0.99],
  interestRate: 1.05,
  pin: 4444,

  movementsDates: [
    "2023-07-18T14:38:10.644Z",
    "2023-07-07T14:38:10.644Z",
    "2023-07-11T14:38:10.644Z",
    "2023-07-09T14:38:10.644Z",
    "2023-07-11T14:38:10.644Z",
    "2023-07-13T14:38:10.644Z",
  ],
  currency: "USD",
  locale: "en-US", // de-DE0}
};

const account3 = {
  owner: "Motoko Kusanagi",
  movements: [
    381.45, -1245.98, 4823.76, 269.32, -55.79, -467.21, 3256.89, -933.55,
    -298.1, 144.87, 889.12, -1723.66, 340.5, 2047.01, -992.76,
  ],
  interestRate: 2,
  pin: 2501,

  movementsDates: [
    "2020-09-15T12:30:45.927Z",
    "2021-01-07T18:25:09.531Z",
    "2022-03-19T05:14:22.310Z",
    "2023-02-14T20:09:33.816Z",
    "2021-08-29T15:40:11.705Z",
    "2022-11-03T09:55:46.452Z",
    "2023-06-12T14:38:29.633Z",
    "2020-12-05T23:20:02.478Z",
    "2021-10-30T06:47:57.879Z",
    "2023-03-28T12:05:01.009Z",
    "2022-05-17T07:56:55.224Z",
    "2023-01-22T19:03:34.317Z",
    "2021-09-02T04:10:50.639Z",
    "2022-04-10T16:27:13.891Z",
    "2023-07-05T22:08:40.182Z",
  ],
  currency: "JPD",
  locale: "ja-JP", // de-DE0}
};

const accounts = [account1, account2, account3];

//ELEMENTS
const mainEl = document.querySelector("main");
const movementsEl = document.querySelector(".movements");
const btnLoginEl = document.querySelector(".login__btn");
const loginUserEl = document.querySelector(".login__input--user");
const loginPinEl = document.querySelector(".login__input--pin");
const textLoginEl = document.querySelector(".text-login");
const currentDateEl = document.querySelector(".date");
const totalCurrentEl = document.querySelector(".total-current");
const sumInEl = document.querySelector(".in");
const sumOutEl = document.querySelector(".out");
const interestEl = document.querySelector(".interest");
const btnCloseEl = document.querySelector(".btn__ope--close");
const inputUserClose = document.querySelector(".close__input--user");
const inputPinClose = document.querySelector(".close__input--pin");
const btnOpeLoanEl = document.querySelector(".btn__ope--loan");
const inputLoan = document.querySelector(".input-op-loan");
const btnOpeTransferEl = document.querySelector(".btn__ope--transfer");
const inputTransferUserEl = document.querySelector(".transfer-user");
const inputTransferAmount = document.querySelector(".transfer-amount");
const logOutTimeEl = document.querySelector(".logout-time");
const btnSort = document.querySelector(".btn-sort");

//FUNCTIONS
const createUserNames = function (accounts) {
  accounts.forEach(function (account) {
    account.name = (
      account.owner[0] + account.owner[account.owner.indexOf(" ") + 1]
    ).toLowerCase();
  });
};
createUserNames(accounts);

const getFormattedDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const getFormattedMovement = function (mov, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(mov);
};

const readAccountMovs = function (account, sort = false) {
  const movements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movementsEl.innerHTML = "";

  movements.forEach(function (mov, i) {
    movementsEl.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="movement">
    <div>
      <div class="tag ${mov > 0 ? "deposit" : "withdrawal"}">${i} ${
        mov > 0 ? "DEPOSIT" : "WITHDRAWAL"
      }</div>
      <p class="date">${getFormattedDate(
        new Date(account.movementsDates[i]),
        account.locale
      )}</p>
    </div>
    <p class="amount">${getFormattedMovement(
      mov,
      account.locale,
      account.currency
    )}</p>
  </div>
    `
    );
  });
};

const formatOptions = {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
};

const getCurrentDate = function (locale, formatOptions) {
  return new Intl.DateTimeFormat(locale, formatOptions).format(new Date());
};

const calcSummary = function () {
  // incomes
  sumInEl.textContent = getFormattedMovement(
    currentUser.movements.reduce((acc, mov) => (mov > 0 ? acc + mov : acc), 0),
    currentUser.locale,
    currentUser.currency
  );

  // outcomes
  sumOutEl.textContent = getFormattedMovement(
    currentUser.movements.reduce((acc, mov) => (mov < 0 ? acc + mov : acc), 0),
    currentUser.locale,
    currentUser.currency
  );

  //interest
  interestEl.textContent = getFormattedMovement(
    (currentUser.movements.reduce((acc, mov) => (acc += mov > 0 ? mov : 0), 0) *
      currentUser.interestRate) /
      100,
    currentUser.locale,
    currentUser.currency
  );
};

const calcTotalAvailable = function () {
  return getFormattedMovement(
    currentUser.movements.reduce((acc, mov) => (acc += mov), 0),
    currentUser.locale,
    currentUser.currency
  );
};

const updateUI = function () {
  readAccountMovs(currentUser);

  calcSummary();

  totalCurrentEl.textContent = calcTotalAvailable();
};

const setDefault = function () {
  mainEl.style.opacity = "0";
  textLoginEl.textContent = "Log in to get started";
  loginPinEl.value = "";
  loginUserEl.value = "";
  inputPinClose.value = "";
  inputUserClose.value = "";
  inputPinClose.blur();
  inputUserClose.blur();
};

btnCloseEl.addEventListener("click", function (e) {
  e.preventDefault();
  const user = inputUserClose.value;
  const pin = Number(inputPinClose.value);

  const closeAcc = accounts.find((acc) => acc.name === user);

  if (closeAcc?.pin === pin) {
    accounts.splice(closeAcc, 1);
    setDefault();
  }

  // accounts.forEach(function (acc) {
  //   if (
  //     acc.name === user &&
  //     acc.pin === pin &&
  //     currentUser.name === user &&
  //     currentUser.pin === pin
  //   ) {
  //   }
  // });
});

btnOpeLoanEl.addEventListener("click", function (e) {
  e.preventDefault();

  const amount = Number.parseFloat(Number(inputLoan.value).toFixed(2));

  if (amount > 0 && amount < 5000) {
    setTimeout(() => {
      currentUser.movements.push(amount);
      currentUser.movementsDates.push(new Date().toISOString());
      updateUI();
    }, 2000);

    inputLoan.value = "";
    inputLoan.blur();
  }
});

const resetTransferInputs = function () {
  inputTransferAmount.value = "";
  inputTransferUserEl.value = "";
  inputTransferAmount.blur();
  inputTransferUserEl.blur();
};

btnOpeTransferEl.addEventListener("click", function (e) {
  e.preventDefault();

  const transferAmount = Number.parseFloat(
    Number(inputTransferAmount.value).toFixed(2)
  );

  //recorrer cada cuenta de una en una para encontrar es muy pòco eficiente
  //mejor usar find

  // accounts.forEach(function (acc) {
  //   if (
  //     acc.name === inputTransferUserEl.value &&
  //     inputTransferUserEl.value !== currentUser.name &&
  //     transferAmount > 0 &&
  //     transferAmount <=
  //       currentUser.movements.reduce((acc, mov) => (acc += mov), 0)
  //   ) {
  //   }
  // });

  const receiverAcc = accounts.find(
    (acc) => acc.name === inputTransferUserEl.value
  );

  if (
    transferAmount > 0 &&
    transferAmount <=
      currentUser.movements.reduce((acc, mov) => (acc += mov), 0) &&
    receiverAcc?.name !== currentUser.name
  ) {
    receiverAcc.movements.push(transferAmount);
    receiverAcc.movementsDates.push(new Date().toISOString());

    currentUser.movements.push(-transferAmount);
    currentUser.movementsDates.push(new Date().toISOString());

    updateUI();

    resetTransferInputs();
  }
});

const resetLoginInputs = function () {
  loginPinEl.value = "";
  loginUserEl.value = "";
  loginPinEl.blur();
  loginUserEl.blur();
};

btnLoginEl.addEventListener("click", function (e) {
  e.preventDefault();

  let user = loginUserEl.value;
  let pin = Number(loginPinEl.value);

  // Mejor usar el metodo find para encontrar la cuenta

  // accounts.forEach(function (acc) {
  //   if (acc.name === user && acc.pin === pin) {
  //     if (timer) {
  //       clearInterval(timer);
  //     }
  //     timer = logOut();

  //     resetLoginInputs();
  //     resetTransferInputs();
  //     inputLoan.value = "";

  //     currentUser = acc;
  //     mainEl.style.opacity = "100";
  //     textLoginEl.textContent = `Welcome back, ${acc.owner.substring(
  //       0,
  //       acc.owner.indexOf(" ") + 1
  //     )}`;

  //     updateUI();
  //     currentDateEl.textContent = getCurrentDate(acc.locale, formatOptions);
  //   }
  // });

  currentUser = accounts.find((acc) => acc.name === loginUserEl.value);

  if (currentUser?.pin === +loginPinEl.value) {
    // Display UI and accounts name
    mainEl.style.opacity = "100";
    textLoginEl.textContent = `Welcome back, ${currentUser.owner.substring(
      0,
      currentUser.owner.indexOf(" ") + 1
    )}`;

    // Set current date
    currentDateEl.textContent = getCurrentDate(
      currentUser.locale,
      formatOptions
    );

    // Clear inputs
    resetLoginInputs();
    resetTransferInputs();
    inputLoan.value = "";

    if (timer) {
      clearInterval(timer);
    }
    timer = logOut();

    updateUI();
  }
});

const logOut = function () {
  let time = 180;

  const second = function () {
    let minutes = String(Math.floor(time / 60));
    let secs = String(Math.floor(time % 60));
    logOutTimeEl.textContent = `${minutes.padStart(2, 0)}:${secs.padStart(
      2,
      0
    )}`;

    if (time === 0) {
      clearInterval(timer);
      setDefault();
    }

    time--;
  };

  second();
  const timer = setInterval(second, 1000);

  return timer;
};

let sorted = true;
btnSort.addEventListener("click", function (e) {
  e.preventDefault();
  readAccountMovs(currentUser, sorted);
  sorted = !sorted;
});

let currentUser = {};
let timer = "";
