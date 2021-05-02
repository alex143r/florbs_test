document.addEventListener("DOMContentLoaded", start);

const endpoint = "http://www.ddalby.dk/florbs/wordpress/wp-json/wp/v2/florbs";
let allFlorbs;
let filter = "all";
function start() {
  getData();
}

async function getData() {
  const response = await fetch(endpoint);
  allFlorbs = await response.json();
  showFlorbs();
}
function showFlorbs() {
  const container = document.querySelector(".compendium");
  const florbTemplate = document.querySelector("template");
  container.innerHTML = "";
  allFlorbs.forEach((florb) => {
    let clone = florbTemplate.cloneNode(true).content;
    clone.querySelector(".florb-name").textContent = florb.title.rendered;
    clone.querySelector(".florb-img").src = florb.image.guid;
    clone.querySelector(".florb-img").alt = florb.title.rendered;
    clone.querySelector(".florb-phrase").textContent = florb.phrase;
    container.appendChild(clone);
  });
}

{
  /* <h2 class="florb-name"></h2>
<p class="florb-phrase"></p>
<img class="florb-img" src="" alt="" />
<p class="florb-desc"></p>
<p class="florb-set"></p> */
}
// function visKaffer() {
//   console.log(alleKaffer);
//   const container = document.querySelector("#index");
//   container.innerHTML = "";
//   const kafferTemplate = document.querySelector("template");
//   alleKaffer.feed.entry.forEach((kaffe) => {
//     if (filter == "alle" || filter == kaffe.gsx$kategori.$t) {
//       let klon = kafferTemplate.cloneNode(true).content;
//       klon.querySelector("img").src = `billeder/small/${kaffe.gsx$billede.$t}-sm.jpg`;
//       klon.querySelector("img").alt = kaffe.gsx$billede.$t;
//       klon.querySelector("h2").textContent = `${kaffe.gsx$navn.$t}`;
//       klon.querySelector("p").textContent += `${kaffe.gsx$kort.$t}`;
//       klon.querySelector("article").addEventListener("click", () => visDetail(kaffe));
//       klon.querySelector("article").addEventListener("click", fjernClass);

//       container.appendChild(klon);
//     }
//   });
// }
