let arr = [1, 'two', 3, 4, 'five', 'six'];

// 1) вывести в консоль элементы массива с typeof === 'number' через метод filter
console.log(
  arr.filter(
    function(item) {
      return typeof(item) === 'string';
    }
  )
);
// 2) вывести в консоль все элементы массива через forEach
console.log('Все элементы массива');
arr.forEach(
  function(item, i, arr) {
    console.log(i + ': ' + item);
  }
);
// 3) Вывести в консоль элементы массива с typeof === 'string' через forEach
console.log('Только те элементы массива, которые строка');
arr.forEach(
  function(item, i, arr) {
      if (typeof(item) === 'string'){
        console.log(i + ': ' + item);
      }
  }
);
// 4) вывести в консоль индексы всех элементов массива с typeof === 'number' через forEach
console.log('Только те элементы массива, которые число');
arr.forEach(
  function(item, i, arr) {
      if (typeof(item) === 'number'){
        console.log(i + ': ' + item);
      }
  }
);
// 5) вывести в консоль третий элементы по индексу из массива через forEach
console.log('Третий элемент массива по индексу');
arr.forEach(
  function(item, i, arr) {
      if (i === 3){
        console.log(i + ': ' + item);
      }
  }
);
// 6) перебрать массив методом map и все элементы с typeof === 'number' превратить в элементы с с typeof === 'string'
console.log(
  arr.map(item => String(item))
);
// 7) после преобразования массива из пункта 6 вывести в консоль только элементы, чья длина === 1. Метод выбрать самостоятельно
console.log(
  arr.map(item => String(item))
     .filter((item) => item.length === 1)
);
// 8) сложить все элементы изначального массива arr с typeof === 'number'. Метод выбрать самостоятельно
console.log(
  arr.filter(item => (typeof(item) === 'number'))
     .reduce((sum, current) => sum + current)
);
// 9) вывести поочередно индексы элементов массива с typeof === 'string'. Метод выбрать самостоятельно
arr.forEach((item, i, arr) => {
  if (typeof(item) === 'string') {
    console.log(i);
  }
});