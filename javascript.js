const container = document.querySelector('.container');
let grid = [];

function setDiv() {
    let input = window.prompt('How many squares per side?')
    container.textContent = "";
    for (i=1; i<=input**2; i++) {
        let box = document.createElement('div');
        box.classList.add('box')
        box.textContent= "s"
        container.append(box);
    }
    container.style.gridTemplate = `repeat(${input}, 1fr) / repeat(${input}, 1fr)`;
}

document.querySelector('#userInput').onclick = setDiv;