'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import scrollDocumentListener from './modules/scrollDocumentListener';
import tabs from './modules/tabs';
import slider from './modules/slider';
import photoChanger from './modules/photoChanger';
import calculator from './modules/calculator';
import workForm from './modules/workForm';

//Таймер
countTimer();

// Меню
toggleMenu();

//popUp
togglePopUp();

//scroll document
scrollDocumentListener();

//Tabs
tabs();

//slider
slider();

//Наша команда
photoChanger();

//Калькулятор
calculator(100);

//отправка формы
workForm(document.getElementById('form1'));
workForm(document.getElementById('form2'));
workForm(document.getElementById('form3'));