const Obstacle = require("./obstacle");
class Vacuum{
    constructor(positionX, positionY){
        // super(positionX, positionY);
        this.sprite = new Image();
        this.sprite.src = "./assets/evil_vacuum.png";
        this.vacuumWidth = 75; 
        this.spawnX = positionX;
        this.vacuumHeight = 133;   
        this.spawnY = positionY;
    }


    draw(ctx){
        ctx.drawImage(this.sprite, this.spawnX, this.spawnY, this.vacuumWidth, this.vacuumHeight);
    }
}
module.exports= Vacuum;