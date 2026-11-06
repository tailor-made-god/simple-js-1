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
  const combo = "!@#$%^&*()-_=+?.,";
  return combo.charAt(Math.floor(Math.random() * combo.length));
}

const allFunctions = [];

getLength.addEventListener("change", () => {
  getLengthDisplay.innerHTML = "Length: " + getLength.value;
});

getSubmit.addEventListener("click", () => {
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

  const finalLength = Number(getLength.value);

  let finalResult = "";

  for (let i = 0; i < finalLength; i++) {
    const resultEach = Math.floor(Math.random() * allFunctions.length);
    const charEach = allFunctions[resultEach];
    const transfer = charEach();
    finalResult = finalResult + transfer;
  }

  getDisplay.innerHTML = finalResult;
});
