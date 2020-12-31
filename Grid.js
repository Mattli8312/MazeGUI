function initialize_maze(){
    reset_maze();
    for(let i = 0; i < row; i++){
        grid.push([]);
        for(let j = 0; j < col; j++){
            grid[i].push(new Cells(i*cell_size, board_x + j*cell_size, 0, cell_size))
        }
    }
}
function render_maze(){
    let a = 0;
    while(a < grid.length){
        let b = 0;
        while(grid[a].length > b){
            grid[a][b].generate();
            b++
        }
        a++
    }
    a=0;
    while(a < grid.length){
        let b = 0;
        while(grid[a].length > b){
            grid[a][b].drawWall();
            b++
        }
        a++
    }
}
function reset_maze(){
    while(grid.length > 0){
        while(grid[grid.length-1].length > 0){
            grid[grid.length-1].pop()
        }
        grid.pop()
    }
}
function free_maze_stack(){
    while(maze_stack.length > 0)
        maze_stack.pop()
}
let maze_stack = [];
    //push starting cell onto grid;
let x = 0,y = 0;
let cell_count = 1;
maze_stack.push([y,x]);
function generate_maze(){
    //Initialize_stack for cells
    //Set current cell to visited;
    grid[y][x].visited = true;
    //Need to check viable directions (North, South, East, West)
    //Each list we push contains the x,y and 
    let directions = [];
    if(y - 1 > -1 && !grid[y-1][x].visited) 
        directions.push([y-1,x,0])
    if(y + 1 < row && !grid[y+1][x].visited)
        directions.push([y+1,x,1])
    if(x + 1 < col && !grid[y][x+1].visited)
        directions.push([y,x+1,2])
    if(x - 1 > -1 && !grid[y][x-1].visited) 
        directions.push([y,x-1,3])
    //We need to randomly select one of the four directions. 
    //Base case: No viable directions, so we pop.
    if(!directions.length){
        maze_stack.pop();
        if(maze_stack.length){
            x = maze_stack[maze_stack.length-1][1]
            y = maze_stack[maze_stack.length-1][0]
        } 
    }
    else{
        let a = Math.floor(Math.random() * directions.length); //Random index
        //Connect current cell to unvisited cell
        grid[y][x].connected[directions[a][2]] = true;
        if(directions[a][2] == 0)
            grid[directions[a][0]][directions[a][1]].connected[1] = true;
        if(directions[a][2] == 1)
            grid[directions[a][0]][directions[a][1]].connected[0] = true;
        if(directions[a][2] == 3)
            grid[directions[a][0]][directions[a][1]].connected[2] = true;
        if(directions[a][2] == 2)
            grid[directions[a][0]][directions[a][1]].connected[3] = true;
        y = directions[a][0];
        x = directions[a][1];
        maze_stack.push([y,x]);
        cell_count ++;
    }
}