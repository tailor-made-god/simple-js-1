let getBill = document.getElementById("bill");
let getTip = document.getElementById("tip");
let btnSubmit = document.getElementById("submit");
let getDisplay = document.getElementById("display");

let showBill = document.getElementById("show-bill");
let total = document.getElementById("total");

btnSubmit.addEventListener("click", () => {
  let result = (getBill.value * getTip.value) / 100;
  getDisplay.innerHTML = result;
});
