'use strict'

// const printNumbers = function(from, to) {
//   let current = from;
  
//   let timerId = setInterval(() => {
//     alert(current);
//     if (current === to) {
//       clearInterval(timerId);
//       alert('stop');
//     }
//     current++;
//     }, 1000);
// }

const printNumbers = function(from, to) {
  let current = from;

  setTimeout(function go() {
    alert(current);
    if (current < to) {
      setTimeout(go, 1000);
    }
    current++;
  }, 1000)
}

printNumbers(5, 10);