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

export default toggleMenu;