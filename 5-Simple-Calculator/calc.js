const getDisplay = document.getElementById("display");
const container = document.querySelector("#calc");

const operators = ["+", "-", "*", "/"];

container.addEventListener("click", (event) => {
  if (event.target.tagName !== "BUTTON") {
    return;
  }

  const btn = event.target;

  if (btn.id === "clear") {
    getDisplay.textContent = "";
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
    return;
  }

  if (operators.includes(lastChar) && operators.includes(value)) {
    getDisplay.textContent = currentText.slice(0, -1) + value;
  }

  getDisplay.textContent = getDisplay.textContent + value;
});
