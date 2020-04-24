class Treat {
    constructor(positionX, positionY){
        this.sprite = new Image();
        this.sprite.src = "./assets/bone_treat.gif";
        this.boneWidth = 30; 
        this.spawnX = positionX;
        this.x = positionX;
        this.boneHeight = 14;    
        this.spawnY = positionY;
        this.speed = 4;
    }


    draw(ctx){
        ctx.drawImage(this.sprite, this.spawnX, this.spawnY, this.boneWidth, this.boneHeight);
        if(this.spawnX <= (ctx.canvas.width*-1)){ 
            this.spawnX = ctx.canvas.width;
        }
        this.spawnX -= this.speed;
    }

    delete(ctx){
        ctx.clearRect(this.spawnX, this.spawnY, this.boneWidth + 5, this.boneHeight);
    }
}

module.exports = Treat;