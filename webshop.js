document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var options = { padding: 30, dist: 0 };
  var instances = M.Carousel.init(elems, options);
});
