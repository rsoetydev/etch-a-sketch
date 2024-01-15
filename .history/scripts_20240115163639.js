const startBtn = document.getElementById('startBtn');
let boardWidth = 2000;
const board = document.getElementById('board');
board.width = boardWidth + 'px';
board.length = boardWidth + 'px';

startBtn.addEventListener("click", () =>{
    createGrid(getGridWidth());
});


function getGridWidth(){
    let gridWidth = 0;
    while (gridWidth < 1 || gridWidth >100){
        gridWidth = prompt("Please input grid width");
    }
    return gridWidth;
}


function createGrid(gridWidth){
    let blockWidth = boardWidth / gridWidth;
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