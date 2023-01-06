
//Create the grid that appears when page is launched based on num
function defaultGrid(num){
    const grid = document.querySelector('.grid');
    for(j = 0 ; j < num ; j++){
        for(let i = 1 ; i < num + 1 ; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            
            grid.style.gridTemplateColumns = 'repeat(' + num + ', 80px)';
            grid.style.gridTemplateRows = 'repeat(' + num + ', 80px)';

            cell.addEventListener('mouseover', function(e){
                e.target.style.background = "green";
            }); 
        }
    }
}


const button = document.querySelector('.button');

button.addEventListener("click", () => {
    
    newGrid();
}); 

function newGrid(grid_squares){
    grid_squares = prompt("Number of Squares: ");
    grid_squares = Number(grid_squares); 
        defaultGrid(grid_squares);

        
    };



defaultGrid(16);

//NEXT 
// #Determine how to make the number that you put into the prompt the length of the grid on all sides.  For example, if I put in 3 when prompted, the square is 3x3, not 3 or 9 squares straight across
//Determine how to make previous grid disappear when button is pressed (try .remove at https://developer.mozilla.org/en-US/docs/Web/API/Element/remove)