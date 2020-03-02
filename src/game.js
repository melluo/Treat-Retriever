const Player = require('./player');
class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.dimensions = { width: ctx.canvas.width, height: ctx.canvas.height}
        // this.player = new Player(this.dimensions);
        this.spacePressed = false;
        this.registerEvents();
        this.restart();
        this.jump = this.jump.bind(this);
        this.animate= this.animate.bind(this);
        

    }
    jump(){
        this.player.jump();
    }
    animate(){
        this.player.animate(this.ctx);
        // this.background.animate()
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
        this.ctx.canvas.addEventListener("keydown",(e) => {
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
    //         this.player.show(this.ctx);
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