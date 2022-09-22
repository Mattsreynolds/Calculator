const buttons = document.querySelectorAll('.number')
const operation = document.querySelectorAll('.operator')
const display = document.querySelector('.display')
const clearButton = document.querySelector('.clear')
const equalsButton = document.querySelector('.equals')

let displayData = "";
let result = "";

buttons.forEach(button => {
    button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-num');    
    displayData += buttonValue;
    display.textContent = displayData;
    currentNum = displayData;

    })
})

operation.forEach(button => {
    button.addEventListener('click', () => { 
    const buttonValue = button.getAttribute('data-num');  
    displayData = buttonValue;
    display.textContent = displayData;
    op = displayData;
    previousNum = currentNum;
    displayData = "";
    })
})

clearButton.addEventListener('click', () => { 
    displayData = "";
    display.textContent = displayData;
})

equalsButton.addEventListener('click', () => { 
    operator(op);
    display.textContent = currentNum.toFixed(10);
})

function operator(op) {
    if (op === "+") {
      currentNum = (Number(previousNum) + Number(currentNum));
    }
    else if (op === "-") {
      currentNum = (Number(previousNum) - Number(currentNum));
    }
    else if (op === "*") {
      currentNum = (Number(previousNum) * Number(currentNum));
    }
    else if (op === "/") {
      currentNum = (Number(previousNum) / Number(currentNum));
    }

  }

  