'use strict';
var KeyCode = {
  ESC: 27,
  ENTER: 13,
  SPACE: 32,
};
var modal = document.querySelector('.modal');
var openForm = document.querySelector('.page-header__open-form');
var closeForm = document.querySelector('.modal--close-form');

modal.classList.remove('modal--nojs');
modal.classList.remove('modal--opened');
modal.classList.add('modal--closed');

openForm.addEventListener('click', function () {
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

// Якорь

var yak1 = document.querySelector('a[href="#yak1"]');
var yak2 = document.querySelector('a[href="#yak2"]');
var place1 = document.getElementById('#yak1');
var place2 = document.getElementById('#yak2');

yak1.addEventListener('click', function () {
  place1.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

yak2.addEventListener('click', function () {
  place2.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
});

// Accordion

var button1 = document.querySelector('.accordion__button1');
var content1 = document.querySelector('.accordion__content1');
var button2 = document.querySelector('.accordion__button2');
var content2 = document.querySelector('.accordion__content2');

button1.classList.remove('accordion__nojs1');
button1.classList.add('accordion__button-opened1');
content1.classList.remove('accordion__show1');
content1.classList.add('accordion__close1');
button2.classList.remove('accordion__nojs2');
button2.classList.add('accordion__button-opened2');
content2.classList.remove('accordion__show2');
content2.classList.add('accordion__close2');

button1.addEventListener('click', function () {
  if (button1.classList.contains('accordion__button-opened1')) {
    button1.classList.remove('accordion__button-opened1');
    button1.classList.add('accordion__button-closed1');
    content1.classList.remove('accordion__close1');
    content1.classList.add('accordion__show1');
  } else {
    button1.classList.remove('accordion__button-closed1');
    button1.classList.add('accordion__button-opened1');
    content1.classList.remove('accordion__show1');
    content1.classList.add('accordion__close1');
  }
});

button2.addEventListener('click', function () {
  if (button2.classList.contains('accordion__button-opened2')) {
    button2.classList.remove('accordion__button-opened2');
    button2.classList.add('accordion__button-closed2');
    content2.classList.remove('accordion__close2');
    content2.classList.add('accordion__show2');
  } else {
    button2.classList.remove('accordion__button-closed2');
    button2.classList.add('accordion__button-opened2');
    content2.classList.remove('accordion__show2');
    content2.classList.add('accordion__close2');
  }
});


