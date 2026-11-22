let getBill = document.getElementById("bill");
let getTip = document.getElementById("tip");
let myform = document.getElementById("myform");
let getDisplay = document.getElementById("display");

let showBill = document.getElementById("show-bill");
let total = document.getElementById("total");

myform.addEventListener("submit", (event) => {
  event.preventDefault();
  const billAmount = Number(getBill.value);
  const tipPercentage = Number(getTip.value);

  const tipAmount = (billAmount * tipPercentage) / 100;
  const totalAmount = billAmount + tipAmount;

  showBill.innerHTML = `Bill: ₹${billAmount.toFixed(2)}`;
  getDisplay.innerHTML = `Tip: ₹${tipAmount.toFixed(2)}`;
  total.innerHTML = `Total: ₹${totalAmount.toFixed(2)}`;
});
