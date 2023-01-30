let grid_size = 16;

const container = document.querySelector('.container');

for (let rows = 0; rows < grid_size; rows++) {
    const row = document.createElement('div');
    row.classList.add('row');
    container.appendChild(row);
    for (let square = 0; square < grid_size; square++) {
        const square = document.createElement('div');
        square.classList.add('grid-item');
        row.appendChild(square);
    }
}
