'use strict';

let money = prompt('Ваш месячный доход?', 60000),
    income = 'Играю на фортепиано',
    addExpenses = 
      prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, транспорт, квартплата, еда, здоровье')
        .toLowerCase()
        .split(', '),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?', 'Интернет'),
    amount1 = parseInt(prompt('Во сколько это обойдется?', '3500')),
    expenses2 = prompt('Введите обязательную статью расходов?', 'Мобильная связь'),
    amount2 = parseInt(prompt('Во сколько это обойдется?', '500')),
    mission = 100000,
    period = 6,
    accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth([amount1, amount2])),
    budgetDay = Math.floor(accumulatedMonth / 30);

function showTypeOf(data) {
  console.log(data, typeof(data));
};   

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

//Функция возвращает сумму всех обязательных расходов за месяц
function getExpensesMonth(expenses) {
  return expenses.reduce((accume, current) => accume + current);
};

//Функция возвращает Накопления за месяц (Доходы минус расходы)
function getAccumulatedMonth(income, expense) {
  return income - expense;
};

//Подсчитывает за какой период будет достигнута цель
function getTargetMonth(amount, expenses) {
  return amount / expenses;
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
console.log('Накопления за месяц ' + getExpensesMonth([amount1, amount2]));
console.log(addExpenses);
console.log(getTargetMonth('Цель будет достигнута за ' + mission, accumulatedMonth + ' месяцев'));
console.log('Дневной бюджет равен ' + budgetDay);
console.log(getStatusIncome());