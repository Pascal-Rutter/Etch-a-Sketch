function changeToHovered(){
    this.setAttribute("class", "hovered")
}

for (i = 0; i < 16; i++) {
    for(j = 0; j < 16; j++){
        let square = document.createElement("div");
        square.setAttribute("id", `square[${i},${j}]`);
        square.setAttribute("class", "square");
        
        square.addEventListener('mouseover', changeToHovered);
        document.querySelector("div").appendChild(square);
    }
}
