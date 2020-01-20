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


// var isEscEvent = function (evt, action) {
//   if (evt.keyCode === KeyCode.ESC) {
//     action();
//   }
// };
