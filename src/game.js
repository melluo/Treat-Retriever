const Player = require('./player');
const Background = require('./background.js');
const Vacuum = require('./vacuum.js');
const Treat = require('./treat.js');
class Game{
    constructor(gamectx, backgroundctx){
        this.gamectx = gamectx;
        this.background = new Background(backgroundctx);
        this.dimensions = { width: gamectx.canvas.width, height: gamectx.canvas.height}
        // this.player = new Player(this s.dimensions);
        this.jump = this.jump.bind(this);
        this.spacePressed = false;
        this.registerEvents();
        this.start();
        this.obstacles = [];
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
        this.vacuum.draw(this.gamectx);
        this.treat.draw(this.gamectx);
        this.background.draw();
    }
    start(){
        this.gameOver = false;
        this.player = new Player(this.dimensions);
        this.vacuum = new Vacuum(700, 184);
        this.treat = new Treat(500, 140);

        //all other things to load here
        this.animate();
    }
    createObstacle(){

    }
    
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