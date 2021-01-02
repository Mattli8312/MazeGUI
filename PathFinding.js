function Depth_First_Search(){
    if(x == endCol && y == endRow){
        solve = false;
        complete = true;
    }
    if(grid[y][x].visited){
        if(grid[y][x].connected[0] && !grid[y-1][x].visited)
            y -= 1
        else if(grid[y][x].connected[1] && !grid[y+1][x].visited)
            y += 1
        else if(grid[y][x].connected[2] && !grid[y][x+1].visited)
            x += 1
        else if(grid[y][x].connected[3] && !grid[y][x-1].visited)
            x -= 1
        else{
            grid[y][x].color = "white"
            maze_stack.pop()
            x = maze_stack[maze_stack.length-1][0]
            y = maze_stack[maze_stack.length-1][1]
        }
    }
    else{
        maze_stack.push([x,y])
        grid[y][x].color = "red"
        grid[y][x].visited = true 
        if(grid[y][x].connected[0] && !grid[y-1][x].visited)
            y -= 1
        else if(grid[y][x].connected[1] && !grid[y+1][x].visited)
            y += 1
        else if(grid[y][x].connected[2] && !grid[y][x+1].visited)
            x += 1
        else if(grid[y][x].connected[3] && !grid[y][x-1].visited)
            x -= 1
    }
}
function Breadth_First_Search(){
    //Start with an empty queue: (Just use the stack)
    //Enqueue the directions possible. For those directions enqueue the cell adjacent to the current node;
    if(maze_stack.length){
        x = maze_stack[0][0]
        y = maze_stack[0][1]
        maze_stack.splice(0,1)
        if(grid[y][x].connected[0] && !grid[y-1][x].visited){
            maze_stack.push([x,y-1])
            grid[y-1][x].visited = true;
            grid[y-1][x].color = "red";
            if(y-1 == endRow && x == endCol){
                solve = false 
                complete = true;
            }
        }
        if(grid[y][x].connected[1] && !grid[y+1][x].visited){
            maze_stack.push([x,y+1])
            grid[y+1][x].visited = true;
            grid[y+1][x].color = "red";
            if(y+1 == endRow && x == endCol){
                solve = false 
                complete = true;
            }
        }
        if(grid[y][x].connected[2] && !grid[y][x+1].visited){
            maze_stack.push([x+1,y])
            grid[y][x+1].visited = true;
            grid[y][x+1].color = "red";
            if(y == endRow && x+1 == endCol){
                solve = false 
                complete = true;
            }
        }
        if(grid[y][x].connected[3] && !grid[y][x-1].visited){
            maze_stack.push([x-1,y])
            grid[y][x-1].visited = true;
            grid[y][x-1].color = "red";
            if(y == endRow && x-1 == endCol){
                solve = false 
                complete = true;
            }
        }
    }
    else{ //Starting case
        maze_stack.push([x,y]);
        grid[y][x].visited = true;
        grid[y][x].color = "red";
    }
}
function final_path(){
    while(maze_stack.length){
        grid[maze_stack[maze_stack.length-1][1]][maze_stack[maze_stack.length-1][0]].color = "blue"
        maze_stack.pop()
    }
}