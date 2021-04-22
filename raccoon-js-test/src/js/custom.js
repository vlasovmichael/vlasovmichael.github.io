// Переменные и выражения

// Напишите в переменных формулу для расчета з/п за июль с учетом, 
// что количество рабочий часов, количество рабочих дней в неделе и рейт за час – переменные значения и читаются из prompt.

// Напишите программу, которая без использования оператора сравнения определяет, 
// является ли число, введенное пользователем, нечётным.

// Напишите программу, которая проверяет, является ли значение, введенное пользователем, числом.

// Запишите в переменную случайное число (Math.random()), умножьте его на 100 и округлите. 
// Получите второе число из окна prompt. Сравните и отобразите в модальном окне: первое число меньше второго или нет, 
// а также оба значения.

// Создайте переменную str и запишите в нее из prompt такое предложение «Мне нравится изучать Front-end».
// Также создайте еще одну переменную и запишите в нее из prompt то, что вам нравится изучать.
// С помощью методов строки определите существует ли то что вам нравится изучать в исходной строке str.
// Также возьмите подстроку «Мне нравится изучать » из исходной переменной str сохраните ее в переменной.
// Создайте еще одну переменную result куда запишите результирующую строку объединяющую «Мне нравится изучать » 
// и то что вам нравится изучать (примените для этого обратные кавычки ` `). Отобразите результат в модальном окне.

const first = document.querySelector('.first');
const second = document.querySelector('.second');
const secondBtn = second.querySelector('button');
const secondResult = second.querySelector('div');
const third = document.querySelector('.third');
const thirdBtn = third.querySelector('button');
const fouth = document.querySelector('.fouth');
const fifth = document.querySelector('.fifth');
const sixth = document.querySelector('.sixth');
const sixthInput = sixth.querySelector('input');
const sixthResult = sixth.querySelector('div');
const seventh = document.querySelector('.seventh');

// 1

let [var1 = 9, var2, var3] = [];

var2 = var1 * 3;
var3 = var1 + var2;

first.innerHTML = `
    var1: ${var1} <br>
    var2: ${var2} <br>
    var3: ${var3} <br>
`;

// 2

let [firstName, lastName] = [];

secondBtn.addEventListener('click', () => {
    firstName = prompt('Введи Имя');
    lastName = prompt('Введи Фамилию');

    if (firstName && lastName != null) {
        secondResult.textContent = `What’s up ${firstName} ${lastName}`;
    } else if (firstName != null) {
        secondResult.textContent = `What’s up ${firstName} Фамилия`;
    } else if (lastName != null) {
        secondResult.textContent = `What’s up Имя ${lastName}`;
    } else {
        secondResult.textContent = 'Эх ты... ну и ладно, не хочешь, не говори';
    }
});

// 3

let [x, y, res, question] = [];

thirdBtn.addEventListener('click', () => {
    // +
    x = parseInt(prompt('Сколько будет 2 + 2. Давай сложим два значения', '5? Введи первое значение'));
    y = parseInt(prompt('А теперь второе'));
    res = x + y;
    alert(`Когда ты сложил(a) ${x} + ${y}, вот что получилось: ${res}`);

    if (question = confirm('Считаем дальше?')) {
        // -
        x = parseInt(prompt('А перерь вычитание. Также введи первое значение'));
        y = parseInt(prompt('И теперь второе'));
        res = (x) - (y);
        alert(`${x} - ${y} = ${res}`);
    } else {
        return;
    }

    if (question = confirm('Не устал(a) еще, продолжаем?')) {
        // *
        x = parseInt(prompt('Только на 0 никого не надо умножать, хорошо? Умножение. Снова введи первое значение'));
        y = parseInt(prompt('А теперь второе'));
        res = x * y;
        alert(`Вот что получилось, когда ты ${x} умножил(a) на ${y} = ${res}`);
    } else {
        return;
    }

    if (question = confirm('И последнее')) {
        // /
        x = parseInt(prompt('Вообще ничего не поменялось, только сейчас деление, снова введи первое значение'));
        y = parseInt(prompt('А теперь второе'));
        res = x / y;
        alert(`Ты разделил(a) ${x} на ${y} и вот что получилось: ${res}`);
        alert('На этом все, спасибо!');
    } else {
        return;
    }
});

// 4

// 6

sixth.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const inputValue = sixthInput.value;

    if ( isNaN(inputValue) ) {
        sixthResult.textContent = 'эээ куда, текст нельзя';
    } else if (inputValue == '') {
        sixthResult.textContent = 'так тут пусто, нечего проверять';
    } else {
        sixthResult.textContent = 'да, все верно, тут число';
    }
});


