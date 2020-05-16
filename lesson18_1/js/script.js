'use strict'

window.addEventListener('DOMContentLoaded', () => {

  const timeDay = document.getElementById('time-day'),
      dayWeek = document.getElementById('day-week'),
      timeNow = document.getElementById('time-now'),
      dayRemaining = document.getElementById('day-remaining');
  
  let timeId;

  function getTime() {
    const hourNow = new Date().getHours(),
    dayNow = new Date().getDay(),
    dateStop = new Date(new Date().getFullYear() + 1, 0, 1).getTime(),
    dateNow = new Date().getTime(),
    timeRemaining = (dateStop - dateNow) / 1000,
    days = [
      'Воскресенье',
      'Понедельник',
      'Вторник',
      'Среда',
      'Четверг',
      'Пятница',
      'Суббота'
    ];

  // Отрисовка
  if ((hourNow > 4) && (hourNow < 9)) {
    timeDay.textContent = 'Доброе утро';
  }
  else if ((hourNow > 9) && (hourNow < 16)) {
    timeDay.textContent = 'Добрый день';
  }
  else if ((hourNow > 16) && (hourNow < 22)) {
    timeDay.textContent = 'Добрый вечер';
  }
  else {
    timeDay.textContent = 'Доброй ночи';
  }

  dayWeek.textContent = days[dayNow];

  timeNow.textContent = new Date().toLocaleTimeString('ru', {hour12: true});

  dayRemaining.textContent = Math.floor(timeRemaining / 60 / 60 / 24);
  }

  getTime(new Date().getFullYear() + 1, 0, 1);
  timeId = setInterval(getTime, 1000);
  
})  

