const container = document.querySelector('.container');
let grid = [];

function makeGrid(n) {
    for (i=1; i<=n**2; i++) {
        let box = document.createElement('div');
        box.classList.add('box')
        box.textContent= " "
        container.append(box);
        box.addEventListener('click', () => box.classList.add('focus'))
        container.style.gridTemplate = `repeat(${n}, 1fr) / repeat(${n}, 1fr)`;
    }
}


function setDiv() {
    container.textContent = "";
    let input = window.prompt('How many squares per side?')
    if (input > 100 || input < 1 || input == NaN) {
        alert ('Wrong input! Try again.')
        let input = window.prompt('How many squares per side?')
        makeGrid(input)
    } else {makeGrid(input)}
}

document.querySelector('#userInput').onclick = setDiv;
