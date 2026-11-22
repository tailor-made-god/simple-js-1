let getDisplay = document.getElementById("display");

let getLow = document.getElementById("low");
let getUp = document.getElementById("up");
let getNum = document.getElementById("num");
let getSym = document.getElementById("sym");

let getLength = document.getElementById("length");
let getLengthDisplay = document.getElementById("lengthDisplay");
let getSubmit = document.getElementById("submit");

function getLowerCases() {
  const combo = "abcdefghijklmnopqrstuvwxyz";
  return combo.charAt(Math.floor(Math.random() * combo.length));
}

function getUpperCases() {
  const combo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return combo.charAt(Math.floor(Math.random() * combo.length));
}

function getNumbers() {
  const combo = "0123456789";
  return combo.charAt(Math.floor(Math.random() * combo.length));
}

function getSymbols() {
  const combo = "!@#$%^&*()-_=+?.,<>";
  return combo.charAt(Math.floor(Math.random() * combo.length));
}

getLength.addEventListener("input", () => {
  getLengthDisplay.textContent = "Length: " + getLength.value;
});

getSubmit.addEventListener("click", () => {
  const allFunctions = [];
  if (getLow.checked) {
    allFunctions.push(getLowerCases);
  }
  if (getUp.checked) {
    allFunctions.push(getUpperCases);
  }
  if (getNum.checked) {
    allFunctions.push(getNumbers);
  }
  if (getSym.checked) {
    allFunctions.push(getSymbols);
  }

  if (allFunctions.length === 0) {
    getDisplay.innerHTML = "What you are Generating? Air?";
    return;
  }

  const finalLength = Number(getLength.value);
  const resultChars = [];

  for (let i = 0; i < Math.min(finalLength, allFunctions.length); i++) {
    resultChars.push(allFunctions[i]());
  }

  for (let i = resultChars.length; i < finalLength; i++) {
    const randomIndex = Math.floor(Math.random() * allFunctions.length);
    resultChars.push(allFunctions[randomIndex]());
  }

  for (let i = resultChars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultChars[i], resultChars[j]] = [resultChars[j], resultChars[i]];
  }

  getDisplay.textContent = resultChars.join("");
});
