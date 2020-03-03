const CONSTANTS = {
    TERMINAL_VEL: 12,
    SPEED: 10,
    GRAVITY: .35
}

class Player {
    constructor(dimensions){
        this.dimensions = dimensions;
        this.size = 50;
        this.x = this.size; 
        this.y = this.dimensions.height - this.size; //it is sitting at the bottom
        this.velocity = 0; //velocity speed along the y axis to be able to jump
        this.gravity = .4; //on every frame adding .4 to the objects y position
        this.speed = 1;
        this.jumping= false;
        this.jumpForce = 15;
        this.friction = .7;
        this.jumpCount = 0;
        this.maxHeight = 0;
    }

    
    jump(){
       if (this.jumping){
           //friction
           this.velocity = -20;
           this.move();
            //negative velocity, -1 for every 60 pixels up
           this.jumping = false;
           this.jumpCount += 1;
        }   else {
            this.grounded();
            this.jumpCount = 0;
            this.jumping = true;

       }
    }
    
   
   grounded(){
    if (this.y > this.dimensions.height - this.size || this.y <= this.maxHeight){
        this.y = this.dimensions.height - this.size; //so we can jump again
            this.velocity = 0;//no longer moving, velocity is 0
         }
   }
//    fall() {
//        this.y += 100;
//    }
    move(){  
        this.y += this.velocity;
        this.velocity += this.gravity;
        if (Math.abs(this.velocity) > CONSTANTS.TERMINAL_VEL) {
            //if the terminal velocity is exceeded, we set it to the terminal velicty
            if (this.velocity > 0) {
              this.velocity = CONSTANTS.TERMINAL_VEL;
            } else {
              this.velocity = CONSTANTS.TERMINAL_VEL * -1;
            }
          }
        
    }


    animate(ctx){
        this.grounded();
        this.move();
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

// const gravity = 0.4;
// const initialSpeed = 10;
// if (this.jumping) {
//   if (this.jumpCount === 0 || !this.onGround()){
//     this.position[1] -= initialSpeed - gravity * this.jumpCount;
//     this.jumpCount += 1;
//   } else {
//     this.position[1] = 220;
//     this.jumpCount = 0;
//     this.jumping = false;
//   }
// }
// }