const DEFAULT_SIZE = 16;

function createGrid(size) {
    const gridContainer = document.createElement("div");
    let gridSquare; 
    for (let i = 1; i <= Math.pow(size, 2); i++) {
        gridSquare = document.createElement("div");
        gridSquare.className = "grid-square";
        gridContainer.appendChild(gridSquare);
    }
    return gridContainer;
}

const gridContainer = createGrid(DEFAULT_SIZE);
gridContainer.style.cssText = `display: grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr); width: 70vh; height: 70vh; margin: 5vh auto;`;
document.body.appendChild(gridContainer);

document.querySelector("#grid-size").addEventListener("click", function() {
   let size = parseInt(prompt("Enter desired grid size(Max: 100):"));
   if (size <= 100) {
    document.querySelector("div").remove();
    const gridContainer = createGrid(size);
    gridContainer.style.cssText = `display: grid; grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr); width: 70vh; height: 70vh; margin: 5vh auto;`;
    document.body.appendChild(gridContainer);
   } 
   else {
    alert("Enter grid size below 100");
   }
});

