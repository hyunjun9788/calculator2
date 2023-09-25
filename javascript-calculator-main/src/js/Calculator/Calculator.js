// export default class Calculator {
//     constructor(){this.firstNum = ""
//     this.secondNum = "";
//     this.operator = "";
//     this.result = "";
// }

// render(){
//     document.querySelector('#total').textContent =
//         this.firstNum + this.operator + this.secondNum
// }

// reset(){
//     this.firstNum = "";
//     this.secondNum = "";
//     this.operator = "";
//     this.result = "";
//     document.querySelector('total').textContent = 0;
// }
let currentInput = "";
let displayValue = "";
let resultValue = "";
let operator = "";

const result = document.getElementById("total");

export function handleDigitClick(digit) {
  if (displayValue === "0") {
    displayValue = digit;
  } else {
    displayValue += digit;
  }
  currentInput += digit;

  result.textContent = displayValue;
}

export function handleOperationClick(operation) {
  if (operator === "") {
    currentInput += operation;
    displayValue += operation;
    operator = operation;
    result.textContent = displayValue;
    console.log(operation);
  }
}

export function handleResetClick() {
  currentInput = "";
  displayValue = "0";
  resultValue = "";
  operator = "";
  result.textContent = displayValue;
}

export function calculate() {
  let calculation = currentInput.split(operator);
  let operand1 = parseFloat(calculation[0]);
  let operand2 = parseFloat(calculation[1]);

  switch (operator) {
    case "+":
      resultValue = operand1 + operand2;
      break;
    case "-":
      resultValue = operand1 - operand2;
      break;
    case "*":
      resultValue = operand1 * operand2;

      break;
    case "/":
      resultValue = operand1 / operand2;
      break;
  }
  result.textContent = Math.floor(resultValue);

  currentInput = resultValue.toString();
  displayValue = currentInput;
}
