const container = document.querySelector('.container');
let size = 16;
const margin = 5;
const minCellSize = 40;                 // во сколько пикселей минимум одна клетка
const cellSize = minCellSize;           // можно потом масштабировать
const boardSize = size * (cellSize + margin * 2);


container.style.width = boardSize + 'px';

for (let i = 0; i < size * size; i++) {
    const square  = document.createElement('div');
    square.classList.add('row');
    square.style.width = cellSize + 'px';
    square.style.height = cellSize + 'px';
    container.appendChild(square);
}
