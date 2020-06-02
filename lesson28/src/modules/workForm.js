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
    });
    //.then( response => response.json() );
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
    messageForm.pattern = '^[а-яА-Я\\s,\\.!?\\-\\(\\)"\']+$';

    messageForm.addEventListener('invalid', (e) => {
      e.target.style.border = '1px solid red';
      e.target.setCustomValidity("Сообщение может содержать только кирилические символы");
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

export default workForm;