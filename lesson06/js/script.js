'use strict';

//Функция генерации случайного числа в заданном диапазоне
const getRandomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
} 

//Функция проверки на число
const isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

//Угадай число
function createGame() {
  let gameNumber = getRandomNumber(1, 100);
  console.log(gameNumber);

  const checkNumber = function() {
    
    const getUserNumber = function() { 
      let userNumber = prompt('Угадай число от 1 до 100', '55');
      
      if (userNumber != null) {
        userNumber = parseInt(userNumber);
        if (!isNumber(userNumber)) {
          alert('Введите число!');
        }
        else return userNumber;
      }
      else {
        alert('Пока! Может в следующий раз...');
        return;
      }
    }

    let n = getUserNumber();
    
    if (n > gameNumber) {
      alert('Загаданное число меньше');
      return checkNumber();
    }
    else if (n < gameNumber) {
      alert('Загаданное число больше');
      return checkNumber();
    }
    else if (n === gameNumber) {
      alert('Угадал!');
    }
  }
  
  return checkNumber();
}

createGame();
