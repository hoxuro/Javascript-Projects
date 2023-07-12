'use strict';

const selectedBoxEl = document.querySelector('.selected-box');
const selectedEl = document.querySelector('.selected');
const elementsBoxEl = document.querySelector('.elements-box');
const upEl = document.querySelector('.up');
const downEl = document.querySelector('.down');

const languages = [
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'Java',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
  },
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg',
  },
  {
    name: 'Ruby',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original-wordmark.svg',
  },
  {
    name: 'C',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg',
  },
  {
    name: 'Haskell',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original-wordmark.svg',
  },
];

languages.forEach(function (language) {
  //creo la imagen y sus atributos
  const img = document.createElement('img');
  img.classList.add('language-icon');
  img.setAttribute('src', `${language.icon}`);
  img.setAttribute('width', '40px');
  img.setAttribute('height', '40px');

  //creo el nombre del lenguage
  const lang = document.createElement('p');
  lang.classList.add('language');
  lang.textContent = language.name;

  //creo el div contenedor
  const element = document.createElement('div');
  element.classList.add('element-box');

  //los añado
  element.appendChild(img);
  element.appendChild(lang);
  elementsBoxEl.appendChild(element);
});

const elementBoxEl = document.querySelectorAll('.element-box');

const selectedClicked = function () {
  elementsBoxEl.classList.toggle('hidden');
  downEl.classList.toggle('hidden');
  upEl.classList.toggle('hidden');
};

selectedBoxEl.addEventListener('click', selectedClicked);

elementBoxEl.forEach(function (elBox) {
  elBox.addEventListener('click', function () {
    const langName = elBox.querySelector('.language');
    selectedEl.textContent = langName.textContent;
    selectedClicked();
  });
});
