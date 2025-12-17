const container = document.querySelector('.container');
const margin = 2;
const border = 1;

drawSketchPad();

function drawGrid(size) {
// chose height to scale (because it's smaller then width)
    const boardSize = window.innerHeight * 0.9; 

    container.style.width = boardSize + 'px';

    const cellSize = (boardSize / size) - 2 * margin;

    for (let i = 0; i < size * size; i++) {
        const square  = document.createElement('div');
        square.classList.add('row');
        square.style.width = cellSize + 'px';
        square.style.height = cellSize + 'px';
        container.appendChild(square);
        console.log(size)
    }
}

function drawSketchPad() {
    let size;
    const text = document.querySelectorAll('.text');
    const input = document.querySelector('#number');
    input.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            size = e.target.value;
            input.style.display = 'none';
            text.forEach(p => {p.textContent = '';})
            console.log('Enter нажат, size:', size);
        }
        drawGrid(size);
})}