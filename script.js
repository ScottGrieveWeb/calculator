// functions for maths operations
function add(a, b) {
    console.log(a + b);
}

function sub(a, b){
    console.log(a - b);
}

function divide(a, b){
    console.log(a / b);
}

function multiply(a, b){
    console.log(a * b);
}

// takes in two values and an operator, and calls one of the maths functions
function calc(num1, operator, num2) {
    switch (operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            sub(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
    }
}

// links up the HTML buttons to JS
const digitBtns = document.querySelectorAll('.digit');

console.log(digitBtns);

const btnArray = Array.from(digitBtns);

console.log(btnArray);

for (let i=0; i < btnArray.length; i++){
    let btnValue = btnArray[i].textContent;
    btnArray[i].addEventListener("click", test.bind(null, btnValue));
    
}



function test(value){
    console.log(value);
    calcDisplay.value =+ value;
    displayContainer.append(calcDisplay);
}

const calcDisplay = document.querySelector('#display');
const displayContainer = document.querySelector('.display-container');
console.log(displayContainer);
console.log(calcDisplay);
let firstNum;
let secondNum;
let operator;