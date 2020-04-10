'use strict'

let week = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    date = new Date(),
    p1 = document.createElement('p'),
    p2 = document.createElement('p'),
    p3 = document.createElement('p'),
    p4 = document.createElement('p'),
    p5 = document.createElement('p'),
    p6 = document.createElement('p'),
    p0 = document.createElement('p');
    
function getWeekDay(date) {
  return week[date.getDay()];
}

p0.className = 'holiday__day';
p0.innerHTML = week[0];
p1.innerHTML = week[1];
p2.innerHTML = week[2];
p3.innerHTML = week[3];
p4.innerHTML = week[4];
p5.innerHTML = week[5];
p6.className = 'holiday__day';
p6.innerHTML = week[6];
// pBold.className = "now__day";
// pBold.innerHTML = getWeekDay(date);

document.body.append(p0);
document.body.append(p1);
document.body.append(p2);
document.body.append(p3);
document.body.append(p4);
document.body.append(p5);
document.body.append(p6);
