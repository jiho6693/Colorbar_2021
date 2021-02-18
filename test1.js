const container = document.querySelector('#container');
const SQUARE_NUM = 2000;
const colors = ['#c6045a', '#06adbc', '#286047', '#efe337', '#b9272b', '#dcf7f4', '#536472', '#656e74', '#2b2b2b', '#1a4e69', '#fdb205', '#731b1e', '#8c152c', '#00a917' ];

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
