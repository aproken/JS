'use strict'

let arr = [
  {
    name: 'Иванов',
    numberClass: 5,
    charClass: 'A'
  },
  {
    name:  'Антонов',
    numberClass: 5,
    charClass: 'A'
  },
  {
    name:  'Синеглазкина', 
    numberClass: 7,
    charClass: 'В'
  }
];

let arrGroupMap = new Map();

arr.forEach(function(item) {
  let className = [item.numberClass, item.charClass];

  if (arrGroupMap.has(className)) {
    arrGroupMap[className].push(item);
  }
  else {
    arrGroupMap.set(className, [item]);
  }
})



// arr.forEach(child => {
//   let className = child['numberClass'] + child['charClass'];
//   if (className in arrGroup) {
//     arrGroup[className].push(child)
//   } else {
//     arrGroup[className] = [child]
//   }
// });
