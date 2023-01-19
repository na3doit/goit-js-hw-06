const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('Увага! Поля email i password  повинні бути заповнені!');
  } else {
    const formField = {
      [email.name]: email.value,
      [password.name]: password.value,
    };
    console.log(formField);
    form.reset();
  }
}
