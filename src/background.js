const main_background = "./assets/background.jpg";
class Background{
    constructor(ctx){
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = main_background;
        this.imageWidth = this.image.width;
        this.ctxWidth = this.ctx.canvas.width;
        this.speed = 2;
        this.x = 0;
        this.y = 0;
        
    }
    draw(){
        this.ctx.drawImage(this.image, this.x, this.y);
        // draw 1st image at 0 position
        this.ctx.drawImage(this.image, this.x + this.imageWidth,this.y);
        //draw image 2 for loop (at image width)
        if (this.x <= (this.imageWidth*-1)){
            //if reach end of image, reset x position to play image again
            this.x = 0;
    
            
        } 
        this.x -= this.speed;
        //making image move
        //negative acceleration is acceleration towards the left
    }
   
}

module.exports = Background;