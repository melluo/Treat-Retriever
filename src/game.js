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
        this.frame = 0;
        this.frameId = null;
        this.score = 0;
        this.treatCount = 0;
        this.gameSpeed = 3;
        this.gravity = 1;
        
        this.updateScore = this.updateScore.bind(this);
        this.updateTreatCount = this.updateTreatCount.bind(this);
        this.scoreDiv = document.getElementById("score");
        this.treatDiv = document.getElementById("treats");
        // let object = new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
        // let object2 =new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
        this.maxVacuums = 3;
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
        this.gamectx.canvas.addEventListener("click", () => {
            document.getElementById("start").classList.add("hide");
            document.getElementById('starting-background').classList.add("hide");
            document.getElementById("instruction1").classList.add("hide");
            document.getElementById("instruction2").classList.add("hide");
            document.getElementById("instruction3").classList.add("hide");

             this.start();
        });
    }
    animate(){
       if(!this.gameOver){
        this.frameId = requestAnimationFrame(this.animate.bind(this));
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
        
        this.calculateScore();
        this.treatScore();
        // this.checkgameOver();    
        }
        this.background.draw();
        
    }   
    calculateScore(){
        if(this.background.x === -1020){
            this.frame += 1;
        }
        this.framePosition = (this.frame * 1020) + (-1 * this.background.x);
        this.score += this.framePosition / 1020 ;
        this.updateScore();
    }
    
    updateScore(){
        this.scoreDiv.innerText = `Dogepoints: ${Math.trunc(this.score)}`;
    }

    updateTreatCount(){
        this.treatDiv.innerText = `Treats Retrieved: ${this.treatCount}`;
    }

    treatScore(){
        this.treats.forEach((treat) => {
            const dogLeft = this.player.x + 10;
            const dogTop = this.player.y + 10;
            const dogRight = this.player.x + this.player.spriteTiles[1].w;
            const treatLeft =  treat.spawnX + 2
            const treatRight = treat.spawnX + treat.boneWidth + 2;
            const treatTop = treat.spawnY;
            if( (treatLeft < dogRight) && (dogLeft < treatRight) && (treatTop >= dogTop)) {
                this.treatCount += 1;
                this.score += 1000;
                this.updateTreatCount();
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
    
    randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    start(){
        if (this.frameId) {
            cancelAnimationFrame(this.frameId)
        }
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