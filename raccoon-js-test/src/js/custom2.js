const first = document.querySelector('.first');
const firstBtn = first.querySelector('button');

const second = document.querySelector('.second');
const secondResult = second.querySelector('span');

const third = document.querySelector('.third');
const thirdBtn = third.querySelector('button');

const fouth = document.querySelector('.fouth');
const fouthBtn = fouth.querySelector('button');

const fifth = document.querySelector('.fifth');
const fifthBtn = fifth.querySelector('button');

const sixth = document.querySelector('.sixth');
const sixthResult = sixth.querySelector('span');

const seventh = document.querySelector('.seventh');
const seventhBtn = seventh.querySelector('button');

const eighth = document.querySelector('.eighth');
const eighthBtn = eighth.querySelector('button');

const ninth = document.querySelector('.ninth');
const ninthBtn = ninth.querySelector('button');

const tenth = document.querySelector('.tenth');
const tenthBtn = tenth.querySelector('button');

const eleventh = document.querySelector('.eleventh');
const eleventhResult = eleventh.querySelector('span');

const twelfth = document.querySelector('.twelfth');
const twelfthBtn = twelfth.querySelector('button');
const twelfthResult = twelfth.querySelector('span');

const date = new Date;
const currentDay = date.getDay();
const daysArray = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const currentDayName = daysArray[currentDay];

// 1

firstBtn.addEventListener('click', () => {
    const x = parseInt(prompt('Введи отрицательное значение, положительное или 0'));

    switch (true) {
        case x < 0: 
            alert(`ты ввел ${x}, а значит это отрицательное значение`);
            break;
        case x > 0:
            alert(`ты ввел ${x}, а значит это положительное значение`);
            break;
        case x == 0:
            alert(`ты ввел ${x}, а значит это 0`);
            break;
        default:
            alert('Очень жаль, но ты ничего не ввел или ввел не число');
    }
});

// 2

(function() {
    const numbers = [firstNum = 404, secondNum = 500, thirdNum = 200];
    const numResult = Math.min(...numbers);
    const minResult = 
        firstNum < secondNum ? 
        (firstNum < thirdNum ? firstNum : thirdNum) : 
        (secondNum < thirdNum ? secondNum : thirdNum);

    secondResult.innerHTML = `
    Math.min: <br>
    Минимальное значение из ${firstNum}, ${secondNum}, ${thirdNum} = ${numResult} <br>
    первое значение ${firstNum} <br>
    второе значение ${secondNum} <br>
    третье значение ${thirdNum} <br>
    или условный оператор <br>
    ${minResult}
    `;
}());

// 3

thirdBtn.addEventListener('click', () => {
    const totalCash = parseInt(prompt('Введите столько $ у вас и у вашего друга в кармане'));

    switch (true) {
        case isNaN(totalCash):
            alert('Упс, что-то пошло не так!');
            break;
        case totalCash < 0:
            alert('Добавьте рубль на пиво!');
            break;
        case totalCash > 100: 
            alert('Ого! Можно и отдохнуть');
            break;
        default:
            alert('Маловато будет! Хватает только на пивас');
    }
});

// 4

fouthBtn.addEventListener('click', () => {
    const age = parseInt(prompt('Сынок, кажется ты призывного возраста, сколько лет?'));
    const ageCondition = age >= 20 && age < 27;
    
    switch (true) {
        case age <= 0:
        case isNaN(age):
            alert('Упс, что-то пошло не так!');
            break;
        case ageCondition: 
            alert('Наш клиент! Попрошу пройти со мной');
            break;
        default:
            alert('Повезло тебе, свободен!');
    }
});

// 5

fifthBtn.addEventListener('click', () => {
    const routeTaxi = parseInt(prompt('Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255, введи номер маршрутки', 7));
    const routeTaxiCondition = routeTaxi == 7 || routeTaxi == 225 || routeTaxi == 255;

    switch (true) {
        case isNaN(routeTaxi):
            alert('Упс, скорее всего нет такого маршрута!');
            break;
        case routeTaxi < 0:
            alert('Такой маршрутки не бывает!');
            break;
        case routeTaxiCondition: 
            alert(`Ура! приехала маршрутка №${routeTaxi}, могу ехать!`);
            break;
        default:
            alert(`Приехала маршрутка №${routeTaxi}! Не моя!`);
    }
});

// 6

(function() {
    switch (true) {
        case currentDay == 5:
            sixthResult.textContent = `сегодня ${currentDayName}, впереди выходные!`;
            break;
        case currentDay > 0 && currentDay < 6:
            sixthResult.textContent = `сегодня ${currentDayName}, а значит это рабочий день(( и нужно идти на работу`;
            break;
        default:
            sixthResult.textContent = `сегодня ${currentDayName}, а значит это выходной! Ура!`;
    }
}());

// 7

seventhBtn.addEventListener('click', () => {
    const x = parseInt(prompt('Введи первое значение от -20 до 20', 1));
    const y = parseInt(prompt('Введи второе значение от -20 до 20', 3));
    const condition = x <= 1 && y >= 3 || y < 0;

    condition ? alert(x + y) : alert('Неверно!');

});

// 8

eighthBtn.addEventListener('click', () => {
    const x = parseInt(prompt('X', 3));
    const y = parseInt(prompt('Y', 6));
    const condition = x > 2 && x < 11 || y >= 6 && y < 14;

    condition ? alert(x * 2) : alert(x + 5);
});

// 9

ninthBtn.addEventListener('click', () => {
    const name = prompt('Как звать тебя?');

    switch (true) {
        case name === null:
            alert('Ты нажал "Отмена"');
            break;
        case name === '':
            alert('Ты ничего не ввел');
            break;
        case !isNaN(name): 
            alert('Не строка!');
            break;
        default:
            alert(`Тебя зовут ${name}, приятно познакомиться!`);
    }
});

// 10

tenthBtn.addEventListener('click', () => {
    let greeting = '';
    const lang = prompt('Введите язык на котором хотите чтобы с вами поздоровались. Поддерживаемые языки: ru, en, de', 'ru');

    switch (true) {
        case lang == 'ru':
            greeting = 'Ну привет';
            alert(greeting);
            break;
        case lang == 'en':
            greeting = 'Hello world!';
            alert(greeting);
            break;
        case lang == 'de':
            greeting = 'Ahtung!';
            alert(greeting);
            break;
        case !isNaN(lang):
            alert('Упс, скорее всего ты ввел число! или нажал "Отмена"');
            break;
        default:
            alert(`${lang} не поддерживается!`);
    }
});

// 11

(function() {
    const currentMonth = date.getMonth();
    const monthArray = 
        [
            'Январь',
            'Февраль',
            'Март',
            'Апрель',
            'Май',
            'Июнь',
            'Июль',
            'Август',
            'Сентябрь',
            'Октябрь',
            'Ноябрь',
            'Декабрь'
        ];
    const currentMonthName = monthArray[currentMonth];
    const isSpring = currentMonth >= 2 && currentMonth <= 4;
    const isSummer = currentMonth >= 5 && currentMonth <= 7;
    const isAutumn = currentMonth >= 8 && currentMonth <= 10;
    const isWinter = currentMonth >= 11 || currentMonth <= 1;

    switch (true) {
        case isWinter:
            eleventhResult.textContent = `Текущий месяц ${currentMonthName}, это зима`;
            break;
        case isSpring:
            eleventhResult.textContent = `Текущий месяц ${currentMonthName}, это весна`;
            break;
        case isSummer:
            eleventhResult.textContent = `Текущий месяц ${currentMonthName}, это лето`;
            break;
        case isAutumn:
            eleventhResult.textContent = `Текущий месяц ${currentMonthName}, это осень`;
            break;
    }
}());

// 12

twelfthBtn.addEventListener('click', () => {
    const lang = prompt('Сделай свой выбор языка. Поддерживаемые: ru, en', 'ru');
    const daysArrayEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    switch (true) {
        case lang === 'ru':
            twelfthResult.textContent = `Привет, сегодня ${currentDayName}`;
            break;
        case lang === 'en':
            twelfthResult.textContent = `Hello world, today is ${daysArrayEn[currentDay]}`;
            break;
        default:
            alert('Очень жаль, но ты ничего не ввел или ввел не поддерживаемый язык');
    }
});
