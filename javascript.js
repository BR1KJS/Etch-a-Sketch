let gridSize = 16
for (let size = 0; size < gridSize; size++) {
    const grid = document.createElement("div");
    grid.id = 'grid'
    grid.style.height = "100px";
    grid.style.width = "100px";
    grid.style.backgroundColor = 'white';
    document.getElementById("gridBox").appendChild(grid);
}

const gridBox = document.getElementById('gridBox')
gridBox.addEventListener('mouseover', checkGrid)

function checkGrid (x) {

x.target.style.backgroundColor = 'black';

}


