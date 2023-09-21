function main() {
  const burgerMenu = document.querySelector(".header__burgerMenu");
  const burgerDiv = document.querySelector(".header_burgermenu-div");

  burgerMenu.addEventListener("click", () => {
    burgerDiv.style.display = "flex";
  });

  burgerDiv.addEventListener("click", () => {
    burgerDiv.style.display = "";
  });
}

main();
