'use strict'

let animateId,
   count = 0,
   drop = document.querySelector('.drop'),
   playBtn = document.getElementById("play"),
   resetBtn = document.getElementById("reset");

function render() {
  count++;
  
  if (count < 1000) {
    drop.style.top = count + 'px';
    console.log(count);
  }
  else {
    cancelAnimationFrame(animateId);
  }
  animateId = requestAnimationFrame(render);
}

playBtn.addEventListener('click', function() {
  
  if (animateId) {
    cancelAnimationFrame(animateId);
    animateId = null;
  } else {
    animateId = requestAnimationFrame(render);
  }
});

resetBtn.addEventListener('click', function() {
  count = 0;
  drop.style.top = count + 'px';
});