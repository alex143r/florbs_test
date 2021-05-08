// const allColors = document.querySelectorAll(".color rect");
// let currentColor;

// for (let color of allColors) {
//   color.addEventListener("click", getColor);
// }

// function getColor() {
//   currentColor = this.getAttribute("fill");
//   document.querySelector(".current-color").style.fill = currentColor;
//   document.querySelector(".faced circle").style.fill = currentColor;
//   console.log(currentColor);
// }

// document.querySelector(".faced circle").addEventListener("click", addColor);
// document.querySelector(".tool-item").addEventListener("click", addColor);
// function addColor() {
//   this.style.fill = currentColor;
// }

const tabs = document.querySelectorAll(".tab");

for (let tab of tabs) {
  tab.addEventListener("click", selected);
}

function selected() {
  this.classList.add("selected");
}
