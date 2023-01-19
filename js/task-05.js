const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');
const outputDefault = output.textContent;

input.addEventListener('input', event => {
  if (event.currentTarget.value.trim() !== '') {
    output.textContent = event.currentTarget.value;
  } else {
    output.textContent = outputDefault;
  }
});
