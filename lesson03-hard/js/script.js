let lang = prompt('Выберете язык: ru или en', 'ru');
    daysRu = ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    daysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

switch(lang) {
  case 'ru':
    alert(daysRu);
    break;
  case 'en': 
    alert(daysEn);
    break;
  default: 
    alert('Выберете ru или en');
}

