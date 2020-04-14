'use strict'

let arr = ['234526', '10954', '4532', '9901132','2009','43214', '675437890'];

function getSameElement(arr) {

  return arr.filter(function(str) {
    if ((str.slice('')[0] === '2') || (str.slice('')[0] === '4')) {
      return str;
    }
  })
}

function outSimpleNum(n, m) {
  let arr = [];

  for (let i = n; i <= m; i ++) {
    if (i > 1) {
      arr.push(i);
    }
  }

  return arr.filter(function(item) {
    for (let i = 2; i < (item - 1); i ++) {
      if ((item % i) === 0) {
        return false;
      }
    }
    return true;
  })
}

console.log(outSimpleNum(1, 100));
console.log(getSameElement(arr));