function makeGrid(size) {
  document.documentElement.style.setProperty('--grid-size', size);

  const container = document.getElementById('container');
  container.innerHTML = '';

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.className = 'square';
    cell.addEventListener('mouseenter', () => {
      cell.style.backgroundColor = 'black';
    });
    container.appendChild(cell);
  }
}

makeGrid(16);

document.getElementById('resizeButton').addEventListener('click', () => {
  let newSize = prompt('Enter grid size (max 100):');
  newSize = Number(newSize);

  if (newSize > 100 || newSize < 1 || Number.isNaN(newSize)) {
    alert('Invalid size');
    return;
  }

  makeGrid(newSize);
});
