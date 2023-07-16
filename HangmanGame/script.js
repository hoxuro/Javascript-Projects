"use strict";

// lista de palabras a adivinar que contiene el juego
const palabras = [
  { palabra: "coche", pista: "vehiculo a motor" },
  { palabra: "casa", pista: "lugar donde pasamos mucho tiempo" },
  { palabra: "cocodrilo", pista: "dinosaurio viviente" },
  { palabra: "telefono", pista: "dispositivo para comunicarse a distancia" },
  { palabra: "martillo", pista: "herramienta de mano utilizada para golpear" },
  { palabra: "gafas", pista: "objeto para corregir la visión" },
  { palabra: "silla", pista: "mueble utilizado para sentarse" },
  { palabra: "reloj", pista: "instrumento para medir el tiempo" },
  { palabra: "camara", pista: "dispositivo para capturar imágenes" },
  { palabra: "boligrafo", pista: "instrumento de escritura con tinta" },
  {
    palabra: "maleta",
    pista: "objeto para transportar pertenencias durante un viaje",
  },
  { palabra: "avion", pista: "medio de transporte aéreo" },
  { palabra: "escoba", pista: "utensilio para barrer el suelo" },
  { palabra: "lampara", pista: "objeto que produce luz artificial" },
  {
    palabra: "bicicleta",
    pista: "vehiculo de dos ruedas propulsado por el pedaleo",
  },
  { palabra: "taza", pista: "recipiente utilizado para beber líquidos" },
  { palabra: "cuchillo", pista: "herramienta con filo para cortar alimentos" },
  {
    palabra: "ordenador",
    pista: "dispositivo electrónico para procesar información",
  },
];

//seleccion de elementos
const wordEl = document.querySelector(".word");
const hintEl = document.querySelector(".hint");
const keyEl = document.querySelectorAll(".key");
const incorrectEl = document.querySelector(".incorrect");
const hangmanEl = document.querySelector(".hangman");
const gameBoxEl = document.querySelector(".game-box");
const btnAgainEl = document.querySelector(".btn-again");

// elementos iniciales
let guessWord = "";
let palabraOculta = "";
let hint = "";
let fails = 0;

const setInitialValues = function () {
  guessWord = "";
  palabraOculta = "";
  hint = "";
  fails = 0;

  incorrectEl.innerHTML = `<span>Incorrect guesses:</span> 0 / 6`;
  hangmanEl.src = `./images/hangman-0.svg`;

  keyEl.forEach(function (key) {
    key.disabled = false;
    key.style.backgroundColor = "#7c3aed";
    key.style.color = "#f5f3ff";
  });

  gameBoxEl.style.backgroundColor = "#f5f3ff";
  document.querySelector("body").style.backgroundColor = "#7c3aed";
};

// iniciar nuevo juego
const nuevoJuego = function () {
  // elimino la palabra anterior y escojo una nueva
  wordEl.textContent = "";
  const randomWord =
    palabras[Math.trunc(Math.random() * (palabras.length - 1 + 1))];

  guessWord = randomWord.palabra.toUpperCase();
  hint = randomWord.pista;

  // creo una palabra de pista
  let hintLetter =
    randomWord.palabra[
      Math.trunc(Math.random() * (randomWord.palabra.length - 1 + 1))
    ];

  // muestro la palabra de pista
  for (let palabra of randomWord.palabra) {
    wordEl.textContent +=
      palabra === hintLetter ? `${hintLetter.toUpperCase()} ` : "_ ";
  }

  // almaceno en otra variable las palabras que se van adivinando
  for (let palabra of randomWord.palabra) {
    palabraOculta +=
      palabra === hintLetter ? `${hintLetter.toUpperCase()}` : "_";
  }

  // muestro la pista
  hintEl.innerHTML = `<span>Hint: </span>${
    hint[0].toUpperCase() + hint.slice(1)
  }`;
};

// inicio del programa
nuevoJuego();

// funcionalidad del teclado
keyEl.forEach(function (key) {
  key.addEventListener("click", function () {
    // compruebo que la palabra contenga la letra
    !guessWord.includes(key.textContent) ? fails++ : fails;

    if (fails >= 6) {
      keyEl.forEach(function (key) {
        key.disabled = true;
        key.style.backgroundColor = "#292524";
        key.style.color = "black";
      });
      gameBoxEl.style.backgroundColor = "#292524";
    }

    incorrectEl.innerHTML = `<span>Incorrect guesses:</span> ${fails} / 6`;
    hangmanEl.src = `./images/hangman-${fails}.svg`;

    // por cada letra de la palabra a adivinar
    for (let index = 0; index < guessWord.length; index++) {
      let oc = palabraOculta.split("");

      // si la tecla coincide con la letra de la palabra
      if (key.textContent === guessWord[index]) {
        oc[index] = key.textContent;
        console.log(oc);
      }
      palabraOculta = oc.join("");
    }

    // muestro el resultado de pulsar la tecla
    wordEl.textContent = palabraOculta.split("").join(" ");

    if (!palabraOculta.includes("_")) {
      keyEl.forEach(function (key) {
        key.disabled = true;
        key.style.backgroundColor = "#7c3aed";
      });
      gameBoxEl.style.backgroundColor = "#7c3aed";
      document.querySelector("body").style.backgroundColor = "#f5f3ff";
    }
  });
});

btnAgainEl.addEventListener("click", function () {
  setInitialValues();
  nuevoJuego();
});
