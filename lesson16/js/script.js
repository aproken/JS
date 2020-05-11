'use strict'

const buttonStart = document.getElementById('start'),
    buttonCansel = document.getElementById('cancel'),
    buttonPlus = document.getElementsByTagName('button'),
    buttonIncomeAdd = buttonPlus[0],
    buttonExpensesAdd = buttonPlus[1],
    depositCheck = document.querySelector('#deposit-check'),
    depositBank = document.querySelector('.deposit-bank'),
    depositAmount = document.querySelector('.deposit-amount'),
    depositPercent = document.querySelector('.deposit-percent'),
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

class AppData {
  constructor() {
    this.budget = 0;
    //дополнительный доход
    this.income = {}; 
    //Обязательные расходы
    this.expenses = {};
    //Возможные доходы
    this.addIncome = [];
    //Возможные расходы
    this.addExpenses = [];
    //Все про депозит
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposite = 0;
    //Период
    this.period = 6;
    //Дневной бюджет
    this.budgetDay = 0;
    //Доходы за месяц
    this.incomeMonth = 0;
    //Расходы за месяц
    this.expensesMonth = 0;
    //Бюджет на месяц после вычета расходов
    this.budgetMonth = 0; 
  }

  //Вызывается по клику "Расчитать"
  start() {
          
    //Месячный доход        
    this.budget = parseInt(salaryAmount.value);
    console.log('this ', this);
    this.getIncomes();
    this.getExpenses();
    this.getAddExpenses();
    this.getAddIncome();
    this.getExpensesMonth(Object.values(this.expenses));
    this.getIncomeMonth(Object.values(this.income));
    this.getInfoDeposit();
    this.getBudget();
    this.showResult();
  }

  //Вывод результатов вычислений в правую часть
  showResult() {
    let self = this;

    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses
    additionalIncomeValue.value = this.addIncome;
    targetMonthValue.value = this.getTargetMonth();
    incomePeriodValue.value = this.calcSaveMoney();

    periodSelect.addEventListener('input', (e) => {
      incomePeriodValue.value = e.target.value * self.budget;
    })
  }

  //Функция клонирует div.income-items по нажатию кнопки "+"
  addIncomesBlock() {

    const cloneIncomeItem = incomeItemTemplete.cloneNode(true);
    
    this.before(cloneIncomeItem);

    if (incomeItems.length === 3) {
      this.style.display = 'none';
    }

  }

  //Функция выбирает из коллекции значения и заносит их в массив, далее map выбирает только children: input.expenses-title и input.expenses-amount
  getIncomes() {

    const items = Object.values(incomeItems)
                    .map(item => [item.children[0].value, parseInt(item.children[1].value)])
                    .filter((item, index) => {if(item[index] !== '') {
                      return item[index]} 
                    });
                    
    this.income = Object.fromEntries(items);

  }

  //Функция клонирует div.expenses-items по нажатию кнопки "+"
  addExpensesBlock() {

    const cloneExpensesItem = expensesItemTemplete.cloneNode(true);
    
    this.before(cloneExpensesItem);

    if (expensesItems.length === 3) {
      this.style.display = 'none';
    }

  }

  //Функция выбирает из коллекции значения и заносит их в массив, далее map выбирает только children: input.expenses-title и input.expenses-amount
  getExpenses() {

    const items = Object.values(expensesItems)
                    .map(item => [item.children[0].value, parseInt(item.children[1].value)])
                    .filter((item, index) => {if(item[index] !== '') {return item[index]} });
    
    this.expenses = Object.fromEntries(items);

  }

  //Получить возможные доходы
  getAddIncome() {

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

  }

  //Получить возможные расходы
  getAddExpenses() {

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

  }

  //Функция возвращает сумму всех обязательных расходов за месяц
  getExpensesMonth(expenses) {

    if (expenses.length !== 0) {
      this.expensesMonth = expenses.reduce((accume, current) => accume + current);
    }
    else {
      return this.expensesMonth = 0;
    }

  }

  //Функция возвращает сумму всех возможных доходов за месяц
  getIncomeMonth(income) {

    if (income.length !== 0) {
      this.incomeMonth = income.reduce((accume, current) => accume + current);
    }

  }

  //Функция возвращает Накопления за месяц (Доходы минус расходы)
  getBudget() {
    const monthDeposit = this.moneyDeposite * this.percentDeposit;

    this.budgetMonth = Math.floor((this.budget + this.incomeMonth) - this.expensesMonth + monthDeposit);
    this.budgetDay = Math.floor(this.budgetMonth / 30);

  }

  //Подсчитывает за какой период будет достигнута цель
  getTargetMonth() {

    if (targetAmount.value / this.budgetMonth > 0) {
      return Math.ceil(targetAmount.value / this.budgetMonth) + ' месяцев';
    } else {
      return 'Цель - сумма накоплений не выбрана';
    }

  }

  //Функция оценивает уровень дохода пользователя
  getStatusIncome() {
    if (this.budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    } else if ((this.budgetDay < 1200) && (this.budgetDay > 600)) {
      return 'У вас средний уровень дохода';
    } else if ((this.budgetDay <= 600) && (this.budgetDay >= 0)) {
      return 'К сожалению у вас уровень дохода ниже среднего';
    } else {
      return 'Что то пошло не так';
    }
  }

  //Функция выдвет информацию сколько можно накопить за опрделенный период
  calcSaveMoney() {
    return this.budgetMonth * periodSelect.value;
  }

  //Функция расчета депозита
  getInfoDeposit() {
    if (this.deposit) {
      if (depositBank.value !== 'other') {
        this.percentDeposit = depositPercent.value;
        this.moneyDeposite = depositAmount.value;
      }
      else {
        this.percentDeposit = depositPercent.value / 100;
        this.moneyDeposite = depositAmount.value;
      }
    }
  }

  //Функция выбора банка
  changePersent() {
    const valueSelect = this.value;

    if (valueSelect === 'other') {
      depositPercent.style.display = 'inline-block';
      depositPercent.disabled = false;
    }
    else {
      depositPercent.style.display = 'none';
      depositPercent.value = '';
      depositPercent.disabled = true;
      depositPercent.value = valueSelect;
    }

  }

  //Функция чекбокса Депозит
  depositHandler() {
    if (depositCheck.checked) {
      depositBank.style.display = 'inline-block';
      depositAmount.style.display = 'inline-block';

      this.deposit = true;
      depositBank.addEventListener('change', this.changePersent);
    }
    else {
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';
      
      depositBank.value = '';
      depositAmount.value = '';

      this.deposit = false;
      depositBank.removeEventListener('change', this.changePersent);
    }
  }

  //Функция слушателей
  eventsListeners() {
    let self = this;
    //Обработчик кнопки "Расчитать"
    buttonStart.addEventListener('click', () => {
      // Валидация 
      if (salaryAmount.value === '') {
        return alert ('Поле Месячный доход не должен быть пустым!');
      }
      if (depositCheck.checked && 
         (depositBank.value === 'other' && depositPercent.value === '')) {
          return alert ('Банковская ставка не должна быть пустой!');
      }

      // Расчет при успешной валидации  
      self.start();
      console.log('this ', this);

      document.querySelectorAll('input[type = text]').forEach(item => item.disabled = true);
      buttonIncomeAdd.disabled = true;
      buttonExpensesAdd.disabled = true;
      depositCheck.disabled = true;
      depositBank.disabled = true
      buttonStart.style.display = 'none'; 
      buttonCansel.style.display = 'block'; 

    })

    //Обработчик события "Сбросить"
    buttonCansel.addEventListener('click', () => {

      document.querySelectorAll('input[type = text]').forEach(item => {
        item.value = '';
        item.disabled = false;
      });

      buttonCansel.style.display = 'none'; 
      buttonStart.style.display = 'block'; 

      depositCheck.checked = false;
      depositCheck.disabled = false;
      depositBank.disabled = false;
      depositBank.style.display = 'none';
      depositAmount.style.display = 'none';


      Object.values(incomeItems).slice(1).forEach(item => item.remove());
      buttonIncomeAdd.style.display = 'block';

      Object.values(expensesItems).slice(1).forEach(item => item.remove());
      buttonExpensesAdd.style.display = 'block';

      buttonIncomeAdd.disabled = false;
      buttonExpensesAdd.disabled = false;
    })

    //Обработчик кнопки "Дополнительный доход Плюс"
    buttonIncomeAdd.addEventListener('click', self.addIncomesBlock);

    //Обработчик кнопки "Обязательные расходы Плюс"
    buttonExpensesAdd.addEventListener('click', self.addExpensesBlock);

    //Обработчик для отслеживания периода
    periodSelect.addEventListener('input', (e) => {
      periodAmount.innerText = e.target.value;
    })

    depositCheck.addEventListener('change', this.depositHandler.bind(this));
  }

}


const appData = new AppData();
console.log(appData);

appData.eventsListeners();


//Функция проверяет является цифрой
const isNumber = (n) => Boolean(n.match(/^\d+$/));

//Функция проверяет является буквой или нет
const isStr = (str) => {
  let reg = /^[а-яА-Я ,]+$/;
  return reg.test(str)
}

//Функция делает первую букву заглавной
const ucFirst = (str) => {
  if (str === '') {
    return str;
  }
  return str[0].toUpperCase() + str.slice(1);
}

//Валидация полей
const inputName = document.querySelectorAll('input[placeholder = "Наименование"]'),
    inputAmount = document.querySelectorAll('input[placeholder = "Сумма"]');

inputName.forEach(item => {
  item.addEventListener('input', () => {
    if ((item.value !== '') && (!isStr(item.value))) {
      alert ('В данном поле допустимы только буквы русского алфавита!');
      item.value = item.value.replace(/[^а-яА-Я ,]+$/g, '')
    }
  })
})

inputAmount.forEach(item => {
  item.addEventListener('input', () => {
    if ((item.value !== '') && (!isNumber(item.value))) {
      alert ('В данном поле допустимы только цифры!');
      item.value = item.value.replace(/[^\d]+$/g, '')
    }
  })
})

depositPercent.addEventListener('input', () => {
  if ((depositPercent.value !== '') && (!isNumber(depositPercent.value))) {
    alert ('В данном поле допустимы только цифры от 1 до 100!');
    depositPercent.value = depositPercent.value.replace(/[^\d]+$/g, '')
  }
  else if ((depositPercent.value < 1) || (depositPercent.value > 100)) {
    alert ('Введите корректное значение в поле проценты!');
    depositPercent.value = 1;
  }
})



 