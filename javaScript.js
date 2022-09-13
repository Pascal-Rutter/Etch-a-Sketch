function changeToHovered(){
    this.setAttribute("class", "hovered")
}

function createSquares(squareNumber){
    for (i = 0; i < squareNumber; i++) {
        for(j = 0; j < squareNumber; j++){
            let square = document.createElement("div");
            square.setAttribute("id", `square[${i},${j}]`);
            square.setAttribute("class", "square");
            
            square.addEventListener('mouseover', changeToHovered);
            document.querySelector("div").appendChild(square);
        }
    }
}

function deleteGrid(){
    let container = document.getElementById("container");
    container.innerHTML ='';
}

function changeGridSize(size){
    let pixels = 480/size;
    let container = document.getElementById("container");
    container.setAttribute("style", "grid-template-columns: repeat(" + size + "," + pixels + "px); "
                                + "grid-template-rows: repeat(" + size + "," + pixels +"px)");

}

createSquares(16);

let newGridButton = document.getElementById("newGridButton");
newGridButton.addEventListener('click', ()=>{
    let input = prompt("How many Squares should the new Grid have?");
    deleteGrid();
    createSquares(input);
    changeGridSize(input);
})