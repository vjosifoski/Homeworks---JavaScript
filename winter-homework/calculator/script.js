let displayMemory = document.getElementById("displayMemory");
let decimalResult = document.getElementById("decimalResult");
let numberButton = document.getElementsByClassName("number");
let operatorButtons = document.getElementsByClassName("operator");
let clearButton = document.getElementsByClassName("clear")[0];
let equalButton = document.getElementsByClassName("equal")[0];
let decimalButton = document.getElementsByClassName("decimal")[0];
let backspaceButton = document.getElementsByClassName("backspace")[0];

let firstNumber = "";
let selectedOperator = "";
let secondNumber = "";
let enteringSecondNumber = false;
let finalResult = "";
let endResult = "";

function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (operator === "/" && num2 === 0) {
    return "Cannot divide by zero";
  }

  let result = "";
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    case "*":
      result = num1 * num2;
      break;
  }
  return result;
}

for (let i = 0; i < numberButton.length; i++) {
  numberButton[i].addEventListener("click", function () {
    console.log(numberButton[i].value);
    if (enteringSecondNumber === false) {
      if (firstNumber.length < 8) {
        firstNumber += numberButton[i].value;
      }
    } else {
      if (secondNumber.length < 8) {
        secondNumber += numberButton[i].value;
      }
    }
    decimalResult.innerText = `${firstNumber} ${selectedOperator} ${secondNumber}`;
  });
}

decimalButton.addEventListener("click", function () {
  if (enteringSecondNumber === false) {
    if (!firstNumber.includes(".")) {
      firstNumber += ".";
    }
  } else if (enteringSecondNumber === true) {
    if (!secondNumber.includes(".")) {
      secondNumber += ".";
    }
  }
  decimalResult.innerText = `${firstNumber} ${selectedOperator} ${secondNumber}`;
});

for (let i = 0; i < operatorButtons.length; i++) {
  operatorButtons[i].addEventListener("click", function () {
    if (firstNumber === "") {
      return;
    }
    if (enteringSecondNumber && secondNumber !== "") {
      let result = calculate(firstNumber, secondNumber, selectedOperator);
      if (!isNaN(result)) {
        firstNumber = result.toString();
        secondNumber = "";
        decimalResult.innerText = result;
      } else {
        decimalResult.innerText = "";
        firstNumber = "";
        secondNumber = "";
      }
    }

    selectedOperator = operatorButtons[i].value;
    enteringSecondNumber = true;
    if (firstNumber === "") {
      firstNumber = displayMemory.innerText;
    }
    decimalResult.innerText = `${firstNumber} ${selectedOperator} ${secondNumber}`;
    displayMemory.innerText = `${firstNumber} ${secondNumber}`;
  });
}

clearButton.addEventListener("click", function () {
  displayMemory.innerText = "";
  decimalResult.innerText = "";
  finalResult = "";
  firstNumber = "";
  secondNumber = "";
  selectedOperator = "";
  enteringSecondNumber = false;
});

backspaceButton.addEventListener("click", function () {
  if (enteringSecondNumber) {
    if (secondNumber.length > 0) {
      secondNumber = secondNumber.slice(0, -1);
    }
  } else {
    if (firstNumber.length > 0) {
      firstNumber = firstNumber.slice(0, -1);
    }
  }
  decimalResult.innerText = `${firstNumber} ${selectedOperator} ${secondNumber}`;
});

equalButton.addEventListener("click", function () {
  let result = calculate(firstNumber, secondNumber, selectedOperator);
  console.log(result);

  if (!isNaN(result)) {
    firstNumber = endResult.toString();
    displayMemory.innerText = result;
  } else {
    endResult = displayMemory.innerText = result;
  }

  finalResult = "";
  secondNumber = "";
  selectedOperator = "";
  decimalResult.innerText = `${firstNumber} ${selectedOperator} ${secondNumber}`;
});
