let getNext = document.getElementById("next");
let getDisplay = document.getElementById("display");
let getReset = document.getElementById("reset");

let count = 1;
let right = 0;

const rightAnswers = [null, "1", "2", "4", "3", "2"];

function result(event) {
  event.preventDefault();

  const check = document.querySelector(`input[name="qes${count}"]:checked`);
  if (!check) {
    return;
  }
  const form = document.querySelector("#form");
  const formData = new FormData(form);
  const answer = formData.get(`qes${count}`);

  if (answer === rightAnswers[count]) {
    right++;
  }

  document.getElementById("set" + count).classList.add("none");
  document.getElementById("set" + (count + 1)).classList.remove("none");

  count++;
  if (count === 6) {
    getNext.disabled = true;
    getDisplay.innerHTML = " Right Answers: " + right;
    return;
  }
}

function resetBack() {
  count = 1;
  right = 0;
  location.reload();
}

getNext.addEventListener("click", result);
getReset.addEventListener("click", resetBack);
