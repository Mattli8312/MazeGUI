const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let height = document.getElementsByClassName('navbar').innerHeight;

canvas.width = innerWidth;
canvas.height = innerHeight;

//Dimensions for the board
let row = 20;
let col = 20;
    //Canvas height is the size of the board
let cell_size = (canvas.height/row);
let wall_width = 10;

let board_x = (canvas.width - (cell_size*row))/2;
let grid = [];

initialize_maze();
function render(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    if(cell_count <= row * col)
        generate_maze();
    else{
        free_maze_stack();
    }
    render_maze()
    requestAnimationFrame(render);
}
render();