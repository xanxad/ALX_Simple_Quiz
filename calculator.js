// Function to add two numbers
function add(number1, number2) {
  return number1 + number2;
}

// Function to subtract second number from the first number
function subtract(number1, number2) {
  return number1 - number2;
}

// Function to multiply two numbers
function multiply(number1, number2) {
  return number1 * number2;
}

// Function to divide the first number by the second number
function divide(number1, number2) {
  if (number2 === 0) {
    return "Cannot divide by zero";
  }
  return number1 / number2;
}

// Function to get input values and perform the calculation
function performCalculation(operation) {
  const number1 = parseFloat(document.getElementById("number1").value) || 0;
  const number2 = parseFloat(document.getElementById("number2").value) || 0;
  let result;

  switch (operation) {
    case "add":
      result = add(number1, number2);
      break;
    case "subtract":
      result = subtract(number1, number2);
      break;
    case "multiply":
      result = multiply(number1, number2);
      break;
    case "divide":
      result = divide(number1, number2);
      break;
  }

  document.getElementById("calculation-result").textContent = result;
}

// Add event listeners to the buttons
document.getElementById("add").addEventListener("click", function () {
  performCalculation("add");
});

document.getElementById("subtract").addEventListener("click", function () {
  performCalculation("subtract");
});

document.getElementById("multiply").addEventListener("click", function () {
  performCalculation("multiply");
});

document.getElementById("divide").addEventListener("click", function () {
  performCalculation("divide");
});
