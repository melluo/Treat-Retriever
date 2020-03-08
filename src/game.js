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
        this.hoverCanvas();
        
        this.start();
        this.instructionsctx = document.getElementById("instructions_canvas");
        // let object = new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
        // let object2 =new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
    
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
       
        requestAnimationFrame(this.animate.bind(this));
        this.player.animate(this.gamectx);
        //this.obstacles  pool, look through it and call
        // random number between 1 and 10 
      
    
        for (let i=0; i<this.obstacles.length; i++){
            this.obstacles[i].draw(this.gamectx);
            //if right of dog hits left of vacuum
         
        }
        this.checkgameOver();
        
        
        if (this.gameOver === true){
            alert("game over");
        }
        // this.vacuum.draw(this.gamectx);
        this.treat.draw(this.gamectx);
        this.background.draw();
        
        
    }   
    
 
    checkgameOver(){
        this.obstacles.forEach((obstacle) => {
            const dogLeft = this.player.x + 10;
            const dogRight = this.player.x + this.player.spriteTiles[1].w;
            const dogTop = this.player.y;
            const dogBottom = this.player.y + this.player.spriteTiles[1].h;
            let vacuumLeft = obstacle.spawnX + 20; //with displacement
            let vacuumRight = obstacle.spawnX + obstacle.vacuumWidth;
            let vacuumTop = obstacle.spawnY + 20;
            if(((vacuumLeft < dogRight) && (dogLeft < vacuumRight)) &&
            ((vacuumTop > dogTop) && (vacuumTop < dogBottom))){
                this.gameOver = true;
            }
        });
        

    }
  
      
    //     });


    // }
    
    //make sure they dont spawn in predictable places
    createObstacles(){
        this.obstacles = [];
        this.obstacles.push(new Vacuum (1000, 184));
        this.obstacles.push(new Vacuum (this.randomIntFromInterval(700,800), 184));
        this.obstacles.push (new Vacuum (this.randomIntFromInterval(500,600), 184));
        this.obstacles.push (new Vacuum(this.randomIntFromInterval(300,400),184));
    
        //making sure that vacuums dont spawn on top of each other
            // this.spaceBetween = 300;
            // let object = new Vacuum (500, 184);
            // let object3 = new Vacuum(this.randomIntFromInterval(100,700), 184);
            // let object4 = new Vacuum(this.randomIntFromInterval(100,700), 184);
         
            // if (object3.x > object.x + this.spaceBetween || object3.x < object.x + this.spaceBetween){
            //     this.obstacles.push(object3);
            // } else if (object4.x > object.x + this.spaceBetween || object4.x < object.x + this.spaceBetween && object4.x){
            //     this.obstacles.push(object4);
            // }else {
            //     this.obstacles.push(object);
            // }

            // switch(true){
            //     case(this.obstacles[0].x > 400):
            //         this.obstacles.push(new Vacuum (700, 184));
            //     case (this.obstacles[1].x > 400):
            //         this.obstacles.push(new Vacuum (1000, 184));
            // }
                
        
        
    }   
    
    randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    start(){
        this.createObstacles();
        this.gameOver = false;
        this.player = new Player(this.dimensions);
        // this.vacuum = new Vacuum(Math.floor(Math.random() * Math.floor(800)), 184);
        this.treat = new Treat(500, 140);
        
        //all other things to load here
        this.animate();
    }
    hoverCanvas(){
        this.gamectx.beginPath();
       
        // debugger;
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