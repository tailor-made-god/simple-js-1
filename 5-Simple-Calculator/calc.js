const getDisplay = document.getElementById("display");
const container = document.querySelector("#calc");

const operators = ["+", "-", "*", "/"];
const errorMessages = ["Error", "Nice try, infinity isn't on the screen"];
let isResultShown = false;

function clearDisplay() {
  getDisplay.value = "";
  isResultShown = false;
}

function calculateResult() {
  let expression = getDisplay.value.trim();
  while (expression && operators.includes(expression.slice(-1))) {
    expression = expression.slice(0, -1);
  }
  if (!expression) {
    return;
  }

  try {
    const result = new Function(`return ${expression}`)();
    getDisplay.value = Number.isFinite(result) ? result : errorMessages[1];
    isResultShown = true;
  } catch {
    getDisplay.value = errorMessages[0];
    isResultShown = true;
  }
}

function appendValue(value) {
  const currentText = getDisplay.value;
  const lastChar = currentText.slice(-1);

  if (errorMessages.includes(currentText)) {
    getDisplay.value = value;
    isResultShown = false;
    return;
  }
  if (isResultShown && !operators.includes(value)) {
    getDisplay.value = value;
    isResultShown = false;
    return;
  }

  isResultShown = false;

  if (operators.includes(lastChar) && operators.includes(value)) {
    getDisplay.value = currentText.slice(0, -1) + value;
    return;
  }

  getDisplay.value = currentText + value;
}

container.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  event.target.blur();

  const btn = event.target;

  if (btn.id === "clear") {
    return clearDisplay();
  }

  if (btn.id === "result") {
    return calculateResult();
  }

  if (btn.value) {
    appendValue(btn.value);
  }
});

// TypeFix
getDisplay.addEventListener("input", () => {
  getDisplay.value = getDisplay.value.replace(/[^0-9+\-*/.]/g, "");
});

document.addEventListener("keydown", (event) => {
  const key = event.key;

  if (key === "Enter" || key === "=") {
    event.preventDefault();
    calculateResult();
    return;
  }

  if (key === "Escape") {
    event.preventDefault();
    clearDisplay();
    return;
  }

  if (document.activeElement === getDisplay) {
    if (errorMessages.includes(getDisplay.value)) {
      getDisplay.value = "";
    }
    return;
  }

  if (/^[0-9.]$/.test(key) || operators.includes(key)) {
    event.preventDefault();
    appendValue(key);
  } else if (key === "Backspace") {
    event.preventDefault();
    if (errorMessages.includes(getDisplay.value)) {
      clearDisplay();
    } else {
      getDisplay.value = getDisplay.value.slice(0, -1);
    }
  }
});
