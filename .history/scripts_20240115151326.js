const board = document.getElementById('board');




function createGrid(){
    let gridWidth = 16;
    for (i = 0; i < gridWidth ** 2; i++) {
        const gridBlock = document.createElement('div');
        gridBlock.className = 'grid-block';
        console.log(i);
    }
}

createGrid();