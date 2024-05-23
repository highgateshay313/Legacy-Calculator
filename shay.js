
const numbers = document.querySelectorAll(".numberBtn");
const Operate = document.querySelectorAll(".orange");
const outputBox = document.querySelector(".output");
const Output1 = document.querySelector(".output1");
const OutPut2 = document.querySelector(".output2");
const clear = document.querySelector(".allClear");

let firstNum = "";
let secondNum = "";
let operator = "";







numbers.forEach(btn => 
    btn.addEventListener("click", (e) => {
        firstNum = e.target.innerHTML;
        let para = document.createElement("h3");
        para.textContent = firstNum;
        outputBox.appendChild(para);
        
        
    }));




    Operate.forEach(btn => 
    btn.addEventListener("click", (e) => {
        value = e.target.innerHTML;
        const op = document.createElement("h3");
        op.style.display = "inline"
        op.textContent = value;
        op.style.color = "white"
        OutPut2.appendChild(op);
    }))

  

    clear.addEventListener("click", () => {
        let cleared = "";
        Output1.textContent = cleared;
    })

 
    function add(a, b) {
    return a + b;
 };

    function subtraction(a, b) {
    return a - b;
 };

    function multiply(a, b) {
    return a * b;
 };

    function divide(a, b) {
    return a / b;
 };

 function percentage(a, b) {
    return (a/b) * 100;
 };

















