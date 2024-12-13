const form = document.querySelector("form");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const rePasswordInput = document.querySelector("#rePassword");
const mobileInput = document.querySelector("#mobile");
const ageInput = document.querySelector("#age");
const rememberMeCheckbox = document.querySelector("#rememberMe");
const registerButton = document.querySelector("#bt");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validate the form fields
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const rePassword = rePasswordInput.value.trim();
  const mobile = mobileInput.value.trim();
  const age = ageInput.value.trim();

  // Check if email is empty
  if (email === "") {
    alert("Please enter your email");
    return;
  }

  // Check if password is empty
  if (password === "") {
    alert("Please enter your password");
    return;
  }

  // Check if re-password is empty
  if (rePassword === "") {
    alert("Please enter your re-password");
    return;
  }

  // Check if passwords match
  if (password!== rePassword) {
    alert("Passwords do not match");
    return;
  }

  // Check if mobile is empty
  if (mobile === "") {
    alert("Please enter your mobile number");
    return;
  }

  // Check if age is empty
  if (age === "") {
    alert("Please enter your age");
    return;
  }

  // If all fields are valid, submit the form
  form.submit();
});