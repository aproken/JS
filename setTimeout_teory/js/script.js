'use strict'

let animateId,
   count = 0,
   drop = document.querySelector('.drop'),
   startBtn = document.querySelector("#start"),
   stopBtn = document.querySelector("#stop");

function render() {
  count++;
  
  if (count < 350) {
    drop.style.top = count + 'px';
    console.log(count);
  }
  else {
    cancelAnimationFrame(animateId);
  }
  animateId = requestAnimationFrame(render);
}

startBtn.addEventListener("click", function() {
  animateId = requestAnimationFrame(render);
});

stopBtn.addEventListener("click", function() {
  cancelAnimationFrame(animateId);
});