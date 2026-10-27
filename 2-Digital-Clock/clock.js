let getDisplay = document.getElementById("display");

function clock() {
  const now = new Date();
  const showTime = now.toLocaleTimeString();
  getDisplay.innerHTML = showTime;
}

clock();

setInterval(clock, 1000);
