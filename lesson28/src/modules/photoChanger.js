const photoChanger = () => {
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
}

export default photoChanger;