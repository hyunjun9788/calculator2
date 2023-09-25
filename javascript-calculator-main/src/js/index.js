// const calculator = new Calculator();

// document.querySelector(".digit").onclick = (e) => {
//   if (calculator.result !== "") {
//     calculator.reset();
//   }

//   if (calculator.operator === "") {
//     calculator.setFirstNum(e.target.textContent);
//     calculator.render();
//   }
//   if (calculator.operator !== "") {
//     calculator.setSecondNum(e.target.textContent);
//     calculator.render();
//   }
// };

// document.querySelector(".operation").onClick = (e) => {
//   if (calculator.result !== "") {
//     alert(ERROR.RESET.RESULT);
//     calculator.reset();
//     return;
//   }

//   if (calculator.operator !== "" && e.target.textContent !== "=") {
//     alert(ERROR.RESET_RESULT);
//     calculator.reset();
//     return;
//   }

//   if (e.target.textContent === "=") {
//     if (!Utils.hasTwoNums(calculator.firstNum, calculator.secondNum)) {
//       alert(ERROR.HAS_NOT_TWO_NUMS);
//       return;
//     }
//     calculator.calculate();
//     calculator.renderResult();
//   } else {
//     calculator.setOperator(e.target.textContent);
//     calculator.render();
//   }
// };

// document.querySelector(".modifier").onClick = () => calculator.reset();

import {
  handleDigitClick,
  handleOperationClick,
  handleResetClick,
  calculate,
} from "./Calculator/Calculator.js";

let currentInput = "";
let resultValue = "";
let displayValue = "";
const result = document.getElementById("total");

document.querySelector(".digits").addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("digit")) {
    handleDigitClick(target.textContent);
  }
});

document
  .querySelector(".operations")
  .addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("operation")) {
      handleOperationClick(target.textContent);
    }
    if (target.textContent === "=") {
      calculate();
    }
  });

document
  .querySelector(".modifiers")
  .addEventListener("click", function (event) {
    const target = event.target;

    if (target.classList.contains("modifier")) {
      handleResetClick();
    }
  });

result.textContent = Math.floor(resultValue);
currentInput = resultValue.toString();
displayValue = currentInput;
