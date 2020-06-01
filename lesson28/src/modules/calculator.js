//Функция проверяет является цифрой
const isNumber = (n) => Boolean(n.match(/^\d+$/));

const calculator = (price = 100) => {

  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');

  const countSum = () => {
    let total = 0,
      countValue = 1,
      dayValue = 1;

    const typeValue = calcType.options[calcType.selectedIndex].value,
      squareValue = parseInt(calcSquare.value);

    if (calcCount.value > 1) {
      countValue += (calcCount.value - 1) / 10;
    }

    if (calcDay.value && calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && calcDay.value < 10) {
      dayValue *= 1.5;
    }
  
    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    } 

    randerSum(totalValue, total);
  }

  calcBlock.addEventListener('change', (e) => {
    const target = e.target;

    if (target.matches('select') || target.matches('input')) {
      countSum();
    }

  })


  //Валидация полей
  const calcNumber = [];

  calcNumber.push(calcSquare, calcCount, calcDay);

  calcNumber.forEach(item => {
    item.addEventListener('input', () => {
    if ((item.value == '') || (!isNumber(item.value))) {
      alert ('В данном поле допустимы только цифры!');
      item.value = item.value.replace(/[^\d]+$/g, '')
    }
    })
  })
  //конец валидация полей

  //Эффект анимации 

  const randerSum = (elem, newValue) => {

    let currentValue = parseInt(elem.textContent),
        stepCount = 15,
        timer;
    
    const inner = () => {
      let range = newValue - currentValue,
          step = Math.floor(range / stepCount);

      currentValue = currentValue + step;
      stepCount--;

      elem.textContent = currentValue;
      if (currentValue == newValue) {
        clearInterval(timer);
      }
    }
      
    timer = setInterval(inner, 10);
  }
}

export default calculator;