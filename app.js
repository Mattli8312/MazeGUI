const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

//Dimensions for the board
let row = 20;
let col = 20;
    //Canvas height is the size of the board
let cell_size = (col*canvas.height/row < canvas.width?(canvas.height/row):(canvas.width/col))
let wall_width = 10;
let generate = false 
let solve = false

let board_x = (canvas.width-(cell_size*col))/2
let grid = [];
initialize_maze()
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(generate && cell_count == 1) initialize_maze()
    if(generate && cell_count <= row * col)
        generate_maze();
    if(!maze_stack.length){
        cell_count = 1;
        generate = false;
    }
    render_maze()
    requestAnimationFrame(render);
}
render();