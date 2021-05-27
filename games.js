document.addEventListener("DOMContentLoaded", initCaro);

function initCaro() {
  setTimeout(() => {
    var elems = document.querySelectorAll(".carousel");
    var elem = document.querySelector(".carousel");
    var options = { numVisible: 1, fullWidth: true };
    var instances = M.Carousel.init(elems, options);

    var instance = M.Carousel.getInstance(elem);

    console.log({ elems });

    document
      .querySelector(".arrow-next")
      .addEventListener("click", nextCaroItem);
    document
      .querySelector(".arrow-prev")
      .addEventListener("click", prevCaroItem);
    function nextCaroItem() {
      console.log("yo");
      instance.next(1);
      setTimeout(setBackground, 200);
    }
    function prevCaroItem() {
      console.log("yo");
      instance.prev(1);
      setTimeout(setBackground, 200);
    }
    setBackground();
  }, 500);
}
function setBackground() {
  console.log(document.querySelectorAll(".carousel-item").length);
  const caroItems = document.querySelectorAll(".carousel-item");
  for (let i = 0; i < caroItems.length; i++) {
    if (caroItems[i].classList.contains("active")) {
      console.log(caroItems[i]);
      console.log(document.querySelector(`.background-img${i + 1}`));
      document
        .querySelector(`.background-img${i + 1}`)
        .classList.remove("hide");
    } else {
      document.querySelector(`.background-img${i + 1}`).classList.add("hide");
    }
  }
}
