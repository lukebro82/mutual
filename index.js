function main() {
  const burgerMenu = document.querySelector(".header__burgerMenu");
  const burgerDiv = document.querySelector(".header_burgermenu-div");

  burgerMenu.addEventListener("click", () => {
    burgerDiv.style.display = "flex";
  });

  burgerDiv.addEventListener("click", () => {
    burgerDiv.style.display = "";
  });
  const slider1 = document.querySelector(".slider1")
  const slider2 = document.querySelector(".slider2")
  const slider3 = document.querySelector(".slider3")
  const slider4 = document.querySelector(".slider4")

const navLink1 = document.getElementById("#link1")
const navLink2 = document.getElementById("#link2")
const navLink3 = document.getElementById("#link3")
const navLink4 = document.getElementById("#link4")

navLink1.addEventListener("click",(event)=>{
  event.preventDefault();
  slider1.style.display = "flex"
  slider2.style.display = "none";
  slider3.style.display = "none";
  slider4.style.display = "none";
})
navLink2.addEventListener("click",(event)=>{
  event.preventDefault();
  slider1.style.display = "none";
  slider2.style.display = "flex"
  slider3.style.display = "none";
  slider4.style.display = "none";
})

navLink3.addEventListener("click",(event)=>{
  event.preventDefault();
  slider1.style.display = "none";
  slider2.style.display = "none";
  slider3.style.display = "flex"
  slider4.style.display = "none";
})
navLink4.addEventListener("click",(event)=>{
  event.preventDefault();
  slider1.style.display = "none";
  slider2.style.display = "none";
  slider3.style.display = "none";
  slider4.style.display = "flex"
})

}

main();
