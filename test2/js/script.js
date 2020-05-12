'use strict'

const a = document.getElementById('a'),
      b = document.getElementById('b'),
      sum = document.getElementById('sum'),
      mult = document.getElementById('mult'),
      res = document.getElementById('res');

const calculator = {
  result: 0,
  sum: function() {
    this.result = parseInt(a.value) + parseInt(b.value);
    this.show();
  },
  mult: function() {
    this.result = parseInt(a.value) * parseInt(b.value);
    this.show();
  },
  show: function() {
    res.value = this.result;
  }
}

sum.addEventListener('click', calculator.sum.bind(calculator));
mult.addEventListener('click', calculator.mult.bind(calculator));