# [Treat Retriever](https://melodyluo.com/Treat-Retriever/ "Treat Retriever")

[Live Site](https://melodyluo.com/Treat-Retriever/ "Treat Retriever")

##### Treat Retriever is an infinite run obstacle avoiding and collection game inspired by the likes of T-Rex Runner, Subway Surfers and Temple Run.
![alt text](https://bumblr-dev.s3.us-east-2.amazonaws.com/Screen+Shot+2020-04-29+at+9.07.25+PM.jpg "Treat Retriever")
# Instructions
You are the caped super-retriever! Avoid angry vacuum cleaners and collect treats to get the highest score possible.
# Architecture && API
- Javascript used for front-end development
- CanvasHTML used to render various sprites and obstacles
- HTMLDom used for rendering various game inputs
- Webpack used to bundle Javascript, CSS files and provide scripts
# Features
## Parallax Background:
- The parallax background involves multiple layers, the background canvas, the player sprite, treats and obstacles are all drawn on to the canvas and move at different speeds.
```javascript
class Background{
    constructor(ctx){
        this.ctx = ctx;
        this.image = new Image();
        this.image.src = main_background;
        this.imageWidth = this.image.width;
        this.ctxWidth = this.ctx.canvas.width;
        this.speed = 2;
        this.x = 0;
        this.y = 0;
    }
    draw(){
        this.ctx.drawImage(this.image, this.x, this.y);
        this.ctx.drawImage(this.image, this.x + this.imageWidth,this.y);
            if (this.x <= (this.imageWidth*-1)){
                this.x = 0;
            } 
        this.x -= this.speed;
    }
}
```
<img src="./assets/parallax.gif?raw=true" style="align:center"></img>

## Collision Detection:
- Collision for treats and vacuums are determined by measuring when an edge of a dog overlaps with an edge of an obstacle.
- Colliding with a treat will increment a player's score and treats retrieved count. Colliding with a vacuum will render a Game Over screen.
```javascript
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
```

## Future Implementation
- Add high score panel

##### Legal
- Music and Sound effects provided by Nexon and Nintendo

