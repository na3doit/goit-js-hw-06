const bodyEl = document.querySelector('body');
const textColorHex = document.querySelector('.color');
const btnChangeColor = document.querySelector('.change-color');

btnChangeColor.addEventListener('click', onClickButton);

function onClickButton() {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  textColorHex.textContent = randomColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
