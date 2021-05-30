const draggedElm = document.querySelector(".drag-item");

// First: get the current bounds
const first = draggedElm.getBoundingClientRect();
const last = draggedElm.getBoundingClientRect();

const deltaX = first.left - last.left;
const deltaY = first.top - last.top;
const deltaW = first.width / last.width;
const deltaH = first.height / last.height;
draggedElm.animate(
  [
    {
      transformOrigin: "top left",
      transform: `
      translate(${deltaX}px, ${deltaY}px)
      scale(${deltaW}, ${deltaH})
    `,
    },
    {
      transformOrigin: "top left",
      transform: "none",
    },
  ],
  {
    duration: 300,
    easing: "ease-in-out",
    fill: "both",
  }
);
