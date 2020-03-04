
class Obstacle{
    constructor(positionX, positionY){
        this.positionX = positionX;
        this.positionY = positionY;
        this.obstaclesSpawned = [];
        this.obstaclePool = [];
        // this.vacuums = new Vacuum();
        
    }
    generateObstacles(){
        if(this.obstaclePool.length != 0){
            let newObject = this.obstaclePool.pop();
            this.obstaclesSpawned.push(newObject);
            if (Math.random() > 0.5){

            }
        }
        else{
            this.obstaclesSpawned.push(this.generateVacuum());
        }
    }
    
    generateVacuum(){
        let object;
        if (Math.random() > 0.5){
            object = new Vacuum(700, 167);
        }

    }
}

module.exports = Obstacle;