'use strict';

const playerEl = document.querySelector('.player');
const cpuEl = document.querySelector('.cpu');
const optionEl = document.querySelectorAll('.option');
const optionBoxEl = document.querySelectorAll('.option-box');
const textEl = document.querySelector('.text');

const options = [
  './images/paper.png',
  './images/rock.png',
  './images/scissors.png',
];

const jugar = function (mov) {
  const cpuMov = Math.trunc(Math.random() * (2 + 1));

  cpuEl.setAttribute('src', options[cpuMov]);
  playerEl.classList.remove('animar-player');
  cpuEl.classList.remove('animar-cpu');

  switch (mov) {
    case 'Rock':
      playerEl.setAttribute('src', './images/rock.png');
      if (cpuMov === 0) {
        textEl.textContent = 'You lose...';
      } else if (cpuMov === 1) {
        textEl.textContent = "It's a draw";
      } else {
        textEl.textContent = 'You win!!';
      }
      break;
    case 'Paper':
      playerEl.setAttribute('src', './images/paper.png');
      if (cpuMov === 0) {
        textEl.textContent = "It's a draw";
      } else if (cpuMov === 1) {
        textEl.textContent = 'You win!!';
      } else {
        textEl.textContent = 'You lose...';
      }
      break;
    case 'Scissors':
      playerEl.setAttribute('src', './images/scissors.png');
      if (cpuMov === 0) {
        textEl.textContent = 'You win!!';
      } else if (cpuMov === 1) {
        textEl.textContent = 'You lose...';
      } else {
        textEl.textContent = "It's a draw";
      }
      break;
  }
};

optionEl.forEach(function (option) {
  option.addEventListener('click', function () {
    //desactivo los botones
    optionEl.forEach(function (option) {
      option.disabled = true;
    });

    //establezco los valores por defecto
    playerEl.setAttribute('src', './images/rock.png');
    cpuEl.setAttribute('src', './images/rock.png');

    //obtengo la opcion seleccionada
    const optionChoose = option.querySelector('.option-text').textContent;
    playerEl.classList.add('animar-player');
    cpuEl.classList.add('animar-cpu');
    textEl.textContent = 'Wait...';
    setTimeout(() => {
      jugar(optionChoose);
    }, 3000);

    setTimeout(() => {
      //reactivo los botones
      optionEl.forEach(option => (option.disabled = false));
    }, 3500);
  });
});

// 08/07/2023  dd/MM/YYY
