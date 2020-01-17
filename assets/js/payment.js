function validatePayment() {
  const totalHours = document.getElementById('totalHours');
  const totalHoursError = document.getElementById('totalHoursError');
  if (!totalHours.value) {
    totalHoursError.innerHTML = 'Total hours is required';
    return false;
  } else {
    totalHoursError.innerHTML = '';
    return true;
  }
}

const totalHours = document.getElementById('totalHours');

totalHours.addEventListener('keyup', () => {
  const club = document.getElementById('club');
  const numberOfChildren = document.getElementById('numberOfChildren');
  const totalAmount = document.getElementById('totalAmount');
  const totalHours = document.getElementById('totalHours');
  if (
    club.value == 'Morning Club' ||
    club.value == 'Afternoon Club' ||
    club.value == 'Evening Club'
  ) {
    totalAmount.value = (8500 * numberOfChildren.value * totalHours.value) / 2;
  } else {
    totalAmount.value = (12000 * numberOfChildren.value * totalHours.value) / 2;
  }
});
