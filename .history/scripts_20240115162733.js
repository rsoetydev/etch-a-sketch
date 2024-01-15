const startBtn = document.getElementById('startBtn');

startBtn.addEventListener("click", () =>{
    createBoard(getBoardSize());
});


function getBoardSize(){
    let boardWidth = 0;
    while (boardWidth < 0 || boardWidth >100){
        boardWidth = prompt("Please input gridth width");
    }
}


function createBoard(boardWidth){
    const board = document.getElementById('board');
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
        gridBlock.addEventListener("mouseover", (e) =>{
            gridBlock.classList.add('filled');
        });


        board.appendChild(gridBlock);
    }
}

createBoard();