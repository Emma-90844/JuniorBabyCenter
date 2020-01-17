//REGISTRATION VALIDATION:
console.log('...listening'); // testing

const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log('.....am in'); //testing
  //First name validation
  const firstName = document.getElementById('first_name');
  const reFirstName = /^[a-zA-Z]{4,45}$/;
  if (!reFirstName.test(firstName.value)) {
    document.getElementById('firstname_error').innerHTML =
      'Enter first name.Must not be less than 3 characters';
    firstName.style.border = '1px solid red';
  } else {
    document.getElementById('firstname_error').innerHTML = '';
    firstName.style.border = '1px solid green';
  }

  //Last name validation
  const lastName = document.getElementById('last_name');
  const reLastName = /^[a-zA-Z]{4,45}$/;
  if (!reLastName.test(lastName.value)) {
    document.getElementById('lastname_error').innerHTML = 'Enter last name.';
    lastName.style.border = '1px solid red';
  } else {
    document.getElementById('lastname_error').innerHTML = '';
    lastName.style.border = '1px solid green';
  }

  //Email address validation
  const myEmail = document.getElementById('email');
  const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

  if (!reEmail.test(myEmail.value)) {
    document.getElementById('email_error').innerHTML = 'Enter a valid email';
    myEmail.style.border = '1px solid red';
  } else {
    document.getElementById('email_error').innerHTML = '';
    myEmail.style.border = '1px solid green';
  }

  //Password validation

  const registerPassword = document.getElementById('register-password');

  if (
    registerPassword.value.length <= 4 ||
    registerPassword.value.length >= 13
  ) {
    document.getElementById('registerPassword_error').innerHTML =
      'Password must not be less than 5 characters';
    registerPassword.style.border = '1px solid red';
  } else {
    document.getElementById('registerPassword_error').innerHTML = '';
    registerPassword.style.border = '1px solid green';
  }

  const confirmPassword = document.getElementById('confirm_Registerpassword');
  if (confirmPassword.value.length !== registerPassword.value.length) {
    document.getElementById('confirmPassword_error').innerHTML =
      'Password donot match';
    confirmPassword.style.border = '1px solid red';
  } else {
    document.getElementById('confirmPassword_error').innerHTML = '';
    confirmPassword.style.border = '1px solid green';
  }
});
