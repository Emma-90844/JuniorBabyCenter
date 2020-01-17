

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
//ADDING EVENT HANDLERS 
document.getElementById('username').addEventListener('blur',verifyUsername);
document.getElementById('email').addEventListener('blur',verifyEmail);
document.getElementById('password').addEventListener('blur',verifyPassword);
document.getElementById('passwordconfirm').addEventListener('blur',verifyPasswordConfirm);

function verifyUsername(){
    const re = /^[a-zA-Z]{10,20}$/;
    if(!re.test(username.value)){
        usernameError.textContent = "Username must be between 10 to 20 letters";
        username.style.border = "1px solid tomato";
        username.focus();
        return false;
    }else {
        usernameError.textContent = "";
        username.style.border = "1px solid green";
        // username.focus();
        return false;
    }
}
function verifyEmail(){
    var mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;
    if(!mailFormat.test(email.value)){
        emailError.textContent = "Enter a valid email";
        email.style.border = "1px solid tomato";
        email.focus();
        return false;
    }else {
        emailError.textContent = "";
        email.style.border = "1px solid green";
        // username.focus();
        return false;
    }

}


function verifyPass(){
    if (password.value ==''){
        alert('sorry, field empty')
        passwordError.textContent =" please enter your password";
        return false;
    }
}


    








// if (passwordConfirm.value == ''){
//     passwordConfirmError.textContent = " please re-enter your password"    
// }else if (passwordConfirm.value != password.value) {
//     // change password to success
//     passwordError.textContent = "";
//     password.style.border = "1px solid green";

//     // Change the password confirm to failure
//     passwordConfirmError.textContent = "Password do not match";
//     passwordConfirm.style.border = "1px solid tomato";
//     passwordConfirm.focus();
//     return false;
// }















// function verifypassword(){
//     var validPassword = /^[A-Za-z)-9]/;
//  if (!validPassword.test(password.value)) {
//     // Change the password confirm to failure
//     passwordConfirmError.textContent = "Password do not match";
//     passwordConfirm.style.border = "1px solid tomato";
//     passwordConfirm.focus();
//     return false;
// }


// }
