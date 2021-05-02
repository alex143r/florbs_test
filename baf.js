const colors = document.querySelectorAll(".color");
let currentColor;
for (let color of colors) {
  color.addEventListener("click", pickUp);
}

function pickUp() {
  console.log(this);
  currentColor = this.getAttribute("background-color");
  console.log(currentColor);
}
