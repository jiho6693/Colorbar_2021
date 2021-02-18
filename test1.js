const container = document.querySelector('#container');
const SQUARE_NUM = 1000;
const colors = ['#c6045a', '#35a052', '##4a5f7d', '#494b4a', '#a6a6a6', '#7d7a73', '#efeb5b', '#000000', '##FFFF00', '#966f33'];

for(let i=0; i<SQUARE_NUM; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => {
    setColorToEl(square);
  });
  square.addEventListener('mouseout', () => {
    removeColorFromEl(square);
  });
  container.appendChild(square);
}

function setColorToEl(element) {
  //set random color
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0  0 10px ${color}`;


}

function getRandomColor() {
  return colors[Math.floor(Math.random()*colors.length)]
}
