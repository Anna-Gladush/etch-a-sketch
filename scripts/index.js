const container = document.querySelector('.container');
const h1 = document.querySelector('h1');
drawSketchPad();

function drawGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square  = document.createElement('div');
         square.style.width = 540 / size + 'px';
        square.style.height = 540 / size + 'px';
        square.classList.add('row');
        container.appendChild(square);
        container.style.border = 'solid 1px rgb(195, 195, 195)';
    }
}

function drawSketchPad() {
    let size;
    const text = document.querySelectorAll('.text');
    const input = document.querySelector('#number');
    const btn = document.querySelector('.hiddenRefreshButton');
    const color = document.querySelectorAll('.col');
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            size = e.target.value;
            if (size >= 100) {
                document.querySelector('#prompt').textContent = 'The number is more than 100. Please enter a lower number';
                document.querySelector('#pressEnter').textContent = '';
                return;
            } else if (size <= 0) {
                document.querySelector('#prompt').textContent = 'The number is negative or equals 0. Please enter a higher number';
                document.querySelector('#pressEnter').textContent = '';
                return;
            }
            if (size < 100) {
                color.forEach((color) => color.style.display = 'block')
                input.style.display = 'none';
                text.forEach(p => {p.textContent = '';});
                btn.style.display='block';
                h1.innerText = '';
                drawGrid(size);
            }
        }
        coloring();
        refresh();
})}

function refresh(){
    const color = document.querySelectorAll('.col');
    const btn = document.querySelector('.hiddenRefreshButton');
    btn.addEventListener('click', () => {
        const prompt = document.querySelector('#prompt');
        const pressEnter = document.querySelector('#pressEnter');
        const input = document.querySelector('#number');
        const div = document.querySelectorAll('.row')
        input.value = '';
        input.style.display = 'block';
        prompt.textContent = 'What sketchpad size do you want? (enter only positive numbers)';
        pressEnter.textContent = 'Press Enter';
        container.style.border = 'none';
        h1.innerText = 'Yours truly presents to you: Etch-a-Sketch';
        color.forEach((color) => color.style.display = 'none');
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }

        btn.style.display='none';
    })
}

function coloring() {
    let square = document.querySelectorAll('.row');
    let btn = document.querySelectorAll('.col')

    btn.forEach((color) => { color.addEventListener('click', () => {
        if (color.classList.contains('red')) {
            square.forEach((cell) => {
            cell.addEventListener('mouseenter', () => cell.style.backgroundColor = `#EF476F`)})
        } else if (color.classList.contains('orange')) {
            square.forEach((cell) => {
            cell.addEventListener('mouseenter', () => cell.style.backgroundColor = `#F78C6B`)})
        } else if (color.classList.contains('yellow')) {
            square.forEach((cell) => {
            cell.addEventListener('mouseenter', () => cell.style.backgroundColor = `#FFD166`)})
        } else if (color.classList.contains('green')) {
            square.forEach((cell) => {
            cell.addEventListener('mouseenter', () => cell.style.backgroundColor = `#06D6A0`)})
        } else if (color.classList.contains('blue')) {
            square.forEach((cell) => {
            cell.addEventListener('mouseenter', () => cell.style.backgroundColor = `#118AB2`)})
        }  else if (color.classList.contains('darkblue')) {
            square.forEach((cell) => {
            cell.addEventListener('mouseenter', () => cell.style.backgroundColor = `#073B4C`)})
        } else if (color.classList.contains('random')) {
            randomColoring();
        }else if (color.classList.contains('clear')) {
            square.forEach((cell) => cell.style.backgroundColor = "white")
        }
        })
    })

}

function randomColoring() {
let square = document.querySelectorAll('.row');
square.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    })
})
}