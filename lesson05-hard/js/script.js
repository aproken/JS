'use strict'

let arr = ['234526', '10954', '4532', '9901132','2009','43214', '675437890'];

function getSameElement(arr) {

  return arr.filter(function(str, index) {
    if ((str.slice('')[0] === '2') || (str.slice('')[0] === '4')) {
      return str;
    }
  })
}

console.log(getSameElement(arr));