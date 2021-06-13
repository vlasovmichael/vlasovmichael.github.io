const first = document.querySelector('.first');
const firstBtn = first.querySelector('button');

const second = document.querySelector('.second');
const secondBtn = second.querySelector('button');

const third = document.querySelector('.third');
const thirdBtn = third.querySelector('button');

const fouth = document.querySelector('.fouth');
const fouthBtn = fouth.querySelector('button');

const fifth = document.querySelector('.fifth');
const fifthBtn = fifth.querySelector('button');

const sixth = document.querySelector('.sixth');
const sixthBtbn = sixth.querySelector('button');

const seventh = document.querySelector('.seventh');
const seventhBtn = seventh.querySelector('button');

const eighth = document.querySelector('.eighth');
const eighthBtn = eighth.querySelector('button');

const ninth = document.querySelector('.ninth');
const ninthBtn = ninth.querySelector('button');

const tenth = document.querySelector('.tenth');

// 1

firstBtn.addEventListener('click', () => {
    const arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
    const res = arr.reduce((acc, current) => acc + current);
    
    alert(res);
});

// 2

secondBtn.addEventListener('click', () => {
    const random = Number((Math.random() * 20).toFixed());
    const arr = [];
    
    for (let i = 1; i < random; i++) {
        let randomNumber = Number((Math.random() * 20).toFixed(2));
        randomNumber **= 5;

        arr.push(randomNumber);
    }

    alert(arr);
});

// 3

thirdBtn.addEventListener('click', () => {
    const thirdTaskArray = ['AngularJS', 'jQuery'];
    thirdTaskArray.unshift('Backbone.js');
    thirdTaskArray.push('ReactJS', 'Vue.js');
    thirdTaskArray.splice(1, 0, 'CommonJS');

    for (let i = 0; i < thirdTaskArray.length; i++) {
        const targetElement = thirdTaskArray[i];

        if (targetElement === 'jQuery') {
            const targetPosition = thirdTaskArray.indexOf(targetElement);

            alert(`Среди массива ${thirdTaskArray}, это здесь лишнее: ${targetElement}`);
            thirdTaskArray.splice(targetPosition, 1)
        }
    }
});

// 4

fouthBtn.addEventListener('click', () => {
    const text = 'Как однажды Жак звонарь сломал фонарь головой';
    const array = text.split(' ');
    const move = (from, to, ...arr) => 
        from === to 
        ? arr
        : (arr.splice(to, 0, ...arr.splice(from, 1)), arr);
    const res = move(6, 4, ...array);

    alert(res.join(' '));
});

// 5

let persone = {
    name: 'Oleg',
    age: 18,
};

fifthBtn.addEventListener('click', () => {
    let userAnswer = prompt('Введите ключ');
    let result = userAnswer in persone;

    if (result) {
        alert(`Ключ ${userAnswer} существует`);
    } else {
        alert(`Ключа ${userAnswer} нет в объекте, добавьте новое значение`);
        let newValue = prompt('Значение');
        persone[userAnswer] = newValue;
    }

    alert(JSON.stringify(persone));
});

// 6

let phone = {
    brand: null,
    model: null,
    color: null
};

sixthBtbn.addEventListener('click', () => {
    for (key in phone) {
        let userAnswer = prompt(`Введите ${key} телефона`);
        phone[key] = userAnswer;
    }
        
    Object.assign(persone, phone);

    sixth.append(JSON.stringify(Object.assign(persone, phone)));
});

// 7

seventhBtn.addEventListener('click', () => {
    const dates = {
        current: new Date().toDateString(),
        oneYearFromNow: new Date(new Date().setFullYear(new Date().getFullYear() - 1)).toDateString()
    };
    const userAnswer = new Date(prompt('Введите дату в форммате yyyy-MM-dd')).toDateString();

    userAnswer <= dates.current && userAnswer >= dates.oneYearFromNow ? alert('Все верно!') : alert('Не верно!');
});

// 8

eighthBtn.addEventListener('click', () => {
    let [i = 0, arr = [], userAnswer] = [];

    do {
        userAnswer = prompt('Введите любое значение');
        arr.push(userAnswer);
        i++;
    } while (userAnswer);

    alert(`
        Сумма всех чисел массива: ${i - 1}
        ${arr.join(' ')}
    `);
});

// 9

ninthBtn.addEventListener('click', () => {
    let arr = [];

    for (let i = 1; i < 11; i++) {
        arr[i - 1] = [];
    
        for (let j = 1; j < 11; j++) {
            arr[i - 1].push(`${i}*${j} = ${i * j}`);
        }
    }

    alert('Result in the console');
    console.log(arr);
});

// 10

const img = document.createElement('img');
img.src = 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
img.alt = 'google';
img.width = 272;
img.height = 92;
img.style.border = '1px solid #eee';
tenth.append(img);
