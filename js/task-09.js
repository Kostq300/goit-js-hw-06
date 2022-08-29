function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnS = document.querySelector('button');
const bodyS = document.querySelector('body');
const spanS = document.querySelector('span');

btnS.addEventListener('click', onChangingColor);

function onChangingColor() {
  bodyS.style.backgroundColor = getRandomHexColor();
  spanS.textContent = bodyS.style.backgroundColor;
}