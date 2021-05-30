const faceRect = document.querySelector(".face").getBoundingClientRect();
const colors = document.querySelectorAll(".color");
const face = document.querySelector(".specialface");
const mobileFace = document.querySelector(".mobile-face");
const cx = faceRect.x + faceRect.width / 2;
const cy = faceRect.y + faceRect.height / 2;
const coords = document.querySelector(".trackable");
let inuse = document.querySelector(".inuse");
var elem = document.querySelector(".draggable");
var draggie = new Draggabilly(elem, {});

var draggableElems = document.querySelectorAll(".draggable");

var draggies = [];

for (var i = 0; i < draggableElems.length; i++) {
  var draggableElem = draggableElems[i];
  var draggie = new Draggabilly(draggableElem, {});
  draggies.push(draggie);
}
draggies.forEach((item) => {
  item.on("dragEnd", function (event, pointer) {
    const rect = event.target.getBoundingClientRect();
    const dx = rect.x + rect.width / 2;
    const dy = rect.y + rect.height / 2;
    const dist = Math.hypot(cx - dx, cy - dy);
    console.log(dist);
    console.log(rect);

    if (dist < 400) {
      event.target.parentElement.classList.add("inuse");
      document.querySelector(".mobile-face").appendChild(event.target);
      console.log(rect);
    } else {
      event.target.parentElement.classList.remove("inuse");
    }
  });
});

for (let color of colors) {
  color.addEventListener("click", getColor);

  function getColor() {
    let currentColor = window.getComputedStyle(color)["background-color"];
    console.log(currentColor);
    face.style.backgroundColor = currentColor;
    mobileFace.style.backgroundColor = currentColor;
  }
}

if (document.title === "Florbs | Dashboard") {
  document.querySelector(".link-1").classList.add("selected");
  document.querySelector(".outer-1").classList.remove("hide");
  document.querySelector(".special-link-1").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-1");
} else if (document.title === "Florbs | Games") {
  document.querySelector(".link-2").classList.add("selected");
  document.querySelector(".outer-2").classList.remove("hide");
  document.querySelector(".special-link-2").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-2");
} else if (document.title === "Florbs | Builder") {
  document.querySelector(".link-3").classList.add("selected");
  document.querySelector(".outer-3").classList.remove("hide");
  document.querySelector(".special-link-3").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-3");
} else if (document.title === "Florbs | Profile") {
  document.querySelector(".link-4").classList.add("selected");
  document.querySelector(".outer-4").classList.remove("hide");
  document.querySelector(".special-link-4").style.transform =
    "translateY(30px)";
  document.querySelector(".bottom-nav").classList.add("nav-4");
}

document.querySelector(".reset-button").addEventListener("click", resetThis);
function resetThis() {
  location.reload();
}
