'use strict';

let money = start(),
    income = 'Играю на фортепиано',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, транспорт, квартплата, еда, здоровье')
        .toLowerCase()
        .split(', '),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses = getExpensesUser(2),
    expensesAmount = getExpensesMonth(expenses),
    mission = 100000,
    period = 6,
    accumulatedMonth = getAccumulatedMonth(money, expensesAmount),
    budgetDay = Math.floor(accumulatedMonth / 30);

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
    
//Функция
function start() {
  let m;
  do {
    m = parseInt(prompt('Ваш месячный доход?', 60000));
  } 
  while (!isNumber(m));
  return m;
};  

//Функция оценивает уровень дохода пользователя
function getStatusIncome() {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  } else if ((budgetDay < 1200) && (budgetDay > 600)) {
    return 'У вас средний уровень дохода';
  } else if ((budgetDay <= 600) && (budgetDay >=0 )) {
    return 'К сожалению у вас уровень дохода ниже среднего';
  } else {
    return 'Что то пошло не так';
  }
};

//Функция спрашивает у пользователя обязательные разсходы
function getExpensesUser(count) {
  let obj = {},
      index = 0,
      key;
  while (index != count) {
    key = prompt('Введите обязательную статью расходов?');
    while (!isNumber(obj[key])) {
      obj[key] = (parseInt(prompt('Во сколько это обойдется?')));
    }
    index++;
  }
  return Object.values(obj);
};

//Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(expenses) {
  return expenses.reduce((accume, current) => accume + current);
}

//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(income, expense) {
  return income - expense;
};

//Подсчитывает за какой период будет достигнута цель
function getTargetMonth(amount, expenses) {
  if (amount / expenses > 0) {
    return 'Цель будет достигнута за ' + Math.ceil(amount / expenses) + ' месяцев';
  } else {
    return 'Цель не будет достигнута';
  }
  
};

//Функция показывает значение переменной и ее тип
function showTypeOf(data) {
  console.log(data, typeof(data));
}; 

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('Накопления за месяц ' + accumulatedMonth);
console.log(addExpenses);
console.log(getTargetMonth(mission, accumulatedMonth));
console.log('Дневной бюджет равен ' + budgetDay);
console.log(getStatusIncome());