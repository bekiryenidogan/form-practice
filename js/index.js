const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  const pass1 = document.querySelector("#pass").value;
  const pass2 = document.querySelector("#confirm-pass").value;
  if (pass1 !== pass2) {
    alert("Passwords doesnt match");
    return;
  }
  if (pass1.length < 8) {
    alert("Password must be atleast 8 characters");
    return;
  }

  alert("Yay!");
});
