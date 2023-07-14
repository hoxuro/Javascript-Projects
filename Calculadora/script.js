'use strict';

const btnEl = document.querySelectorAll('.btn');
const numberEl = document.querySelector('.number');
let operation = '';
let opeFinished = false;

const isOperation = function (text) {
  return (
    text === '+' || text === '-' || text === '*' || text === '/' || text === '%'
  );
};

const operate = function (num1, num2, operation) {
  if (operation === '+') return num1 + num2;
  if (operation === '-') return num1 - num2;
  if (operation === '*') return num1 * num2;
  if (operation === '/') return num1 / num2;
  if (operation === '%') return num1 % num2;
};

btnEl.forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Si el boton es un numero
    if (Number.isFinite(Number(btn.textContent)) || btn.textContent === '.') {
      if (
        (numberEl.textContent === '0' || numberEl.textContent === '00') &&
        btn.textContent !== '.'
      ) {
        numberEl.textContent = btn.textContent;
      } else {
        if (numberEl.textContent === '00') {
          numberEl.textContent = '0.';
        } else if (
          numberEl.textContent.includes('.') &&
          btn.textContent === '.'
        ) {
          numberEl.textContent = numberEl.textContent;
        } else {
          // Si se ha pulsado un numero despues de terminar una operacion
          if (opeFinished) {
            numberEl.textContent = btn.textContent;
            opeFinished = false;
          } else {
            numberEl.textContent += btn.textContent;
          }
        }
      }
    }

    // Si el boton no es un numero y no es 0
    if (!Number.isFinite(Number(btn.textContent))) {
      // Si el boton es una operacion y previamente no habia ninguna operacion
      if (
        isOperation(btn.textContent) &&
        Number.isFinite(Number(numberEl.textContent))
      ) {
        numberEl.textContent += ' ' + btn.textContent + ' ';
        operation = btn.textContent;
        opeFinished = false;
      }

      // Si el boton es = y ya habia seleccionada una operacion
      if (btn.textContent === '=' && operation) {
        const nums = numberEl.textContent.split(operation);
        const resultado = operate(Number(nums[0]), Number(nums[1]), operation);
        if (resultado < Number.MAX_SAFE_INTEGER) {
          numberEl.textContent =
            String(resultado).length > 15
              ? Number(resultado.toFixed(9).slice(0, -1))
              : resultado;
          operation = '';
          opeFinished = true;
        } else {
          if (Number.isFinite(Number(numberEl.textContent))) {
            alert('Se ha superado el máximo valor entero');
            numberEl.textContent = '0';
          }
        }
      }

      // Si el boton es AC
      if (btn.textContent === 'AC') {
        numberEl.textContent = '0';
        operation = '';
      }

      // Si el boton es DEL y ya hay una operacion seleccionada
      if (btn.textContent === 'DEL' && operation) {
        const nums = numberEl.textContent.split(operation);
        numberEl.textContent = nums[0] + operation + ' ';
      }
    }

    if (numberEl.textContent.length > 16) {
      alert('Longitud máxima alcanzada');
      numberEl.textContent = '0';
      operation = '';
    }

    // Si el resulado es mayor que el mayor entero seguro
    if (Number(numberEl.textContent) > Number.MAX_SAFE_INTEGER) {
      alert('Se ha superado el máximo valor');
      numberEl.textContent = '0';
      operation = '';
    }
  });
});
