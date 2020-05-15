'use strict'

let drop = document.querySelector('.drop'),
      count = 0;

let dropDown = function() {
  count++;
  
  if (count < 350) {
    drop.style.top = count + 'px';
    setTimeout(dropDown, 10);
    console.log(count);
  }
  else {
    clearTimeout(timeId);
  }
}

let timeId = setTimeout(dropDown, 10);
