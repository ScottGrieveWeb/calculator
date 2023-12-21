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
            console.log(num1);
            console.log(num2);
            console.log(add(num1, num2));
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


const btnArray = Array.from(digitBtns);


for (let i=0; i < btnArray.length; i++){
    let btnValue = btnArray[i].textContent;
    btnArray[i].addEventListener("click", display.bind(null, btnValue));
    
}


// adds value of bttn pressed to the display
function display(value){

    calcDisplay.value = calcDisplay.value + value;
    displayContainer.append(calcDisplay);
}

const calcDisplay = document.querySelector('#display');
calcDisplay.value = '';
const displayContainer = document.querySelector('.display-container');




const equalsBttn = document.querySelector('.equal');
// equalsBttn.addEventListener("click", calc.bind(null, firstNum, operator, secondNum));


// AC bttn clears calc display
const clearBttn = document.querySelector('.clear');
clearBttn.addEventListener("click", clear.bind(null));

function clear() {
    calcDisplay.value='';
    displayContainer.append(calcDisplay);
}
