let getCount = document.getElementById("count");
const getReset = document.getElementById("reset");
const getDisplay = document.getElementById("display");

let value = 0;

getCount.addEventListener("click", () => {
  value++;
  getDisplay.innerHTML = value;
});

getReset.addEventListener("click", () => {
  value = 0;
  getDisplay.innerHTML = value;
});
