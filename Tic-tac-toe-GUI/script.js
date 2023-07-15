"use strict";

// Primero obtengo la seleccion de ficha
const chooseXEl = document.querySelector(".btn-x");
const chooseOEl = document.querySelector(".btn-o");
const chooseBoxEl = document.querySelector(".choose-box");
const tableroEl = document.querySelector(".tablero");
const casillasEl = document.querySelectorAll(".casilla");
const colsEl = document.querySelectorAll(".col");
const replayBoxEl = document.querySelector(".replay-box");
const finalMessageEl = document.querySelector(".final-message");
const btnReplayEl = document.querySelector(".btn-replay");

let seleccion = "";
let IA = "";

chooseOEl.addEventListener("click", function () {
  seleccion = "O";
  IA = "X";
  chooseBoxEl.classList.add("hidden");
  tableroEl.classList.remove("hidden");
});

chooseXEl.addEventListener("click", function () {
  seleccion = "X";
  IA = "O";
  chooseBoxEl.classList.add("hidden");
  tableroEl.classList.remove("hidden");
});

// Una vez seleccionada la ficha pasamos al tablero
const obtenerCasilla = function (posicion) {
  // hago uso del spread operator
  return [...[...colsEl][posicion[0]].querySelectorAll(".casilla")][
    posicion[1]
  ];
};

const generateRandomCasilla = function () {
  return [
    Math.trunc(Math.random() * (2 + 1)),
    Math.trunc(Math.random() * (2 + 1)),
  ];
};

const IAMove = function (IA) {
  let hasMoved = false;
  let randomCasilla = generateRandomCasilla();
  let casilla = obtenerCasilla(randomCasilla);

  // la casilla debe estar vacia
  do {
    if (casilla.textContent !== "") {
      randomCasilla = generateRandomCasilla();
      casilla = obtenerCasilla(randomCasilla);
    } else {
      hasMoved = true;
    }
  } while (!hasMoved);

  casilla.textContent = IA;
  casilla.classList.add("last-move");
};

const tableroLleno = function () {
  let estaLleno = true;

  [...colsEl].forEach(function (col) {
    const casillas = col.querySelectorAll(".casilla");

    [...casillas].forEach(function (casilla) {
      if (casilla.textContent === "") {
        estaLleno = false;
      }
    });
  });

  return estaLleno;
};

const comprobarLinea = function (array) {
  return (
    array[0].textContent === array[1].textContent &&
    array[1].textContent === array[2].textContent &&
    (array[0].textContent === "O" || array[0].textContent === "X")
  );
};

const comprobarFilas = function () {
  let tresEnRaya = false;
  let fila = [];
  for (let i = 0; i < 3; i++) {
    colsEl.forEach(function (col) {
      fila.push([...col.querySelectorAll(".casilla")][i]);
    });
    if (comprobarLinea(fila)) {
      tresEnRaya = true;
    }
    fila = [];
  }

  return tresEnRaya;
};

const comprobarDiagonalPrincipal = function () {
  let tresEnRaya = false;
  let index = 0;
  let diagonal = [];
  colsEl.forEach(function (col) {
    diagonal.push([...col.querySelectorAll(".casilla")][index]);
    index++;
  });

  if (comprobarLinea(diagonal)) {
    tresEnRaya = true;
  }

  return tresEnRaya;
};

const comprobarDiagonalSecundaria = function () {
  let tresEnRaya = false;
  let index = 2;
  let diagonal = [];
  colsEl.forEach(function (col) {
    diagonal.push([...col.querySelectorAll(".casilla")][index]);
    index--;
  });

  if (comprobarLinea(diagonal)) {
    tresEnRaya = true;
  }

  return tresEnRaya;
};

const comprobarColumnas = function () {
  let tresEnRaya = false;
  // tres en raya en las columnas
  colsEl.forEach(function (col) {
    const casillas = [...col.querySelectorAll(".casilla")];

    if (comprobarLinea(casillas)) {
      tresEnRaya = true;
    }
  });
  return tresEnRaya;
};

const hayTresEnRaya = function () {
  return (
    comprobarFilas() ||
    comprobarColumnas() ||
    comprobarDiagonalPrincipal() ||
    comprobarDiagonalSecundaria()
  );
};

const volverAJugar = function (ganador) {
  finalMessageEl.textContent =
    tableroLleno() && !hayTresEnRaya()
      ? `Match has been draw!!`
      : `Player ${ganador} has won!!`;
  replayBoxEl.classList.remove("hidden");
  tableroEl.classList.add("hidden");
};

casillasEl.forEach(function (casilla) {
  casilla.addEventListener("click", function () {
    if (!hayTresEnRaya() && !tableroLleno()) {
      if (casilla.textContent === "") {
        // Establezco la ficha del jugador
        casilla.textContent = seleccion;
        // Desactivo temporalmente los botones
        casillasEl.forEach(function (casilla) {
          casilla.classList.remove("last-move");
        });
        casillasEl.forEach(function (casilla) {
          casilla.disabled = true;
        });
        casilla.classList.add("last-move");

        // despues de que el jugador establezca ficha
        if (!hayTresEnRaya() && !tableroLleno()) {
          setTimeout(() => {
            casillasEl.forEach(function (casilla) {
              casilla.classList.remove("last-move");
            });
          }, 1000);

          // Establezco la ficha de la IA tras 1 seg para dar realismo
          setTimeout(() => {
            IAMove(IA);

            // comprobar si la 'IA' tiene 3 en raya
            if (hayTresEnRaya()) {
              volverAJugar(IA);
            }
          }, 1000);
        }
      }
    }

    // Vuelvo a activar los botones
    setTimeout(() => {
      casillasEl.forEach(function (casilla) {
        casilla.removeAttribute("disabled");
      });
    }, 1200);

    // Compruebo si hay tres en raya o si el tablero esta lleno
    if (hayTresEnRaya() || tableroLleno()) {
      volverAJugar(seleccion);
    }
  });
});

const setInitialValues = function () {
  casillasEl.forEach(function (casilla) {
    casilla.textContent = "";
  });
  replayBoxEl.classList.add("hidden");
  chooseBoxEl.classList.remove("hidden");
  seleccion = "";
  IA = "";
};

btnReplayEl.addEventListener("click", function () {
  setInitialValues();
});
