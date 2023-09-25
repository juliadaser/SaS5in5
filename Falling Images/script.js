// Function to generate a random number within a range
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to create a falling image
function createFallingImage() {
  const image = document.createElement("img");
  image.src = "your-image-url.jpg"; // Replace with your image URL
  image.className = "falling-image";
  document.getElementById("falling-images-container").appendChild(image);

  const imageWidth = 50; // Adjust the image width as needed
  const startX = getRandom(0, window.innerWidth - imageWidth);
  const endX = getRandom(0, window.innerWidth - imageWidth);

  image.style.left = startX + "px";

  setTimeout(() => {
    image.style.transform = `translateY(${window.innerHeight}px) translateX(${endX}px)`;
  }, 0);

  image.addEventListener("transitionend", () => {
    image.style.transition = "none";
    image.style.transform = `translateY(0) translateX(${endX}px)`;
    setTimeout(() => {
      image.style.transition = "transform 3s linear";
      image.style.transform = `translateY(${window.innerHeight}px) translateX(${endX}px)`;
    }, 0);
  });
}

// Add falling images when the user clicks anywhere on the screen
document.body.addEventListener("click", () => {
  createFallingImage();
});

// Add initial falling images
for (let i = 0; i < 5; i++) {
  setTimeout(createFallingImage, i * 1000);
}
