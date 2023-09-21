
function createGrid (x){




    for (let columns = 0; columns < x; columns++) {
        for (let rows = 0; rows < x; rows++) {
            const grid = document.createElement("div");
    grid.id = 'grid'
    let pixels = document.getElementById('gridBox').offsetHeight/x;
    grid.style.height = pixels + "px";
    grid.style.width = pixels + 'px';
    grid.style.backgroundColor = 'white';
    document.getElementById("gridBox").appendChild(grid);
        }
    
    }
}

const gridBox = document.getElementById('gridBox')

gridBox.addEventListener('mouseover', createGrid(16))
gridBox.addEventListener('mouseover', gridHover)

function gridHover (x) {
x.target.style.backgroundColor = 'black';
}

document.getElementById('reset').addEventListener('click', resetGrid)

function resetGrid (x) {
gridBox. innerHTML = '';
createGrid(16);
}
