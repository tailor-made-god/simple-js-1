const getDisplay = document.getElementById("display");

function clock() {
  const now = new Date();
  const showTime = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  const [hours, minutes, rest] = showTime.split(":");
  const [seconds, ampm] = rest.split(" ");
  getDisplay.innerHTML = `${hours}:${minutes}<span class="time-seconds">:${seconds} ${ampm}</span>`;
  // getDisplay.innerHTML = showTime;
}

clock();

setInterval(clock, 1000);
