let getReset = document.getElementById("reset");
let getMove = document.getElementById("move");
let getTimer = document.getElementById("timer");
let getDone = document.getElementById("done");
let getWon = document.getElementById("won");
let getCards = document.getElementById("cards");

const cards = document.querySelectorAll(".card");

let clickCount = 0;
let one = "";
let two = "";
let firstClick = null;
let matchCount = 0;
let moveCount = 0;
let tSec = 0;
let tMin = 0;
let myTimer = null;

const items = [
  "Camera",
  "Lens",
  "Tripod",
  "Flash",
  "Camera",
  "Shutter",
  "Frame",
  "Focus",
  "Light",
  "Light",
  "Tripod",
  "Frame",
  "Lens",
  "Flash",
  "Shutter",
  "Focus",
];

const allCards = document.querySelector(".cards");

function shuffle() {
  clearInterval(myTimer);
  let clickCount = 0;
  one = "";
  two = "";
  firstClick = null;
  matchCount = 0;
  moveCount = 0;
  tSec = 0;
  tMin = 0;
  myTimer = null;
  getTimer.innerHTML = "Time: 0:00";
  const getAllCards = document.querySelectorAll(".card");
  getAllCards.forEach((card) => {
    card.classList.remove("flipped");
    card.classList.remove("matched");
    card.classList.add("covered");
  });
  getMove.innerHTML = "Move: 0";
  for (i = items.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [items[i], items[j]] = [items[j], items[i]];
  }

  getWon.classList.add("none");
  getCards.classList.remove("none");

  write();
}

function write() {
  cards.forEach((card, index) => {
    card.textContent = items[index];
  });
}

function timer() {
  tSec++;
  if (tSec == 60) {
    tSec = 0;
    tMin++;
  }

  let showtSec = tSec;

  if (tSec < 10) {
    showtSec = "0" + tSec;
  }

  getTimer.innerHTML = "Time: " + tMin + ":" + showtSec;
}

allCards.addEventListener("click", (e) => {
  clearInterval(myTimer);
  myTimer = setInterval(timer, 1000);

  if (e.target.classList.contains("card")) {
    const clicked = e.target;
    const value = clicked.textContent;

    clicked.classList.remove("covered");

    if (clicked.classList.contains("flipped")) {
      return;
    }
    clicked.classList.add("flipped");

    if (clicked.classList.contains("matched")) {
      clickCount = 0;
      return;
    }
    clickCount++;

    if (clickCount === 1) {
      firstClick = clicked;
      one = value;
    }
    if (clickCount === 2) {
      moveCount++;
      two = value;
      clickCount = 0;
      getMove.innerHTML = "Move: " + moveCount;
      if (one === two) {
        matchCount++;
        setTimeout(() => {
          firstClick.classList.add("matched");
          clicked.classList.add("matched");
        }, 500);

        getDone.innerHTML = "Matched: " + matchCount + "/8";

        if (matchCount === 8) {
          matchCount = 0;
          clearInterval(myTimer);
          setTimeout(() => {
            getCards.classList.add("none");
            getWon.classList.remove("none");
          }, 500);
        }
      } else {
        setTimeout(() => {
          firstClick.classList.remove("flipped");
          clicked.classList.remove("flipped");
          firstClick.classList.add("covered");
          clicked.classList.add("covered");
        }, 500);
      }
    }
  }
});

write();

getReset.addEventListener("click", shuffle);
