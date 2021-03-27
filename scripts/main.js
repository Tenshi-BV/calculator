// UNIVERSAL VARIABLE DECLARATIONS
let number1;
let number2;
let displayValue = 0;

// OPERATOR FUNCTIONS
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number1, number2) {
    return number1 - number2;
}
function multiply(number1, number2) {
    return number1 * number2;
}
function divide(number1, number2) {
    return number1 / number2;
}

// CALCULATOR FUNCTIONS
function operate(operator, number1, number2) {
    return operator(number1, number2);
}

// DOM TARGETING
const displayWindow = document.querySelector('#display');
displayWindow.textContent = "0";

const button7 = document.querySelector('#7');
button7.addEventListener('', () => {

});

const button8 = document.querySelector('#8');
button8.addEventListener('', () => {

});

const button9 = document.querySelector('#9');
button9.addEventListener('', () => {

});

const buttonC = document.querySelector('#C');
buttonC.addEventListener('', () => {

});

const buttonAC = document.querySelector('#AC');
buttonAC.addEventListener('', () => {

});

const button4 = document.querySelector('#4');
button4.addEventListener('', () => {

});

const button5 = document.querySelector('#5');
button5.addEventListener('', () => {

});

const button6 = document.querySelector('#6');
button6.addEventListener('', () => {

});

const buttonMultiply = document.querySelector('#multiply');
buttonMultiply.addEventListener('', () => {

});

const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('', () => {

});

const button1 = document.querySelector('#1');
button1.addEventListener('', () => {

});

const button2 = document.querySelector('#2');
button2.addEventListener('', () => {

});

const button3 = document.querySelector('#3');
button3.addEventListener('', () => {

});

const buttonAdd = document.querySelector('#add');
buttonAdd.addEventListener('', () => {

});

const buttonSubtract = document.querySelector('#subtract');
buttonSubtract.addEventListener('', () => {

});

const button0 = document.querySelector('#zero');
button0.addEventListener('', () => {

});

const buttonDot = document.querySelector('#dot');
buttonDot.addEventListener('', () => {

});

const buttonEquals = document.querySelector('#equals');
buttonEquals.addEventListener('', () => {

});

const buttonFlip = document.querySelector('#flip');
buttonFlip.addEventListener('', () => {

});