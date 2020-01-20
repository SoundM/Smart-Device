'use strict';
var KeyCode = {
  ESC: 27,
  ENTER: 13,
  SPACE: 32
};
var modal = document.querySelector('.modal');
var openForm = document.querySelector('.page-header__open-form');
var closeForm = document.querySelector('.modal--close-form');

modal.classList.remove('modal--nojs');
modal.classList.remove('modal--opened');
modal.classList.add('modal--closed');

openForm .addEventListener('click', function () {
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
  } else {
    modal.classList.add('modal--closed');
    modal.classList.remove('modal--opened');
  }
});

closeForm.addEventListener('click', function () {
  modal.classList.remove('modal--opened');
  modal.classList.add('modal--closed');
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === KeyCode.ESC) {
    modal.classList.remove('modal--opened');
    modal.classList.add('modal--closed');
  }
});

var yak1 = document.querySelector('a[href="#yak1"]');
var yak2 = document.querySelector('a[href="#yak2"]');
var place1 = document.getElementById('#yak1');
var place2 = document.getElementById('#yak2');

yak1.addEventListener('click', function () {
  place1.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});

yak2.addEventListener('click', function () {
  place2.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
});
