const textInput = document.querySelector('#validation-input');

textInput.addEventListener('blur', changeValadation);

function changeValadation(event) {
  textInput.classList.remove('invalid');
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add('valid');
  } else {
    textInput.classList.add('invalid');
  }
}
