let money = 30000,
    income = 'Играю на фортепиано',
    addExpenses = 'Бананы, мороженое, молоко, печеньки',
    deposit = true,
    mission = 100000,
    period = 6,
    budgetDay = money / 30;

console.log(addExpenses.length);

addExpenses = addExpenses.toLowerCase().split(', ');

console.log(typeof(money));
console.log(typeof(income));
console.log(typeof(deposit));
console.log('Период равен ' + period + ' месяцев');
console.log('Цель заработать ' + mission  + ' рублей/долларов/гривен/юани');
console.log(addExpenses);
console.log('Дневной бюджет равен ' + budgetDay);