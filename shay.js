


const numbers = document.querySelectorAll(".numberBtn");
const Operator = document.querySelectorAll(".operation");
const outputBox = document.querySelector(".output");
const clear = document.querySelector(".allClear");
const back = document.querySelector(".backspace");
const Plus = document.querySelector(".plusSign");
const sum = document.querySelector(".equals");
const choice = document.querySelector(".choice-display");
const firstOperand = document.querySelector(".firstOperand");
const secondOperand = document.querySelector(".secondOperand");


//Functions for all math operations
const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const percentageOf = (num1, num2) => {
    return (num1 / num2) *100;
};

//Global variables for storing values selected
let currentNumber = "";
let lastNumber = "";
let operator = "";

//Object for all operators
let operators = {
    plus: "+",
    minus: "-",
    times: "x",
    division: "/",
    percent: "%",
    equals: "=",
};

//Function for handling math operators
function operate(firstNumber, secondNumber, op) {
    let num1 = parseFloat(currentNumber)
    let num2 = parseFloat(lastNumber)
    let operations = operator
    op = operations
    firstNumber = num1
    secondNumber = num2
    op = operations

    if (op === operators.plus) {
       return add(firstNumber, secondNumber)
    }

    else if (op === operators.minus) {
        return  subtract(firstNumber, secondNumber)
    }

    else if (op === operators.times) {
        return   multiply(firstNumber, secondNumber)
    }

    else if (op === operators.division) {
        return  divide(firstNumber, secondNumber)
    }

    else if (op === operators.percent) {
        return  percentageOf(firstNumber, secondNumber)
    }
};

//Event for operator buttons
Operator.forEach((btn) => {
    btn.addEventListener("click", (ev) => {
        let btnPress = ev.target.textContent;
        operator = btnPress
        outputBox.textContent = operator
        
        if (operator 
                === "+" || operator
                === "-" || operator
                === "x" || operator
                === "/" || operator
                === "%") {
                    operate()
                }
    })
});

//Event for number buttons
numbers.forEach((button) => {
    button.addEventListener("click", (events) => {
        let numberPress = events.target.textContent;
        outputBox.textContent = numberPress

        if (numberPress != undefined && operator === "") {
            currentNumber += numberPress 
            outputBox.textContent = currentNumber;
            return currentNumber;
        } 

        else if (numberPress != undefined && operator != "") {
            lastNumber += numberPress
            outputBox.textContent = lastNumber;
            return lastNumber;
        
        }
        console.log(currentNumber, lastNumber)
    })
});

//Function to add all values together
function grandTotal() {
    let total = operate(currentNumber, lastNumber, operator);
    outputBox.textContent = total;

    if (outputBox.textContent == total) {
        currentNumber = total
        lastNumber = ""
        return currentNumber + lastNumber;
    }
};

//Function to clear all values
function clearAll() {
   outputBox.textContent = ""
   currentNumber = ""
   lastNumber = ""
   operator = ""

};

//Event to handle equals button
sum.addEventListener("click", grandTotal);

//Event to handle all clear button
clear.addEventListener("click", clearAll);



















