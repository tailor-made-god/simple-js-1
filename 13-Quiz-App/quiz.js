const quizCard = document.querySelector(".quiz");
const form = document.getElementById("form");
const getNext = document.getElementById("next");
const getDisplay = document.getElementById("display");
const getReset = document.getElementById("reset");
const getError = document.getElementById("error");
const getProgress = document.getElementById("progress");

let count = 1;
let right = 0;
let isSubmited = false;

const totalQuestions = 5;
const rightAnswers = [null, "1", "2", "4", "3", "2"];

form.addEventListener("change", () => {
  getError.textContent = "";
});

function result(event) {
  event.preventDefault();

  if (!isSubmited) {
    const checked = document.querySelector(`input[name="qes${count}"]:checked`);
    if (!checked) {
      getError.textContent = "Please select an option first.";
      return;
    }
    getError.textContent = "";
    isSubmited = true;
    if (checked.value === rightAnswers[count]) {
      right++;
      quizCard.classList.add("correct");
    } else {
      quizCard.classList.add("wrong");
    }

    document.querySelectorAll(`input[name="qes${count}"]`).forEach((radio) => {
      radio.disabled = true;
    });

    getNext.textContent = count === totalQuestions ? "Finish" : "Next";
    return;
  }

  quizCard.classList.remove("correct", "wrong");
  isSubmited = false;

  document.getElementById("set" + count).classList.add("none");
  document.getElementById("set" + (count + 1)).classList.remove("none");

  count++;
  if (count <= totalQuestions) {
    getProgress.textContent = `${count} / ${totalQuestions}`;
    getNext.textContent = "Submit";
  } else {
    getProgress.classList.add("none");
    getNext.classList.add("none");
    getDisplay.textContent = `Right answers:${right} / ${totalQuestions}`;
  }
}

function resetBack() {
  document.getElementById(`set${count}`).classList.add("none");
  count = 1;
  right = 0;
  isSubmited = false;

  quizCard.classList.remove("correct", "wrong");

  form.querySelectorAll("input[type='radio']").forEach((radio) => {
    radio.disabled = false;
  });

  document.getElementById("set1").classList.remove("none");

  getProgress.textContent = `1 / ${totalQuestions}`;
  getProgress.classList.remove("none");
  getError.textContent = "";
  getDisplay.textContent = "";
  getNext.textContent = "Submit";
  getNext.classList.remove("none");
}

form.addEventListener("submit", result);
getReset.addEventListener("click", resetBack);
