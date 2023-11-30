function main() {
  const burgerMenu = document.querySelector(".header__burgerMenu");
  const burgerDiv = document.querySelector(".header_burgermenu-div");

  burgerMenu.addEventListener("click", () => {
    burgerDiv.style.display = "flex";
  });

  burgerDiv.addEventListener("click", () => {
    burgerDiv.style.display = "";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 500) {
      const mainSlider1 = document.querySelector(".slider1");
      const mainSlider2 = document.querySelector(".slider2");
      const mainSlider3 = document.querySelector(".slider3");
      const mainSlider4 = document.querySelector(".slider4");

      mainSlider1.style.display = "none";
    }
  });
}

main();
