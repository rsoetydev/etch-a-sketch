

function createBoard(){
    const board = document.getElementById('board');
    const boardWidth = 2000;
    board.width = boardWidth + 'px';
    board.length = boardWidth + 'px';

    createGrid(board, boardWidth);
}


function createGrid(board, boardWidth){
    let gridWidth = 16;
    let blockWidth = boardWidth / gridWidth;
    console.log(blockWidth);
    for (i = 0; i < gridWidth ** 2; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.className = 'grid-block';
        gridBlock.style.width = blockWidth + 'px';
        addEventListener("mouseover", (e) =>{
            this.classList.add('filled');
        });


        board.appendChild(gridBlock);
    }
}

createBoard();