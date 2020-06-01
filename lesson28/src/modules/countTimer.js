//Таймер

let timeId;

const addZero = (item) => {
  if (Math.floor(item / 10) === 0) {
    return '0' + item;
  } else { return item.toString(); }
}

const countTimer = () => {
  const timerHours = document.getElementById('timer-hours'),
    timerMinutes = document.getElementById('timer-minutes'),
    timerSeconds = document.getElementById('timer-seconds');

  function getTimeRemaining() {
    const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate()+1);
          tomorrow.setHours(0,0,0);

    const dateNow = new Date().getTime(),
          timeRemaining = (tomorrow - dateNow) / 1000,
      
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
    let hours = addZero(timer.hours);
    if (hours === '24') {
      hours = '00';
    }
    timerHours.textContent = hours;
    timerMinutes.textContent = addZero(timer.minutes);
    timerSeconds.textContent = addZero(timer.seconds);
  }
  updateTimer();
  timeId = setInterval(updateTimer, 1000);
}

export default countTimer;