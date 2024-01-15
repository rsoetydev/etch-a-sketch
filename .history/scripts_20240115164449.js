const startBtn = document.getElementById('startBtn');
let boardWidth = 1500;
const board = document.getElementById('board');
board.style.width = boardWidth + 'px';
board.style.height = boardWidth + 'px';

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
    document.querySelectorAll('.grid-block').forEach(e => e.remove());
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