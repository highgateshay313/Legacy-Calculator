


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


let currentNumber = "";
let lastNumber = "";
let operator = "";


let operators = {
    plus: "+",
    minus: "-",
    times: "x",
    division: "/",
    percent: "%",
    equals: "=",
}

function operate(firstNumber, secondNumber, op) {
    let num1 = currentNumber
    let num2 = lastNumber
    let operations = operator
    op = operations
    firstNumber = num1
    secondNumber = num2

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

numbers.forEach((button) => {
    button.addEventListener("click", (events) => {
        let numberPress = events.target.textContent;
        outputBox.textContent = numberPress

        if (numberPress != undefined && operator === "") {
            currentNumber = parseFloat(numberPress)
        } 

        else if (numberPress != undefined && operator != "") {
            lastNumber = parseFloat(numberPress)
           
        }
        console.log(currentNumber, lastNumber)
    })
})

sum.addEventListener("click", () => {
    let total =  operate(currentNumber, lastNumber, operator)
    outputBox.textContent = total
})













