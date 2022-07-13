console.log(import.meta);

function loadImage(relativePath) {
  const url = new URL(relativePath, import.meta.url);
  const image = new Image();
  image.src = url;
  return image;
}

const container = document.querySelector(".container");
const image = loadImage("../images/image.jpg");
container.append(image);
