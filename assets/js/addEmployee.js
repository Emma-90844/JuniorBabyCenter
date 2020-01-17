function validateCreateEmployee() {
  //First name validation
  const firstName = document.getElementById('first_name');
  const reName = /^[a-zA-Z\s]{3,45}$/;

  // Phone number validation
  const phoneNumber = document.getElementById('phone_number');
  rePhoneNumber = /^[0-9\+]{10,15}$/;

  // Last names
  const lastName = document.getElementById('last_name');

  //email validation
  const email = document.getElementById('email');
  const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+/;

  //Next of kin name validation
  const nextOfkin = document.getElementById('kin');
  const reKin = /^[a-zA-Z\s]{5,45}$/;

  // Next of Kin Phone number validation
  const nextOfKinNumber = document.getElementById('kin_contact');
  const reNextOfKin = /^[0-9\+]{10,15}$/;

  if (!reName.test(firstName.value)) {
    document.getElementById('firstname_error').innerHTML =
      'First name must be more than 2 letters';
    firstName.style.border = '1px solid red';
    return false;

  } else if (!rePhoneNumber.test(phoneNumber.value)) {
    document.getElementById('firstname_error').innerHTML = '';
    firstName.style.border = '1px solid green';
    document.getElementById('phonenumber_error').innerHTML =
      'Enter Phone number( Must be more than 9 numbers )';
    phoneNumber.style.border = '1px solid red';
    return false;

  } else if (!reName.test(lastName.value)) {
    document.getElementById('phonenumber_error').innerHTML = '';
    phoneNumber.style.border = '1px solid green';
    document.getElementById('lastname_error').innerHTML =
      'Enter Last Name( Must be more than 2 letters)';
    lastName.style.border = '1px solid red';
    return false;
  } else if (!reEmail.test(email.value)) {
    document.getElementById('lastname_error').innerHTML = '';
    lastName.style.border = '1px solid green';
    document.getElementById('email_error').innerHTML = 'Enter a Valid Email';
    email.style.border = '1px solid red';
    return false;
  } else if (!reKin.test(nextOfkin.value)) {
    document.getElementById('email_error').innerHTML = '';
    email.style.border = '1px solid green';
    document.getElementById('kin_error').innerHTML =
      'Name must be more than 4 characters';
    nextOfkin.style.border = '1px solid red';
    return false;
  } 
  else if (!reNextOfKin.test(nextOfKinNumber.value)) {

    document.getElementById('kin_error').innerHTML = '';
    nextOfkin.style.border = '1px solid green';
    document.getElementById('kinnumber_error').innerHTML =
    'Enter Phone number( Must be more than 9 numbers )';
    phoneNumber.style.border = '1px solid green';
    return false;
    
  } else {
    document.getElementById('kinnumber_error').innerHTML = '';
    phoneNumber.style.border = '1px solid green';
    return true;
  }

};








