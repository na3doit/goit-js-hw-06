let counterValue = 0;
const counterEl = document.querySelector('#counter');
const btnIncrElem = counterEl.querySelector('[data-action="increment"]');
const btnDecElem = counterEl.querySelector('[data-action="decrement"]');
const spanEl = counterEl.querySelector('#value');

function increm() {
  counterValue += 1;
  spanEl.textContent = counterValue;
}

function decrem() {
  counterValue -= 1;
  spanEl.textContent = counterValue;
}
btnIncrElem.addEventListener('click', increm);
btnDecElem.addEventListener('click', decrem);
