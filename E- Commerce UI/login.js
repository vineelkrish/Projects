document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.querySelector("form");
  const userIdInput = document.querySelector("#user");
  const passwordInput = document.querySelector("#user"); // assuming the second input with id "user" is the password input
  const rememberMeCheckbox = document.querySelector("input[type='checkbox']");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const userId = userIdInput.value.trim();
    const password = passwordInput.value.trim();

    if (userId === "") {
      alert("Please enter your user ID");
      return;
    }

    if (password === "") {
      alert("Please enter your password");
      return;
    }

    // Additional validation can be added here, such as checking if the user ID and password match the stored credentials

    // If validation passes, submit the form
    loginForm.submit();
  });
});