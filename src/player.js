// const CONSTANTS = {
//     TERMINAL_VEL: 12,
//     SPEED: 10,
//     GRAVITY: .35
// }


class Player {
    constructor(dimensions){
        this.dimensions = dimensions;
        this.size = 50;
        this.ground = this.dimensions.height - this.size;
        this.x = this.size; 
        this.y = this.ground; //it is sitting at the bottom
        this.velocity = 0; //velocity speed along the y axis to be able to jump
        this.gravity = .4; //on every frame adding .4 to the objects y position
        this.speed = 1;
        this.jumping= false;
        this.jumpForce = 12;
        this.jumpTicks = 0;
        this.maxHeight = 0;
        this.dogHero = new Image();
        this.dogHero.src = "./assets/caped_hero.png";
        this.spriteTiles = [
            {
                sX: 7,
                sY: 9,
                w: 61,
                h: 34
            },
            {
                sX: 81,
                sY: 10,
                w: 63,
                h: 32
            },
            {   
                sX: 154,
                sY: 6,
                w: 57,
                h: 39
            }, 
            {   
                sX: 230,
                sY: 6,
                w: 65,
                h: 40
            },
             
        ];

        }

    
    // jump(){
    //    if (this.jumping){
    //        //friction
    //        this.velocity = -20;
    //        this.moveUp();
    //         //negative velocity, -1 for every 60 pixels up
    //        this.jumping = false;
    //        this.jumpCount += 1;
    //         if (this.y < 250){
    //             this.grounded();
    //             this.jumpCount = 0;
    //             this.jumping = true;
    //         }
    //    }
    // }
    // moveUp(){  
    //     this.y += this.velocity;
    //     this.velocity += this.gravity;
    //     if (Math.abs(this.velocity) > CONSTANTS.TERMINAL_VEL) {
    //         //if the terminal velocity is exceeded, we set it to the terminal velicty
    //         if (this.velocity > 0) {
    //           this.velocity = CONSTANTS.TERMINAL_VEL;
    //         } else {
    //           this.velocity = CONSTANTS.TERMINAL_VEL * -1;
    //         }
    //       }
        
    // }

    jump() {
        if (this.jumping) {
            //it is really making many microjumps (jumpTicks) on the page and stimulating one large jump
            //jumpTicks helps generate changing positiondisplacements using gravity
          if (this.jumpTicks === 0 || this.y < 250){
              this.positionDisplacement = this.gravity * this.jumpTicks;
              this.y -= this.jumpForce - this.positionDisplacement;
            //jumpForce is speed at which object jumps
            this.jumpTicks += 1;
          } else {
              //else reset everything 
            this.y = 250;
            this.jumpTicks = 0; 
            this.jumping = false;
            }
        }
    }
    

    // jump(ctx){
    //     if (ctx.canvas.keypress === "Space"){
    //      console.log("hello");
    //     }
    // }
  
//    grounded(){
//     if (this.y > this.dimensions.height - this.size || this.y <= this.maxHeight){
//         this.y = this.dimensions.height - this.size; //so we can jump again
//             this.velocity = 0;//no longer moving, velocity is 0
//          }
// 
//    fall() {
//        this.y += 100;
//    }

    animate(ctx){
        this.jump(ctx);
        this.draw(ctx);
    }
    draw(ctx){
        ctx.clearRect(0,0,800,300);
       
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        // ctx.drawImage(this.img, this.x, this.y);
        ctx.fillStyle = "yellow";
        ctx.fill();
        ctx.strokeStyle = 'yellow';
        ctx.stroke();
    }

}




// update(){
//     //are we underground? will adding 30 make is greater than the total height
//     // debugger;
//     if (this.y + this.velocity + this.size  + 30 > 300) { 
//         //if so take us to ground level and reset velocity to 0
//         this.velocity = 0;
//         this.y = 300 - this.size - 30;
//     } else {
//         // else, move
//         debugger;
//         this.velocity += this.gravity;
//         this.y += this.velocity;

//     }
// }
    
    
 


module.exports = Player;

