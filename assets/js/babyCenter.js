//LOG IN VALIDATION
const loginForm = document.getElementById('loginForms');
loginForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('testing......');

  //validating email address
  const email = document.getElementById('login_email');
  const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

  if (!reEmail.test(email.value)) {
    document.getElementById('email-error').innerHTML = 'Enter a valid email';
    email.style.border = '1px solid red';
  } else {
    document.getElementById('email-error').innerHTML = '';
    email.style.border = '1px solid green';
  }

  // validating password
  const password = document.getElementById('password');

  if (password.value.length <= 4 || password.value.length >= 13) {
    document.getElementById('password-error').innerHTML =
      'Password must not be less than 5 characters';
    password.style.border = '1px solid red';
  } else {
    document.getElementById('password-error').innerHTML = '';
    password.style.border = '1px solid green';
  }
});
