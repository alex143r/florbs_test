if (localStorage.getItem("user") === null) {
  console.log("naa dude");
}
if (localStorage.getItem("user") !== null) {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
}
