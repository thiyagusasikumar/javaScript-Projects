
const board=document.getElementById("board");
const resetButton=document.getElementById("reset");
const cells=document.querySelectorAll(".cell");
const status_text=document.getElementById("status");

let currentPlayer='X';
let gameState=['','','','','','','','','',];
let game_status=true;

for(let i=0; i<cells.length; i++){
    cells[i].addEventListener('click',handleCellClick);
}
function handleCellClick(event){
    const clickedcell= event.target;
    const clickedCell=parseInt(clickedcell.ge)
}