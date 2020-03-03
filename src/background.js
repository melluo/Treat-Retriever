const main_background = "./assets/background.jpg";
class Background{
    constructor(ctx){
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = main_background;
        this.imageWidth = this.image.width;
        this.ctxWidth = this.ctx.canvas.width;
        this.speed = .8;
        this.x = 0;
        this.y = 0;
        
    }
    draw(){
        this.ctx.drawImage(this.image, this.x, this.y);
        // draw 1st image at 0 position
        this.ctx.drawImage(this.image, this.x + this.imageWidth,this.y);
        //draw image 2 for loop (at image width)
        loop (this.x === this.imageWidth){
            //if reach end of image, reset x position to play image again
            this.x = 0;
        } 
        this.x -= this.speed;
        //making image move
    }
   
}

module.exports = Background;