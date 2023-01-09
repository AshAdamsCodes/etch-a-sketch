
//Create a 16x16 grid that appears when page is launched 
//Make size of grid based on num just in case we change our minds about the size of default grid later based on num
function defaultGrid(num){
    //Select 'container' div
    const container = document.querySelector('.container');
    //Create a div with the class name 'grid'
    const grid = document.createElement('div');
    grid.classList.add("grid");
    //Make the 'grid' div a child of the 'container' div
    container.appendChild(grid);
    //Create the number of divs (cells) needed for the grid (num x num)
    //Give these divs a class name of 'cell'
    //Make the 'cell' divs children of the 'grid' div
    for(j = 0 ; j < num ; j++){
        for(let i = 1 ; i < num + 1 ; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            //Change the style of the grid, so that the num  is the length and width of the grid on all sides (num x num)
            grid.style.gridTemplateColumns = 'repeat(' + num + ', 80px)';
            grid.style.gridTemplateRows = 'repeat(' + num + ', 80px)';
            //Create an event listener, so that the cells change color when you mouseover them
            cell.addEventListener('mouseover', function(e){
                e.target.style.background = "green";
            }); 
        }
    }
}

//Create a button that when clicked, asks you what size grid you would like
const button = document.querySelector('.button');
button.addEventListener("click", () => {
    newGrid();
}); 

//Remove Previous grid 
//Create a new grid based on the answer to the prompted question
function newGrid(grid_squares){
    //Ask User How many what size square they would like
    grid_squares = prompt("Number of Squares: ");
    grid_squares = Number(grid_squares); 
    //Cap the number that the user can input to 100
    if(grid_squares > 100){
        alert('Number best be no greater than 100');
        return; 
    }
    //Remove the previous grid
    document.querySelector('.grid').remove();
    //Select 'container' div
    const container = document.querySelector('.container');
    //Create a div with the class name 'grid'
    let grid = document.createElement('div');
    grid.classList.add("grid");
    //Make the 'grid' div a child of the 'container' div
    container.appendChild(grid);
    //Create the number of divs (cells) needed for the grid based on user input (grid_squares x grid_squares)
    //Give these divs a class name of 'cell'
    //Make the 'cell' divs children of the 'grid' div
    for(j = 0 ; j < grid_squares ; j++){
        for(let i = 1 ; i < grid_squares + 1 ; i++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            grid.appendChild(cell);
            //Change the style of the grid, so that the num  is the length and width of the grid on all sides (grid_squares x grid_squares)
            grid.style.gridTemplateColumns = 'repeat(' + grid_squares + ', 80px)';
            grid.style.gridTemplateRows = 'repeat(' + grid_squares + ', 80px)';
            //Create an event listener, so that the cells change color when you mouseover them
            cell.addEventListener('mouseover', function(e){
                e.target.style.background = "green";
            }); 
        }
    }   
    };

//Default 16x16 Grid
defaultGrid(16);

