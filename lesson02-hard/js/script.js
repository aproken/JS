let num = 266219,
    resultPow;

//из числа в массив
num = Array.from(String(num));

//произведение элементов массива с сохранением промежуточного результата
num =  (num.reduce((accum, current) => accum *= current, 1 ));

//возвели полученное число в 3 степень
resultPow = String(num ** 3);

//вывод в консоль
console.log(num);
console.log(num ** 3);
console.log(resultPow.slice(0,2));

