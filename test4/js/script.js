'use strict'

const country = document.getElementById('country'),
      city = document.getElementById('city'),
      result = document.querySelector('.result');


const changeCountry = function() {
  //Очистить список городов
  while (city.firstChild) {
    city.removeChild(city.firstChild);
  }

  if (this.value in cityArr) {
    cityArr[this.value].forEach(item => {
      let elem = document.createElement('option');

      elem.innerHTML = item;
      city.append(elem);
    })
  }
}

const showResult = function() {

  let countryName = country.querySelector('option:checked').text
  let cityName = city.value
  result.innerHTML = `${countryName}, ${cityName}`;
}

const cityArr = {
  rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
  uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
  bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
  jap: ['Токио', 'Киото', 'Осака', 'Иокогама'] 
}


country.addEventListener('change', changeCountry);
city.addEventListener('change', showResult);