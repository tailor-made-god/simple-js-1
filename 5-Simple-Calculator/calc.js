const getDisplay = document.getElementById("display");
const container = document.querySelector("#calc");

const operators = ["+", "-", "*", "/"];
let isResultShown = false;

container.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const btn = event.target;

  if (btn.id === "clear") {
    getDisplay.textContent = "";
    isResultShown = false;
    return;
  }

  if (btn.id === "result") {
    const expression = getDisplay.textContent.trim();
    const lastChar = expression.slice(-1);
    if (!expression || operators.includes(lastChar)) {
      return;
    }

    try {
      const result = new Function(`return ${expression}`)();
      getDisplay.textContent = Number.isFinite(result) ? result : "Error";
      isResultShown = true;
    } catch {
      getDisplay.textContent = "Error";
    }

    return;
  }

  const value = btn.value;
  if (!value) {
    return;
  }

  const currentText = getDisplay.textContent;
  const lastChar = currentText.slice(-1);

  if (currentText === "Error") {
    getDisplay.textContent = value;
    isResultShown = false;
    return;
  }

  if (isResultShown && !operators.includes.value(value)) {
    getDisplay.textContent = value;
    isResultShown = false;
    return;
  }

  isResultShown = false;

  if (operators.includes(lastChar) && operators.includes(value)) {
    getDisplay.textContent = currentText.slice(0, -1) + value;
    return;
  }

  getDisplay.textContent = getDisplay.textContent + value;
});
