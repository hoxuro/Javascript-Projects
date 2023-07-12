'use strict';

const divEl = document.querySelector('.draggable-div');
const headerEl = divEl.querySelector('.div-header');

const onDrag = function ({ movementX, movementY }) {
  let getStyle = window.getComputedStyle(divEl);
  let left = parseInt(getStyle.left);
  let top = parseInt(getStyle.top);
  divEl.style.left = `${left + movementX}px`;
  divEl.style.top = `${top + movementY}px`;
};

divEl.addEventListener('mousedown', () => {
  divEl.addEventListener('mousemove', onDrag);
  divEl.classList.add('active');
});

document.addEventListener('mouseup', () => {
  divEl.classList.remove('active');
  divEl.removeEventListener('mousemove', onDrag);
});
