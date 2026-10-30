let getCount = document.getElementById("count");
let getReset = document.getElementById("reset");
let getDisplay = document.getElementById("display");

let value = 0;

getCount.addEventListener("click", () => {
  value = value - 4;
  getDisplay.innerHTML = value;
});

getReset.addEventListener("click", () => {
  value = 0;
  getDisplay.innerHTML = value;
});
