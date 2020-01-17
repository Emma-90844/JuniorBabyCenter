function validateLoginForm() {
  const email = document.getElementById('login_email');
  const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
  const password = document.getElementById('password');

  if (!reEmail.test(email.value)) {
    document.getElementById('email-error').innerHTML = 'Email is required!!';
    email.style.border = '1px solid red';
    return false;

  } else if (!password.value){
    document.getElementById('email-error').innerHTML = '';
    email.style.border = '1px solid green';
    document.getElementById('password-error').innerHTML = 'Password is required!!';
    password.style.border = '1px solid red';
    return false;
    
  } else {
    document.getElementById('password-error').innerHTML = '';
    password.style.border = '1px solid green';
    return true;
  }
}
