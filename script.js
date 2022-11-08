function createGrid(num){
    const grid = document.querySelector('.grid');
    for(let i = 1 ; i < num + 1 ; i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }
}

createGrid(256);