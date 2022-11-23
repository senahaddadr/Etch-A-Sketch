const container = document.querySelector('.container');
let grid = [];

function setDiv() {
    let input = window.prompt('How many squares per side?')
    grid = [];
    for (i=1; i<=input**2; i++) {
        grid[i] = document.createElement('div');
        grid[i].classList.add('box')
        container.append(grid[i]);
    }
}

document.querySelector('#userInput').onclick = setDiv;