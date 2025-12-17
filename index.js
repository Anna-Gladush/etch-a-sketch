const container = document.querySelector('.container');
const margin = 2;
const border = 1;

//USER INPUT
let userInput = prompt("What sketchpad size do you want? (enter only numbers)");
let size = parseInt(userInput);

if (userInput === 'null' || typeof userInput !== 'number') {
    size = prompt('Your input is wrong. Please type a number');
}


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

