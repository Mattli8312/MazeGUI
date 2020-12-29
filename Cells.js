class Cells{
    constructor(i,j,id, size){
        this.i = i;
        this.j = j;
        this.size = size
        this.id = id;
        this.visited = false;
        this.connected = [false,false,false,false]; //North, south, east, west
    }
    generate(){
        if(!this.visited)
            ctx.fillStyle = 'red';
        else ctx.fillStyle = 'gold';
        ctx.beginPath();
        ctx.rect(this.j,this.i,this.size,this.size);
        ctx.closePath();
        ctx.fill();
    }
    drawWall(){
        ctx.lineWidth = wall_width;
        //check north
        ctx.strokeStyle = "brown"
        if(!this.connected[0]){
            ctx.beginPath();
            ctx.moveTo(this.j - ctx.lineWidth/2, this.i)
            ctx.lineTo(this.j + this.size + ctx.lineWidth/2, this.i)
            ctx.stroke()
        }
        //check south
        if(!this.connected[1]){
            ctx.beginPath();
            ctx.moveTo(this.j + this.size + ctx.lineWidth/2 ,this.i+this.size)
            ctx.lineTo(this.j -ctx.lineWidth/2, this.i+this.size)
            ctx.stroke()
        }
        //check east
        if(!this.connected[2]){
            ctx.beginPath();
            ctx.moveTo(this.j+this.size,this.i+this.size+ctx.lineWidth/2)
            ctx.lineTo(this.j+this.size,this.i-ctx.lineWidth/2)
            ctx.stroke()
        }
        //check west
        if(!this.connected[3]){
            ctx.beginPath();
            ctx.moveTo(this.j,this.i-ctx.lineWidth/2)
            ctx.lineTo(this.j,this.i+this.size+ctx.lineWidth/2)
            ctx.stroke()
        }
    }
}