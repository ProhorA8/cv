// логика для выбора языка

// получаем выбранный язык
const select = document.querySelector('select');
// допустимые языки
const allLang = ['en','ru'];

// когда меняется язык меняем url страницы
select.addEventListener('change', changeURLLanguage);

// перенаправить на url с указанием языка
function changeURLLanguage() {
    // получаем выбранный язык у select
    let lang = select.value;
    // дописываем выбранный язык в текущий url
    location.href = window.location.pathname + '#' + lang;
    // перезегружаем страницу и загрузиться стр. с выбранным языком
    location.reload();
}

function changeLanguage() {
    // получаем #en или #ru
    let hash = window.location.hash;
    // удаляем #, получим en или ru
    hash = hash.substr(1);
    // вывод в консоль
    console.log(hash);
    // проверяем наличие hash-а в массиве допустимых языков
    // если не находим то присваиваем ему принудительно язык по умолчанию ru
    if (!allLang.includes(hash)){
        location.href = window.location.pathname + '#ru';
        location.reload();
    }

    // присваеваем select-у язык
    select.value = hash;
    // переведём заголовок руками
    document.querySelector('title').innerHTML = langArr['title'][hash];

    // перебираем переменные
    for (let key in langArr) {
        // находим класс lng-... у тегов
        let elem = document.querySelector('.lng-' + key);
        // если получаем элемент, то присваиваем
        if (elem) {
            elem.innerHTML = langArr[key][hash];
        }
    }
}

changeLanguage();
