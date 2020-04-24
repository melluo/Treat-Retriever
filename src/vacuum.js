class Vacuum{
    constructor(positionX, positionY){
        // super(positionX, positionY);
        this.sprite = new Image();
        this.sprite.src = "./assets/evil_vacuum.png";
        this.vacuumWidth = 65; 
        this.spawnX = positionX;
        this.x = positionX;
        this.vacuumHeight = 116;   
        this.spawnY = positionY;
        this.speed = 2.8;
    }
    

    draw(ctx){
        ctx.drawImage(this.sprite, this.spawnX, this.spawnY, this.vacuumWidth, this.vacuumHeight);
        if(this.spawnX <= (ctx.canvas.width*-1)){ 
            this.spawnX = ctx.canvas.width;
        }
        this.spawnX -= this.speed;
    }
}

module.exports= Vacuum;