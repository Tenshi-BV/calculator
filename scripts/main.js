// UNIVERSAL VARIABLE DECLARATIONS
let number1;
let number2;
let operation;
let displayValue = "0";
const displayWindow = document.querySelector('#display');
displayWindow.textContent = 0;

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

// DISPLAY FUNCTIONS
function keyPress(x) {
    x = x.toString();
    if (displayValue == 0) {
        displayValue = x;
    } else {
        displayValue = displayValue + x;
    }
    updateDisplay();
}

function deleteLast() {
    if (displayValue.length == 0) {
        return;
    } else if (displayValue.length == 1) {
        displayValue = "0";
        updateDisplay();
    } else {
        displayValue = displayValue.slice(0, -1);
        updateDisplay();
    }
}

function undoAll() {
    number1 = undefined;
    number2 = undefined;
    operation = undefined;
    displayValue = "0";
    updateDisplay();
}

function operationAssignment(x) {
    if (operation != undefined) {
        // needs to call operate()
    } else {
        operation = x
    }
}

function updateDisplay() {
    displayWindow.textContent = displayValue;
}

// DOM TARGETING
const button7 = document.querySelector('#seven');
button7.addEventListener('click', () => keyPress(7));

const button8 = document.querySelector('#eight');
button8.addEventListener('click', () => keyPress(8));

const button9 = document.querySelector('#nine');
button9.addEventListener('click', () => keyPress(9));

const buttonC = document.querySelector('#C');
buttonC.addEventListener('click', () => deleteLast());

const buttonAC = document.querySelector('#AC');
buttonAC.addEventListener('click', () => undoAll());

const button4 = document.querySelector('#four');
button4.addEventListener('click', () => keyPress(4));

const button5 = document.querySelector('#five');
button5.addEventListener('click', () => keyPress(5));

const button6 = document.querySelector('#six');
button6.addEventListener('click', () => keyPress(6));

const buttonMultiply = document.querySelector('#multiply');
buttonMultiply.addEventListener('click', () => operationAssignment("multiplication"));

const buttonDivide = document.querySelector('#divide');
buttonDivide.addEventListener('click', () => operationAssignment("division"));

const button1 = document.querySelector('#one');
button1.addEventListener('click', () => keyPress(1));

const button2 = document.querySelector('#two');
button2.addEventListener('click', () => keyPress(2));

const button3 = document.querySelector('#three');
button3.addEventListener('click', () => keyPress(3));

const buttonAdd = document.querySelector('#add');
buttonAdd.addEventListener('click', () => operationAssignment("addition"));

const buttonSubtract = document.querySelector('#subtract');
buttonSubtract.addEventListener('click', () => operationAssignment("subtraction"));

const button0 = document.querySelector('#zero');
button0.addEventListener('click', () => keyPress(0));

const buttonDot = document.querySelector('#dot');
buttonDot.addEventListener('click', () => {

});

const buttonEquals = document.querySelector('#equals');
buttonEquals.addEventListener('', () => {

});

const buttonFlip = document.querySelector('#flip');
buttonFlip.addEventListener('', () => {

});