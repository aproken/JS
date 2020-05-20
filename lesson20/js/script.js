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
    } else { return item; }
  }

  //Таймер
  const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    function getTimeRemaining() {
      const dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        
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

        if ((timer.hours <= 0) && 
            (timer.minutes <= 0) && 
            (timer.seconds <= 0)) {
          
              clearInterval(timeId);
            timerHours.textContent = '00';
            timerMinutes.textContent = '00';
            timerSeconds.textContent = '00';
        }
        else {
          timerHours.textContent = addZero(timer.hours);
          timerMinutes.textContent = addZero(timer.minutes);
          timerSeconds.textContent = addZero(timer.seconds);
        }
        
      }
      updateTimer();
      timeId = setInterval(updateTimer, 1000);
    }
  
  countTimer('30 may 2020');

  // Меню
  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      btnClose = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

      const menuHandler = () => {
        menu.classList.toggle('active-menu');
      }

    btnMenu.addEventListener('click', menuHandler);

    btnClose.addEventListener('click', menuHandler);
  
    menuItems.forEach((item) => {
      item.addEventListener('click', menuHandler)
    })
  }

  toggleMenu();

  //popUp
  const togglePopUp = () => {
    const popUp = document.querySelector('.popup'),
      popUpContent = document.querySelector('.popup-content'),
      screenSize = document.documentElement.clientWidth,
      btnPopUpClose = document.querySelector('.popup-close'),
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

      btnPopUpClose.addEventListener('click', () => {
        popUp.style.display = 'none';
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

      while (target !== tabsHeader) {

        if (target.classList.contains('service-header-tab')) {
          
          tab.forEach((item, index) => {

            if (item === target) {
              toggleTabContent(index);
            }

          })
          return;
        }
        target = target.parentNode;
      }
    })
  }

  tabs();

});
