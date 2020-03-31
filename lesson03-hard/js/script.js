let namePerson = prompt('Выберете имя:', 'Артём'),
    statusName = {
      'Артём': 'директор',
      'Максим': 'преподаватель',
    }

alert(
  (namePerson in statusName) ? statusName[namePerson] : 'студент'
);    