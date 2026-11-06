let getDisplay = document.getElementById("display");
let getStart = document.getElementById("start");
let getPause = document.getElementById("pause");
let getReset = document.getElementById("reset");

let sec = 0;
let min = 0;
let hr = 0;
let ms = 0;

let timerRunning = false;
let interval = null;

function stopWatch() {
  if (timerRunning) {
    ms++;
    if (ms === 100) {
      ms = 0;
      sec++;
    }

    if (sec === 60) {
      sec = 0;
      min++;
    }

    if (min === 60) {
      min = 0;
      hr++;
    }

    getDisplay.innerHTML = hr + " : " + min + " : " + sec + " : " + ms;
  }
}

getStart.addEventListener("click", () => {
  clearInterval(interval);
  timerRunning = true;

  interval = setInterval(stopWatch, 10);
});

getPause.addEventListener("click", () => {
  timerRunning = false;
});

getReset.addEventListener("click", () => {
  timerRunning = false;
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;

  getDisplay.innerHTML = hr + " : " + min + " : " + sec + " : " + ms;
});

// TIMER

let getTdisplay = document.getElementById("tdisplay");
let getTstart = document.getElementById("tstart");
let getTpause = document.getElementById("tpause");
let getTreset = document.getElementById("treset");

let tInput = document.getElementById("tinput");
let tInputDisplay = document.getElementById("tinputdisplay");
let tInputH = document.getElementById("tinputh");

let tHr = 0;
let tMin = 0;
let tSec = 60;

let tRunning = false;
let interval2 = null;

function Timer() {
  tMin = tInput.value;
  tHr = tInputH.value;
  if (tRunning) {
    tSec--;
    tMin--;
    if (tSec === 0) {
      tSec = 59;
      tMin--;
    }

    if (tMin === 0) {
      tMin = 59;
      tHr--;
    }

    getTdisplay.innerHTML = tHr + " : " + tMin + " : " + tSec;
  }
}

getTstart.addEventListener("click", () => {
  clearInterval(interval2);
  tRunning = true;
  interval2 = setInterval(Timer, 1000);
});

getTpause.addEventListener("click", () => {
  tRunning = false;
});

getTreset.addEventListener("click", () => {
  tRunning = false;

  tHr = 0;
  tMin = 0;
  tSec = 60;

  getTdisplay.innerHTML = "00 : 00 : 00";
});
