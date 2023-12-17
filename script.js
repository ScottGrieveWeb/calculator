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

const digitBtns = document.querySelectorAll('.digit');

console.log(digitBtns);

digitBtns.forEach(digitBtn => digitBtn.addEventListener('click', test));

function test(){
    console.log("Hello!");
}