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

function black(event) {
    event.target.style.backgroundColor = "black";
}

function color(event) {
    event.target.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

function selection(mode) {
    let gridSquares = document.getElementById("grid-container").children;
    switch(mode) {
        case "black":
            for (const gridSquare of gridSquares) {
                gridSquare.addEventListener("mouseenter", black);
            }
            break;
        case "color":
            for (const gridSquare of gridSquares) {
                gridSquare.removeEventListener("mouseenter", black);
                gridSquare.addEventListener("mouseenter", color);
            }
            break;
        case "erase":
            for (const gridSquare of gridSquares) {
                gridSquare.removeEventListener("mouseenter", black);
                gridSquare.removeEventListener("mouseenter", color);
                gridSquare.addEventListener("click", function() {
                    gridSquare.style.backgroundColor = `rgb(255, 255, 255)`;
                })
            }
            break;
        case "clear":
            for (const gridSquare of gridSquares) {
                gridSquare.removeEventListener("mouseenter", black);
                gridSquare.removeEventListener("mouseenter", color);
                gridSquare.style.backgroundColor = "white";
            }
    }
}


const gridContainer = createGrid(DEFAULT_SIZE);
gridContainer.id = "grid-container";
gridContainer.style.cssText = `display: grid; grid-template-rows: repeat(16, 1fr); grid-template-columns: repeat(16, 1fr); width: 70vh; height: 70vh; margin: 5vh auto;`;
document.body.appendChild(gridContainer);
selection("black");

document.querySelector("#grid-size").addEventListener("click", function() {
   let size = parseInt(prompt("Enter desired grid size(Max: 100):"));
   if (size <= 100) {
    const gridContainer = createGrid(size);
    gridContainer.id = "grid-container";
    gridContainer.style.cssText = `display: grid; grid-template-rows: repeat(${size}, 1fr); grid-template-columns: repeat(${size}, 1fr); width: 70vh; height: 70vh; margin: 5vh auto;`;
    const previousContainer = document.querySelector("#grid-container");
    document.body.replaceChild(gridContainer, previousContainer);
    selection("black");
} 
   else {
    alert("Enter grid size below 100");
   }
});

document.getElementById("color").addEventListener("click", function() {
    selection("color");
});
document.getElementById("eraser").addEventListener("click", function() {
    selection("erase");
});
document.getElementById("clear").addEventListener("click", function() {
    selection("clear");
});
document.getElementById("black").addEventListener("click", function() {
    selection("black");
});
