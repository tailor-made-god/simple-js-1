function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  let red = randomNumber();
  let green = randomNumber();
  let blue = randomNumber();
  document.body.style.backgroundColor = `rgb(${red},${blue},${green})`;
}
