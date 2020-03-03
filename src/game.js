const Player = require('./player');
const Background = require('./background.js')
class Game{
    constructor(gamectx, backgroundctx){
        this.gamectx = gamectx;
        this.background = new Background(backgroundctx);
        this.dimensions = { width: gamectx.canvas.width, height: gamectx.canvas.height}
        // this.player = new Player(this s.dimensions);
        this.spacePressed = false;
        this.registerEvents();
        this.restart();
        this.jump = this.jump.bind(this);
        this.animate= this.animate.bind(this);
        this.score = 0;
        this.gameSpeed = 3;
        this.gravity = 1;
        

    }
    jump(){
    
        this.player.jump();
    }
    animate(){
        this.background.draw();
        this.player.animate(this.gamectx);
        requestAnimationFrame(this.animate.bind(this));
    }
    restart(){
        this.running = false;
        this.player = new Player(this.dimensions);
        //all other things to load here
        this.animate();
    }
    click(e){
        if (!this.running){
            this.play();
        }
        this.player.jump();
    }
    play(){
        this.running=true;
        this.animate();
    }
    registerEvents() {
        this.gamectx.canvas.addEventListener("keydown",(e) => {
            // debugger;
            if (e.keyCode === 32){
                e.preventDefault();
                this.running = true;
                this.click(e);
            }
        });
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