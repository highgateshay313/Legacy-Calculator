
const numbers = document.querySelectorAll(".numberBtn");
const Operate = document.querySelectorAll(".orange");
const outputBox = document.querySelector(".output");
const Output1 = document.querySelector(".output1");
const OutPut2 = document.querySelector(".output2");










numbers.forEach(btn => 
    btn.addEventListener("click", (e) => {
        value = e.target.innerHTML;
        const para1 = document.createElement("h3");
        para1.style.display = "inline"
        para1.style.color = "red"
        para1.textContent = value;
        Output1.appendChild(para1)
       
    }));

Operate.forEach(btn => 
    btn.addEventListener("click", (e) => {
        value = e.target.innerHTML;
        "+" = add();
        const op = document.createElement("h3");
        op.textContent = value;
        OutPut2.appendChild(op)
    })
)



function Operator(firstNum, op, secondNum) {
    this.firstNum = firstNum;
    this.op = op;
    this.secondNum = secondNum;

    this.add = function () {
        let sum = firstNum + secondNum;
        return sum
    };

    this.subtract = function () {
        let sum = firstNum - secondNum;
        return sum;
    }
    
}


const cal = new Operator(10, "=", 9);
console.log(cal.subtract())












// function subtract(a, b) {
//     let sum = a - b;
//     return sum;
// } 

// function times(a, b) {
//     let sum = a * b;
//     return sum;
// }

// function divide(a, b) {
//     let sum = a / b;
//     return sum;
// }

