const Player = require('./player');
class Game{
    constructor(ctx){
        this.player = new Player();
        this.player.show(ctx);
        
    }
}
module.exports = Game;