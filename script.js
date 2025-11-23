const container = document.getElementById('container');

for (let i = 0; i < 16 * 16; i++) {
  const cell = document.createElement('div');
  cell.className = 'square';
  container.appendChild(cell);
}

const squares = document.querySelectorAll('.square');

squares.forEach((square) => {
  square.addEventListener('mouseenter', () => {
    square.style.backgroundColor = 'black';
  });
});
