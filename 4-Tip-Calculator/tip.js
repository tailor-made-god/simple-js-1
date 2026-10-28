let getBill = document.getElementById("bill");
let getTip = document.getElementById("tip");
let btnSubmit = document.getElementById("submit");
let getDisplay = document.getElementById("display");

btnSubmit.addEventListener("click", () => {
  let result = (getBill.value * getTip.value) / 100;
  getDisplay.innerHTML = result;
});
