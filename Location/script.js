"use strict";

const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", function () {
  navigator.geolocation.getCurrentPosition(success, error);
});

function success(position) {
  let { latitude, longitude } = position.coords;
  fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=d4455fc4d4fe490fa533214de3139811`
  )
    .then((response) => response.json())
    .then((result) => {
      let allDetails = result.results[0].components;
      let { county, postcode, country } = allDetails;
      btnEl.textContent = `${county} ${postcode}, ${country}`;
    });
} 

function error(error) {
  if (error.code === 1) {
    btnEl.textContent = "You denied the request!";
  } else if (error.code === 2) {
    btnEl.textContent = "Location not available!";
  } else if (error.code) {
    btnEl.textContent = "Something went wrong!";
  }
  btnEl.setAttribute("disabled", true);
}
