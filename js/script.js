let gridSize = 16;
let currentMode = 'black';

const container = document.querySelector('.grid-container');




function buildGrid() {
    for (let rows = 0; rows < gridSize; rows++) {
        const row = document.createElement('div');
        row.classList.add('row');
        container.appendChild(row);
        for (let square = 0; square < gridSize; square++) {
            const square = document.createElement('div');
            square.classList.add('grid-item');
            row.appendChild(square);
        }
    }
}

function destroyGrid() {
    for (let rows = 0; rows < gridSize; rows++) {
        let row = document.querySelector('.row');
        for (let square = 0; square < gridSize; square++) {
            let square = document.querySelector('.grid-item');
            row.removeChild(square);
        }
        container.removeChild(row);
    }
}

function changeGridSize() {
    destroyGrid();
    gridSize = prompt('Enter a new size for the grid between 2 - 100.');
    while ( gridSize < 2 || gridSize > 100) {
        gridSize = prompt('New grid size must be between 2 and 100.');
    }
    buildGrid();
    addListeners();
}

function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.setAttribute('style', 'background: white;');
    });
}

function addListeners() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((gridItem) => {
        gridItem.addEventListener('mouseover', () => {
            if (currentMode === 'black') {
                gridItem.setAttribute('style', 'background: black');
            } else if (currentMode === 'rainbow') {
                gridItem.setAttribute('style', `background: #${Math.floor(Math.random()*16777215).toString(16)};`)
            } else {
                gridItem.setAttribute('style', 'background: white;');
            }
        });
    });
}

function changeColorMode(color) {
    if (color === 'black') {
        currentMode = 'black';
    } else if (color === 'rainbow') {
        currentMode = 'rainbow';
    } else {
        currentMode = 'erase';
    }
}

buildGrid(16);
addListeners();