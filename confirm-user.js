import GoTrue from "gotrue-js";
let token;
window.addEventListener("DOMContentLoaded", initListeners);

function initListeners() {
  document
    .querySelector(".confirm-btn")
    .addEventListener("click", clickConfirm);
  token = window.location.href.split("=")[1];
  console.log(window.location.href.split("=")[1]);
}

function clickConfirm() {
  auth.confirm(token, true);
}
