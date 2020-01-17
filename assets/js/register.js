//geting elements with respective ids in ('') and assigning them to corresponding variable
var username = document.registration.username;
var email = document.registration.email;
var password = document.registration.password;
var passwordConfirm = document.registration.passwordconfirm;


//getting error messages with respective ids from the innerHTML 
var usernameError = document.getElementById('username-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var passwordConfirmError = document.getElementById('password-error');


function validateForm(){
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

}
//ADDING EVENT HANDLERS 
document.getElementById('username').addEventListener('blur',verifyUsername);
document.getElementById('email').addEventListener('blur',verifyEmail);
document.getElementById('password').addEventListener('blur',verifyPassword);
document.getElementById('passwordconfirm').addEventListener('blur',verifyPasswordConfirm);

//  ADDING EVENT LISTENERS
//varifying username
function verifyUsername(){
    if(username.value != ''){
        usernameError.textContent = '';
        username.style.border = '1px solid green';
        // username.focus();
        return true;
        }
    }
//verifying email
function verifyEmail(){
    if(email.value != ''){
        emailError.textContent = '';
        email.style.border = '1px solid green';
        return false;
        }  
}
// verifying password
function verifyPassword(){
       if(password.value != ''){
        passwordError.textContent = '';
        password.style.border = '1px solid green';
        return false;
        }
}

// verifying password confirm
function verifyPasswordConfirm(){
    if(passwordConfirm.value != ''){
        passwordConfirmError.textContent = '';
        passwordConfirm.style.border = '1px solid green';
        // passwordConfirm.focus();
        return false;
        }



        
}

  









