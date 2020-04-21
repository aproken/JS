'use strict'

let book = document.querySelectorAll('.book'),
    wrap = document.querySelector('.books'),
    liBook2 = book[0].querySelectorAll('li'),
    liBook5 = book[5].querySelectorAll('li'),
    liBook6 = book[2].querySelectorAll('li');

//Восстановить порядок книг
wrap.append(book[1], book[0], book[4], book[3], book[5], book[2]);

//Исправить заголовок в книге 3
book[4].querySelector('a').innerText = 'Книга 3. this и Прототипы Объектов'

//Восстановить порядок глав во второй и пятой книге
book[0].querySelector('ul').append(liBook2[0], liBook2[1], liBook2[3], liBook2[6], liBook2[8], liBook2[4], liBook2[5], liBook2[7], liBook2[9], liBook2[2], liBook2[10]);
book[5].querySelector('ul').append(liBook5[0], liBook5[1], liBook5[9], liBook5[3], liBook5[4], liBook5[2], liBook5[6], liBook5[7], liBook5[5], liBook5[8], liBook5[10]);

//в шестой книге добавить главу
liBook6[9].insertAdjacentHTML('beforebegin', '<li>Глава 8: За пределами ES6</li>');

//Убрать рекламу со страницы
document.querySelector('.adv').style.display = 'none';

//Заменить картинку заднего фона
document.body.style.background = "url(./image/you-dont-know-js.jpg)"
