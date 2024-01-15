

function createBoard(){
    const board = document.getElementById('board');
    const boardWidth = 2000;
    board.width = boardWidth + 'px';
    board.length = boardWidth + 'px';
}


function createGrid(){
    let gridWidth = 16;
    for (i = 0; i < gridWidth ** 2; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.className = 'grid-block';
        gridBlock.width = 

        board.appendChild(gridBlock);
        console.log(i);
    }
}

createGrid();