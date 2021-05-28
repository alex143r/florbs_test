import GoTrue from "gotrue-js";

let user;
//add eventlisteners
window.addEventListener("DOMContentLoaded", initListeners);
function initListeners() {
  document
    .querySelector(".login-switch")
    .addEventListener("click", toggleExisting);
  document
    .querySelector(".create-switch")
    .addEventListener("click", toggleCreate);
  document
    .querySelector(".create-switch")
    .addEventListener("click", toggleCreate);
  document
    .querySelector(".forgot-btn")
    .addEventListener("click", toggleResetPass);
  document
    .querySelector(".forgot-back-btn")
    .addEventListener("click", toggleExisting);
}

function toggleExisting() {
  console.log("toggleExisting");
  document.querySelector(".login-switch").classList.add("selected");
  document.querySelector(".create-switch").classList.remove("selected");
  document.querySelector(".login").classList.remove("hide");
  document.querySelector(".signup").classList.add("hide");
  document.querySelector(".recover-pass").classList.add("hide");
}
function toggleCreate() {
  console.log("toggleCreate");
  document.querySelector(".login-switch").classList.remove("selected");
  document.querySelector(".create-switch").classList.add("selected");
  document.querySelector(".signup").classList.remove("hide");
  document.querySelector(".login").classList.add("hide");
}
function toggleResetPass() {
  console.log("forgot pass");
  document.querySelector(".login").classList.add("hide");
  document.querySelector(".recover-pass").classList.remove("hide");
}
function toggleBackForgot() {}

//Instantiate the GoTrue auth client + GoTrue functions

let auth = new GoTrue({
  APIUrl: "https://confident-hoover-cccfcc.netlify.app/.netlify/identity",
  setCookie: true,
});
document
  .querySelector("form[name='signup']")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.elements.password.value);
    if (
      e.target.elements.password.value === e.target.elements.password2.value
    ) {
      console.log("succ");

      const form = e.target;
      if (!auth) {
        noAuthFound(form);
      }

      const { email, password } = form.elements;
      auth
        .signup(email.value, password.value)
        .then((response) => {
          console.log(response);
          showMessage(
            `<p>Created a user! </p><p>Response: </p><code>${JSON.stringify(
              response
            )}</code>`,
            form
          );
        })
        .catch((error) => {
          showMessage(`Failed :( <code>${JSON.stringify(error)}</code>`, form);
          console.log(error);
        });
    } else {
      showMessage(`Passwords do not match`, e.target);
      console.log("faill");
    }
  });
//login
document.querySelector("form[name='login']").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  if (!auth) {
    noAuthFound(form);
  }
  const { email, password } = form.elements;
  auth
    .login(email.value, password.value)
    .then((response) => {
      showMessage(`<p>Log in successful! </p>`, form);
      console.log(response);
      user = auth.currentUser();

      window.location.href = "/index.html";
    })
    .catch((error) => {
      showMessage(`Failed to log in :`, form);
      console.log(error);
    });
});

//request recovery email
document
  .querySelector("form[name='recover-pass']")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;

    if (!auth) {
      noAuthFound(form);
    }

    if (!auth.currentUser()) {
      noUserFound(form);
    }

    const user = auth.currentUser();
    const email = user.email;

    auth
      .requestPasswordRecovery(email)
      .then((response) => {
        showMessage(`<p>Recovery email sent, check your inbox! </p>`, form);
        console.log(response);
      })
      .catch((error) => {
        showMessage(`Something went wrong :(`, form);
        console.log(error);
      });
  });

//helper functions

function noAuthFound(form) {
  showMessage(`<p>Did you paste in your API endpoint?</p>`, form);
}

function noUserFound(form) {
  showMessage(`<p>User not found</p>`, form);
}

function showMessage(msg, el) {
  el.querySelector(".message").innerHTML = msg;
}

function clearPage() {
  document.querySelectorAll(".message").forEach((el) => {
    el.textContent = "";
  });
}

export default user;
