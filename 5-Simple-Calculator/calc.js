let getDisplay = document.getElementById("display");
let getResult = document.getElementById("result");
let getClear = document.getElementById("clear");

const container = document.querySelector("#calc");

container.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    getDisplay.innerHTML += event.target.value;
  }
});

getResult.addEventListener("click", () => {
  const result = new Function(`return ${getDisplay.innerText}`)();
  getDisplay.innerHTML = result;
});

getClear.addEventListener("click", () => {
  getDisplay.innerHTML = "";
});
