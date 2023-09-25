document.addEventListener("DOMContentLoaded", function () {
  const imageContainers = document.querySelectorAll(".image-container");

  imageContainers.forEach((container) => {
    const image = container.querySelector("img");

    container.addEventListener("click", () => {
      // Gradually decrease the image size using CSS transform
      image.style.transform = "scale(0)"; // Scale down to zero size

      // After the transition is complete, make the image hidden
      image.addEventListener(
        "transitionend",
        () => {
          image.style.visibility = "hidden";
        },
        { once: true }
      );
    });
  });
});
