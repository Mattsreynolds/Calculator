const buttons = document.querySelectorAll('.number')
const operation = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')

let currentNum = "";
let opValue = "";
let op = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 
    let buttonValue = button.getAttribute('data-num');    
    handleNumber(buttonValue);
    })
})

operation.forEach(button => {
    button.addEventListener('click', () => { 
    let opValue = button.getAttribute('data-num');  
    handleOperator(opValue);
    })
})

clearButton.addEventListener('click', () => { 
    displayData = "";
    previousNum = "";
    currentNum = "";
    display.textContent = displayData;
})

equalsButton.addEventListener('click', () => { 
    operator();
})

function handleNumber(number) {
  if (currentNum.length <= 11) {
      currentNum += number;
      display.textContent = currentNum;
  }
}

function handleOperator(op) {
  oper = op;
  previousNum = currentNum;
  display.textContent = op;
  currentNum = "";

}

function operator() {
    if (oper === "+") {
      previousNum = (Number(previousNum) + Number(currentNum));
    } else if (oper === "-") {
      previousNum = (Number(previousNum) - Number(currentNum));
    } else if (oper === "*") {
      previousNum = (Number(previousNum) * Number(currentNum));
    } else if (oper === "/") {
    if (currentNum <= 0) {
      previousNum = 'Error';
    } else {
      previousNum = (Number(previousNum) / Number(currentNum));
    }} displayResult();
    
  }


function displayResult() {
  previousNum = String(previousNum);
  if (previousNum.length <= 11) {
      display.textContent = previousNum;
    } else {
      display.textContent = previousNum.slice(0, 11) + "...";
    }
}
