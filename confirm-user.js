import GoTrue from "gotrue-js";
let token;
window.addEventListener("DOMContentLoaded", initListeners);

function initListeners() {
  document
    .querySelector(".confirm-btn")
    .addEventListener("click", clickConfirm);
  token = window.location.href.split("=")[1];
}
let auth = new GoTrue({
  APIUrl: "https://confident-hoover-cccfcc.netlify.app/.netlify/identity",
  setCookie: true,
});
function clickConfirm() {
  auth.confirm(token, true);
}
