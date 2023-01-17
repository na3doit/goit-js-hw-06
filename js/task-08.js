
const form = document.querySelector('.login-form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const emailValue = event.currentTarget.elements.email.value;
  const emailKey = event.currentTarget.elements.email.name;
  const passValue = event.currentTarget.elements.password.value;
  const passKey = event.currentTarget.elements.password.name;

  if (emailValue === '' || passValue === '') {
    alert('Увага! Поля email i password  повинні бути заповнені!');
  } else {
    const formField = {
      [emailKey]: emailValue,
      [passKey]: passValue,
    };
    console.log(formField);
    form.reset();
  }
}
