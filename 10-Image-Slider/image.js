let getImage = document.getElementById("image");
let getPrev = document.getElementById("prev");
let getNext = document.getElementById("next");

let imageNumber = 1;
const totalImages = 5;

function updateSlider() {
  getImage.src = `../10-Image-Slider/Images/image${imageNumber}.jpg`;
}

getPrev.addEventListener("click", () => {
  imageNumber = imageNumber === 1 ? totalImages : imageNumber - 1;
  updateSlider();
});

getNext.addEventListener("click", () => {
  imageNumber = imageNumber === totalImages ? 1 : imageNumber + 1;
  updateSlider();
});
