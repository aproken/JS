let lang = prompt('Выберете язык: ru или en', 'ru'),
    days = {
        ru: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
        en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    };

alert(days[lang]);