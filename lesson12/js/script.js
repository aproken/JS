'use strict'

let buttonStart = document.getElementById('start'),
    buttonPlus = document.getElementsByTagName('button'),
    buttonIncomeAdd = buttonPlus[0],
    buttonExpensesAdd = buttonPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    resultTotal = document.getElementsByClassName('.result-total'),
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    //Месячный доход
    salaryAmount = document.querySelector('.salary-amount'),

    //Поле div.income Дополнительный доход
    incomeTitle = document.querySelector('.income-title'),
    incomeItems = document.getElementsByClassName('income-items'),
    incomeItemTemplete = incomeItems[0].cloneNode(true),

    //Поле Возможный расход
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),

    //Поле div.expeneses Обязательные расходы
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.getElementsByClassName('expenses-items'),
    expensesItemTemplete = expensesItems[0].cloneNode(true),

    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount');

let appData = {
      budget: 0,
      //дополнительный доход
      income: {}, 
      //Обязательные расходы
      expenses: {},
      //Возможные доходы
      addIncome: [],
      //Возможные расходы
      addExpenses: [],
      //Все про депозит
      deposit: false,
      percentDeposit: 0,
      moneyDeposite: 0,
      //Период
      period: 6,
      //Дневной бюджет
      budgetDay: 0,
      //Доходы за месяц
      incomeMonth: 0,
      //Расходы за месяц
      expensesMonth: 0,
      //Бюджет на месяц после вычета расходов
      budgetMonth: 0,

      //Вызывается по клику "Расчитать"
      start: function() {
        
        //Месячный доход        
        this.budget = parseInt(salaryAmount.value);

        this.getIncomes();
        this.getExpenses();
        this.getAddExpenses();
        this.getAddIncome();
        this.getExpensesMonth(Object.values(this.expenses));
        this.getIncomeMonth(Object.values(this.income));
        this.getBudget();
        this.showResult();
        consolePrint();
      },

      //Вывод результатов вычислений в правую часть
      showResult: function() {
        budgetMonthValue.value = this.budgetMonth;
        budgetDayValue.value = this.budgetDay;
        expensesMonthValue.value = this.expensesMonth;
        additionalExpensesValue.value = this.addExpenses
        additionalIncomeValue.value = this.addIncome;
        targetMonthValue.value = this.getTargetMonth();
        incomePeriodValue.value = this.calcSaveMoney();

        periodSelect.addEventListener('input', function(e) {
          incomePeriodValue.value = e.target.value * this.budget;
        })
      },

      //Функция клонирует div.income-items по нажатию кнопки "+"
      addIncomesBlock: function() {
        let cloneIncomeItem = incomeItemTemplete.cloneNode(true);
        
        buttonIncomeAdd.before(cloneIncomeItem);

        if (incomeItems.length === 3) {
          buttonIncomeAdd.style.display = 'none';
        }
      }, 

      //Функция выбирает из коллекции значения и заносит их в массив, далее map выбирает только children: input.expenses-title и input.expenses-amount
      getIncomes: function() {
        let items = Object.values(incomeItems)
                        .map(item => [item.children[0].value, parseInt(item.children[1].value)])
                        .filter((item, index) => {if(item[index] !== '') {
                          return item[index]} 
                        });
        
        appData.income = Object.fromEntries(items);
      },
      
      //Функция клонирует div.expenses-items по нажатию кнопки "+"
      addExpensesBlock: function() {
        let cloneExpensesItem = expensesItemTemplete.cloneNode(true);
        
        buttonExpensesAdd.before(cloneExpensesItem);

        if (expensesItems.length === 3) {
          buttonExpensesAdd.style.display = 'none';
        }
      },

      //Функция выбирает из коллекции значения и заносит их в массив, далее map выбирает только children: input.expenses-title и input.expenses-amount
      getExpenses: function() {
        let items = Object.values(expensesItems)
                        .map(item => [item.children[0].value, parseInt(item.children[1].value)])
                        .filter((item, index) => {if(item[index] !== '') {return item[index]} });
        
        this.expenses = Object.fromEntries(items);
      },

      //Получить возможные доходы
      getAddIncome: function() {
        if (additionalIncomeItem[0].value !== '') {
          this.addIncome = Object.values(additionalIncomeItem)
                            .map(item => item.value)
                            .map(item => item.trim())
                            .map(item => item.toLowerCase())
                            .map(item => ucFirst(item))
                            .join(', ');
        }
        else {
          return this.addIncome = 'В этом месяце нет';
        }
      },
      
      //Получить возможные расходы
      getAddExpenses: function() {

        if (additionalExpensesItem.value !== '') {
          this.addExpenses = additionalExpensesItem.value
                              .toLowerCase()
                              .split(',')
                              .map(item => item.trim())
                              .map(item => ucFirst(item))
                              .join(', ');
        }
        else {
          return this.addExpenses = 0;
        }
      },

      //Функция возвращает сумму всех обязательных расходов за месяц
      getExpensesMonth: function(expenses) {
        if (expenses.length !== 0) {
          thisa.expensesMonth = expenses.reduce((accume, current) => accume + current);
        }
        else {
          return this.expensesMonth = 0;
        }
      },

       //Функция возвращает сумму всех возможных доходов за месяц
       getIncomeMonth: function(income) {
        if (income.length !== 0) {
          this.incomeMonth = income.reduce((accume, current) => accume + current);
        }
      },

      //Функция возвращает Накопления за месяц (Доходы минус расходы)
      getBudget: function() {
        this.budgetMonth = Math.floor((this.budget + this.incomeMonth) - this.expensesMonth);
        this.budgetDay = Math.floor(this.budgetMonth / 30);
      },

      //Подсчитывает за какой период будет достигнута цель
      getTargetMonth: function() {
        if (targetAmount.value / this.budgetMonth > 0) {
          return Math.ceil(targetAmount.value / this.budgetMonth) + ' месяцев';
        } else {
          return 'Цель - сумма накоплений не выбрана';
        }
      }, // Конец функция getTargetMonth

      //Функция оценивает уровень дохода пользователя
      getStatusIncome: function() {
        if (this.budgetDay >= 1200) {
          return 'У вас высокий уровень дохода';
        } else if ((this.budgetDay < 1200) && (this.budgetDay > 600)) {
          return 'У вас средний уровень дохода';
        } else if ((appData.budgetDay <= 600) && (this.budgetDay >=0 )) {
          return 'К сожалению у вас уровень дохода ниже среднего';
        } else {
          return 'Что то пошло не так';
        }
      }, // Конец функция getStatusIncome

      //Функция выдвет информацию сколько можно накопить за опрделенный период
      calcSaveMoney: function() {
        return this.budgetMonth * periodSelect.value;
      }

  };   // Конец appData.Object




//Обработчик кнопки "Расчитать"
buttonStart.addEventListener('click', function(e) {
  if (salaryAmount.value !== '') {
    appData.start();
  }
  else {
    return alert ('Поле Месячный доход не должен быть пустым!');
  }
});

//Обработчик кнопки "Дополнительный доход Плюс"
buttonIncomeAdd.addEventListener('click', appData.addIncomesBlock);

//Обработчик кнопки "Обязательные расходы Плюс"
buttonExpensesAdd.addEventListener('click', appData.addExpensesBlock);

//Обработчик для отслеживания периода
periodSelect.addEventListener('input', function(e) {
  periodAmount.innerText = e.target.value;
})






//Функция проверяет является цифрой
function isNumber(n) {
// return !isNaN(parseFloat(n)) && isFinite(n);
  return Boolean(n.match(/^\d+$/)
  )
}

//Функция проверяет является буквой или нет
function isStr(str) {
let reg = /^[а-яА-Я ,]+$/;
return reg.test(str)
}

//Функция делает первую букву заглавной
function ucFirst(str) {
if (str === '') {
return str;
}
return str[0].toUpperCase() + str.slice(1);
}

//Функция вывода на консоль
function consolePrint() {
  console.log('Наша программа включает в себя данные: ');
  for (let key in appData) {
  console.log( "Ключ: " + key + " значение: " + appData[key] );
  }

  console.log('Месячный доход: ' + appData.budget);

  console.log('Дополнительный доход: ');
  for (let key in appData.income) {
    console.log( "Ключ: " + key + " значение: " + appData.income[key]);
  }

  console.log('Обязательные расходы: ');
  for (let key in appData.expenses) {
    console.log( "Ключ: " + key + " значение: " + appData.expenses[key]);
  }
  
  console.log(appData.getTargetMonth());
  console.log(appData.getStatusIncome());
}

//Функция валидации полей
let inputName = document.querySelectorAll('input[placeholder = "Наименование"]'),
    inputAmount = document.querySelectorAll('input[placeholder = "Сумма"]');

inputName.forEach(item => {
  item.addEventListener('input', function(e) {
    if ((e.target.value !== '') && (!isStr(e.target.value))) {
      alert ('В данном поле допустимы только буквы русского алфавита!');
      e.target.value = e.target.value.replace(/[^а-яА-Я ,]+$/g, '')
    }
  })
})

inputAmount.forEach(item => {
  item.addEventListener('input', function(e) {
    if ((e.target.value !== '') && (!isNumber(e.target.value))) {
      alert ('В данном поле допустимы только цифры!');
      e.target.value = e.target.value.replace(/[^\d]+$/g, '')
    }
  })
})

