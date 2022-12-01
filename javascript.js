const container = document.querySelector('.container');
const dimension = document.querySelector('#value')
const slider = document.querySelector('#slider')
let input = 16;
setDiv()

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
    let input = document.getElementById("slider").value
    makeGrid(input)
}

function updateValue(value) {
    dimension.innerHTML = `${value} x ${value}`
}

function updateSize(value) {
    updateValue(value)
    setDiv()
}

function reset() {
    container.textContent = "";
    setDiv()
}

slider.onmousemove = (e) => updateValue(e.target.value)
slider.onchange = (e) => updateSize(e.target.value)
document.querySelector('#slider').onclick = setDiv;
document.querySelector('.reset').onclick = reset;

console.log(value)