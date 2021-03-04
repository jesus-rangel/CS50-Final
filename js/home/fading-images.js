const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const images1 = Array.from(document.querySelectorAll("#image1 .image"));
const images2 = Array.from(document.querySelectorAll("#image2 .image"));
const images3 = Array.from(document.querySelectorAll("#image3 .image"));
const images4 = Array.from(document.querySelectorAll("#image4 .image"));

function getIndex(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

async function toggleImages(images, animationType, fadeTime) {
  let stack = [0, 0, 0],
    stackIndex = 0;
  while (true) {
    let j = getIndex(0, images.length);
    if (stack.indexOf(j) > -1) continue;
    stack[stackIndex] = j;
    stackIndex = stackIndex === 2 ? 0 : ++stackIndex;
    for (const image of images) {
      if (image.classList.contains(animationType)) {
        image.classList.remove(animationType);
      }
    }
    images[j].classList.add(animationType);
    await timer(fadeTime);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  toggleImages(images1, "animated-img-1", 4700);
  toggleImages(images2, "animated-img-2", 4200);
  toggleImages(images3, "animated-img-3", 5000);
  toggleImages(images4, "animated-img-4", 5500);
});
