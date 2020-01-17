    //handling empty username fill
    if(username.value === ''){
        usernameError.textContent = 'Username is required';
        username.style.border = '1px solid tomato';
        username.focus();
        return false;
        }   
          //handling empty email fill
    if(email.value === ''){
        emailError.textContent = 'Email is required';
        email.style.border = '1px solid tomato';
        email.focus();
        return false;
        }
    
        //handling empty password fill
    if(password.value === ''){
        passwordError.textContent = 'Password is required';
        password.style.border = '1px solid tomato';
        password.focus();
        return false;
        }
        //handling empty password confirm fill
    if(passwordConfirm.value === ''){
        passwordConfirmError.textContent = 'confirm password';
        passwordConfirm.style.border= '1px solid tomato';
        passwordConfirm.focus();
        return false;
        }
    