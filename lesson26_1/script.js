document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const select = document.getElementById('cars'),
        output = document.getElementById('output');

    select.addEventListener('change', () => {
        getData()
            .then(data => {
                data.cars.forEach(item => {
                    if (item.brand === select.value) {
                        const {brand, model, price} = item;
                        output.innerHTML = `Тачка ${brand} ${model} <br>
                        Цена: ${price}$`;
                    }
                });
            })
            .catch(() => {
                output.innerHTML = 'Произошла ошибка';
            })
    });
});

const getData = () => {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest();
      request.open('GET', './cars.json');
      request.setRequestHeader('Content-Type', 'application/json');

      request.addEventListener('readystatechange', () => {
        
        if (request.readyState !== 4) {
          return;
        }
  
        if (request.status === 200) {
            const response = JSON.parse(request.responseText);
            resolve(response); 
        } else {
          reject(request.status);
        }
      })

      request.send();
    })
    
  }
