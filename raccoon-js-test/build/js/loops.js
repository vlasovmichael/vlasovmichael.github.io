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

// 1

(function() {
    const userName = 'Oleg';
    let str = 'Happy birthday to you';
    let array = [];

    for(let i = 0; i < 4; i++) {

        // console.log(str[i])
    }
}());

// 4

fouthBtn.addEventListener('click', () => {
    const anster = confirm('Продолжим?');
    
    do {
        confirm('Продолжим?');
        console.log(anster);
        continue;
    } while (anster == false);
});


// 1. Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for.
// 2. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного значения счетчика.
// 3. Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление. 
// Программа поздравляет того, чье имя определяется в переменной username:
// Happy birthday to you
// Happy birthday to you
// Happy birthday dear {{username}}
// Happy birthday to you
// 4. Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается при нажатии на Ok.
// 5. В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа до диапазона, 
// введенного пользователем. Результат отобразите в окне alert.
// 6. Напишите бесконечный цикл, который прерывается при помощи команды break, 
// когда Math.random() > 0.9. 
// Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.
// 7. Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 
// 8. С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд Фибоначчи: 0 1 1 2 3 5 8 13... 
// 9. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, 
// до тех пор, пока не будет нажата Отмена. 
// После выхода из цикла распечатайте количество введенных чисел, их общую сумму и среднее арифметическое.

// 10. Напишите проверку пароля, введенного пользователем (заведомо определите пароль). 
// Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. 
// Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, 
// пока пользователь не введет правильный пароль или не нажмет Отмена. 
// В случае отмены авторизации, выдать окно подтверждения с текстом: 
// “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, 
// тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, 
// тогда снова выдать запрос пароля
// 11. Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, но есть условия:

// - если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
// - если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
// - если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»; 

