const resultEl = document.querySelector('.main-form_result__input');
const lengthEl = document.querySelector('.main-form-options-list__number');
const lowerEl = document.querySelector('.main-form-options-list__lower');
const upperEl = document.querySelector('.main-form-options-list__upper');
const numberEl = document.querySelector('.main-form-options-list__numbers');
const symbolsEl = document.querySelector('.main-form-options-list__symbols');
const generateEl = document.querySelector('.main-form__btn');
const clipbordEl = document.querySelector('.main-form_result__copy');

const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateEl.addEventListener('click', (e) => {
    e.preventDefault();
    const length = +lengthEl.value;
    const hasUpper = upperEl.checked;
    const hasLower = lowerEl.checked;
    const hasNumbers = numberEl.checked;
    const hasSymbols = symbolsEl.checked;

    resultEl.innerText = generatePassword(hasUpper, hasLower, hasNumbers, hasSymbols, length);
});

clipbordEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;
    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
});

function generatePassword(lower, upper, number, symbol, length) {
    let generatedPassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);

    if (typesCount === 0) {
        return '';
    }

    for ( let i = 0; i < length; i+=typesCount ) {
        typesArr.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    const finalPass = generatedPassword.slice(0, length);
    return finalPass;
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.';
    return symbols[Math.floor(Math.random() * symbols.length)];
}