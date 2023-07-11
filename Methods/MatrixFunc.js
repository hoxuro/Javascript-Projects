"use strict";

/**
 * Display the entered matrix.
 *
 * @param {Array} matrix the entered matrix
 */
function display(matrix) {
  for (let row of matrix) {
    console.log(row);
  }
}

/**
 * Display the entered matrix in a reverse way.
 *
 * @param {Array} matrix the entered matrix
 */
function displayReverse(matrix) {
  for (let row = 0; row < matrix.length; row++) {
    let strRow = "";
    for (let col = matrix[row].length - 1; col >= 0; col--) {
      strRow += " " + matrix[row][col];
    }
    console.log(strRow);
  }
}

/**
 * Fills a matrix with a random int number from 0 to 9.
 *
 * @param {Number} rows the rows of the matrix
 * @param {Number} cols the columns of the matrix
 * @returns a matrix whose elements have been generated randomly
 */
function fillRandom(rows, cols) {
  let randomMatrix = new Array(rows);

  for (let row = 0; row < randomMatrix.length; row++) {
    randomMatrix[row] = new Array(cols);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      randomMatrix[row][col] = Math.trunc(Math.random() * 10);
    }
  }

  return randomMatrix;
}

/**
 * Fills a matrix with a random int number in a range given by the user.
 *
 * @param {Number} rows the rows of the matrix
 * @param {Number} cols the columns of the matrix
 * @param {Number} min the integer from which the random can start to be generated
 * @param {Number} max the integer from which the random stops being generated
 * @returns a matrix whose elements have been generated randomly in a range
 * given
 */
function fillRandom(rows, cols, min, max) {
  let randomMatrix = new Array(rows);

  for (let row = 0; row < randomMatrix.length; row++) {
    randomMatrix[row] = new Array(cols);
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      randomMatrix[row][col] = Math.trunc(
        Math.random() * (max + 1 - min) + min
      );
    }
  }

  return randomMatrix;
}

/**
 * Extract the wanted row from the matrix by giving the index of it.
 *
 * @param {Array} matrix the matrix we want to extract a row
 * @param {Number} index the index of the row we want to extract starts in 0
 * @returns an array which is the wanted row
 */
function extractRow(matrix, index) {
  let extractedRow = [];

  for (let row = 0; row < matrix.length; row++) {
    if (row === index) {
      for (let col = 0; col < matrix[row].length; col++) {
        extractedRow.push(matrix[row][col]);
      }
    }
  }

  return extractedRow;
}

/**
 * Extract the wanted column from the matrix by giving the index of it.
 *
 * @param {Array} matrix the matrix we want to extract a column
 * @param {Number} index the index of the column we want to extract starts in 0
 * @returns an array which is the wanted column
 */
function extractColumn(matrix, index) {
  let extractedColumn = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (col === index) {
        extractedColumn.push(matrix[row][col]);
      }
    }
  }

  return extractedColumn;
}

/**
 * Function which extracts the main diagonal from a matrix.
 *
 * @param {Array} matrix the matrix from which we want to extract the diagonal
 * @returns an array which is the main diagonal of the matrix
 */
function extractMainDiagonal(matrix) {
  let mainDiagonal = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === col) {
        mainDiagonal.push(matrix[row][col]);
      }
    }
  }

  return mainDiagonal;
}

/**
 * Function that extracts the diagonal of the position entered by the
 * user.
 *
 * @param {Array} matrix the matrix from which we want to extract the diagonal
 * @param {Number} rowIndex  the row index of the diagonal we want
 * @param {Number} colIndex  the column index of the diagonal we want
 * @returns an array which is the diagonal of the given position
 */
function extractDiagonal(matrix, rowIndex, colIndex) {
  let diagonal = [];
  let container = rowIndex;
  let container2 = colIndex;

  //I get the index where the diagonal begins
  while (container >= 0 && container2 >= 0) {
    rowIndex = container;
    colIndex = container2;
    container--;
    container2--;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === rowIndex && col === colIndex) {
        diagonal.push(matrix[rowIndex][colIndex]);
        rowIndex++;
        colIndex++;
      }
    }
  }

  return diagonal;
}

/**
 * Function which extracts the secondary diagonal from a matrix.
 *
 * @param {Array} matrix
 * @returns the secondary diagonal from the matrix inserted
 */
function extractSecDiagonal(matrix) {
  let secDiagonal = [];

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row + col === matrix[row].length - 1) {
        secDiagonal.push(matrix[row][col]);
      }
    }
  }

  return secDiagonal;
}

/**
 * Method that extracts the diagonal of the position entered by
 * the user in reverse order.
 *
 * @param {Array} matrix the matrix from which we want to extract the diagonal
 * @param {Number} rowIndex the row index of the element
 * @param {Number} colIndex the column index of the element
 * @returns an array which is the diagonal of the given position in reverse order
 */
function extractDiagonalRightToLeft(matrix, rowIndex, colIndex) {
  let diagonal = [];
  let container = rowIndex;
  let container2 = colIndex;

  //I get the index where the diagonal begins
  while (container >= 0 && container2 < matrix.length) {
    rowIndex = container;
    colIndex = container2;
    container--;
    container2++;
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (row === rowIndex && col === colIndex) {
        diagonal.push(matrix[rowIndex][colIndex]);
        rowIndex++;
        colIndex--;
      }
    }
  }

  return diagonal;
}

/**
 * Shorts the matrix in ascending order.
 *
 * @param {Array} matrix
 */
function bubbleShort(matrix) {
  //the number of times that the matrix must be ordered to be sure that it is ordered
  let iterations = matrix.length * matrix[0].length;

  //as long as the number of times to be sorted is not zero
  do {
    //For each element of the matrix
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        //I get the following element
        let nextCol = col + 1;

        //if it is the last element of the row
        if (nextCol == matrix[row].length && row != matrix.length - 1) {
          //I will compare with the first of the following
          nextCol = 0;
          //If the next one is higher, I will exchange positions
          if (matrix[row][col] > matrix[row + 1][nextCol]) {
            let aux = matrix[row][col];
            matrix[row][col] = matrix[row + 1][nextCol];
            matrix[row + 1][nextCol] = aux;
          }
        } else if (nextCol != matrix.length) {
          //I compare with the following and if it is greater, I exchange positions
          if (matrix[row][col] > matrix[row][nextCol]) {
            let aux = matrix[row][col];
            matrix[row][col] = matrix[row][nextCol];
            matrix[row][nextCol] = aux;
          }
        }
      }
    }
    iterations--;
  } while (iterations != 0);
}
