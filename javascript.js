
const gridBox = document.getElementById('gridBox')
var x = 4

function createGrid (x){
    gridUpdate ()
    let pixels = document.getElementById('gridBox').offsetHeight/x;

    for (let columns = 0; columns < x; columns++) {
        for (let rows = 0; rows < x; rows++) {
            const grid = document.createElement("div");
    grid.id = 'grid'
    
    grid.style.height = pixels + "px";
    grid.style.width = pixels + 'px';
    grid.style.backgroundColor = 'white';
    document.getElementById("gridBox").appendChild(grid);
        }
    
    }
return}
function gridHover (x) {
x.target.style.backgroundColor = 'black';
return}
function resetGrid () {
gridBox.innerHTML = '';
createGrid(x);
return}
function gridUpdate () {document.getElementById('gridSize').innerHTML = (x + 'x' + x)
return}
function gridShrink(){
    if (x <=2 ) {return 0;}
currentSize = x
x = currentSize/2
resetGrid();
return}
function gridExpand(){
    if (x >= 128 ) {return 0;}
currentSize = x
x = currentSize*2
resetGrid();
return}

gridBox.addEventListener('mouseover', createGrid(x))
gridBox.addEventListener('mouseover', gridHover)

document.getElementById('reset').addEventListener('click', resetGrid)



plus = document.getElementById('plus')
plus.addEventListener('click', gridExpand)



minus = document.getElementById('minus')
minus.addEventListener('click', gridShrink)


