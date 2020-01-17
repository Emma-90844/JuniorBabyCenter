function validateForm() {
  // Store form input fields in respective variables
  const username = document.registration.username;
  const email = document.registration.email;
  const password = document.registration.password;
  const passwordConfirm = document.registration.passwordconfirm;
  


  // Get element by their ids and store them for injecting error messages
  const usernameError = document.getElementById("username-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const passwordConfirmError = document.getElementById(
    "password-confirm-error"
  );
  // const success = document.getElementById("success");

   // If username is not provided, change the input styling as required below
  if (username.value == "") {
    usernameError.textContent = "Username is required";
    username.style.border = "1px solid tomato";
    username.focus();

    // Return false commands that the form must not be submitted to the server/backend
    return false;

    // if email is not provided and does match the regex below
  } else if (email.value == "" || /\S+@\S+/.test(email.value) == false) {
    // This executed when the username is provided correctly, change style of the username to success
    usernameError.textContent = "";
    username.style.border = "1px solid green";

    // Change the email input styling to failed
    emailError.textContent = "Email is required in a correct format";
    email.style.border = "1px solid tomato";
    email.focus();
    return false;
  } else if (password.value.length < 5 || password.value.length > 12) {
    // Change the email styling to success
    emailError.textContent = "";
    email.style.border = "1px solid green";

    // Change password style to failure
    passwordError.textContent =
      "Password is required and should be between 5 and 12 ";
    password.style.border = "1px solid tomato";
    password.focus();
    return false;
  } else if (passwordConfirm.value != password.value) {
    // change password to success
    passwordError.textContent = "";
    password.style.border = "1px solid green";

    // Change the password confirm to failure
    passwordConfirmError.textContent = "Password do not match";
    passwordConfirm.style.border = "1px solid tomato";
    passwordConfirm.focus();
    return false;
  } else {
    success.textContent = "You have successfully filled in the form";
    success.style.border = "1px solid green";
    success.focus();

    // return true; return true upon successful form validation
    return false;
  }
}
