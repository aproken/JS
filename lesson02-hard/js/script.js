let num = 266219,
    str,
    numbMultiply = function(n) {
      let tmp, result = 1;
      
      while (n) {
        tmp = n % 10; // 9
        result *= tmp;
        n = Math.floor(n / 10)
      }
      return result;
    }

num = numbMultiply(num) ** 3;
str = String(num);

console.log(num);
console.log(str.slice(0,2));

