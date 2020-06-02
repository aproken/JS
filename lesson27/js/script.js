'use strict';

let scrollUp = document.createElement('img');

scrollUp.src = './images/sroll-up.png';
document.body.prepend(scrollUp);

scrollUp.style.display = 'block';
scrollUp.style.position = 'fixed';
scrollUp.style.right = '50px';
scrollUp.style.bottom = '45px'
scrollUp.style.zIndex = '9';

window.addEventListener('DOMContentLoaded', () => {

let timeId;

  const addZero = (item) => {
    if (Math.floor(item / 10) === 0) {
      return '0' + item;
    } else { return item.toString(); }
  }

  //Таймер
  const countTimer = () => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    function getTimeRemaining() {
      const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate()+1);
            tomorrow.setHours(0,0,0);

      const dateNow = new Date().getTime(),
            timeRemaining = (tomorrow - dateNow) / 1000,
        
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor((timeRemaining / 60) / 60);
        //day = Math.floor(timeRemaining / 60 / 60 / 24);
      
        return {
          hours,
          minutes,
          seconds
        };
    }

    const updateTimer = () => {
      const timer = getTimeRemaining();
      let hours = addZero(timer.hours);
      if (hours === '24') {
        hours = '00';
      }
      timerHours.textContent = hours;
      timerMinutes.textContent = addZero(timer.minutes);
      timerSeconds.textContent = addZero(timer.seconds);
    }
    updateTimer();
    timeId = setInterval(updateTimer, 1000);
  }
  
  countTimer();

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      links = menu.querySelectorAll('.smooth-scroll');

      links.forEach(item => {
        item.addEventListener('click', (e) => {
          e.preventDefault();
        
        
          const blockID = e.target.getAttribute('href').substr(1);
    
          document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        })
      })


    const menuHandler = () => {
      menu.classList.toggle('active-menu');
    }
    
    menu.addEventListener('click', (e) => {
      let target = e.target;

      // Если это ссылка то закрываем меню
      if(target.tagName == 'A') {
        menuHandler();
      }
    })
    
    btnMenu.addEventListener('click', menuHandler);
  }

  toggleMenu();

  //popUp
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpContent = document.querySelector('.popup-content'),
      screenSize = document.documentElement.clientWidth,
      btnPopUp = document.querySelectorAll('.popup-btn');

      btnPopUp.forEach((e) => {
        e.addEventListener('click', () => {
          popUp.style.display = 'block'; 

          //Анимация
          let count = 0;

          const movePopUpContent = () => {
            count++;

            if (count < 38) {
              popUpContent.style.left = count + '%';
              setTimeout(movePopUpContent, 15);
            }
            else {
              clearTimeout(timeId);
            }
          }
          if (screenSize > 768) {
            timeId = setTimeout(movePopUpContent, 15);
          }
          //Конец анимация

        })
      })

      popUp.addEventListener('click', (e) => {
        let target = e.target;

        if (target.classList.contains('popup-close')) {
          popUp.style.display = 'none';
        }
        else {
          target = target.closest('.popup-content');

          if (!target) {
            popUp.style.display = 'none'; 
          }
        } 
      })
  }

  togglePopUp();

  //scroll document
  const btnScroll = document.querySelector('a');
  
  btnScroll.addEventListener('click', (e) => {
    e.preventDefault();
    
    const blockID = btnScroll.getAttribute('href').substr(1);
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    console.log(document.getElementById(blockID))
  })

  //scroll up
  scrollUp.addEventListener('click', () => {
    //window.scrollTo(pageXOffset, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }) 

  window.addEventListener('scroll', () => {
    scrollUp.hidden = (pageYOffset < document.documentElement.clientHeight);
  });

  //Tabs
  const tabs = () => {
    const tabsHeader = document.querySelector('.service-header'),
      tab = document.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');
    
    const toggleTabContent = (index) => {
      for(let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        }
        else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    }

    tabsHeader.addEventListener('click', (e) => {
      let target = e.target;
     
      target = target.closest('.service-header-tab');

        if (target) {
          
          tab.forEach((item, index) => {

            if (item === target) {
              toggleTabContent(index);
            }
          })
        }    
    })
  }

  tabs();

  //slider
  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      //dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content'),
      parentDots = document.querySelector('.portfolio-dots'),
      dot = [];
      
    slide.forEach(() => {
      let dotItem = document.createElement('li');
      dotItem.classList.add('dot');
      parentDots.append(dotItem);
      dot.push(dotItem);
    })

    let currentSlide = 0,
      interval;

    const prevSlide = (elem, index, strClass) => {
      elem[index].classList.remove(strClass);
    }

    const nextSlide = (elem, index, strClass) => {
      elem[index].classList.add(strClass);
    }

    const autoPlaySlide = () => {

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');
      currentSlide++;

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    };

    const startSlide = (time = 3000) => {
      interval = setInterval(autoPlaySlide, time);
    }

    const stopSlide = () => {
      clearInterval(interval);
    }

    slider.addEventListener('click', (e) => {
      e.preventDefault();

      let target = e.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      }
      else if (target.matches('#arrow-left')) {
        currentSlide--;
      }
      else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        })
      }

      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }

      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }

      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');

    })

    slider.addEventListener('mouseover', (e) => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        stopSlide();
      }
    })

    slider.addEventListener('mouseout', (e) => {
      if (e.target.matches('.portfolio-btn') || e.target.matches('.dot')) {
        startSlide();
      }
    })

    startSlide(1500);

  }

  slider();

  //Наша команда
  const photo = document.querySelectorAll('.command__photo');

  const toggleAttribute = (elem, attribute) => {
      elem.setAttribute('src', attribute);
  }

  photo.forEach((item) => {
    let srcAttribute = item.getAttribute('src'),
      dataImgAttribute = item.dataset.img;

    if (!item.hasAttribute('data-img')) { 
      console.error('data атрибут отсутствует');
      return;
    }
      
    item.addEventListener('mouseover', (e) => {
      toggleAttribute(e.target, dataImgAttribute);
    })

    item.addEventListener('mouseout', (e) => {
      toggleAttribute(e.target, srcAttribute);
    })
  })


  //Калькулятор

  //Функция проверяет является цифрой
  const isNumber = (n) => Boolean(n.match(/^\d+$/));

  const calcuculator = (price = 100) => {

    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcCount = document.querySelector('.calc-count'),
      calcDay = document.querySelector('.calc-day'),
      totalValue = document.getElementById('total');

    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = parseInt(calcSquare.value);

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }
    
      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
      } 

      randerSum(totalValue, total);
    }

    calcBlock.addEventListener('change', (e) => {
      const target = e.target;

      // if (target.matches('.calc-type') || target.matches('.calc-square') || target.matches('.calc-day') || target.matches('.calc-count')) {
      //   console.log(1);
      // }

      // if (target === calcType || target === calcSquare || target === calcCount || target === calcDay) {
      //   console.log(1);
      // }

      if (target.matches('select') || target.matches('input')) {
        countSum();
      }

    })
  

    //Валидация полей
    const calcNumber = [];
  
    calcNumber.push(calcSquare, calcCount, calcDay);

    calcNumber.forEach(item => {
      item.addEventListener('input', () => {
      if ((item.value == '') || (!isNumber(item.value))) {
        alert ('В данном поле допустимы только цифры!');
        item.value = item.value.replace(/[^\d]+$/g, '')
      }
      })
    })
    //конец валидация полей

    //Эффект анимации 

    const randerSum = (elem, newValue) => {
      console.log("from", parseInt(elem.textContent));
      console.log("to", newValue);

      let currentValue = parseInt(elem.textContent),
          stepCount = 15,
          timer;
      
      const inner = () => {
        let range = newValue - currentValue,
            step = Math.floor(range / stepCount);

        currentValue = currentValue + step;
        stepCount--;

        elem.textContent = currentValue;
        if (currentValue == newValue) {
          clearInterval(timer);
        }
      }
        
      timer = setInterval(inner, 10);
    }
  }

  calcuculator(100);

  //отправка формы
  const sendForm = (form) => {
    const errorMessage = 'Что-то пошло не так',
      successMessage = 'Спасибо! Мы скоро с Вами свяжемся!';

    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status-message');
    statusMessage.classList.add('loading');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.appendChild(statusMessage);
      //statusMessage.textContent = loadMessage;
    
      const formData = new FormData(form);
      let body = {};

      formData.forEach((val, key) => body[key] = val);

      postData(body)
        .then(() => {
          statusMessage.textContent = successMessage;
          statusMessage.classList.remove('loading');
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
          statusMessage.classList.remove('loading');
        });

    })

    const postData = (body) => {
      return fetch('./server.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      }).then( response => response.json() );
    }
  }

  //Валидация form
  const workForm = (form) => {
    const nameForm = form.querySelector('input[name="user_name"]'),
          phoneForm = form.querySelector('input[type="tel"]'),
          messageForm = form.querySelector('input[name="user_message"]');

    nameForm.setAttribute('autocomplete', 'off');
    nameForm.pattern = '^[а-яА-Я\\s]+$';

    nameForm.addEventListener('invalid', (e) => {
      e.target.style.border = '1px solid red';
      e.target.setCustomValidity("Имя может содержать только кирилические символы");
    });

    nameForm.addEventListener('input', (e) => {
      e.target.setCustomValidity('');
      e.target.style.border = 'none';
    })

    phoneForm.pattern = '^\\+?[78](\\d){10}$';
    phoneForm.setAttribute('autocomplete', 'off');

    phoneForm.addEventListener('invalid', (e) => {
      e.target.style.border = '1px solid red';
      e.target.setCustomValidity("Телефон может содержать только цифры и знак + ")
    });

    phoneForm.addEventListener('input', (e) => {
      e.target.setCustomValidity('');
      e.target.style.border = 'none';
    })

    if (messageForm) {
      messageForm.setAttribute('autocomplete', 'off');
      messageForm.pattern = '^[а-яА-Я\\s]+$';
  
      messageForm.addEventListener('invalid', (e) => {
        e.target.style.border = '1px solid red';
        e.target.setCustomValidity("Имя может содержать только кирилические символы");
      });
  
      messageForm.addEventListener('input', (e) => {
        e.target.setCustomValidity('');
        e.target.style.border = 'none';
      })
    }

    sendForm(form);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let inputs = e.target.querySelectorAll('input')
      inputs.forEach( inp => inp.value = '')
    })
  }

  workForm(document.getElementById('form1'));
  workForm(document.getElementById('form2'));
  workForm(document.getElementById('form3'));


});
