'use strict'

function getResult(x,y){
  let result;
  result = x**y;
  
  return result.toString()
               .split('')
               .map(item => parseInt(item))
               .reduce((sum, item) => sum + item);
}

console.log(getResult(4, 8));