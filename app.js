const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//Dimensions for the board
let row = 30;
let col = 20;
//Initialize start and end coordinates
let startRow = 0;
let startCol = 0;
let endRow = row - 1;
let endCol = col - 1;
//Canvas height is the size of the board
let cell_size = (col*canvas.height/row < canvas.width?(canvas.height/row):(canvas.width/col))
let wall_width = 5;
let generate = false 
let solve = false
let complete = false

let board_x = (canvas.width-(cell_size*col))/2
let grid = [];
initialize_maze()
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(generate && cell_count == 1) initialize_maze()
    if(generate && cell_count <= row * col)
        generate_maze();
    if(solve && !complete){
        Depth_First_Search(startCol, startRow);
    }
    if(complete){
        final_path()
        complete = false;
    }
    if(!maze_stack.length){
        cell_count = 1;
        generate = false;
        unvisit_cells();
    }
    render_maze()
    requestAnimationFrame(render);
}
render();