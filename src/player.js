class Player {
    constructor(dimensions){
        this.dimensions = dimensions;
        this.ground = this.dimensions.height - 32;
        this.x = 50;
        this.y = this.ground; //it is sitting at the bottom
        this.velocity = 0; //velocity speed along the y axis to be able to jump
        this.gravity = .4; //on every frame adding .4 to the objects y position
        this.speed = 1;
        this.jumping= false;
        this.jumpForce = 13;
        this.jumpTicks = 0;
        this.maxHeight = 0;
        this.dogHero = new Image();
        this.dogHero.src = "./assets/caped_hero.png";
        this.walkcycle = 0;
        this.jumpSound = new Audio('./assets/sounds/jump.mp3');
        this.spriteTiles = [
            {
                sX: 61,
                sY: 34,
                w: 61,
                h: 32
            },
            {
                sX: 244,
                sY: 35,
                w: 63,
                h: 30
            },
            // {   
            //     sX: 426,
            //     sY: 31,
            //     w: 67,
            //     h: 38
            // }, 
            // {   
            //     sX: 610,
            //     sY: 30,
            //     w: 67,
            //     h: 40
            // },
            // {
            //     sX: 797,
            //     sY: 31,
            //     w: 61,
            //     h: 38
            // }             
        ];

    }
   
    loadSprite() {
        switch(true){
        case (this.y < 266):
            return this.spriteTiles[1];
        case (this.walkcycle < 10):
            this.walkcycle += 1;
            return this.spriteTiles[0];
        case (this.walkcycle < 20):
            this.walkcycle += 1;
            return this.spriteTiles[1];
        case (this.walkcycle < 30):
            this.walkcycle += 1;
            return this.spriteTiles[1];
        default: 
            this.walkcycle = 0;
            return this.spriteTiles[0];
        }

    
        
    }
    jump() {
        if (this.jumping) {
            //it is really making many microjumps (jumpTicks) on the page and stimulating one large jump
            //jumpTicks helps generate changing positiondisplacements using gravity
          if (this.jumpTicks === 0 || this.y < 266){ 
              this.positionDisplacement = this.gravity * this.jumpTicks;
              this.y -= this.jumpForce - this.positionDisplacement;
            //jumpForce is speed at which object jumps
            this.jumpTicks += 1;
          } else {
              //else reset everything 
            this.y = 266;
            this.jumpTicks = 0; 
            this.jumping = false;
            }
        }
    }
    
    animate(ctx){
        this.jump(ctx);
        this.draw(ctx);
    }
    draw(ctx){
        ctx.clearRect(0, 0, 800, 300)
        let sprite = this.loadSprite();
        ctx.drawImage(this.dogHero, sprite.sX, sprite.sY, sprite.w, sprite.h, this.x, this.y, sprite.w, sprite.h);
       
    }
    jumpingSound(){
        if(this.y >= 266){
            this.jumpSound.play();
        }
    }
    bounds() {
        return{
            left: this.x,
            right: this.player.x + this.player.spriteTiles[1].w,
            top: this.y,
            bottom: this.player.y + this.player.spriteTiles[1].h
        }

    }
    outOfBounds(){
        const aboveTheTop = this.y < 0;
        const belowTheBottom = this.ground > this.dimensions.height;
        return aboveTheTop || belowTheBottom;
    }
}

module.exports = Player;

