document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var elem = document.querySelector(".carousel");
  var options = { numVisible: 1, width: 400 };
  var instances = M.Carousel.init(elems, options);

  var instance = M.Carousel.getInstance(elem);

  console.log({ elems });

  document.querySelector(".arrow-next").addEventListener("click", yo);
  document.querySelector(".arrow-prev").addEventListener("click", yo2);
  function yo() {
    console.log("yo");
    instance.next(1);
  }
  function yo2() {
    console.log("yo");
    instance.prev(1);
  }
});
