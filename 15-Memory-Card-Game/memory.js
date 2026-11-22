const getReset = document.getElementById("reset");
const getMove = document.getElementById("move");
const getTimer = document.getElementById("timer");
const getDone = document.getElementById("done");
const getWon = document.getElementById("won");
const getCards = document.getElementById("cards");

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
let isLocked = false;

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

function shuffle() {
  clearInterval(myTimer);
  clickCount = 0;
  one = "";
  two = "";
  firstClick = null;
  matchCount = 0;
  moveCount = 0;
  tSec = 0;
  tMin = 0;
  myTimer = null;
  isLocked = false;

  getTimer.textContent = "Time: 0:00";
  getMove.textContent = "Move: 0";
  getDone.textContent = "Matched: 0/8";

  cards.forEach((card) => {
    card.classList.remove("flipped", "matched");
    card.classList.add("covered");
  });

  for (let i = items.length - 1; i > 0; i--) {
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

  const showtSec = tSec < 10 ? "0" + tSec : tSec;

  getTimer.textContent = `Time: ${tMin}:${showtSec}`;
}

getCards.addEventListener("click", (e) => {
  const clicked = e.target;

  if (
    !clicked.classList.contains("card") ||
    isLocked ||
    clicked.classList.contains("flipped") ||
    clicked.classList.contains("matched")
  ) {
    return;
  }

  if (!myTimer) {
    myTimer = setInterval(timer, 1000);
  }
  clicked.classList.remove("covered");
  clicked.classList.add("flipped");
  clickCount++;

  if (clickCount === 1) {
    firstClick = clicked;
    one = clicked.textContent;
  } else if (clickCount === 2) {
    moveCount++;
    two = clicked.textContent;
    clickCount = 0;
    getMove.textContent = "Move: " + moveCount;
    isLocked = true;
    if (one === two) {
      matchCount++;
      getDone.textContent = `Matched: ${matchCount}/8`;

      setTimeout(() => {
        firstClick.classList.add("matched");
        clicked.classList.add("matched");
        isLocked = false;
        if (matchCount === 8) {
          clearInterval(myTimer);
          getCards.classList.add("none");
          getWon.classList.remove("none");
        }
      }, 500);
    } else {
      setTimeout(() => {
        firstClick.classList.remove("flipped");
        clicked.classList.remove("flipped");
        firstClick.classList.add("covered");
        clicked.classList.add("covered");
        isLocked = false;
      }, 500);
    }
  }
});

shuffle();

getReset.addEventListener("click", shuffle);
