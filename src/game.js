const Player = require('./player');
const Background = require('./background.js');
const Vacuum = require('./vacuum.js');
const Treat = require('./treat.js');
const DOGCORDS = {
    dogRight: 113,
    dogBot: 266
}
class Game{
    constructor(gamectx, backgroundctx){
        this.gamectx = gamectx;
        this.background = new Background(backgroundctx);
        this.dimensions = { width: gamectx.canvas.width, height: gamectx.canvas.height}
        // this.player = new Player(this s.dimensions);
        this.jump = this.jump.bind(this);
        this.spacePressed = false;
        this.registerEvents();
        this.obstacles = [];
        this.treats = [];
        this.start();
        // let object = new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
        // let object2 =new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
        this.maxVacuums = 3;
        this.score = 0;
        this.gameSpeed = 3;
        this.gravity = 1;
    }
 
    // jump(){
        //     this.player.jumping = true;
        //     this.player.jump();
        // }
    jump(e){
        if(e.keyCode === 32){
            e.preventDefault();
            this.player.jumping = true;
            this.player.jump();
        }
    }
    
    registerEvents(){
        this.gamectx.canvas.addEventListener("keydown", this.jump);
    }
    animate(){
       if(!this.gameOver){
        requestAnimationFrame(this.animate.bind(this));
        this.player.animate(this.gamectx);
        this.createObstacles();
        //this.obstacles  pool, look through it and call
        // random number between 1 and 10 
        this.generateTreat();
        for (let i=0; i<this.obstacles.length; i++){
            this.obstacles[i].draw(this.gamectx);
        }
        
        for (let i=0; i<this.treats.length; i++){
            this.treats[i].draw(this.gamectx);
        }
        
        
        this.scoreIncrement();
        this.checkgameOver();    
        }
        this.background.draw();
        
    }   

     scoreIncrement(){
        this.treats.forEach((treat) => {
            const dogLeft = this.player.x + 10;
            const dogTop = this.player.y + 10;
            const dogRight = this.player.x + this.player.spriteTiles[1].w;
            const treatLeft =  treat.spawnX + 2
            const treatRight = treat.spawnX + treat.boneWidth + 2;
            const treatTop = treat.spawnY;
            if( (treatLeft < dogRight) && (dogLeft < treatRight) && (treatTop <= dogTop)) {
                this.treats[0].delete(this.gamectx);
                this.treats.splice(-1, 1);
                this.generateTreat();
            }
        })
        

     }
     checkgameOver(){
        this.obstacles.forEach((obstacle) => {
            const dogLeft = this.player.x + 10;
            const dogTop = this.player.y + 10;
            const dogRight = this.player.x + this.player.spriteTiles[1].w;
            const dogBottom = this.player.y + this.player.spriteTiles[1].h;
            const vacuumLeft = obstacle.spawnX + 20; //with displacement
            const vacuumRight = obstacle.spawnX + obstacle.vacuumWidth;
            const vacuumTop = obstacle.spawnY + 20;
            if( (vacuumLeft < dogRight) && (dogLeft < vacuumRight) && (vacuumTop <= dogTop) ){
                this.gameOver = true;
                this.gameOverScreen();
            }
        });
    }
    gameOverScreen(){
        if(this.gameOver === true){
            this.gamectx.beginPath();
            this.gamectx.font = "50px Comic Sans MS";
            // Fill with gradient
            this.gamectx.textAlign = "center";
            this.gamectx.fillStyle = '#ffcB37';
            this.gamectx.strokeStyle = 'white';
            this.gamectx.lineWidth = 4;
            this.gamectx.strokeText("Game Over", this.gamectx.canvas.width/2, this.gamectx.canvas.height/2);
            this.gamectx.fillText("Game Over", this.gamectx.canvas.width/2, this.gamectx.canvas.height/2);

        }
    }
    generateTreat(){
        if(this.treats.length < 1){
        this.treats.push(new Treat(820, 140));
        }
    }
    createObstacles(){
        if (this.background.x === 0 && this.obstacles.length < 3){
            this.obstacles.push(new Vacuum(600, 184));
            
        } else if (this.background.x === -450 && this.obstacles.length < 3){
            this.obstacles.push(new Vacuum(this.randomIntFromInterval(600,820), 184));
        } else if (this.background.x === -820 && this.obstacles.length < 3){
            this.obstacles.push(new Vacuum(this.randomIntFromInterval(1020), 184));
        } 
    }
  
    // //make sure they dont spawn in predictable places
    // createObstacles(){
    //     // const obstacleSpacing = 200;
    //     // const range1 = (Math.random() *this.dimensions.width);
    //     // const range2 = (Math.random() * (this.dimensions.width - obstacleSpacing));
    //     this.obstacles.push(new Vacuum(1040, 184));
        
    //     for(let i=0; this.obstacles.length < 3; i++){
    //             let obstacleMax = this.obstacles[i].spawnX - 250;
    //             let obstacleMin = obstacleMax - 200;
    //             this.obstacles.push(new Vacuum(this.randomIntFromInterval(obstacleMin, obstacleMax), 184));
    //     }
    //     // this.obstacles.push(new Vacuum(this.randomIntFromInterval(this.obstacles.x))
        
    //     // this.obstacles.push(new Vacuum (this.randomIntFromInterval(,600), 184));

    
    //     //making sure that vacuums dont spawn on top of each other
    //         // this.spaceBetween = 300;
    //         // let object = new Vacuum (500, 184);
    //         // let object3 = new Vacuum(this.randomIntFromInterval(100,700), 184);
    //         // let object4 = new Vacuum(this.randomIntFromInterval(100,700), 184);
         
    //         // if (object3.x > object.x + this.spaceBetween || object3.x < object.x + this.spaceBetween){
    //         //     this.obstacles.push(object3);
    //         // } else if (object4.x > object.x + this.spaceBetween || object4.x < object.x + this.spaceBetween && object4.x){
    //         //     this.obstacles.push(object4);
    //         // }else {
    //         //     this.obstacles.push(object);
    //         // }

    //         // switch(true){
    //         //     case(this.obstacles[0].x > 400):
    //         //         this.obstacles.push(new Vacuum (700, 184));
    //         //     case (this.obstacles[1].x > 400):
    //         //         this.obstacles.push(new Vacuum (1000, 184));
    //         // }
                
        
        
    // }   
    
    randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    start(){
        this.gameOver = false;
        this.player = new Player(this.dimensions);
        // this.vacuum = new Vacuum(Math.floor(Math.random() * Math.floor(800)), 184);
        // this.treat = new Treat(770, 140);
        
        //all other things to load here
        this.animate();
    }
    
    
    // createObstacles(){
    //     this.obstacles = [];
    //     this.maxVacuums = 3;
    //     if (this.obstacles < this.maxVacuums ){
    //         let object = new Vacuum(Math.floor(Math.random() * Math.floor(800)), 184);
    //         this.obstacles.push(object);
    //     }
    // }
    
    
    // requestAnimation(){
    //     debugger;
    //     window.requestAnimationFrame( ()=>{
    //         this.player.show(this.gamectx);
    //         if (this.spacePressed){
    //             this.player.velocity -= 5
    //             this.spacePressed = false;
    //         }
            
    //         this.player.update();
            
    //     });
    // }
    
    
    
    // handleSpace(){
    //     document.addEventListener("keydown", (event)=>{
    //         if (event.which === "32") {
    //             this.spacePressed = true;
    //         }
    //     }, false);
    // }
    


}




// move(){
//     this.player.move();
// }
// spaceHandler(){
//     let lastTarget;
//     window.onload = () => {s
//         document.addEventListener('mousedown', (event)=>{
//             lastTarget = event.target;
//         }, false);
//         document.addEventListener('keydown', (event)=> {
//             if (lastTarget === this.canvas) {
//                 event.preventDefault();
//                 this.move();
//                 console.log("hhi");
//                 debugger;
//             }
//         }, false);
   
//         }
//     }

module.exports = Game;