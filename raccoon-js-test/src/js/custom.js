const first = document.querySelector('.first');

const second = document.querySelector('.second');
const secondBtn = second.querySelector('button');
const secondResult = second.querySelector('div');

const third = document.querySelector('.third');
const thirdBtn = third.querySelector('button');

const fouth = document.querySelector('.fouth');
const fouthBtn = fouth.querySelector('button');

const fifth = document.querySelector('.fifth');
const fifthInput = fifth.querySelector('input');
const fifthResult = fifth.querySelector('div');

const sixth = document.querySelector('.sixth');
const sixthInput = sixth.querySelector('input');
const sixthResult = sixth.querySelector('div');
const sixthLiveInput = sixth.querySelector('input[name="number"]');
const sixthLiveResult = sixth.querySelector('span');

const seventh = document.querySelector('.seventh');
const seventhBtn = seventh.querySelector('button');

const eighth = document.querySelector('.eighth');
const eighthBtn = eighth.querySelector('button');

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

let [workingHours, workingDays, workingRate, workingResult] = [];

fouthBtn.addEventListener('click', () => {
    workingHours = parseInt(prompt('Сколько часов ты в среднем ты работаешь?', 8));
    workingDays = parseInt(prompt('Сколько всего рабочих дней ты работал', 20));
    workingRate = parseFloat(prompt('Какой твой рейт'));
    
    workingResult = (workingHours * workingDays) * workingRate;

    alert(`
        Ты трудился в среднем по ${workingHours} часов в день
        в этом месяце ты проработал ${workingDays} дней
        твой рейт составляет ${workingRate}
        и ты получишь ${workingResult} $ в этом месяце
    `);
});

// 5

fifthInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value);

    if (value % 2) {
        fifthResult.textContent = 'нечетное';
    } else {
        fifthResult.textContent = 'четное';
    }
});

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

sixthLiveInput.addEventListener('input', (e) => {
    const regex = /\d/g;

    if (e.target.value.match(regex)) {
        sixthLiveResult.textContent = 'да, все верно, тут число';
    } else if (e.target.value == '') {
        sixthLiveResult.textContent = '';
    } else {
        sixthLiveResult.textContent = 'эээ куда, текст нельзя';
    }
});

// 7

seventhBtn.addEventListener('click', () => {
    const randomVal = Math.round(Math.random() * 101);
    const userVal = parseInt(prompt('Напиши любое число'));
    const result = randomVal < userVal;

    if (userVal > 100) {
        alert('Слишком большое значение, попробуй еще раз');
        return;
    }
    
    if (result) {
        alert(
            `
            Твое число больше случайного.
            Случайное число: ${randomVal}
            Твое число: ${userVal}
            `
        );
    } else if (userVal < 0) {
        alert('Слишком маленькое значение, попробуй еще раз');
    } else {
        alert(
            `
            Твое число меньше случайного.
            Случайное число: ${randomVal}
            Твое число: ${userVal}
            `
        );
    }
});

// 8

let [str, myStr, includeSubStr, strResult, myStrResult] = [];

eighthBtn.addEventListener('click', () => {
    str = prompt('Мне нравится изучать Front-end', 'Мне нравится изучать Front-end');
    myStr = prompt('Напиши, что тебе нравится изучать', 'Мне нравится изучать JS');

    includeSubStr = myStr.includes(str);
    strResult = str.slice(0, 21);
    myStrResult = myStr.slice(21);

    if (!includeSubStr) {
        alert('Ой, кажется вам не нравится изучать Front-end');
    }

    alert(`${strResult} ${myStrResult}`);
});
