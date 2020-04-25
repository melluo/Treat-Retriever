!function(t){var e={};function i(s){if(e[s])return e[s].exports;var a=e[s]={i:s,l:!1,exports:{}};return t[s].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=e,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/dist/",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);i(1);var s=i(2);document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("canvas_container").getContext("2d"),e=document.getElementById("main_background").getContext("2d");new s(t,e)}))},function(t,e,i){},function(t,e,i){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var a=i(3),n=i(4),r=i(5),h=i(6),o=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.gamectx=e,this.background=new n(i),this.dimensions={width:e.canvas.width,height:e.canvas.height},this.jump=this.jump.bind(this),this.spacePressed=!1,this.music=new Audio("./assets/sounds/music1.mp3"),this.registerEvents(),this.obstacles=[],this.treats=[],this.frame=0,this.frameId=null,this.score=0,this.maxVacuums=3,this.treatCount=0,this.gameSpeed=3,this.gravity=1,this.loadBackground(),this.scoreDiv=document.getElementById("score"),this.treatDiv=document.getElementById("treats"),this.updateScore=this.updateScore.bind(this),this.updateTreatCount=this.updateTreatCount.bind(this),this.start=this.start.bind(this)}var e,i,o;return e=t,(i=[{key:"jump",value:function(t){32===t.keyCode&&(t.preventDefault(),this.player.jumping=!0,this.player.jumpingSound(),this.player.jump())}},{key:"loadBackground",value:function(){window.onload=function(){window.location.hash||(window.location=window.location+"#",window.location.reload())}}},{key:"registerEvents",value:function(){var t=this;this.gamectx.canvas.addEventListener("keydown",this.jump),this.gamectx.canvas.addEventListener("click",(function(){t.music.play(),document.getElementById("start").classList.add("hide"),document.getElementById("starting-background").classList.add("hide"),document.getElementById("instruction").classList.add("hide"),document.getElementById("description").classList.add("hide"),document.getElementById("description2").classList.add("hide"),t.start()}))}},{key:"animate",value:function(){if(!this.gameOver){this.frameId=requestAnimationFrame(this.animate.bind(this)),this.player.animate(this.gamectx),this.createObstacles(),this.generateTreat();for(var t=0;t<this.obstacles.length;t++)this.obstacles[t].draw(this.gamectx);for(var e=0;e<this.treats.length;e++)this.treats[e].draw(this.gamectx);this.calculateScore(),this.treatScore(),this.checkgameOver()}this.background.draw()}},{key:"calculateScore",value:function(){-1020===this.background.x&&(this.frame+=1),this.framePosition=1020*this.frame+-1*this.background.x,this.score+=this.framePosition/1020,this.updateScore()}},{key:"updateScore",value:function(){this.scoreDiv.innerText="Dogepoints: ".concat(Math.trunc(this.score))}},{key:"updateTreatCount",value:function(){this.treatDiv.innerText="Treats Retrieved: ".concat(this.treatCount)}},{key:"treatScore",value:function(){var t=this;this.treats.forEach((function(e){var i=t.player.x+10,s=t.player.y+10,a=t.player.x+t.player.spriteTiles[1].w,n=e.spawnX+2,r=e.spawnX+e.boneWidth+2,h=e.spawnY;n<a&&i<r&&h>=s&&(t.treatCount+=1,t.score+=1e3,t.updateTreatCount(),t.treats[0].delete(t.gamectx),t.treats.splice(-1,1),t.generateTreat())}))}},{key:"checkgameOver",value:function(){var t=this;this.obstacles.forEach((function(e){var i=t.player.x+10,s=t.player.y+10,a=t.player.x+t.player.spriteTiles[1].w,n=(t.player.y,t.player.spriteTiles[1].h,e.spawnX+20),r=e.spawnX+e.vacuumWidth,h=e.spawnY+20;n<a&&i<r&&h<=s&&(t.gameOver=!0,t.obstacles=[],t.gameOverScreen())}))}},{key:"gameOverScreen",value:function(){!0===this.gameOver&&(this.gamectx.beginPath(),this.gamectx.font="3em Monospace",this.gamectx.textAlign="center",this.gamectx.fillStyle="#dd8741",this.gamectx.strokeStyle="white",this.gamectx.lineWidth=2,this.gamectx.strokeText("The Vacuums win this round!",this.gamectx.canvas.width/2,this.gamectx.canvas.height/2),this.gamectx.fillText("The Vacuums win this round!",this.gamectx.canvas.width/2,this.gamectx.canvas.height/2),this.gamectx.font="30px Monospace",this.gamectx.strokeText("Click to play again",400,190),this.gamectx.fillText("Click to play again",400,190),this.score=0)}},{key:"generateTreat",value:function(){this.treats.length<1&&this.treats.push(new h(820,140))}},{key:"createObstacles",value:function(){-10===this.background.x&&this.obstacles.length<this.maxVacuums?this.obstacles.push(new r(600,184)):-400===this.background.x&&this.obstacles.length<this.maxVacuums?this.obstacles.push(new r(this.randomIntFromInterval(820,1020),184)):-820===this.background.x&&this.obstacles.length<this.maxVacuums&&this.obstacles.push(new r(this.randomIntFromInterval(1300,1600),184))}},{key:"randomIntFromInterval",value:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}},{key:"start",value:function(){this.frameId&&cancelAnimationFrame(this.frameId),this.gameOver=!1,this.player=new a(this.dimensions),this.animate()}}])&&s(e.prototype,i),o&&s(e,o),t}();t.exports=o},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.dimensions=e,this.ground=this.dimensions.height-32,this.x=50,this.y=this.ground,this.velocity=0,this.gravity=.4,this.speed=1,this.jumping=!1,this.jumpForce=13,this.jumpTicks=0,this.maxHeight=0,this.dogHero=new Image,this.dogHero.src="./assets/caped_hero.png",this.walkcycle=0,this.jumpSound=new Audio("./assets/sounds/jump.mp3"),this.spriteTiles=[{sX:61,sY:34,w:61,h:32},{sX:244,sY:35,w:63,h:30}]}var e,s,a;return e=t,(s=[{key:"loadSprite",value:function(){switch(!0){case this.y<266:return this.spriteTiles[1];case this.walkcycle<10:return this.walkcycle+=1,this.spriteTiles[0];case this.walkcycle<20:case this.walkcycle<30:return this.walkcycle+=1,this.spriteTiles[1];default:return this.walkcycle=0,this.spriteTiles[0]}}},{key:"jump",value:function(){this.jumping&&(0===this.jumpTicks||this.y<266?(this.positionDisplacement=this.gravity*this.jumpTicks,this.y-=this.jumpForce-this.positionDisplacement,this.jumpTicks+=1):(this.y=266,this.jumpTicks=0,this.jumping=!1))}},{key:"animate",value:function(t){this.jump(t),this.draw(t)}},{key:"draw",value:function(t){t.clearRect(0,0,800,300);var e=this.loadSprite();t.drawImage(this.dogHero,e.sX,e.sY,e.w,e.h,this.x,this.y,e.w,e.h)}},{key:"jumpingSound",value:function(){this.y>=266&&this.jumpSound.play()}},{key:"bounds",value:function(){return{left:this.x,right:this.player.x+this.player.spriteTiles[1].w,top:this.y,bottom:this.player.y+this.player.spriteTiles[1].h}}},{key:"outOfBounds",value:function(){var t=this.y<0,e=this.ground>this.dimensions.height;return t||e}}])&&i(e.prototype,s),a&&i(e,a),t}();t.exports=s},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ctx=e,this.image=new Image,this.image.src="./assets/background.jpg",this.imageWidth=this.image.width,this.ctxWidth=this.ctx.canvas.width,this.speed=2,this.x=0,this.y=0}var e,s,a;return e=t,(s=[{key:"draw",value:function(){this.ctx.drawImage(this.image,this.x,this.y),this.ctx.drawImage(this.image,this.x+this.imageWidth,this.y),this.x<=-1*this.imageWidth&&(this.x=0),this.x-=this.speed}}])&&i(e.prototype,s),a&&i(e,a),t}();t.exports=s},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sprite=new Image,this.sprite.src="./assets/evil_vacuum.png",this.vacuumWidth=65,this.spawnX=e,this.x=e,this.vacuumHeight=116,this.spawnY=i,this.speed=2.8}var e,s,a;return e=t,(s=[{key:"draw",value:function(t){t.drawImage(this.sprite,this.spawnX,this.spawnY,this.vacuumWidth,this.vacuumHeight),this.spawnX<=-1*t.canvas.width&&(this.spawnX=t.canvas.width),this.spawnX-=this.speed}}])&&i(e.prototype,s),a&&i(e,a),t}();t.exports=s},function(t,e){function i(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}var s=function(){function t(e,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.sprite=new Image,this.sprite.src="./assets/bone_treat.gif",this.boneWidth=30,this.spawnX=e,this.x=e,this.boneHeight=14,this.spawnY=i,this.speed=4}var e,s,a;return e=t,(s=[{key:"draw",value:function(t){t.drawImage(this.sprite,this.spawnX,this.spawnY,this.boneWidth,this.boneHeight),this.spawnX<=-1*t.canvas.width&&(this.spawnX=t.canvas.width),this.spawnX-=this.speed}},{key:"delete",value:function(t){t.clearRect(this.spawnX,this.spawnY,this.boneWidth+5,this.boneHeight)}}])&&i(e.prototype,s),a&&i(e,a),t}();t.exports=s}]);
//# sourceMappingURL=main.js.map