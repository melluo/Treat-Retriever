class Treat {
    constructor(positionX, positionY){
        // super(positionX, positionY);
        this.sprite = new Image();
        this.sprite.src = "./assets/bone_treat.gif";
        this.boneWidth = 30; 
        this.spawnX = positionX;
        this.x = positionX;
        this.boneHeight = 14;    
        this.spawnY = positionY;
        this.speed = 0;
    }


    draw(ctx){
        ctx.drawImage(this.sprite, this.spawnX, this.spawnY, this.boneWidth, this.boneHeight);
        if(this.spawnX <= (ctx.canvas.width*-1)){ 
        
        
            this.spawnX = ctx.canvas.width; 
         
        }
        this.spawnX -= this.speed;
    }
}
module.exports = Treat;