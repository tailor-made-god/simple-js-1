let getImage = document.getElementById("image");
let getPrev = document.getElementById("prev");
let getNext = document.getElementById("next");

let imageNumber = 1;

getPrev.disabled = true;

getPrev.addEventListener("click", () => {
  if (imageNumber) imageNumber--;
  getImage.src = "/10-Image-Slider/Images/image" + imageNumber + ".jpg";

  if (imageNumber < 5) {
    getNext.disabled = false;
  }

  if (imageNumber === 1) {
    getPrev.disabled = true;
  }
});

getNext.addEventListener("click", () => {
  imageNumber++;
  getImage.src = "/10-Image-Slider/Images/image" + imageNumber + ".jpg";

  if (imageNumber > 1) {
    getPrev.disabled = false;
  }

  if (imageNumber === 5) {
    getNext.disabled = true;
  }
});
