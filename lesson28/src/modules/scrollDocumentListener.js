let scrollUp = document.createElement('img');

scrollUp.src = './images/sroll-up.png';
document.body.prepend(scrollUp);

scrollUp.style.display = 'block';
scrollUp.style.position = 'fixed';
scrollUp.style.right = '50px';
scrollUp.style.bottom = '45px'
scrollUp.style.zIndex = '9';

const scrollDocumentListener = () => {
  
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

}

export default scrollDocumentListener;
