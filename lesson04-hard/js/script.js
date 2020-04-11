'use strict'

let str = 'Внимательно изучите шпаргалку, представленную выше, а затем, чтобы попрактиковаться, решите задачи, предложенные в данной главе. Так вы получите необходимый опыт в правильном использовании методов массива.';

function getArgument(n) {
  if (typeof(n) != 'string') {
    console.log('Введена не строка')
    return;
  } 
  
  n = n.trim();

  if (n.length > 30) {
    return n.slice(0, 31) + '...';
  }
}

console.log(getArgument(str))