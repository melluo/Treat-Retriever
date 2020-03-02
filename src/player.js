

class Player {
    constructor(){
        this.size = 50;
        this.x = this.size; 
        this.y = 300 - this.size; //it is sitting at the bottom
        this.velocity = 0; //velocity speed along the y axis to be able to jump

    }
    jump(event){
        if (event.key === " "|| event.key === "Spacebar"){
            event.preventDefault();
            console.log("Space Pressed");
            this.velocity = -5; //moving it up
        }

    }
    move() {
        this.y += this.velocity;
    }
    show(ctx){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    }
    
}
module.exports = Player;

