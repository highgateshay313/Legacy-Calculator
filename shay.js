


const numbers = document.querySelectorAll(".digit");
const Operator = document.querySelectorAll(".op");
const outputBox = document.querySelector(".output");
const clear = document.querySelector(".allClear");
const back = document.querySelector(".backspace");
const Plus = document.querySelector(".plusSign");
const sum = document.querySelector(".equals");
// const first = document.querySelector(".first");
// const second = document.querySelector(".second");
const choice = document.querySelector(".choice-display")



const input = document.querySelector(".numberInput");
const para = document.querySelector("p");




const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const times = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const percent = (num1, num2) => {
    return (num1 / num2) *100;
};

//Switch statment for operators
let first = 0;
let second = 0;
let operators = "";

function firstNum(firstNumber) {
   let firstValue = parseFloat(firstNumber.target.value);
    first = firstValue;
    outputBox.textContent = first;
    return first;
}

function secondNum(secondNumber) {
   let secondValue = parseFloat(secondNumber.target.value);
    second = secondValue;
    outputBox.textContent = second;
    outputBox.style.colot = "red"
    return second;
}

function opSign(sign) {
    let opValue = sign.target.value;
    operators = opValue;
    outputBox.textContent = operators;
    outputBox.style.color = "white"
    return operators;
    
}

function operation(firstOperand, secondOperand, op) {
 
}



//Event for number buttons
numbers.forEach((numberBtn) => {
    numberBtn.addEventListener("click", firstNum);
    console.log(first)
});


//Event for operator buttons
Operator.forEach((opBtn) => {
    opBtn.addEventListener("click", opSign);
});







//Math functions











