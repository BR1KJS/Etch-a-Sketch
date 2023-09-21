
const gridBox = document.getElementById('gridBox')
let defaultSize = 4
var x = defaultSize
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
gridBox.addEventListener('mouseover', createGrid(x))
gridBox.addEventListener('mouseover', gridHover)

function gridHover (x) {
x.target.style.backgroundColor = 'black';
}

document.getElementById('reset').addEventListener('click', resetGrid)

function resetGrid () {
gridBox.innerHTML = '';
createGrid(x);
}
gridSize = gridBox.childElementCount
document.getElementById('gridSize').innerHTML = gridSize + ' px'

plus = document.getElementById('plus')
plus.addEventListener('click', gridExpand)

function gridExpand(){
    if (x >= 32 ) {return 0;}
currentSize = x
x = currentSize*2
 console.log(x)
resetGrid();
}

minus = document.getElementById('minus')
minus.addEventListener('click', gridShrink)


function gridShrink(){
    if (x <=2 ) {return 0;}
currentSize = x
x = currentSize/2
 console.log(x)
resetGrid();
}