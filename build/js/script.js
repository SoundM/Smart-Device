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

// маска для формы
window.addEventListener('DOMContentLoaded', function () {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }

  function mask(event) {
    var matrix = '+7 (___) ___ ____';
    var i = 0;
    var def = matrix.replace(/\D/g, '');
    // eslint-disable-next-line no-invalid-this
    var val = this.value.replace(/\D/g, '');
    if (def.length >= val.length) {
      val = def;
    }
    // eslint-disable-next-line no-invalid-this
    this.value = matrix.replace(/./g, function (a) {
      // eslint-disable-next-line no-nested-ternary
      return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
    });
    if (event.type === 'blur') {
      // eslint-disable-next-line no-invalid-this
      if (this.value.length === 2) {
        // eslint-disable-next-line no-invalid-this
        this.value = '';
      }
    } else {
      // eslint-disable-next-line no-invalid-this
      setCursorPosition(this.value.length, this);
    }
  }

  var inputTel = document.querySelector('#tel');
  var inputPhone = document.querySelector('#phone');
  inputTel.addEventListener('input', mask, false);
  inputTel.addEventListener('focus', mask, false);
  inputTel.addEventListener('blur', mask, false);

  inputPhone.addEventListener('input', mask, false);

  inputPhone.addEventListener('focus', mask, false);
  inputPhone.addEventListener('blur', mask, false);
});

