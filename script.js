let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

// Adiciona números ao visor
function updateDisplay(value) {
  currentInput += value;
  display.value = currentInput;
}

// Limpa o visor
function clearDisplay() {
  currentInput = "";
  previousInput = "";
  operator = "";
  display.value = "";
}

// Realiza o cálculo
function calculate() {
  if (previousInput && operator && currentInput) {
    switch (operator) {
      case "+":
        currentInput = (parseFloat(previousInput) + parseFloat(currentInput)).toString();
        break;
      case "-":
        currentInput = (parseFloat(previousInput) - parseFloat(currentInput)).toString();
        break;
      case "*":
        currentInput = (parseFloat(previousInput) * parseFloat(currentInput)).toString();
        break;
      case "/":
        currentInput = (parseFloat(previousInput) / parseFloat(currentInput)).toString();
        break;
    }
    previousInput = "";
    operator = "";
    display.value = currentInput;
  }
}

// Configuração dos botões
document.getElementById("clear").addEventListener("click", clearDisplay);
document.getElementById("seven").addEventListener("click", () => updateDisplay("7"));
document.getElementById("eight").addEventListener("click", () => updateDisplay("8"));
document.getElementById("nine").addEventListener("click", () => updateDisplay("9"));
document.getElementById("divide").addEventListener("click", () => { previousInput = currentInput; operator = "/"; currentInput = ""; });
document.getElementById("multiply").addEventListener("click", () => { previousInput = currentInput; operator = "*"; currentInput = ""; });
document.getElementById("four").addEventListener("click", () => updateDisplay("4"));
document.getElementById("five").addEventListener("click", () => updateDisplay("5"));
document.getElementById("six").addEventListener("click", () => updateDisplay("6"));
document.getElementById("subtract").addEventListener("click", () => { previousInput = currentInput; operator = "-"; currentInput = ""; });
document.getElementById("add").addEventListener("click", () => { previousInput = currentInput; operator = "+"; currentInput = ""; });
document.getElementById("one").addEventListener("click", () => updateDisplay("1"));
document.getElementById("two").addEventListener("click", () => updateDisplay("2"));
document.getElementById("three").addEventListener("click", () => updateDisplay("3"));
document.getElementById("equals").addEventListener("click", calculate);
document.getElementById("zero").addEventListener("click", () => updateDisplay("0"));
