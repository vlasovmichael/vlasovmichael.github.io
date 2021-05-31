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

// const sixth = document.querySelector('.sixth');
// const sixthResult = sixth.querySelector('span');

// const seventh = document.querySelector('.seventh');
// const seventhBtn = seventh.querySelector('button');

// const eighth = document.querySelector('.eighth');
// const eighthBtn = eighth.querySelector('button');

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

fifthBtn.addEventListener('click', () => {
    let persone = {
        name: 'Oleg',
        age: 18,
    };
    let userAnswer = prompt('Введите свойство');
    let result = userAnswer in persone;

    if (result) {
        alert(`Свойство ${userAnswer} существует`);
    } else {
        alert(`Свойства ${userAnswer} нет в объекте, добавьте новое значение`);

        let newValue = prompt('Значение');
        persone[userAnswer] = newValue;
    }

    alert(JSON.stringify(persone));
});

// Создайте ассоциативный массив person, описывающий персону, 
// с произвольным количеством произвольных полей. 
// С помощью оператора in или typeof проверьте наличие в объекте свойства, 
// прочитанного из prompt, и выведите его на экран. 
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let arr = [];
for (let i = 1; i < 11; i++) {
    arr.push(i);

    for (let j = 1; j < 11; j++) {
        let newArr = i * j;

        arr.push(newArr);
    }
}
// console.log(arr);

// 11
const fragment = document.createDocumentFragment();
const img = document.createElement('img');
img.src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fizi.ua%2Fp-10775461-chyornaya-devochka-labradora&psig=AOvVaw3DvKpuH9PrTrpGa2fenSw8&ust=1622532381350000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNC8gdKy8_ACFQAAAAAdAAAAABAJ';
img.alt = 'labrador';
img.width = 300;
img.height = 450;
img.style.border = '1px solid #eee';
// img.crossOrigin = 'Anonymous';
fragment.append(img);
tenth.append(fragment);
