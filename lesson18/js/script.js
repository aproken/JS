'use strict';

window.addEventListener('DOMContentLoaded', () => {

let timeId;

  function addZero(item) {
    if (Math.floor(item / 10) === 0) {
      return '0' + item;
    } else { return item; }
  }

  //Таймер
  function countTimer(deadline) {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor((timeRemaining / 60) / 60);
        //day = Math.floor(timeRemaining / 60 / 60 / 24);
      
        return {
          hours,
          minutes,
          seconds
        };
    }

    const timer = getTimeRemaining();

    if ((timer.hours <= 0) && 
        (timer.minutes <= 0) && 
        (timer.seconds <= 0)) {
      
          clearInterval(timeId);
        timerHours.textContent = '00';
        timerMinutes.textContent = '00';
        timerSeconds.textContent = '00';
    }
    else {
      timerHours.textContent = addZero(timer.hours);
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);
    }
    
  }
  
  countTimer('10 may 2020');
  timeId = setInterval(countTimer, 1000, '10 may 2020');

});
