'use strict'

let week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    date = new Date();
    
function getWeekDay(date) {
  return week[date.getDay()];
}

week.forEach(function(element, index) {
  let day = document.createElement('p');
  day.innerHTML = element;
  document.body.append(day);
  if ((index === 0) || (index === 6)) {
    day.className = 'holiday__day';
  }
  if (element === getWeekDay(date)) {
    day.className = 'now__day';
  }
});