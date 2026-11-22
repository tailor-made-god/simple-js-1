function randomNumber() {
  return Math.floor(Math.random() * 256);
}

function changeColor() {
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
