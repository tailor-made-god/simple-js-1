let getDisplay = document.getElementById("display");
let getStart = document.getElementById("start");
let getPause = document.getElementById("pause");
let getReset = document.getElementById("reset");
let getSwitch = document.getElementById("switch");
let getPage1 = document.getElementById("page1");
let getPage2 = document.getElementById("page2");

let page = 1;

let sec = 0;
let min = 0;
let hr = 0;
let ms = 0;

let interval = null;

function pad(num) {
  return String(num).padStart(2, "0");
}

function stopWatch() {
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

  getDisplay.textContent = `${pad(hr)} : ${pad(min)} : ${pad(sec)} : ${pad(ms)}`;
}

getStart.addEventListener("click", () => {
  clearInterval(interval);
  interval = setInterval(stopWatch, 10);
});

getPause.addEventListener("click", () => {
  clearInterval(interval);
});

getReset.addEventListener("click", () => {
  clearInterval(interval);
  hr = 0;
  min = 0;
  sec = 0;
  ms = 0;

  getDisplay.innerHTML = "00 : 00 : 00 : 00";
});

// TIMER

let getTdisplay = document.getElementById("tdisplay");
let getTstart = document.getElementById("tstart");
let getTpause = document.getElementById("tpause");
let getTreset = document.getElementById("treset");

let tInput = document.getElementById("tinput");
let tInputH = document.getElementById("tinputh");

let tHr = 0;
let tMin = 0;
let tSec = 0;

let isPaused = false;
let interval2 = null;

function Timer() {
  if (tHr === 0 && tMin === 0 && tSec === 0) {
    clearInterval(interval2);
    isPaused = false;
    getTstart.disabled = false;
    getTdisplay.textContent = "Time's Up!";
    return;
  }

  if (tSec === 0) {
    if (tMin === 0) {
      tHr--;
      tMin = 59;
      tSec = 59;
    } else {
      tMin--;
      tSec = 59;
    }
  } else {
    tSec--;
  }

  getTdisplay.textContent = `${pad(tHr)} : ${pad(tMin)} : ${pad(tSec)}`;
}

getTstart.addEventListener("click", () => {
  clearInterval(interval2);
  if (!isPaused) {
    tHr = Math.max(0, Number(tInputH.value));
    tMin = Math.max(0, Number(tInput.value));
    tSec = 0;
  }
  if (tHr === 0 && tMin === 0 && tSec === 0) {
    return;
  }

  isPaused = false;
  getTstart.disabled = true;
  getTdisplay.textContent = `${pad(tHr)} : ${pad(tMin)} : ${pad(tSec)}`;
  interval2 = setInterval(Timer, 1000);
});

getTpause.addEventListener("click", () => {
  clearInterval(interval2);
  if (tHr > 0 || tMin > 0 || tSec > 0) {
    isPaused = true;
    getTstart.disabled = false;
  }
});

getTreset.addEventListener("click", () => {
  clearInterval(interval2);
  isPaused = false;
  getTstart.disabled = false;

  tHr = Math.max(0, Number(tInputH.value));
  tMin = Math.max(0, Number(tInput.value));
  tSec = 0;

  getTdisplay.innerHTML = `${pad(tHr)} : ${pad(tMin)} : 00`;
});

tInputH.addEventListener("input", () => {
  isPaused = false;
});

tInput.addEventListener("input", () => {
  isPaused = false;
});

// SWITCH
getSwitch.addEventListener("click", () => {
  if (page === 1) {
    getSwitch.innerHTML = "StopWatch";
    getPage1.classList.add("none");
    getPage2.classList.remove("none");
    page = 2;
  } else if (page === 2) {
    getSwitch.innerHTML = "Timer";
    getPage2.classList.add("none");
    getPage1.classList.remove("none");
    page = 1;
  }
});
