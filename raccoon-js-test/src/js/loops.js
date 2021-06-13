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
const sixthBtn = sixth.querySelector('button');

const seventh = document.querySelector('.seventh');
const seventhBtn = seventh.querySelector('button');
const seventhRes = seventh.querySelector('.res');

const eighth = document.querySelector('.eighth');
const eighthBtn = eighth.querySelector('button');

const ninth = document.querySelector('.ninth');
const ninthBtn = ninth.querySelector('button');

const tenth = document.querySelector('.tenth');
const tenthBtn = tenth.querySelector('button');

const eleventh = document.querySelector('.eleventh');
const eleventhBtn = eleventh.querySelector('button');
const eleventhResult = eleventh.querySelector('div');

// 1

firstBtn.addEventListener('click', () => {
    let [dot = '.', hash = '#', arr = []] = [];

    for (let i = 0; i < 6; i++) {
        arr.push(dot, hash);

        if (i === 5) arr.push(dot);
    }
    
    alert(arr.join(''));
});

// 2

secondBtn.addEventListener('click', () => {
    const res = [];

    for (let i = 0; i < 10; i++) {
        if ( i % 2 == 0 ) res.push(i * i);
    }

    alert(res);
});

// 3

thirdBtn.addEventListener('click', () => {
    let [userName = 'John', text = 'Happy birthday to you', res = []] = [];
    
    for (let i = 0; i < 4; i++) {
        i === 2 ?
            res.push(text.concat(` dear ${userName}`)) :
            res.push(text);
    }
    
    third.append(res);
});

// 4

fouthBtn.addEventListener('click', () => {
    let userAnswer;

    do {
        userAnswer = confirm('Eще?');
    } while (!userAnswer);
});

// 5

fifthBtn.addEventListener('click', () => {
    const userAnswer = Number(prompt('Please enter your number', 10));
    let arr = [];

    for (let i = 0; i <= userAnswer; i++) {
        if ( i % 2 !== 0) arr.push(i);
    }

    const res = arr.reduce((acc, current) => acc + current);

    alert(res);
});

// 6

sixthBtn.addEventListener('click', () => {
    for (let i = 0;; i++) {
        const random = Math.random();
        const condition = 0.9;
        
        if (random > condition) {
            alert(`Random number: ${random}, counts: ${i}`);
            break;
        }
    }
});

// 7

seventhBtn.addEventListener('click', () => {
    let res = '';

    for (let i = 1; i < 11; i++) {
        for (let j = 1; j < 11; j++) {
            res += `${i}*${j} = ${i * j} <br>`;
        }
    }
    
    seventhRes.insertAdjacentHTML('afterend', res);
});

// 8

eighthBtn.addEventListener('click', () => {
    let [num0 = 0, num1 = 1, nextNum] = [];

    for (let i = 1; i <= 20; i++) {
        nextNum = num0 + num1;
        num0 = num1;
        num1 = nextNum;
        eighth.append(' ' + nextNum + ' ') 
    }
});


// 9

ninthBtn.addEventListener('click', () => {
    let [userAnswer, sum = 0, average, i] = [];

    for (i = 0;; i++) {
        userAnswer = +prompt('Enter a number', 4);
        sum += userAnswer;
        average = sum / i;

        if (!userAnswer) break;
    }

    alert(`
        Количество введенных чисел: ${i}
        Общая сумма: ${sum}
        Среднее арифметическое: ${average}
    `);
});

// 10

tenthBtn.addEventListener('click', () => {
    let [password = '123', userAnswer] = [];

    do {
        userAnswer = prompt('Ведите пароль');

        if (userAnswer === null) {
            const doubleCheck = confirm('Вы уверены, что хотите отменить авторизацию?');

            if (doubleCheck) {
                alert('Вы отменили авторизацию');
                break;
            }
        } else if ( password === userAnswer ) {
            alert('Вы успешно авторизованы!');
            break;
        }
    } while (password !== userAnswer) 
});

// 11

eleventhBtn.addEventListener('click', () => {
    for (let i = 1; i < 51; i++) {
        switch (true) {
            case i % 3 === 0 && i % 5 === 0:
                eleventhResult.insertAdjacentHTML('beforeend', 'FizzBuzz' + '<br/>');
                break;
            case i % 3 === 0:
                eleventhResult.insertAdjacentHTML('beforeend', 'Fizz' + '<br/>');
                break;
            case i % 5 === 0:
                eleventhResult.insertAdjacentHTML('beforeend', 'Buzz' + '<br/>');
                break;
            default:
                eleventhResult.insertAdjacentHTML('beforeend', i + '<br/>');
        }
    }
}); 
