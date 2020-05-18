'use strict';

window.addEventListener('DOMContentLoaded', () => {

let timeId;

  const addZero = (item) => {
    if (Math.floor(item / 10) === 0) {
      return '0' + item;
    } else { return item; }
  }

  //Таймер
  const countTimer = (deadline) => {
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

    const updateTimer = () => {
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
      updateTimer();
      timeId = setInterval(updateTimer, 1000);
    }
  
  countTimer('19 may 2020');

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      btnClose = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

      const menuHandler = () => {
        if (menu.style.transform !== 'none') {
          menu.style.transform = 'none';
        }
        else {
          menu.style.transform = 'translateX(-100%)';
        }
      }

    btnMenu.addEventListener('click', menuHandler);

    btnClose.addEventListener('click', menuHandler);
  
    menuItems.forEach((item) => {
      item.addEventListener('click', menuHandler)
    })
  }
  toggleMenu();
});
