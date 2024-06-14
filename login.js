const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

//Шинэ хэрэглэгч
const newUserName = document.getElementById("newUserName");
const newUserEmail = document.getElementById("newUserEmail");
const newUserPass = document.getElementById("newUserPass");
const newUserVerifyPass = document.getElementById("newUserVerifyPass");

newUserName.addEventListener("input", (ev) => {
  value = ev.target.value;
  console.log(value);
});
