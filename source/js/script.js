'use strict';
// модальное окно
var KeyCode = {
  ESC: 27,
  ENTER: 13,
  SPACE: 32,
};
var body = document.querySelector('body');
var modal = document.querySelector('.modal');
var openForm = document.querySelector('.page-header__open-form');
var closeForm = document.querySelector('.modal--close-form');
var modalContent = document.querySelector('.modal__content');
var focusContent = document.querySelector('#modal-name');

modal.classList.remove('modal--nojs');

openForm.addEventListener('click', function (event) {
  event.stopPropagation();
  if (modal.classList.contains('modal--closed')) {
    modal.classList.remove('modal--closed');
    modal.classList.add('modal--opened');
    body.style.overflow = 'hidden';
    focusContent.focus();
  }
});

var getModalClose = function () {
  modal.classList.remove('modal--opened');
  modal.classList.add('modal--closed');
  body.style.overflow = 'visible';
};

closeForm.addEventListener('click', function () {
  getModalClose();
});

document.addEventListener('keydown', function (event) {
  if (event.keyCode === KeyCode.ESC) {
    getModalClose();
  }
});

// закрытие по клику на оверлей ! для корректной работы ему нужен event.stopPropagation() при открытии стр18;
body.addEventListener('click', function (event) {
  if (!modalContent.contains(event.target) && modal.classList.contains('modal--opened')) {
    getModalClose();
  }
});

// Якорь

var yak1 = document.querySelector('a[href="#yak1"]');
var yak2 = document.querySelector('a[href="#yak2"]');
var place1 = document.getElementById('#yak1');
var place2 = document.getElementById('#yak2');

var goHref = function (place) {
  place.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

yak1.addEventListener('click', function () {
  goHref(place1);
});

yak2.addEventListener('click', function () {
  goHref(place2);
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
button2.classList.add('accordion__button-closed2');
// content2.classList.remove('accordion__show2');
// content2.classList.add('accordion__close2');

button1.addEventListener('click', function () {
  if (button1.classList.contains('accordion__button-opened1') && button2.classList.contains('accordion__button-opened2')) {
    button1.classList.remove('accordion__button-opened1');
    button1.classList.add('accordion__button-closed1');
    content1.classList.remove('accordion__close1');
    content1.classList.add('accordion__show1');
  } else {
    if (button1.classList.contains('accordion__button-opened1') && button2.classList.contains('accordion__button-closed2')) {
      button1.classList.remove('accordion__button-opened1');
      button1.classList.add('accordion__button-closed1');
      content1.classList.remove('accordion__close1');
      content1.classList.add('accordion__show1');
      button2.classList.remove('accordion__button-closed2');
      button2.classList.add('accordion__button-opened2');
      content2.classList.remove('accordion__show2');
      content2.classList.add('accordion__close2');
    } else {
      button1.classList.remove('accordion__button-closed1');
      button1.classList.add('accordion__button-opened1');
      content1.classList.remove('accordion__show1');
      content1.classList.add('accordion__close1');
    }
  }
});

button2.addEventListener('click', function () {
  if (button2.classList.contains('accordion__button-opened2') && button1.classList.contains('accordion__button-opened1')) {
    button2.classList.remove('accordion__button-opened2');
    button2.classList.add('accordion__button-closed2');
    content2.classList.remove('accordion__close2');
    content2.classList.add('accordion__show2');
  } else {
    if (button2.classList.contains('accordion__button-opened2') && button1.classList.contains('accordion__button-closed1')) {
      button2.classList.remove('accordion__button-opened2');
      button2.classList.add('accordion__button-closed2');
      content2.classList.remove('accordion__close2');
      content2.classList.add('accordion__show2');
      button1.classList.remove('accordion__button-closed1');
      button1.classList.add('accordion__button-opened1');
      content1.classList.remove('accordion__show1');
      content1.classList.add('accordion__close1');
    } else {
      button2.classList.remove('accordion__button-closed2');
      button2.classList.add('accordion__button-opened2');
      content2.classList.remove('accordion__show2');
      content2.classList.add('accordion__close2');
    }
  }
});

// маска для формы
window.addEventListener('DOMContentLoaded', function () {
  var keyCode;

  function mask(event) {
    // eslint-disable-next-line no-unused-expressions
    event.keyCode && (keyCode = event.keyCode);
    // eslint-disable-next-line no-invalid-this
    var pos = this.selectionStart;
    if (pos < 3) {
      event.preventDefault();
    }

    var matrix = '+7(___) ___ ____';
    var i = 0;
    var def = matrix.replace(/\D/g, '');
    // eslint-disable-next-line no-invalid-this
    var val = this.value.replace(/\D/g, '');
    var newValue = matrix.replace(/[_\d]/g, function (a) {
      return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
    });
    i = newValue.indexOf('_');
    if (i !== -1) {
      // eslint-disable-next-line no-unused-expressions
      i < 4 && (i = 3);
      newValue = newValue.slice(0, i);
    }
    // eslint-disable-next-line no-invalid-this
    var reg = matrix.substr(0, this.value.length).replace(/_+/g, function (a) {
      return '\\d{0,' + a.length + '}';
    }).replace(/[+()]/g, '\\$&');
    reg = new RegExp('^' + reg + '$');
    // eslint-disable-next-line no-invalid-this
    if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) {
      // eslint-disable-next-line no-invalid-this
      this.value = newValue;
    }

    // eslint-disable-next-line no-invalid-this
    if (event.type === 'blur' && this.value.length < 5) {
      // eslint-disable-next-line no-invalid-this
      this.value = '';
    }
  }

  var input = document.querySelector('#tel');
  var inputPhone = document.querySelector('#modal-tel');

  input.addEventListener('input', mask, false);
  input.addEventListener('focus', mask, false);
  input.addEventListener('blur', mask, false);
  input.addEventListener('keydown', mask, false);

  inputPhone.addEventListener('input', mask, false);
  inputPhone.addEventListener('focus', mask, false);
  inputPhone.addEventListener('blur', mask, false);
  inputPhone.addEventListener('keydown', mask, false);
});


// localStorage для модального окна

var form = document.querySelector('.modal form');

if (window.localStorage) {
  var elements = form.querySelectorAll('[name]');
  var elLength = elements.length;
  var i;

  for (i = 0; i < elLength; i++) {
    (function (element) {
      var name = element.getAttribute('name');

      element.value = localStorage.getItem(name) || '';

      element.onkeyup = function () {
        var value = element.value;
        if (!value) {
          value = '';
        }

        localStorage.setItem(name, value);
      };
    })(elements[i]);
  }
}


// маска для формы
// window.addEventListener('DOMContentLoaded', function () {
//   function setCursorPosition(pos, elem) {
//     elem.focus();
//     if (elem.setSelectionRange) {
//       elem.setSelectionRange(pos, pos);
//     } else if (elem.createTextRange) {
//       var range = elem.createTextRange();
//       range.collapse(true);
//       range.moveEnd('character', pos);
//       range.moveStart('character', pos);
//       range.select();
//     }
//   }
//
//   function mask(event) {
//     var matrix = '+7 (___) ___ ____';
//     var i = 0;
//     var def = matrix.replace(/\D/g, '');
//     // eslint-disable-next-line no-invalid-this
//     var val = this.value.replace(/\D/g, '');
//     if (def.length >= val.length) {
//       val = def;
//     }
//     // eslint-disable-next-line no-invalid-this
//     this.value = matrix.replace(/./g, function (a) {
//       // eslint-disable-next-line no-nested-ternary
//       return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
//     });
//     if (event.type === 'blur') {
//       // eslint-disable-next-line no-invalid-this
//       if (this.value.length === 2) {
//         // eslint-disable-next-line no-invalid-this
//         this.value = '';
//       }
//     } else {
//       // eslint-disable-next-line no-invalid-this
//       setCursorPosition(this.value.length, this);
//     }
//   }
//
//   var inputTel = document.querySelector('#tel');
//   var inputPhone = document.querySelector('#phone');
//   inputTel.addEventListener('input', mask, false);
//   inputTel.addEventListener('focus', mask, false);
//   inputTel.addEventListener('blur', mask, false);
//
//   inputPhone.addEventListener('input', mask, false);
//
//   inputPhone.addEventListener('focus', mask, false);
//   inputPhone.addEventListener('blur', mask, false);
// });
