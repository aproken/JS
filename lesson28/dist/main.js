/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_countTimer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/countTimer */ \"./src/modules/countTimer.js\");\n/* harmony import */ var _modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleMenu */ \"./src/modules/toggleMenu.js\");\n/* harmony import */ var _modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/togglePopUp */ \"./src/modules/togglePopUp.js\");\n/* harmony import */ var _modules_scrollDocumentListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollDocumentListener */ \"./src/modules/scrollDocumentListener.js\");\n/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/tabs */ \"./src/modules/tabs.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_photoChanger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/photoChanger */ \"./src/modules/photoChanger.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/calculator */ \"./src/modules/calculator.js\");\n/* harmony import */ var _modules_workForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/workForm */ \"./src/modules/workForm.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n//Таймер\nObject(_modules_countTimer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n// Меню\nObject(_modules_toggleMenu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//popUp\nObject(_modules_togglePopUp__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//scroll document\nObject(_modules_scrollDocumentListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n//Tabs\nObject(_modules_tabs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//slider\nObject(_modules_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n\n//Наша команда\nObject(_modules_photoChanger__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n\n//Калькулятор\nObject(_modules_calculator__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(100);\n\n//отправка формы\nObject(_modules_workForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(document.getElementById('form1'));\nObject(_modules_workForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(document.getElementById('form2'));\nObject(_modules_workForm__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(document.getElementById('form3'));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/calculator.js":
/*!***********************************!*\
  !*** ./src/modules/calculator.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//Функция проверяет является цифрой\nconst isNumber = (n) => Boolean(n.match(/^\\d+$/));\n\nconst calculator = (price = 100) => {\n\n  const calcBlock = document.querySelector('.calc-block'),\n    calcType = document.querySelector('.calc-type'),\n    calcSquare = document.querySelector('.calc-square'),\n    calcCount = document.querySelector('.calc-count'),\n    calcDay = document.querySelector('.calc-day'),\n    totalValue = document.getElementById('total');\n\n  const countSum = () => {\n    let total = 0,\n      countValue = 1,\n      dayValue = 1;\n\n    const typeValue = calcType.options[calcType.selectedIndex].value,\n      squareValue = parseInt(calcSquare.value);\n\n    if (calcCount.value > 1) {\n      countValue += (calcCount.value - 1) / 10;\n    }\n\n    if (calcDay.value && calcDay.value < 5) {\n      dayValue *= 2;\n    } else if (calcDay.value && calcDay.value < 10) {\n      dayValue *= 1.5;\n    }\n  \n    if (typeValue && squareValue) {\n      total = price * typeValue * squareValue * countValue * dayValue;\n    } \n\n    randerSum(totalValue, total);\n    //totalValue.textContent = total\n  }\n\n  calcBlock.addEventListener('change', (e) => {\n    const target = e.target;\n\n    if (target.matches('select') || target.matches('input')) {\n      countSum();\n    }\n\n  })\n\n\n  //Валидация полей\n  const calcNumber = [];\n\n  calcNumber.push(calcSquare, calcCount, calcDay);\n\n  calcNumber.forEach(item => {\n    item.addEventListener('input', () => {\n    if ((item.value == '') || (!isNumber(item.value))) {\n      alert ('В данном поле допустимы только цифры!');\n      item.value = item.value.replace(/[^\\d]+$/g, '')\n    }\n    })\n  })\n  //конец валидация полей\n\n  //Эффект анимации \n\n  const randerSum = (elem, newValue) => {\n\n    let currentValue = parseInt(elem.textContent),\n        stepCount = 15,\n        timer;\n    \n    const inner = () => {\n      let range = newValue - currentValue,\n          step = Math.floor(range / stepCount);\n\n      currentValue = currentValue + step;\n      stepCount--;\n\n      if (stepCount > 0) {\n        elem.textContent = currentValue;\n      } else {\n        clearInterval(timer);\n        elem.textContent = newValue;\n      }\n    }\n      \n    timer = setInterval(inner, 10);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (calculator);\n\n//# sourceURL=webpack:///./src/modules/calculator.js?");

/***/ }),

/***/ "./src/modules/countTimer.js":
/*!***********************************!*\
  !*** ./src/modules/countTimer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//Таймер\n\nlet timeId;\n\nconst addZero = (item) => {\n  if (Math.floor(item / 10) === 0) {\n    return '0' + item;\n  } else { return item.toString(); }\n}\n\nconst countTimer = () => {\n  const timerHours = document.getElementById('timer-hours'),\n    timerMinutes = document.getElementById('timer-minutes'),\n    timerSeconds = document.getElementById('timer-seconds');\n\n  function getTimeRemaining() {\n    const tomorrow = new Date();\n          tomorrow.setDate(tomorrow.getDate()+1);\n          tomorrow.setHours(0,0,0);\n\n    const dateNow = new Date().getTime(),\n          timeRemaining = (tomorrow - dateNow) / 1000,\n      \n      seconds = Math.floor(timeRemaining % 60),\n      minutes = Math.floor((timeRemaining / 60) % 60),\n      hours = Math.floor((timeRemaining / 60) / 60);\n      //day = Math.floor(timeRemaining / 60 / 60 / 24);\n    \n      return {\n        hours,\n        minutes,\n        seconds\n      };\n  }\n\n  const updateTimer = () => {\n    const timer = getTimeRemaining();\n    let hours = addZero(timer.hours);\n    if (hours === '24') {\n      hours = '00';\n    }\n    timerHours.textContent = hours;\n    timerMinutes.textContent = addZero(timer.minutes);\n    timerSeconds.textContent = addZero(timer.seconds);\n  }\n  updateTimer();\n  timeId = setInterval(updateTimer, 1000);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (countTimer);\n\n//# sourceURL=webpack:///./src/modules/countTimer.js?");

/***/ }),

/***/ "./src/modules/photoChanger.js":
/*!*************************************!*\
  !*** ./src/modules/photoChanger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst photoChanger = () => {\n  const photo = document.querySelectorAll('.command__photo');\n\n  const toggleAttribute = (elem, attribute) => {\n      elem.setAttribute('src', attribute);\n  }\n\n  photo.forEach((item) => {\n    let srcAttribute = item.getAttribute('src'),\n      dataImgAttribute = item.dataset.img;\n\n    if (!item.hasAttribute('data-img')) { \n      console.error('data атрибут отсутствует');\n      return;\n    }\n      \n    item.addEventListener('mouseover', (e) => {\n      toggleAttribute(e.target, dataImgAttribute);\n    })\n\n    item.addEventListener('mouseout', (e) => {\n      toggleAttribute(e.target, srcAttribute);\n    })\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (photoChanger);\n\n//# sourceURL=webpack:///./src/modules/photoChanger.js?");

/***/ }),

/***/ "./src/modules/scrollDocumentListener.js":
/*!***********************************************!*\
  !*** ./src/modules/scrollDocumentListener.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet scrollUp = document.createElement('img');\n\nscrollUp.src = './images/sroll-up.png';\ndocument.body.prepend(scrollUp);\n\nscrollUp.style.display = 'block';\nscrollUp.style.position = 'fixed';\nscrollUp.style.right = '50px';\nscrollUp.style.bottom = '45px'\nscrollUp.style.zIndex = '9';\n\nconst scrollDocumentListener = () => {\n  \n  const btnScroll = document.querySelector('a');\n  \n  btnScroll.addEventListener('click', (e) => {\n    e.preventDefault();\n    \n    const blockID = btnScroll.getAttribute('href').substr(1);\n    \n    document.getElementById(blockID).scrollIntoView({\n      behavior: 'smooth',\n      block: 'start',\n    });\n    console.log(document.getElementById(blockID))\n  })\n\n  //scroll up\n  scrollUp.addEventListener('click', () => {\n    //window.scrollTo(pageXOffset, 0);\n    window.scrollTo({\n      top: 0,\n      behavior: \"smooth\"\n    });\n  }) \n\n  window.addEventListener('scroll', () => {\n    scrollUp.hidden = (pageYOffset < document.documentElement.clientHeight);\n  });\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (scrollDocumentListener);\n\n\n//# sourceURL=webpack:///./src/modules/scrollDocumentListener.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst slider = () => {\n  const slide = document.querySelectorAll('.portfolio-item'),\n    //dot = document.querySelectorAll('.dot'),\n    slider = document.querySelector('.portfolio-content'),\n    parentDots = document.querySelector('.portfolio-dots'),\n    dot = [];\n    \n  slide.forEach(() => {\n    let dotItem = document.createElement('li');\n    dotItem.classList.add('dot');\n    parentDots.append(dotItem);\n    dot.push(dotItem);\n  })\n\n  let currentSlide = 0,\n    interval;\n\n  const prevSlide = (elem, index, strClass) => {\n    elem[index].classList.remove(strClass);\n  }\n\n  const nextSlide = (elem, index, strClass) => {\n    elem[index].classList.add(strClass);\n  }\n  \n  const autoPlaySlide = () => {\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n    currentSlide++;\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n  };\n\n  const startSlide = (time = 3000) => {\n    interval = setInterval(autoPlaySlide, time);\n  }\n\n  const stopSlide = () => {\n    clearInterval(interval);\n  }\n\n  // выставляем слайд по умолчанию при запуске\n  nextSlide(dot, 0, 'dot-active');\n\n  slider.addEventListener('click', (e) => {\n    e.preventDefault();\n\n    let target = e.target;\n\n    if (!target.matches('.portfolio-btn, .dot')) {\n      return;\n    }\n\n    prevSlide(slide, currentSlide, 'portfolio-item-active');\n    prevSlide(dot, currentSlide, 'dot-active');\n\n    if (target.matches('#arrow-right')) {\n      currentSlide++;\n    }\n    else if (target.matches('#arrow-left')) {\n      currentSlide--;\n    }\n    else if (target.matches('.dot')) {\n      dot.forEach((elem, index) => {\n        if (elem === target) {\n          currentSlide = index;\n        }\n      })\n    }\n\n    if (currentSlide >= slide.length) {\n      currentSlide = 0;\n    }\n\n    if (currentSlide < 0) {\n      currentSlide = slide.length - 1;\n    }\n\n    nextSlide(slide, currentSlide, 'portfolio-item-active');\n    nextSlide(dot, currentSlide, 'dot-active');\n\n  })\n\n  slider.addEventListener('mouseover', (e) => {\n    if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {\n      stopSlide();\n    }\n  })\n\n  slider.addEventListener('mouseout', (e) => {\n    if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {\n      startSlide();\n    }\n  })\n\n  startSlide(1500);\n\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack:///./src/modules/slider.js?");

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst tabs = () => {\n  const tabsHeader = document.querySelector('.service-header'),\n    tab = document.querySelectorAll('.service-header-tab'),\n    tabContent = document.querySelectorAll('.service-tab');\n  \n  const toggleTabContent = (index) => {\n    for(let i = 0; i < tabContent.length; i++) {\n      if (index === i) {\n        tab[i].classList.add('active');\n        tabContent[i].classList.remove('d-none');\n      }\n      else {\n        tab[i].classList.remove('active');\n        tabContent[i].classList.add('d-none');\n      }\n    }\n  }\n\n  tabsHeader.addEventListener('click', (e) => {\n    let target = e.target;\n   \n    target = target.closest('.service-header-tab');\n\n      if (target) {\n        \n        tab.forEach((item, index) => {\n\n          if (item === target) {\n            toggleTabContent(index);\n          }\n        })\n      }    \n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (tabs);\n\n//# sourceURL=webpack:///./src/modules/tabs.js?");

/***/ }),

/***/ "./src/modules/toggleMenu.js":
/*!***********************************!*\
  !*** ./src/modules/toggleMenu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst toggleMenu = () => {\n  const btnMenu = document.querySelector('.menu'),\n    menu = document.querySelector('menu'),\n    links = menu.querySelectorAll('.smooth-scroll');\n\n    links.forEach(item => {\n      item.addEventListener('click', (e) => {\n        e.preventDefault();\n      \n      \n        const blockID = e.target.getAttribute('href').substr(1);\n  \n        document.getElementById(blockID).scrollIntoView({\n          behavior: 'smooth',\n          block: 'start',\n        })\n      })\n    })\n\n\n  const menuHandler = () => {\n    menu.classList.toggle('active-menu');\n  }\n  \n  menu.addEventListener('click', (e) => {\n    let target = e.target;\n\n    // Если это ссылка то закрываем меню\n    if(target.tagName == 'A') {\n      menuHandler();\n    }\n  })\n  \n  btnMenu.addEventListener('click', menuHandler);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (toggleMenu);\n\n//# sourceURL=webpack:///./src/modules/toggleMenu.js?");

/***/ }),

/***/ "./src/modules/togglePopUp.js":
/*!************************************!*\
  !*** ./src/modules/togglePopUp.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet timeId;\n\nconst togglePopUp = () => {\n  const popUp = document.querySelector('.popup'),\n    popUpContent = document.querySelector('.popup-content'),\n    screenSize = document.documentElement.clientWidth,\n    btnPopUp = document.querySelectorAll('.popup-btn');\n\n    btnPopUp.forEach((e) => {\n      e.addEventListener('click', () => {\n        popUp.style.display = 'block'; \n\n        //Анимация\n        let count = 0;\n\n        const movePopUpContent = () => {\n          count++;\n\n          if (count < 38) {\n            popUpContent.style.left = count + '%';\n            setTimeout(movePopUpContent, 15);\n          }\n          else {\n            clearTimeout(timeId);\n          }\n        }\n        if (screenSize > 768) {\n          timeId = setTimeout(movePopUpContent, 15);\n        } else {\n          clearTimeout(timeId);\n        }\n        //Конец анимация\n\n      })\n    })\n\n    popUp.addEventListener('click', (e) => {\n      let target = e.target;\n\n      if (target.classList.contains('popup-close')) {\n        popUp.style.display = 'none';\n        popUpContent.style.left = '0%';\n      }\n      else {\n        target = target.closest('.popup-content');\n\n        if (!target) {\n          popUp.style.display = 'none'; \n          popUpContent.style.left = '0%';\n        }\n      } \n    })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (togglePopUp);\n\n//# sourceURL=webpack:///./src/modules/togglePopUp.js?");

/***/ }),

/***/ "./src/modules/workForm.js":
/*!*********************************!*\
  !*** ./src/modules/workForm.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sendForm = (form) => {\n  const errorMessage = 'Что-то пошло не так',\n    successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';\n\n  const statusMessage = document.createElement('div');\n  statusMessage.classList.add('status-message');\n  statusMessage.classList.add('loading');\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    form.appendChild(statusMessage);\n    //statusMessage.textContent = loadMessage;\n  \n    const formData = new FormData(form);\n    let body = {};\n\n    formData.forEach((val, key) => body[key] = val);\n\n    postData(body)\n      .then(() => {\n        statusMessage.textContent = successMessage;\n        statusMessage.classList.remove('loading');\n      })\n      .catch((error) => {\n        statusMessage.textContent = errorMessage;\n        console.error(error);\n        statusMessage.classList.remove('loading');\n      });\n\n  })\n\n  const postData = (body) => {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(body)\n    });\n    //.then( response => response.json() );\n  }\n}\n\n//Валидация form\nconst workForm = (form) => {\n  const nameForm = form.querySelector('input[name=\"user_name\"]'),\n        phoneForm = form.querySelector('input[type=\"tel\"]'),\n        messageForm = form.querySelector('input[name=\"user_message\"]');\n\n  nameForm.setAttribute('autocomplete', 'off');\n  nameForm.pattern = '^[а-яА-Я\\\\s]+$';\n\n  nameForm.addEventListener('invalid', (e) => {\n    e.target.style.border = '1px solid red';\n    e.target.setCustomValidity(\"Имя может содержать только кирилические символы\");\n  });\n\n  nameForm.addEventListener('input', (e) => {\n    e.target.setCustomValidity('');\n    e.target.style.border = 'none';\n  })\n\n  phoneForm.pattern = '^\\\\+?[78](\\\\d){10}$';\n  phoneForm.setAttribute('autocomplete', 'off');\n\n  phoneForm.addEventListener('invalid', (e) => {\n    e.target.style.border = '1px solid red';\n    e.target.setCustomValidity(\"Телефон может содержать только цифры и знак + \")\n  });\n\n  phoneForm.addEventListener('input', (e) => {\n    e.target.setCustomValidity('');\n    e.target.style.border = 'none';\n  })\n\n  if (messageForm) {\n    messageForm.setAttribute('autocomplete', 'off');\n    messageForm.pattern = '^[а-яА-Я\\\\s,\\\\.!?\\\\-\\\\(\\\\)\"\\']+$';\n\n    messageForm.addEventListener('invalid', (e) => {\n      e.target.style.border = '1px solid red';\n      e.target.setCustomValidity(\"Сообщение может содержать только кирилические символы\");\n    });\n\n    messageForm.addEventListener('input', (e) => {\n      e.target.setCustomValidity('');\n      e.target.style.border = 'none';\n    })\n  }\n\n  sendForm(form);\n\n  form.addEventListener('submit', (e) => {\n    e.preventDefault();\n    let inputs = e.target.querySelectorAll('input')\n    inputs.forEach( inp => inp.value = '')\n  })\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (workForm);\n\n//# sourceURL=webpack:///./src/modules/workForm.js?");

/***/ })

/******/ });