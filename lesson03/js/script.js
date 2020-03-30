let money = prompt('Ваш месячный доход?', 60000),
    income = 'Играю на фортепиано',
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, транспорт, квартплата, еда, здоровье'),
    deposit = confirm('Есть ли у вас депозит в банке?'),
    expenses1 = prompt('Введите обязательную статью расходов?', 'Интеренет'),
    amount1 = prompt('Во сколько это обойдется?', '3500'),
    expenses2 = prompt('Введите обязательную статью расходов?', 'Мобильная связь'),
    amount2 = prompt('Во сколько это обойдется?', '500'),
    budgetMonth = money - (amount1 + amount2),
    mission = 100000,
    period = 6,
    budgetDay = Math.floor(budgetMonth / 30);

console.log(addExpenses.length);

addExpenses = addExpenses.toLowerCase().split(', ');

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log('Бюджет на месяц равен: ', budgetMonth);
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission  + ' рублей/долларов/гривен/юани');
console.log(addExpenses);
console.log('Бюджет на месяц равен ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');
console.log('Дневной бюджет равен ' + budgetDay);

if (budgetDay >= 1200) {
  console.log('У вас высокий уровень дохода');
} else if ((budgetDay < 1200) && (budgetDay > 600)) {
  console.log('У вас средний уровень дохода');
} else if ((budgetDay <= 600) && (budgetDay >=0 )) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else {
  console.log('Что то пошло не так');
}