'use strict';

const mostrarTablero = function (tablero) {
  let output = '';
  for (let fila = 0; fila < tablero.length; fila++) {
    for (let col = 0; col < tablero[fila].length; col++) {
      if (col === 0 && fila != 0) {
        if (tablero[fila][col] === 0) {
          output += `\n· `;
        } else if (tablero[fila][col] === 1) {
          output += `\nO `;
        } else {
          output += `\nX `;
        }
      } else {
        if (tablero[fila][col] === 0) {
          output += `· `;
        } else if (tablero[fila][col] === 1) {
          output += `O `;
        } else {
          output += `X `;
        }
      }
    }
  }
  console.log(output);
};

const colocarFicha = function (tablero, ficha, x, y) {
  let seHaColocado = false;

  if (x >= 0 && y < 3 && tablero[x][y] === 0) {
    tablero[x][y] = ficha;
    seHaColocado = true;
  }

  return seHaColocado;
};

const comprobarFila = function (fila) {
  let hayLinea = false;
  let counter = 0;

  for (let elem of fila) {
    if (elem === fila[0] && elem != 0) {
      counter++;
    }
  }

  if (counter === 3) {
    hayLinea = true;
  }

  return hayLinea;
};

/**
 * Extract the wanted column from the matrix by giving the index of it.
 *
 * @param {Array} matrix the matrix we want to extract a column
 * @param {Number} index the index of the column we want to extract starts in 0
 * @returns an array which is the wanted column
 */
const extractColumn = function (matrix, index) {
  let extractedColumn = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (col === index) {
        extractedColumn.push(matrix[row][col]);
      }
    }
  }

  return extractedColumn;
};

/**
 * Function which extracts the main diagonal from a matrix.
 *
 * @param {Array} matrix the matrix from which we want to extract the diagonal
 * @returns an array which is the main diagonal of the matrix
 */
const extractMainDiagonal = function (matrix) {
  let mainDiagonal = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === col) {
        mainDiagonal.push(matrix[row][col]);
      }
    }
  }

  return mainDiagonal;
};

/**
 * Function which extracts the secondary diagonal from a matrix.
 *
 * @param {Array} matrix
 * @returns the secondary diagonal from the matrix inserted
 */
const extractSecDiagonal = function (matrix) {
  let secDiagonal = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row + col === matrix[row].length - 1) {
        secDiagonal.push(matrix[row][col]);
      }
    }
  }

  return secDiagonal;
};

const hayGanador = function (tablero) {
  let ganador = false;

  //compruebo las filas
  for (let fila of tablero) {
    if (!ganador) {
      ganador = comprobarFila(fila);
    }
  }

  //compruebo las columnas
  for (let col = 0; col < 3 && !ganador; col++) {
    ganador = comprobarFila(extractColumn(tablero, col));
  }

  //compruebo la diagonal principal
  if (!ganador) {
    ganador = comprobarFila(extractMainDiagonal(tablero));
  }

  //compruebo la diagonal secundaria
  if (!ganador) {
    ganador = comprobarFila(extractSecDiagonal(tablero));
  }

  return ganador;
};

const juegoTerminado = function (tablero) {
  let haTerminado = true;

  for (let fila = 0; fila < 3; fila++) {
    for (let col = 0; col < 3; col++) {
      if (tablero[fila][col] === 0) {
        haTerminado = false;
      }
    }
  }

  return haTerminado;
};

//game logic
let tablero = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let player1 = prompt('Nombre jugador 1:');

do {
  if (!player1) {
    alert('Introduzca un nombre válido');
    player1 = prompt('Nombre jugador 1:');
  }
} while (!player1);

let player2 = prompt('Nombre jugador 2:');

do {
  if (!player2) {
    alert('Introduzca un nombre válido');
    player2 = prompt('Nombre jugador 2:');
  }
} while (!player2);

let players = [player1, player2];
let turno = 1;
let x = 0;
let y = 0;

do {
  let fichaColocada = false;
  x = 0;
  y = 0;
  turno = turno === 0 ? 1 : 0;

  do {
    //pido la fila
    x = Number(prompt(`${players[turno]} introduce fila:`));
    do {
      if (!x || x <= 0 || x > 3) {
        alert('Introduce un número válido');
        x = Number(prompt('Fila: '));
      }
    } while (!x || x <= 0 || x > 3);

    //pido la columna
    y = Number(prompt(`${players[turno]} introduce columna:`));
    do {
      if (!y || y <= 0 || y > 3) {
        alert('Introduce un número válido');
        y = Number(prompt('Columna: '));
      }
    } while (!y || y <= 0 || y > 3);

    fichaColocada = colocarFicha(tablero, turno + 1, x - 1, y - 1);
    if (!fichaColocada) {
      alert('Casilla llena, vuelva a intentarlo');
    }
  } while (!fichaColocada);

  mostrarTablero(tablero);
} while (!juegoTerminado(tablero) && !hayGanador(tablero));

if (juegoTerminado(tablero)) {
  console.log('Empate! nadie ha ganado');
}

if (hayGanador(tablero)) {
  console.log(`Tres en raya! Ha ganado ${players[turno]}`);
}
