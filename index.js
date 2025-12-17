const container = document.querySelector('.container');
const gap = 2;
const border = 1;

drawSketchPad();

function drawGrid(size) {
    for (let i = 0; i < size * size; i++) {
        const square  = document.createElement('div');
         square.style.width = 600 / size + 'px';
        square.style.height = 600 / size + 'px';
        square.classList.add('row');
        container.appendChild(square);
    }
    console.log('total cells:', container.children.length); 
}

function drawSketchPad() {
    let size;
    const text = document.querySelectorAll('.text');
    const input = document.querySelector('#number');
    const btn = document.querySelector('.hiddenRefreshButton')
    input.addEventListener("keydown", (e) => {
        if (e.key === 'Enter') {
            size = e.target.value;
            if (size >= 100) {
                document.querySelector('#prompt').textContent = 'The number is more than 100. Please enter a lower number';
                document.querySelector('#pressEnter').textContent = '';
                return;
            }
            if (size < 100) {
                input.style.display = 'none';
                text.forEach(p => {p.textContent = '';});
                btn.style.display='block';
                drawGrid(size);
            }
        }
        randomColoring();
        refresh();
})}

function randomColoring() {
let square = document.querySelectorAll('.row');
square.forEach((cell) => {
    cell.addEventListener('mouseenter', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        cell.addEventListener("click", () => cell.style.backgroundColor = `white`)
    })
})
}

function refresh(){
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
        
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }


        btn.style.display='none';
    })
    //btn.classList.remove('.toggle')
}