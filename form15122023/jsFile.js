let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let status = document.getElementById("status");

let emailInput;
let passwordInput;
loginBtn.onclick = function login(event) {
  console.log(email.value);
  console.log(password.value);
  emailInput = email.value;
  passwordInput = password.value;

  if (emailInput === "a") {
    let anchorRegister = document.createElement("a");
    anchorRegister.setAttribute("href", "form.html");
    loginBtn.appendChild(anchorRegister);
    status.textContent = "Login Success";
    console.log(event.view.window.location.pathname);
    event.view.window.location.pathname = "/form15122023/afterLogin.html";
  } else {
    status.textContent = "Invalid Credentials";
  }
};
