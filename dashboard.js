import GoTrue from "gotrue-js";

let user;
let user2;
let loggedIn = false;

checkUser();
function checkUser() {
  let auth = new GoTrue({
    APIUrl: "https://serene-clarke-d069ee.netlify.app/.netlify/identity",
    setCookie: true,
  });
  user = auth.currentUser();
  console.log(user);

  setUser();
  setSidebar();
}

function setUser() {
  if (user === null) {
    console.log("naa dude");
    loggedIn = false;
  }
  if (user !== null) {
    loggedIn = true;

    console.log(user);
    document.querySelector(".username").innerHTML =
      user.user_metadata.data.full_name;
  }

  // document.querySelector(".username").innerHTML =
  //   user.user_metadata.data.full_name;
  document.querySelector(".logout").addEventListener("click", handleLogout);
}
function handleLogout() {
  user
    .logout()
    .then((response) => {
      location.reload();
      loggedIn = false;
      console.log("User logged out");
    })
    .catch((error) => {
      console.log("Failed to logout user: %o", error);
      throw error;
    });
  setSidebar();
}

function setSidebar() {
  console.log("setSide");
  if (loggedIn === true) {
    document.querySelector(".sidebar-logged-out").classList.add("hide");
    document.querySelector(".sidebar-logged-in").classList.remove("hide");
  }
  if (loggedIn === false) {
    document.querySelector(".sidebar-logged-out").classList.remove("hide");
    document.querySelector(".sidebar-logged-in").classList.add("hide");
  }
}
