const initSlider = () => {
    const imageList = document.querySelector(".container");
    const slideButtons = document.querySelectorAll(".slide-button");

    slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "previous-btn" ? -1 : 1;
        const scrollAmount = imageList.clientWidth * direction;
        imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  };

  window.addEventListener("load", initSlider);