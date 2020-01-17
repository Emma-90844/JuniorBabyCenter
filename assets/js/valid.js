
        // getting elemets by their ids from the document into a variable\

        const username = document.registration.username;
        const email = document.registration.email;
        // const password = document.registration.password;
        // const confirmPassword = document.registration.confirm-password;
        

        //craeting error message variables
        const usernameError = document.getElementById('username-error');
        // const emailError = document.getEElementById('emailError');
        // const passwordError = document.getElementById('passwprdError');
        // const confirmPasswordError = document.getElementById('confirmPasswordError')
        
    //    adding event listeners 
        document.getElementById('username').addEventListener('blur',verifyName);
        // document.getElementById('email').addEventListener('blur',verifyEmail);
        // document.getElementById('password').addEventListener('blur',verifyPassword);
        // document.getElementById('confirm-password').addEventListener('blur',verifyPasswordConfirm);

        function verifyName(){
            
            nameRegex = /^[a-zA-Z]{10,20}$/;
            if(!nameRegex.test(username.value)){
                usernameError.textContent = 'Required and must be 10-25 letters';
                username.style.border = '2px solid tomato';
                ussername.focus();
                return false;
            }else{
                usernameError.textContent = '';
                username.style.border = '2px solid green';
                return false;

            }

        }






     