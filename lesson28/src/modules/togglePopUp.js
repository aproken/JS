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

export default togglePopUp;