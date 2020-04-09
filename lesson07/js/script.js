'use strict';

let money = start(),
    appData = {
    budget: money,
    //дополнительный доход
    income: {}, 
    //перечисление дополнительных доходов
    addIncome: [],
    //дополнительные расходы
    expenses: {},
    //массив с возможными расходами
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: 6,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    asking: function() {
      appData.addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'Интернет, транспорт, квартплата, еда, здоровье')
                            .toLowerCase()
                            .split(',')
                            .map(item => item.trim())
                            .map(item => ucFirst(item));
      appData.deposit = confirm('Есть ли у вас депозит в банке?');
      appData.expenses = appData.getExpensesUser(2);
    },

    //Функция спрашивает у пользователя обязательные разсходы
    getExpensesUser: function(count) {
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
      return obj;
    },

    //Функция возвращает сумму всех обязательных расходов за месяц
    getExpensesMonth: function(expenses) {
      return expenses.reduce((accume, current) => accume + current);
    },

    //Функция возвращает Накопления за месяц (Доходы минус расходы)
    getBudget: function() {
      appData.budgetMonth = Math.floor(appData.budget - appData.expensesMonth);
      appData.budgetDay = Math.floor(appData.budgetMonth / 30);
    },

    //Подсчитывает за какой период будет достигнута цель
    getTargetMonth: function() {
      if (appData.mission / appData.expensesMonth > 0) {
        return 'Цель будет достигнута за ' + Math.ceil(appData.mission / appData.expensesMonth) + ' месяцев';
      } else {
        return 'Цель не будет достигнута';
      }
    },

    //Функция оценивает уровень дохода пользователя
    getStatusIncome: function() {
      if (appData.budgetDay >= 1200) {
        return 'У вас высокий уровень дохода';
      } else if ((appData.budgetDay < 1200) && (appData.budgetDay > 600)) {
        return 'У вас средний уровень дохода';
      } else if ((appData.budgetDay <= 600) && (appData.budgetDay >=0 )) {
        return 'К сожалению у вас уровень дохода ниже среднего';
      } else {
        return 'Что то пошло не так';
      }
    }
}

appData.asking();
appData.expensesMonth = appData.getExpensesMonth(Object.values(appData.expenses));
appData.getBudget();
appData.getTargetMonth();


function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

//Функция делает первую букву заглавной
function ucFirst(str) {
  if (str === '') {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}
    
//Функция
function start() {
  let m;
  do {
    m = parseInt(prompt('Ваш месячный доход?', 60000));
  } 
  while (!isNumber(m) || m === '' || m === null);
  return m;
};  

console.log('Наша программа включает в себя данные: ');
for (let key in appData) {
  console.log( "Ключ: " + key + " значение: " + appData[key] );
}
console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getTargetMonth());
console.log(appData.getStatusIncome());
