'use strict'

let buttonStart = document.getElementById('start'),
    buttonCansel = document.getElementById('cancel'),
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

      
      start: function() {
        
        //Месячный доход        
        this.budget = parseInt(salaryAmount.value);
        console.log('this ', this);
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
          incomePeriodValue.value = e.target.value * appData.budget;
        })
      },

      //Функция клонирует div.income-items по нажатию кнопки "+"
      addIncomesBlock: function() {
        let cloneIncomeItem = incomeItemTemplete.cloneNode(true);
        
        this.before(cloneIncomeItem);

        if (incomeItems.length === 3) {
          this.style.display = 'none';
        }
      }, 

    




//Обработчик кнопки "Расчитать"
buttonStart.addEventListener('click', function(e) {
  if (salaryAmount.value !== '') {
    appData.start();
    console.log('this ', this);

    document.querySelectorAll('input[type = text]').forEach(item => item.disabled = true);
    buttonIncomeAdd.disabled = true;
    buttonExpensesAdd.disabled = true;
    depositCheck.disabled = true;
    periodSelect.disabled = true;
    buttonStart.style.display = 'none'; 
    buttonCansel.style.display = 'block'; 
  }
  else {
    return alert ('Поле Месячный доход не должен быть пустым!');
  }
});

//Обработчик события "Сбросить"
buttonCansel.addEventListener('click', function() {

  document.querySelectorAll('input[type = text]').forEach(item => {
    item.value = '';
    item.disabled = false;
  });

  buttonCansel.style.display = 'none'; 
  buttonStart.style.display = 'block'; 

  Object.values(incomeItems).slice(1).forEach(item => item.remove());
  buttonIncomeAdd.style.display = 'block';

  Object.values(expensesItems).slice(1).forEach(item => item.remove());
  buttonExpensesAdd.style.display = 'block';

  buttonIncomeAdd.disabled = false;
  buttonExpensesAdd.disabled = false;
})

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
    if ((this.value !== '') && (!isStr(this.value))) {
      alert ('В данном поле допустимы только буквы русского алфавита!');
      this.value = this.value.replace(/[^а-яА-Я ,]+$/g, '')
    }
  })
})

inputAmount.forEach(item => {
  item.addEventListener('input', function(e) {
    if ((this.value !== '') && (!isNumber(this.value))) {
      alert ('В данном поле допустимы только цифры!');
      this.value = this.value.replace(/[^\d]+$/g, '')
    }
  })
})

