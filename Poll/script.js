"use strict";

const pollEl = document.querySelector(".poll");
const elementsBoxEl = document.querySelector(".elements-box");

// Primero creo el contenido de la poll
const videogames = [
  { name: "Minecraft", votes: 3 },
  { name: "The Last of Us", votes: 7 },
  { name: "The Witcher 3", votes: 4 },
  { name: "Far Cry 3", votes: 2 },
];

let totalVotes = 0;
videogames.forEach(function (videogame) {
  totalVotes += videogame.votes;
});

videogames.forEach(function (videogame) {
  elementsBoxEl.innerHTML += `          
    <div class="element-box">
    <div class="name-box">
    <div class="check-box">
    <input class="check" type="checkbox" />
    <p class="name">${videogame.name}</p>
    </div>
    <p class="percentaje hidden">${(
      (videogame.votes / totalVotes) *
      100
    ).toFixed(0)}%</p>
        </div>
        <div class="bar hidden">
        <div class="bar-paint">&nbsp;</div>
        </div>
        </div>`;
});

// Una vez creado el contenido ya puedo seleccionar los elementos
const elementsEl = document.querySelectorAll(".element-box");
const checkEl = document.querySelectorAll(".check");
const percentajeEl = document.querySelectorAll(".percentaje");
const barEl = document.querySelectorAll(".bar");
const barPaintEl = document.querySelectorAll(".bar-paint");

checkEl.forEach(function (check) {
  // Si a un input se le hace click
  check.addEventListener("click", function () {
    // Obtengo el indice del check para añadirle el voto
    const index = [...checkEl].indexOf(check);
    videogames[index].votes++;
    totalVotes++;

    //Una vez añadido el voto desactivo los inputs
    checkEl.forEach(function (check) {
      check.setAttribute("disabled", true);
    });

    // Todo hecho ahora toca crear los porcentajes y barras correctas
    videogames.forEach(function (videogame) {
      const index = videogames.indexOf(videogame);
      barPaintEl[index].style.width = `${Math.floor(
        (videogame.votes / totalVotes) * 100
      )}%`;
      [...percentajeEl][index].textContent = `${Math.floor(
        (videogame.votes / totalVotes) * 100
      )}%`;
    });
    percentajeEl.forEach(function (percentaje) {
      percentaje.classList.remove("hidden");
    });
    barEl.forEach(function (bar) {
      bar.classList.remove("hidden");
    });
  });
});
