function Depth_First_Search(){
    if(x == endCol && y == endRow){
        grid[y][x].color = "green"
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
            maze_stack.pop()
            x = maze_stack[maze_stack.length-1][0]
            y = maze_stack[maze_stack.length-1][1]
        }
    }
    else{
        maze_stack.push([x,y])
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
function final_path(){
    while(maze_stack.length){
        grid[maze_stack[maze_stack.length-1][1]][maze_stack[maze_stack.length-1][0]].color = "green"
        maze_stack.pop()
    }
}