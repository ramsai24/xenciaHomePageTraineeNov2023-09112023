loginBtn.onclick = function login() {
  console.log(email.value);
  console.log(password.value);
  emailInput = email.value;
  passwordInput = password.value;

  if (emailInput === "admin" && passwordInput === "admin@12") {
    let anchorRegister = document.createElement("a");
    anchorRegister.setAttribute("href", "form.html");
    loginBtn.appendChild(anchorRegister);
  }
};
