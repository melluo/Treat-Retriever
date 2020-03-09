/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var main_background = "./assets/background.jpg";

var Background = /*#__PURE__*/function () {
  function Background(ctx) {
    _classCallCheck(this, Background);

    this.ctx = ctx;
    this.image = new Image();
    this.image.src = main_background;
    this.imageWidth = this.image.width;
    this.ctxWidth = this.ctx.canvas.width;
    this.speed = 2;
    this.x = 0;
    this.y = 0;
  }

  _createClass(Background, [{
    key: "draw",
    value: function draw() {
      this.ctx.drawImage(this.image, this.x, this.y); // draw 1st image at 0 position

      this.ctx.drawImage(this.image, this.x + this.imageWidth, this.y); //draw image 2 for loop (at image width)

      if (this.x <= this.imageWidth * -1) {
        //if reach end of image, reset x position to play image again
        this.x = 0;
      }

      this.x -= this.speed; //making image move
      //negative acceleration is acceleration towards the left
    }
  }]);

  return Background;
}();

module.exports = Background;

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = __webpack_require__(/*! ./player */ "./src/player.js");

var Background = __webpack_require__(/*! ./background.js */ "./src/background.js");

var Vacuum = __webpack_require__(/*! ./vacuum.js */ "./src/vacuum.js");

var Treat = __webpack_require__(/*! ./treat.js */ "./src/treat.js");

var DOGCORDS = {
  dogRight: 113,
  dogBot: 266
};

var Game = /*#__PURE__*/function () {
  function Game(gamectx, backgroundctx) {
    _classCallCheck(this, Game);

    this.gamectx = gamectx;
    this.background = new Background(backgroundctx);
    this.dimensions = {
      width: gamectx.canvas.width,
      height: gamectx.canvas.height
    }; // this.player = new Player(this s.dimensions);

    this.jump = this.jump.bind(this);
    this.spacePressed = false;
    this.registerEvents();
    this.hoverCanvas();
    this.obstacles = [];
    this.start();
    this.instructionsctx = document.getElementById("instructions_canvas"); // let object = new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);
    // let object2 =new Vacuum(Math.floor(Math.random() * Math.floor(800)),182);

    this.score = 0;
    this.gameSpeed = 3;
    this.gravity = 1;
  } // jump(){
  //     this.player.jumping = true;
  //     this.player.jump();
  // }


  _createClass(Game, [{
    key: "jump",
    value: function jump(e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        this.player.jumping = true;
        this.player.jump();
      }
    }
  }, {
    key: "registerEvents",
    value: function registerEvents() {
      this.gamectx.canvas.addEventListener("keydown", this.jump);
    }
  }, {
    key: "animate",
    value: function animate() {
      requestAnimationFrame(this.animate.bind(this));
      this.player.animate(this.gamectx); //this.obstacles  pool, look through it and call
      // random number between 1 and 10 

      for (var i = 0; i < this.obstacles.length; i++) {
        this.obstacles[i].draw(this.gamectx); //if right of dog hits left of vacuum
      }

      this.checkgameOver();

      if (this.gameOver === true) {
        alert("game over");
      } // this.vacuum.draw(this.gamectx);


      this.treat.draw(this.gamectx);
      this.background.draw();
    }
  }, {
    key: "checkgameOver",
    value: function checkgameOver() {
      var _this = this;

      this.obstacles.forEach(function (obstacle) {
        var dogLeft = _this.player.x + 10;
        var dogTop = _this.player.y + 10;
        var dogRight = _this.player.x + _this.player.spriteTiles[1].w;
        var dogBottom = _this.player.y + _this.player.spriteTiles[1].h;
        var vacuumLeft = obstacle.spawnX + 20; //with displacement

        var vacuumRight = obstacle.spawnX + obstacle.vacuumWidth;
        var vacuumTop = obstacle.spawnY + 20;

        if (vacuumLeft < dogRight && dogLeft < vacuumRight && vacuumTop <= dogTop) {
          _this.gameOver = true;
        }
      });
    } //     });

  }, {
    key: "randomize",
    value: function randomize() {
      var _this2 = this;

      window.setInterval(function () {
        _this2.obstacles.pop();

        _this2.obstacles.push(new Vacuum(_this2.randomIntFromInterval(720, 940), 184));
      }, 2800);
    } // }
    //make sure they dont spawn in predictable places

  }, {
    key: "createObstacles",
    value: function createObstacles() {
      this.obstacles.push(new Vacuum(1040, 184));
      this.randomize();
      this.obstacles.push(new Vacuum(this.randomIntFromInterval(300, 600), 184)); //making sure that vacuums dont spawn on top of each other
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
  }, {
    key: "randomIntFromInterval",
    value: function randomIntFromInterval(min, max) {
      // min and max included 
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }, {
    key: "start",
    value: function start() {
      this.createObstacles();
      this.gameOver = false;
      this.player = new Player(this.dimensions); // this.vacuum = new Vacuum(Math.floor(Math.random() * Math.floor(800)), 184);

      this.treat = new Treat(770, 140); //all other things to load here

      this.animate();
    }
  }, {
    key: "hoverCanvas",
    value: function hoverCanvas() {
      this.gamectx.beginPath(); // debugger;
    } // createObstacles(){
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

  }]);

  return Game;
}(); // move(){
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);


var Game = __webpack_require__(/*! ./game */ "./src/game.js");

document.addEventListener("DOMContentLoaded", function () {
  var cvs = document.getElementById("canvas_container");
  var gamectx = cvs.getContext("2d");
  var backgroundcvs = document.getElementById("main_background");
  var backgroundctx = backgroundcvs.getContext("2d");
  console.log("hello");
  var game = new Game(gamectx, backgroundctx);
  console.log("nihao");
});

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// const CONSTANTS = {
//     TERMINAL_VEL: 12,
//     SPEED: 10,
//     GRAVITY: .35
// }
var Vacuum = __webpack_require__(/*! ./vacuum.js */ "./src/vacuum.js");

var Player = /*#__PURE__*/function () {
  function Player(dimensions) {
    _classCallCheck(this, Player);

    this.dimensions = dimensions;
    this.ground = this.dimensions.height - 32;
    this.x = 50;
    this.y = this.ground; //it is sitting at the bottom

    this.velocity = 0; //velocity speed along the y axis to be able to jump

    this.gravity = .4; //on every frame adding .4 to the objects y position

    this.speed = 1;
    this.jumping = false;
    this.jumpForce = 13;
    this.jumpTicks = 0;
    this.maxHeight = 0;
    this.dogHero = new Image();
    this.dogHero.src = "./assets/caped_hero.png";
    this.walkcycle = 0;
    this.spriteTiles = [{
      sX: 61,
      sY: 34,
      w: 61,
      h: 32
    }, {
      sX: 244,
      sY: 35,
      w: 63,
      h: 30
    } // {   
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
  } // jump(){
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
  //edit more sprites and add them


  _createClass(Player, [{
    key: "loadSprite",
    value: function loadSprite() {
      switch (true) {
        case this.y < 266:
          return this.spriteTiles[1];

        case this.walkcycle < 10:
          this.walkcycle += 1;
          return this.spriteTiles[0];

        case this.walkcycle < 20:
          this.walkcycle += 1;
          return this.spriteTiles[1];

        case this.walkcycle < 30:
          this.walkcycle += 1;
          return this.spriteTiles[1];

        default:
          this.walkcycle = 0;
          return this.spriteTiles[0];
      }
    }
  }, {
    key: "jump",
    value: function jump() {
      if (this.jumping) {
        //it is really making many microjumps (jumpTicks) on the page and stimulating one large jump
        //jumpTicks helps generate changing positiondisplacements using gravity
        if (this.jumpTicks === 0 || this.y < 266) {
          this.positionDisplacement = this.gravity * this.jumpTicks;
          this.y -= this.jumpForce - this.positionDisplacement; //jumpForce is speed at which object jumps

          this.jumpTicks += 1;
        } else {
          //else reset everything 
          this.y = 266;
          this.jumpTicks = 0;
          this.jumping = false;
        }
      }
    } // jump(ctx){
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

  }, {
    key: "animate",
    value: function animate(ctx) {
      this.jump(ctx);
      this.draw(ctx);
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      ctx.clearRect(0, 0, 800, 300);
      var sprite = this.loadSprite();
      ctx.drawImage(this.dogHero, sprite.sX, sprite.sY, sprite.w, sprite.h, this.x, this.y, sprite.w, sprite.h);
      ctx.beginPath();
      ctx.rect(this.x + 10, this.y, 68 - 20, 32);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'yellow';
      ctx.stroke();
    } // collidedWith(obstacle) {
    //     const playerHitbox = this.hitbox();
    //     const vacuumHitbox = vacuum.hitbox();
    //     return !(
    //       playerHitbox.maxX < vacuumHitbox.minX ||
    //       playerHitbox.minX > vacuumHitbox.maxX ||
    //       playerHitbox.maxY < vacuumHitbox.minY ||
    //       playerHitbox.minY > vacuumHitbox.maxY
    //     );
    // }
    // draw(ctx){
    //     ctx.clearRect(0,0,800,300);
    //     for(let currentFrame = 0; currentFrame < this.spriteTiles.length; currentFrame++){
    //         this.srcX = this.spriteTiles[currentFrame].sX;
    //         this.srcY = this.spriteTiles[currentFrame].sY;
    //         this.dogWidth = this.spriteTiles[currentFrame].w;
    //         this.dogHeight = this.spriteTiles[currentFrame].h;
    //         ctx.drawImage(this.dogHero, this.srcX, this.srcY, this.dogWidth, this.dogHeight, this.x, this.y, this.size, this.size);
    //     }
    // }
    // currentFrame = ++ currentFrame % cols; //gets updated index of frame
    // debugger;
    // ctx.beginPath();
    // ctx.rect(this.x, this.y, this.size, this.size);
    // // ctx.drawImage(this.img, this.x, this.y);
    // ctx.fillStyle = "yellow";
    // ctx.fill();
    // ctx.strokeStyle = 'yellow';
    // ctx.stroke();

  }, {
    key: "bounds",
    value: function bounds() {
      return {
        left: this.x,
        right: this.player.x + this.player.spriteTiles[1].w,
        top: this.y,
        bottom: this.player.y + this.player.spriteTiles[1].h
      };
    }
  }, {
    key: "outOfBounds",
    value: function outOfBounds() {
      var aboveTheTop = this.y < 0;
      var belowTheBottom = this.ground > this.dimensions.height;
      return aboveTheTop || belowTheBottom;
    }
  }]);

  return Player;
}(); // update(){
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

/***/ }),

/***/ "./src/treat.js":
/*!**********************!*\
  !*** ./src/treat.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Treat = /*#__PURE__*/function () {
  function Treat(positionX, positionY) {
    _classCallCheck(this, Treat);

    // super(positionX, positionY);
    this.sprite = new Image();
    this.sprite.src = "./assets/bone_treat.gif";
    this.boneWidth = 30;
    this.spawnX = positionX;
    this.x = positionX;
    this.boneHeight = 14;
    this.spawnY = positionY;
    this.speed = 0;
  }

  _createClass(Treat, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.sprite, this.spawnX, this.spawnY, this.boneWidth, this.boneHeight);

      if (this.spawnX <= ctx.canvas.width * -1) {
        this.spawnX = ctx.canvas.width;
      }

      this.spawnX -= this.speed;
    }
  }]);

  return Treat;
}();

module.exports = Treat;

/***/ }),

/***/ "./src/vacuum.js":
/*!***********************!*\
  !*** ./src/vacuum.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Vacuum = /*#__PURE__*/function () {
  function Vacuum(positionX, positionY) {
    _classCallCheck(this, Vacuum);

    // super(positionX, positionY);
    this.sprite = new Image();
    this.sprite.src = "./assets/evil_vacuum.png";
    this.vacuumWidth = 65;
    this.spawnX = positionX;
    this.x = positionX;
    this.vacuumHeight = 116;
    this.spawnY = positionY;
    this.speed = 2.8;
  }

  _createClass(Vacuum, [{
    key: "draw",
    value: function draw(ctx) {
      ctx.drawImage(this.sprite, this.spawnX, this.spawnY, this.vacuumWidth, this.vacuumHeight);

      if (this.spawnX <= ctx.canvas.width * -1) {
        this.spawnX = ctx.canvas.width;
      }

      this.spawnX -= this.speed;
      ctx.beginPath();
      ctx.rect(this.spawnX + 20, this.spawnY + 20, 40, 120);
      ctx.lineWidth = 1;
      ctx.strokeStyle = 'yellow';
      ctx.stroke();
    }
  }]);

  return Vacuum;
}();

module.exports = Vacuum;

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyZWF0LmpzIiwid2VicGFjazovLy8uL3NyYy92YWN1dW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2luZGV4LnNjc3M/ZDk0MiJdLCJuYW1lcyI6WyJtYWluX2JhY2tncm91bmQiLCJCYWNrZ3JvdW5kIiwiY3R4IiwiaW1hZ2UiLCJJbWFnZSIsInNyYyIsImltYWdlV2lkdGgiLCJ3aWR0aCIsImN0eFdpZHRoIiwiY2FudmFzIiwic3BlZWQiLCJ4IiwieSIsImRyYXdJbWFnZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJQbGF5ZXIiLCJyZXF1aXJlIiwiVmFjdXVtIiwiVHJlYXQiLCJET0dDT1JEUyIsImRvZ1JpZ2h0IiwiZG9nQm90IiwiR2FtZSIsImdhbWVjdHgiLCJiYWNrZ3JvdW5kY3R4IiwiYmFja2dyb3VuZCIsImRpbWVuc2lvbnMiLCJoZWlnaHQiLCJqdW1wIiwiYmluZCIsInNwYWNlUHJlc3NlZCIsInJlZ2lzdGVyRXZlbnRzIiwiaG92ZXJDYW52YXMiLCJvYnN0YWNsZXMiLCJzdGFydCIsImluc3RydWN0aW9uc2N0eCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzY29yZSIsImdhbWVTcGVlZCIsImdyYXZpdHkiLCJlIiwia2V5Q29kZSIsInByZXZlbnREZWZhdWx0IiwicGxheWVyIiwianVtcGluZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhbmltYXRlIiwiaSIsImxlbmd0aCIsImRyYXciLCJjaGVja2dhbWVPdmVyIiwiZ2FtZU92ZXIiLCJhbGVydCIsInRyZWF0IiwiZm9yRWFjaCIsIm9ic3RhY2xlIiwiZG9nTGVmdCIsImRvZ1RvcCIsInNwcml0ZVRpbGVzIiwidyIsImRvZ0JvdHRvbSIsImgiLCJ2YWN1dW1MZWZ0Iiwic3Bhd25YIiwidmFjdXVtUmlnaHQiLCJ2YWN1dW1XaWR0aCIsInZhY3V1bVRvcCIsInNwYXduWSIsIndpbmRvdyIsInNldEludGVydmFsIiwicG9wIiwicHVzaCIsInJhbmRvbUludEZyb21JbnRlcnZhbCIsInJhbmRvbWl6ZSIsIm1pbiIsIm1heCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImNyZWF0ZU9ic3RhY2xlcyIsImJlZ2luUGF0aCIsImN2cyIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kY3ZzIiwiY29uc29sZSIsImxvZyIsImdhbWUiLCJncm91bmQiLCJ2ZWxvY2l0eSIsImp1bXBGb3JjZSIsImp1bXBUaWNrcyIsIm1heEhlaWdodCIsImRvZ0hlcm8iLCJ3YWxrY3ljbGUiLCJzWCIsInNZIiwicG9zaXRpb25EaXNwbGFjZW1lbnQiLCJjbGVhclJlY3QiLCJzcHJpdGUiLCJsb2FkU3ByaXRlIiwicmVjdCIsImxpbmVXaWR0aCIsInN0cm9rZVN0eWxlIiwic3Ryb2tlIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYWJvdmVUaGVUb3AiLCJiZWxvd1RoZUJvdHRvbSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsImJvbmVXaWR0aCIsImJvbmVIZWlnaHQiLCJ2YWN1dW1IZWlnaHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxJQUFNQSxlQUFlLEdBQUcseUJBQXhCOztJQUNNQyxVO0FBQ0Ysc0JBQVlDLEdBQVosRUFBZ0I7QUFBQTs7QUFDWixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxLQUFMLEdBQWEsSUFBSUMsS0FBSixFQUFiO0FBQ0EsU0FBS0QsS0FBTCxDQUFXRSxHQUFYLEdBQWlCTCxlQUFqQjtBQUNBLFNBQUtNLFVBQUwsR0FBa0IsS0FBS0gsS0FBTCxDQUFXSSxLQUE3QjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS04sR0FBTCxDQUFTTyxNQUFULENBQWdCRixLQUFoQztBQUNBLFNBQUtHLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQSxTQUFLQyxDQUFMLEdBQVMsQ0FBVDtBQUVIOzs7OzJCQUNLO0FBQ0YsV0FBS1YsR0FBTCxDQUFTVyxTQUFULENBQW1CLEtBQUtWLEtBQXhCLEVBQStCLEtBQUtRLENBQXBDLEVBQXVDLEtBQUtDLENBQTVDLEVBREUsQ0FFRjs7QUFDQSxXQUFLVixHQUFMLENBQVNXLFNBQVQsQ0FBbUIsS0FBS1YsS0FBeEIsRUFBK0IsS0FBS1EsQ0FBTCxHQUFTLEtBQUtMLFVBQTdDLEVBQXdELEtBQUtNLENBQTdELEVBSEUsQ0FJRjs7QUFDQSxVQUFJLEtBQUtELENBQUwsSUFBVyxLQUFLTCxVQUFMLEdBQWdCLENBQUMsQ0FBaEMsRUFBbUM7QUFDL0I7QUFDQSxhQUFLSyxDQUFMLEdBQVMsQ0FBVDtBQUdIOztBQUNELFdBQUtBLENBQUwsSUFBVSxLQUFLRCxLQUFmLENBWEUsQ0FZRjtBQUNBO0FBQ0g7Ozs7OztBQUlMSSxNQUFNLENBQUNDLE9BQVAsR0FBaUJkLFVBQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0JBLElBQU1lLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxpQ0FBRCxDQUF0Qjs7QUFDQSxJQUFNaEIsVUFBVSxHQUFHZ0IsbUJBQU8sQ0FBQyw0Q0FBRCxDQUExQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsb0NBQUQsQ0FBdEI7O0FBQ0EsSUFBTUUsS0FBSyxHQUFHRixtQkFBTyxDQUFDLGtDQUFELENBQXJCOztBQUNBLElBQU1HLFFBQVEsR0FBRztBQUNiQyxVQUFRLEVBQUUsR0FERztBQUViQyxRQUFNLEVBQUU7QUFGSyxDQUFqQjs7SUFJTUMsSTtBQUNGLGdCQUFZQyxPQUFaLEVBQXFCQyxhQUFyQixFQUFtQztBQUFBOztBQUMvQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLRSxVQUFMLEdBQWtCLElBQUl6QixVQUFKLENBQWV3QixhQUFmLENBQWxCO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQjtBQUFFcEIsV0FBSyxFQUFFaUIsT0FBTyxDQUFDZixNQUFSLENBQWVGLEtBQXhCO0FBQStCcUIsWUFBTSxFQUFFSixPQUFPLENBQUNmLE1BQVIsQ0FBZW1CO0FBQXRELEtBQWxCLENBSCtCLENBSS9COztBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFLQSxJQUFMLENBQVVDLElBQVYsQ0FBZSxJQUFmLENBQVo7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEtBQXBCO0FBQ0EsU0FBS0MsY0FBTDtBQUNBLFNBQUtDLFdBQUw7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsS0FBTDtBQUNBLFNBQUtDLGVBQUwsR0FBdUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixxQkFBeEIsQ0FBdkIsQ0FYK0IsQ0FZL0I7QUFDQTs7QUFFQSxTQUFLQyxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUdILEcsQ0FFRDtBQUNJO0FBQ0E7QUFDQTs7Ozs7eUJBQ0NDLEMsRUFBRTtBQUNILFVBQUdBLENBQUMsQ0FBQ0MsT0FBRixLQUFjLEVBQWpCLEVBQW9CO0FBQ2hCRCxTQUFDLENBQUNFLGNBQUY7QUFDQSxhQUFLQyxNQUFMLENBQVlDLE9BQVosR0FBc0IsSUFBdEI7QUFDQSxhQUFLRCxNQUFMLENBQVloQixJQUFaO0FBQ0g7QUFDSjs7O3FDQUVlO0FBQ1osV0FBS0wsT0FBTCxDQUFhZixNQUFiLENBQW9Cc0MsZ0JBQXBCLENBQXFDLFNBQXJDLEVBQWdELEtBQUtsQixJQUFyRDtBQUNIOzs7OEJBQ1E7QUFFTG1CLDJCQUFxQixDQUFDLEtBQUtDLE9BQUwsQ0FBYW5CLElBQWIsQ0FBa0IsSUFBbEIsQ0FBRCxDQUFyQjtBQUNBLFdBQUtlLE1BQUwsQ0FBWUksT0FBWixDQUFvQixLQUFLekIsT0FBekIsRUFISyxDQUlMO0FBQ0E7O0FBR0EsV0FBSyxJQUFJMEIsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDLEtBQUtoQixTQUFMLENBQWVpQixNQUEvQixFQUF1Q0QsQ0FBQyxFQUF4QyxFQUEyQztBQUN2QyxhQUFLaEIsU0FBTCxDQUFlZ0IsQ0FBZixFQUFrQkUsSUFBbEIsQ0FBdUIsS0FBSzVCLE9BQTVCLEVBRHVDLENBRXZDO0FBRUg7O0FBQ0QsV0FBSzZCLGFBQUw7O0FBR0EsVUFBSSxLQUFLQyxRQUFMLEtBQWtCLElBQXRCLEVBQTJCO0FBQ3ZCQyxhQUFLLENBQUMsV0FBRCxDQUFMO0FBQ0gsT0FsQkksQ0FtQkw7OztBQUNBLFdBQUtDLEtBQUwsQ0FBV0osSUFBWCxDQUFnQixLQUFLNUIsT0FBckI7QUFDQSxXQUFLRSxVQUFMLENBQWdCMEIsSUFBaEI7QUFHSDs7O29DQUVlO0FBQUE7O0FBQ1osV0FBS2xCLFNBQUwsQ0FBZXVCLE9BQWYsQ0FBdUIsVUFBQ0MsUUFBRCxFQUFjO0FBQ2pDLFlBQU1DLE9BQU8sR0FBRyxLQUFJLENBQUNkLE1BQUwsQ0FBWWxDLENBQVosR0FBZ0IsRUFBaEM7QUFDQSxZQUFNaUQsTUFBTSxHQUFHLEtBQUksQ0FBQ2YsTUFBTCxDQUFZakMsQ0FBWixHQUFnQixFQUEvQjtBQUNBLFlBQU1TLFFBQVEsR0FBRyxLQUFJLENBQUN3QixNQUFMLENBQVlsQyxDQUFaLEdBQWdCLEtBQUksQ0FBQ2tDLE1BQUwsQ0FBWWdCLFdBQVosQ0FBd0IsQ0FBeEIsRUFBMkJDLENBQTVEO0FBQ0EsWUFBTUMsU0FBUyxHQUFHLEtBQUksQ0FBQ2xCLE1BQUwsQ0FBWWpDLENBQVosR0FBZ0IsS0FBSSxDQUFDaUMsTUFBTCxDQUFZZ0IsV0FBWixDQUF3QixDQUF4QixFQUEyQkcsQ0FBN0Q7QUFDQSxZQUFJQyxVQUFVLEdBQUdQLFFBQVEsQ0FBQ1EsTUFBVCxHQUFrQixFQUFuQyxDQUxpQyxDQUtNOztBQUN2QyxZQUFJQyxXQUFXLEdBQUdULFFBQVEsQ0FBQ1EsTUFBVCxHQUFrQlIsUUFBUSxDQUFDVSxXQUE3QztBQUNBLFlBQUlDLFNBQVMsR0FBR1gsUUFBUSxDQUFDWSxNQUFULEdBQWtCLEVBQWxDOztBQUNBLFlBQUtMLFVBQVUsR0FBRzVDLFFBQWQsSUFBNEJzQyxPQUFPLEdBQUdRLFdBQXRDLElBQXVERSxTQUFTLElBQUlULE1BQXhFLEVBQWlGO0FBQzdFLGVBQUksQ0FBQ04sUUFBTCxHQUFnQixJQUFoQjtBQUNIO0FBQ0osT0FYRDtBQVlILEssQ0FFRDs7OztnQ0FFVztBQUFBOztBQUNQaUIsWUFBTSxDQUFDQyxXQUFQLENBQW9CLFlBQUs7QUFDckIsY0FBSSxDQUFDdEMsU0FBTCxDQUFldUMsR0FBZjs7QUFDQSxjQUFJLENBQUN2QyxTQUFMLENBQWV3QyxJQUFmLENBQXFCLElBQUl4RCxNQUFKLENBQVcsTUFBSSxDQUFDeUQscUJBQUwsQ0FBMkIsR0FBM0IsRUFBK0IsR0FBL0IsQ0FBWCxFQUErQyxHQUEvQyxDQUFyQjtBQUNILE9BSEQsRUFHRyxJQUhIO0FBS0gsSyxDQUNEO0FBRUE7Ozs7c0NBQ2lCO0FBQ2IsV0FBS3pDLFNBQUwsQ0FBZXdDLElBQWYsQ0FBb0IsSUFBSXhELE1BQUosQ0FBVyxJQUFYLEVBQWlCLEdBQWpCLENBQXBCO0FBQ0EsV0FBSzBELFNBQUw7QUFDQSxXQUFLMUMsU0FBTCxDQUFld0MsSUFBZixDQUFvQixJQUFJeEQsTUFBSixDQUFZLEtBQUt5RCxxQkFBTCxDQUEyQixHQUEzQixFQUErQixHQUEvQixDQUFaLEVBQWlELEdBQWpELENBQXBCLEVBSGEsQ0FNYjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJUDs7OzBDQUVxQkUsRyxFQUFLQyxHLEVBQUs7QUFBRTtBQUNsQyxhQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLE1BQWlCSCxHQUFHLEdBQUdELEdBQU4sR0FBWSxDQUE3QixJQUFrQ0EsR0FBN0MsQ0FBUDtBQUNDOzs7NEJBRU07QUFDSCxXQUFLSyxlQUFMO0FBQ0EsV0FBSzVCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxXQUFLVCxNQUFMLEdBQWMsSUFBSTdCLE1BQUosQ0FBVyxLQUFLVyxVQUFoQixDQUFkLENBSEcsQ0FJSDs7QUFDQSxXQUFLNkIsS0FBTCxHQUFhLElBQUlyQyxLQUFKLENBQVUsR0FBVixFQUFlLEdBQWYsQ0FBYixDQUxHLENBT0g7O0FBQ0EsV0FBSzhCLE9BQUw7QUFDSDs7O2tDQUNZO0FBQ1QsV0FBS3pCLE9BQUwsQ0FBYTJELFNBQWIsR0FEUyxDQUlUO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0tBU0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7OztBQUVBckUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCUSxJQUFqQixDOzs7Ozs7Ozs7Ozs7QUNyTkE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsSUFBTUEsSUFBSSxHQUFHTixtQkFBTyxDQUFDLDZCQUFELENBQXBCOztBQUVBb0IsUUFBUSxDQUFDVSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBNkMsWUFBSztBQUM5QyxNQUFNcUMsR0FBRyxHQUFHL0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGtCQUF4QixDQUFaO0FBQ0EsTUFBTWQsT0FBTyxHQUFHNEQsR0FBRyxDQUFDQyxVQUFKLENBQWUsSUFBZixDQUFoQjtBQUVBLE1BQU1DLGFBQWEsR0FBR2pELFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBdEI7QUFDQSxNQUFNYixhQUFhLEdBQUc2RCxhQUFhLENBQUNELFVBQWQsQ0FBeUIsSUFBekIsQ0FBdEI7QUFDQUUsU0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWjtBQUNBLE1BQU1DLElBQUksR0FBRyxJQUFJbEUsSUFBSixDQUFTQyxPQUFULEVBQWtCQyxhQUFsQixDQUFiO0FBQ0E4RCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxPQUFaO0FBRUgsQ0FWRCxFOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNdEUsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLG9DQUFELENBQXRCOztJQUVNRCxNO0FBQ0Ysa0JBQVlXLFVBQVosRUFBdUI7QUFBQTs7QUFDbkIsU0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFDQSxTQUFLK0QsTUFBTCxHQUFjLEtBQUsvRCxVQUFMLENBQWdCQyxNQUFoQixHQUF5QixFQUF2QztBQUNBLFNBQUtqQixDQUFMLEdBQVMsRUFBVDtBQUNBLFNBQUtDLENBQUwsR0FBUyxLQUFLOEUsTUFBZCxDQUptQixDQUlHOztBQUN0QixTQUFLQyxRQUFMLEdBQWdCLENBQWhCLENBTG1CLENBS0E7O0FBQ25CLFNBQUtsRCxPQUFMLEdBQWUsRUFBZixDQU5tQixDQU1BOztBQUNuQixTQUFLL0IsS0FBTCxHQUFhLENBQWI7QUFDQSxTQUFLb0MsT0FBTCxHQUFjLEtBQWQ7QUFDQSxTQUFLOEMsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQUkzRixLQUFKLEVBQWY7QUFDQSxTQUFLMkYsT0FBTCxDQUFhMUYsR0FBYixHQUFtQix5QkFBbkI7QUFDQSxTQUFLMkYsU0FBTCxHQUFpQixDQUFqQjtBQUNBLFNBQUtuQyxXQUFMLEdBQW1CLENBQ2Y7QUFDSW9DLFFBQUUsRUFBRSxFQURSO0FBRUlDLFFBQUUsRUFBRSxFQUZSO0FBR0lwQyxPQUFDLEVBQUUsRUFIUDtBQUlJRSxPQUFDLEVBQUU7QUFKUCxLQURlLEVBT2Y7QUFDSWlDLFFBQUUsRUFBRSxHQURSO0FBRUlDLFFBQUUsRUFBRSxFQUZSO0FBR0lwQyxPQUFDLEVBQUUsRUFIUDtBQUlJRSxPQUFDLEVBQUU7QUFKUCxLQVBlLENBYWY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOUJlLEtBQW5CO0FBaUNDLEcsQ0FHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDSDs7Ozs7aUNBQ2dCO0FBQ1QsY0FBTyxJQUFQO0FBQ0EsYUFBTSxLQUFLcEQsQ0FBTCxHQUFTLEdBQWY7QUFDSSxpQkFBTyxLQUFLaUQsV0FBTCxDQUFpQixDQUFqQixDQUFQOztBQUNKLGFBQU0sS0FBS21DLFNBQUwsR0FBaUIsRUFBdkI7QUFDSSxlQUFLQSxTQUFMLElBQWtCLENBQWxCO0FBQ0EsaUJBQU8sS0FBS25DLFdBQUwsQ0FBaUIsQ0FBakIsQ0FBUDs7QUFDSixhQUFNLEtBQUttQyxTQUFMLEdBQWlCLEVBQXZCO0FBQ0ksZUFBS0EsU0FBTCxJQUFrQixDQUFsQjtBQUNBLGlCQUFPLEtBQUtuQyxXQUFMLENBQWlCLENBQWpCLENBQVA7O0FBQ0osYUFBTSxLQUFLbUMsU0FBTCxHQUFpQixFQUF2QjtBQUNJLGVBQUtBLFNBQUwsSUFBa0IsQ0FBbEI7QUFDQSxpQkFBTyxLQUFLbkMsV0FBTCxDQUFpQixDQUFqQixDQUFQOztBQUNKO0FBQ0ksZUFBS21DLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxpQkFBTyxLQUFLbkMsV0FBTCxDQUFpQixDQUFqQixDQUFQO0FBZEo7QUFtQkg7OzsyQkFDTTtBQUNILFVBQUksS0FBS2YsT0FBVCxFQUFrQjtBQUNkO0FBQ0E7QUFDRixZQUFJLEtBQUsrQyxTQUFMLEtBQW1CLENBQW5CLElBQXdCLEtBQUtqRixDQUFMLEdBQVMsR0FBckMsRUFBeUM7QUFDckMsZUFBS3VGLG9CQUFMLEdBQTRCLEtBQUsxRCxPQUFMLEdBQWUsS0FBS29ELFNBQWhEO0FBQ0EsZUFBS2pGLENBQUwsSUFBVSxLQUFLZ0YsU0FBTCxHQUFpQixLQUFLTyxvQkFBaEMsQ0FGcUMsQ0FHdkM7O0FBQ0EsZUFBS04sU0FBTCxJQUFrQixDQUFsQjtBQUNELFNBTEQsTUFLTztBQUNIO0FBQ0YsZUFBS2pGLENBQUwsR0FBUyxHQUFUO0FBQ0EsZUFBS2lGLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxlQUFLL0MsT0FBTCxHQUFlLEtBQWY7QUFDQztBQUNKO0FBQ0osSyxDQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7NEJBRVk1QyxHLEVBQUk7QUFDUixXQUFLMkIsSUFBTCxDQUFVM0IsR0FBVjtBQUNBLFdBQUtrRCxJQUFMLENBQVVsRCxHQUFWO0FBQ0g7Ozt5QkFDSUEsRyxFQUFJO0FBQ0xBLFNBQUcsQ0FBQ2tHLFNBQUosQ0FBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEdBQXBCLEVBQXlCLEdBQXpCO0FBQ0EsVUFBSUMsTUFBTSxHQUFHLEtBQUtDLFVBQUwsRUFBYjtBQUNBcEcsU0FBRyxDQUFDVyxTQUFKLENBQWMsS0FBS2tGLE9BQW5CLEVBQTRCTSxNQUFNLENBQUNKLEVBQW5DLEVBQXVDSSxNQUFNLENBQUNILEVBQTlDLEVBQWtERyxNQUFNLENBQUN2QyxDQUF6RCxFQUE0RHVDLE1BQU0sQ0FBQ3JDLENBQW5FLEVBQXNFLEtBQUtyRCxDQUEzRSxFQUE4RSxLQUFLQyxDQUFuRixFQUFzRnlGLE1BQU0sQ0FBQ3ZDLENBQTdGLEVBQWdHdUMsTUFBTSxDQUFDckMsQ0FBdkc7QUFDQTlELFNBQUcsQ0FBQ2lGLFNBQUo7QUFDQWpGLFNBQUcsQ0FBQ3FHLElBQUosQ0FBUyxLQUFLNUYsQ0FBTCxHQUFRLEVBQWpCLEVBQXFCLEtBQUtDLENBQTFCLEVBQTZCLEtBQUcsRUFBaEMsRUFBb0MsRUFBcEM7QUFDQVYsU0FBRyxDQUFDc0csU0FBSixHQUFnQixDQUFoQjtBQUNBdEcsU0FBRyxDQUFDdUcsV0FBSixHQUFrQixRQUFsQjtBQUNBdkcsU0FBRyxDQUFDd0csTUFBSjtBQUNILEssQ0FFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OzZCQUNTO0FBQ0wsYUFBTTtBQUNGQyxZQUFJLEVBQUUsS0FBS2hHLENBRFQ7QUFFRmlHLGFBQUssRUFBRSxLQUFLL0QsTUFBTCxDQUFZbEMsQ0FBWixHQUFnQixLQUFLa0MsTUFBTCxDQUFZZ0IsV0FBWixDQUF3QixDQUF4QixFQUEyQkMsQ0FGaEQ7QUFHRitDLFdBQUcsRUFBRSxLQUFLakcsQ0FIUjtBQUlGa0csY0FBTSxFQUFFLEtBQUtqRSxNQUFMLENBQVlqQyxDQUFaLEdBQWdCLEtBQUtpQyxNQUFMLENBQVlnQixXQUFaLENBQXdCLENBQXhCLEVBQTJCRztBQUpqRCxPQUFOO0FBT0g7OztrQ0FDWTtBQUNULFVBQU0rQyxXQUFXLEdBQUcsS0FBS25HLENBQUwsR0FBUyxDQUE3QjtBQUNBLFVBQU1vRyxjQUFjLEdBQUcsS0FBS3RCLE1BQUwsR0FBYyxLQUFLL0QsVUFBTCxDQUFnQkMsTUFBckQ7QUFDQSxhQUFPbUYsV0FBVyxJQUFJQyxjQUF0QjtBQUNIOzs7O0tBTUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBTUFsRyxNQUFNLENBQUNDLE9BQVAsR0FBaUJDLE1BQWpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDeE9NRyxLO0FBQ0YsaUJBQVk4RixTQUFaLEVBQXVCQyxTQUF2QixFQUFpQztBQUFBOztBQUM3QjtBQUNBLFNBQUtiLE1BQUwsR0FBYyxJQUFJakcsS0FBSixFQUFkO0FBQ0EsU0FBS2lHLE1BQUwsQ0FBWWhHLEdBQVosR0FBa0IseUJBQWxCO0FBQ0EsU0FBSzhHLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLakQsTUFBTCxHQUFjK0MsU0FBZDtBQUNBLFNBQUt0RyxDQUFMLEdBQVNzRyxTQUFUO0FBQ0EsU0FBS0csVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUs5QyxNQUFMLEdBQWM0QyxTQUFkO0FBQ0EsU0FBS3hHLEtBQUwsR0FBYSxDQUFiO0FBQ0g7Ozs7eUJBR0lSLEcsRUFBSTtBQUNMQSxTQUFHLENBQUNXLFNBQUosQ0FBYyxLQUFLd0YsTUFBbkIsRUFBMkIsS0FBS25DLE1BQWhDLEVBQXdDLEtBQUtJLE1BQTdDLEVBQXFELEtBQUs2QyxTQUExRCxFQUFxRSxLQUFLQyxVQUExRTs7QUFDQSxVQUFHLEtBQUtsRCxNQUFMLElBQWdCaEUsR0FBRyxDQUFDTyxNQUFKLENBQVdGLEtBQVgsR0FBaUIsQ0FBQyxDQUFyQyxFQUF3QztBQUdwQyxhQUFLMkQsTUFBTCxHQUFjaEUsR0FBRyxDQUFDTyxNQUFKLENBQVdGLEtBQXpCO0FBRUg7O0FBQ0QsV0FBSzJELE1BQUwsSUFBZSxLQUFLeEQsS0FBcEI7QUFDSDs7Ozs7O0FBRUxJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkksS0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN6Qk1ELE07QUFDRixrQkFBWStGLFNBQVosRUFBdUJDLFNBQXZCLEVBQWlDO0FBQUE7O0FBQzdCO0FBQ0EsU0FBS2IsTUFBTCxHQUFjLElBQUlqRyxLQUFKLEVBQWQ7QUFDQSxTQUFLaUcsTUFBTCxDQUFZaEcsR0FBWixHQUFrQiwwQkFBbEI7QUFDQSxTQUFLK0QsV0FBTCxHQUFtQixFQUFuQjtBQUNBLFNBQUtGLE1BQUwsR0FBYytDLFNBQWQ7QUFDQSxTQUFLdEcsQ0FBTCxHQUFTc0csU0FBVDtBQUNBLFNBQUtJLFlBQUwsR0FBb0IsR0FBcEI7QUFDQSxTQUFLL0MsTUFBTCxHQUFjNEMsU0FBZDtBQUNBLFNBQUt4RyxLQUFMLEdBQWEsR0FBYjtBQUNIOzs7O3lCQUdJUixHLEVBQUk7QUFDTEEsU0FBRyxDQUFDVyxTQUFKLENBQWMsS0FBS3dGLE1BQW5CLEVBQTJCLEtBQUtuQyxNQUFoQyxFQUF3QyxLQUFLSSxNQUE3QyxFQUFxRCxLQUFLRixXQUExRCxFQUF1RSxLQUFLaUQsWUFBNUU7O0FBQ0EsVUFBRyxLQUFLbkQsTUFBTCxJQUFnQmhFLEdBQUcsQ0FBQ08sTUFBSixDQUFXRixLQUFYLEdBQWlCLENBQUMsQ0FBckMsRUFBd0M7QUFHcEMsYUFBSzJELE1BQUwsR0FBY2hFLEdBQUcsQ0FBQ08sTUFBSixDQUFXRixLQUF6QjtBQUVIOztBQUNELFdBQUsyRCxNQUFMLElBQWUsS0FBS3hELEtBQXBCO0FBQ0FSLFNBQUcsQ0FBQ2lGLFNBQUo7QUFFQWpGLFNBQUcsQ0FBQ3FHLElBQUosQ0FBUyxLQUFLckMsTUFBTCxHQUFjLEVBQXZCLEVBQTJCLEtBQUtJLE1BQUwsR0FBYSxFQUF4QyxFQUE2QyxFQUE3QyxFQUFpRCxHQUFqRDtBQUNBcEUsU0FBRyxDQUFDc0csU0FBSixHQUFnQixDQUFoQjtBQUNBdEcsU0FBRyxDQUFDdUcsV0FBSixHQUFrQixRQUFsQjtBQUNBdkcsU0FBRyxDQUFDd0csTUFBSjtBQUNIOzs7Ozs7QUFJTDVGLE1BQU0sQ0FBQ0MsT0FBUCxHQUFnQkcsTUFBaEIsQzs7Ozs7Ozs7Ozs7QUNqQ0EsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgbWFpbl9iYWNrZ3JvdW5kID0gXCIuL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiO1xyXG5jbGFzcyBCYWNrZ3JvdW5ke1xyXG4gICAgY29uc3RydWN0b3IoY3R4KXtcclxuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcclxuICAgICAgICB0aGlzLmltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5pbWFnZS5zcmMgPSBtYWluX2JhY2tncm91bmQ7XHJcbiAgICAgICAgdGhpcy5pbWFnZVdpZHRoID0gdGhpcy5pbWFnZS53aWR0aDtcclxuICAgICAgICB0aGlzLmN0eFdpZHRoID0gdGhpcy5jdHguY2FudmFzLndpZHRoO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAyO1xyXG4gICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIGRyYXcoKXtcclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIC8vIGRyYXcgMXN0IGltYWdlIGF0IDAgcG9zaXRpb25cclxuICAgICAgICB0aGlzLmN0eC5kcmF3SW1hZ2UodGhpcy5pbWFnZSwgdGhpcy54ICsgdGhpcy5pbWFnZVdpZHRoLHRoaXMueSk7XHJcbiAgICAgICAgLy9kcmF3IGltYWdlIDIgZm9yIGxvb3AgKGF0IGltYWdlIHdpZHRoKVxyXG4gICAgICAgIGlmICh0aGlzLnggPD0gKHRoaXMuaW1hZ2VXaWR0aCotMSkpe1xyXG4gICAgICAgICAgICAvL2lmIHJlYWNoIGVuZCBvZiBpbWFnZSwgcmVzZXQgeCBwb3NpdGlvbiB0byBwbGF5IGltYWdlIGFnYWluXHJcbiAgICAgICAgICAgIHRoaXMueCA9IDA7XHJcbiAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBcclxuICAgICAgICB0aGlzLnggLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICAvL21ha2luZyBpbWFnZSBtb3ZlXHJcbiAgICAgICAgLy9uZWdhdGl2ZSBhY2NlbGVyYXRpb24gaXMgYWNjZWxlcmF0aW9uIHRvd2FyZHMgdGhlIGxlZnRcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gQmFja2dyb3VuZDsiLCJjb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL3BsYXllcicpO1xyXG5jb25zdCBCYWNrZ3JvdW5kID0gcmVxdWlyZSgnLi9iYWNrZ3JvdW5kLmpzJyk7XHJcbmNvbnN0IFZhY3V1bSA9IHJlcXVpcmUoJy4vdmFjdXVtLmpzJyk7XHJcbmNvbnN0IFRyZWF0ID0gcmVxdWlyZSgnLi90cmVhdC5qcycpO1xyXG5jb25zdCBET0dDT1JEUyA9IHtcclxuICAgIGRvZ1JpZ2h0OiAxMTMsXHJcbiAgICBkb2dCb3Q6IDI2NlxyXG59XHJcbmNsYXNzIEdhbWV7XHJcbiAgICBjb25zdHJ1Y3RvcihnYW1lY3R4LCBiYWNrZ3JvdW5kY3R4KXtcclxuICAgICAgICB0aGlzLmdhbWVjdHggPSBnYW1lY3R4O1xyXG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IG5ldyBCYWNrZ3JvdW5kKGJhY2tncm91bmRjdHgpO1xyXG4gICAgICAgIHRoaXMuZGltZW5zaW9ucyA9IHsgd2lkdGg6IGdhbWVjdHguY2FudmFzLndpZHRoLCBoZWlnaHQ6IGdhbWVjdHguY2FudmFzLmhlaWdodH1cclxuICAgICAgICAvLyB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcyBzLmRpbWVuc2lvbnMpO1xyXG4gICAgICAgIHRoaXMuanVtcCA9IHRoaXMuanVtcC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuaG92ZXJDYW52YXMoKTtcclxuICAgICAgICB0aGlzLm9ic3RhY2xlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uc2N0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5zdHJ1Y3Rpb25zX2NhbnZhc1wiKTtcclxuICAgICAgICAvLyBsZXQgb2JqZWN0ID0gbmV3IFZhY3V1bShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDgwMCkpLDE4Mik7XHJcbiAgICAgICAgLy8gbGV0IG9iamVjdDIgPW5ldyBWYWN1dW0oTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogTWF0aC5mbG9vcig4MDApKSwxODIpO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcbiAgICAgICAgdGhpcy5nYW1lU3BlZWQgPSAzO1xyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IDE7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gXHJcbiAgICAvLyBqdW1wKCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucGxheWVyLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgIC8vICAgICB0aGlzLnBsYXllci5qdW1wKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAganVtcChlKXtcclxuICAgICAgICBpZihlLmtleUNvZGUgPT09IDMyKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBsYXllci5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5wbGF5ZXIuanVtcCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVnaXN0ZXJFdmVudHMoKXtcclxuICAgICAgICB0aGlzLmdhbWVjdHguY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuanVtcCk7XHJcbiAgICB9XHJcbiAgICBhbmltYXRlKCl7XHJcbiAgICAgICBcclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucGxheWVyLmFuaW1hdGUodGhpcy5nYW1lY3R4KTtcclxuICAgICAgICAvL3RoaXMub2JzdGFjbGVzICBwb29sLCBsb29rIHRocm91Z2ggaXQgYW5kIGNhbGxcclxuICAgICAgICAvLyByYW5kb20gbnVtYmVyIGJldHdlZW4gMSBhbmQgMTAgXHJcbiAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRoaXMub2JzdGFjbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXNbaV0uZHJhdyh0aGlzLmdhbWVjdHgpO1xyXG4gICAgICAgICAgICAvL2lmIHJpZ2h0IG9mIGRvZyBoaXRzIGxlZnQgb2YgdmFjdXVtXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrZ2FtZU92ZXIoKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5nYW1lT3ZlciA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwiZ2FtZSBvdmVyXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhY3V1bS5kcmF3KHRoaXMuZ2FtZWN0eCk7XHJcbiAgICAgICAgdGhpcy50cmVhdC5kcmF3KHRoaXMuZ2FtZWN0eCk7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmRyYXcoKTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH0gICBcclxuXHJcbiAgICAgY2hlY2tnYW1lT3Zlcigpe1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goKG9ic3RhY2xlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvZ0xlZnQgPSB0aGlzLnBsYXllci54ICsgMTA7XHJcbiAgICAgICAgICAgIGNvbnN0IGRvZ1RvcCA9IHRoaXMucGxheWVyLnkgKyAxMDtcclxuICAgICAgICAgICAgY29uc3QgZG9nUmlnaHQgPSB0aGlzLnBsYXllci54ICsgdGhpcy5wbGF5ZXIuc3ByaXRlVGlsZXNbMV0udztcclxuICAgICAgICAgICAgY29uc3QgZG9nQm90dG9tID0gdGhpcy5wbGF5ZXIueSArIHRoaXMucGxheWVyLnNwcml0ZVRpbGVzWzFdLmg7XHJcbiAgICAgICAgICAgIGxldCB2YWN1dW1MZWZ0ID0gb2JzdGFjbGUuc3Bhd25YICsgMjA7IC8vd2l0aCBkaXNwbGFjZW1lbnRcclxuICAgICAgICAgICAgbGV0IHZhY3V1bVJpZ2h0ID0gb2JzdGFjbGUuc3Bhd25YICsgb2JzdGFjbGUudmFjdXVtV2lkdGg7XHJcbiAgICAgICAgICAgIGxldCB2YWN1dW1Ub3AgPSBvYnN0YWNsZS5zcGF3blkgKyAyMDtcclxuICAgICAgICAgICAgaWYoICh2YWN1dW1MZWZ0IDwgZG9nUmlnaHQpICYmIChkb2dMZWZ0IDwgdmFjdXVtUmlnaHQpICYmICh2YWN1dW1Ub3AgPD0gZG9nVG9wKSApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlciA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgICAgXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgcmFuZG9taXplKCl7XHJcbiAgICAgICAgd2luZG93LnNldEludGVydmFsKCAoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5vYnN0YWNsZXMucG9wKCk7XHJcbiAgICAgICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2ggKG5ldyBWYWN1dW0odGhpcy5yYW5kb21JbnRGcm9tSW50ZXJ2YWwoNzIwLDk0MCksMTg0KSk7XHJcbiAgICAgICAgfSwgMjgwMCk7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vbWFrZSBzdXJlIHRoZXkgZG9udCBzcGF3biBpbiBwcmVkaWN0YWJsZSBwbGFjZXNcclxuICAgIGNyZWF0ZU9ic3RhY2xlcygpe1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2gobmV3IFZhY3V1bSgxMDQwLCAxODQpKTtcclxuICAgICAgICB0aGlzLnJhbmRvbWl6ZSgpO1xyXG4gICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2gobmV3IFZhY3V1bSAodGhpcy5yYW5kb21JbnRGcm9tSW50ZXJ2YWwoMzAwLDYwMCksIDE4NCkpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIC8vbWFraW5nIHN1cmUgdGhhdCB2YWN1dW1zIGRvbnQgc3Bhd24gb24gdG9wIG9mIGVhY2ggb3RoZXJcclxuICAgICAgICAgICAgLy8gdGhpcy5zcGFjZUJldHdlZW4gPSAzMDA7XHJcbiAgICAgICAgICAgIC8vIGxldCBvYmplY3QgPSBuZXcgVmFjdXVtICg1MDAsIDE4NCk7XHJcbiAgICAgICAgICAgIC8vIGxldCBvYmplY3QzID0gbmV3IFZhY3V1bSh0aGlzLnJhbmRvbUludEZyb21JbnRlcnZhbCgxMDAsNzAwKSwgMTg0KTtcclxuICAgICAgICAgICAgLy8gbGV0IG9iamVjdDQgPSBuZXcgVmFjdXVtKHRoaXMucmFuZG9tSW50RnJvbUludGVydmFsKDEwMCw3MDApLCAxODQpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgICAgLy8gaWYgKG9iamVjdDMueCA+IG9iamVjdC54ICsgdGhpcy5zcGFjZUJldHdlZW4gfHwgb2JqZWN0My54IDwgb2JqZWN0LnggKyB0aGlzLnNwYWNlQmV0d2Vlbil7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLm9ic3RhY2xlcy5wdXNoKG9iamVjdDMpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYgKG9iamVjdDQueCA+IG9iamVjdC54ICsgdGhpcy5zcGFjZUJldHdlZW4gfHwgb2JqZWN0NC54IDwgb2JqZWN0LnggKyB0aGlzLnNwYWNlQmV0d2VlbiAmJiBvYmplY3Q0Lngpe1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5vYnN0YWNsZXMucHVzaChvYmplY3Q0KTtcclxuICAgICAgICAgICAgLy8gfWVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5vYnN0YWNsZXMucHVzaChvYmplY3QpO1xyXG4gICAgICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgICAgICAvLyBzd2l0Y2godHJ1ZSl7XHJcbiAgICAgICAgICAgIC8vICAgICBjYXNlKHRoaXMub2JzdGFjbGVzWzBdLnggPiA0MDApOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2gobmV3IFZhY3V1bSAoNzAwLCAxODQpKTtcclxuICAgICAgICAgICAgLy8gICAgIGNhc2UgKHRoaXMub2JzdGFjbGVzWzFdLnggPiA0MDApOlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMub2JzdGFjbGVzLnB1c2gobmV3IFZhY3V1bSAoMTAwMCwgMTg0KSk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfSAgIFxyXG4gICAgXHJcbiAgICByYW5kb21JbnRGcm9tSW50ZXJ2YWwobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKTtcclxuICAgIH1cclxuICBcclxuICAgIHN0YXJ0KCl7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVPYnN0YWNsZXMoKTtcclxuICAgICAgICB0aGlzLmdhbWVPdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKHRoaXMuZGltZW5zaW9ucyk7XHJcbiAgICAgICAgLy8gdGhpcy52YWN1dW0gPSBuZXcgVmFjdXVtKE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIE1hdGguZmxvb3IoODAwKSksIDE4NCk7XHJcbiAgICAgICAgdGhpcy50cmVhdCA9IG5ldyBUcmVhdCg3NzAsIDE0MCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hbGwgb3RoZXIgdGhpbmdzIHRvIGxvYWQgaGVyZVxyXG4gICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaG92ZXJDYW52YXMoKXtcclxuICAgICAgICB0aGlzLmdhbWVjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICBcclxuICAgICAgICAvLyBkZWJ1Z2dlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gY3JlYXRlT2JzdGFjbGVzKCl7XHJcbiAgICAvLyAgICAgdGhpcy5vYnN0YWNsZXMgPSBbXTtcclxuICAgIC8vICAgICB0aGlzLm1heFZhY3V1bXMgPSAzO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLm9ic3RhY2xlcyA8IHRoaXMubWF4VmFjdXVtcyApe1xyXG4gICAgLy8gICAgICAgICBsZXQgb2JqZWN0ID0gbmV3IFZhY3V1bShNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBNYXRoLmZsb29yKDgwMCkpLCAxODQpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLm9ic3RhY2xlcy5wdXNoKG9iamVjdCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC8vIHJlcXVlc3RBbmltYXRpb24oKXtcclxuICAgIC8vICAgICBkZWJ1Z2dlcjtcclxuICAgIC8vICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCAoKT0+e1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllci5zaG93KHRoaXMuZ2FtZWN0eCk7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNwYWNlUHJlc3NlZCl7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnBsYXllci52ZWxvY2l0eSAtPSA1XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNwYWNlUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICB0aGlzLnBsYXllci51cGRhdGUoKTtcclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAvLyBoYW5kbGVTcGFjZSgpe1xyXG4gICAgLy8gICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCk9PntcclxuICAgIC8vICAgICAgICAgaWYgKGV2ZW50LndoaWNoID09PSBcIjMyXCIpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3BhY2VQcmVzc2VkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH0sIGZhbHNlKTtcclxuICAgIC8vIH1cclxuICBcclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBtb3ZlKCl7XHJcbi8vICAgICB0aGlzLnBsYXllci5tb3ZlKCk7XHJcbi8vIH1cclxuLy8gc3BhY2VIYW5kbGVyKCl7XHJcbi8vICAgICBsZXQgbGFzdFRhcmdldDtcclxuLy8gICAgIHdpbmRvdy5vbmxvYWQgPSAoKSA9PiB7c1xyXG4vLyAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldmVudCk9PntcclxuLy8gICAgICAgICAgICAgbGFzdFRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuLy8gICAgICAgICB9LCBmYWxzZSk7XHJcbi8vICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCk9PiB7XHJcbi8vICAgICAgICAgICAgIGlmIChsYXN0VGFyZ2V0ID09PSB0aGlzLmNhbnZhcykge1xyXG4vLyAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgICAgICAgICAgICAgIHRoaXMubW92ZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJoaGlcIik7XHJcbi8vICAgICAgICAgICAgICAgICBkZWJ1Z2dlcjtcclxuLy8gICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH0sIGZhbHNlKTtcclxuICAgXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBHYW1lOyIsImltcG9ydCBcIi4uL3N0eWxlcy9pbmRleC5zY3NzXCI7XHJcbmNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL2dhbWUnKTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsKCk9PiB7XHJcbiAgICBjb25zdCBjdnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc19jb250YWluZXJcIik7XHJcbiAgICBjb25zdCBnYW1lY3R4ID0gY3ZzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kY3ZzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluX2JhY2tncm91bmRcIik7XHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kY3R4ID0gYmFja2dyb3VuZGN2cy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xyXG4gICAgY29uc3QgZ2FtZSA9IG5ldyBHYW1lKGdhbWVjdHgsIGJhY2tncm91bmRjdHgpO1xyXG4gICAgY29uc29sZS5sb2coXCJuaWhhb1wiKTtcclxuIFxyXG59KVxyXG5cclxuIiwiLy8gY29uc3QgQ09OU1RBTlRTID0ge1xyXG4vLyAgICAgVEVSTUlOQUxfVkVMOiAxMixcclxuLy8gICAgIFNQRUVEOiAxMCxcclxuLy8gICAgIEdSQVZJVFk6IC4zNVxyXG4vLyB9XHJcbmNvbnN0IFZhY3V1bSA9IHJlcXVpcmUoJy4vdmFjdXVtLmpzJyk7XHJcblxyXG5jbGFzcyBQbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZGltZW5zaW9ucyl7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0gZGltZW5zaW9ucztcclxuICAgICAgICB0aGlzLmdyb3VuZCA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSAzMjtcclxuICAgICAgICB0aGlzLnggPSA1MDtcclxuICAgICAgICB0aGlzLnkgPSB0aGlzLmdyb3VuZDsgLy9pdCBpcyBzaXR0aW5nIGF0IHRoZSBib3R0b21cclxuICAgICAgICB0aGlzLnZlbG9jaXR5ID0gMDsgLy92ZWxvY2l0eSBzcGVlZCBhbG9uZyB0aGUgeSBheGlzIHRvIGJlIGFibGUgdG8ganVtcFxyXG4gICAgICAgIHRoaXMuZ3Jhdml0eSA9IC40OyAvL29uIGV2ZXJ5IGZyYW1lIGFkZGluZyAuNCB0byB0aGUgb2JqZWN0cyB5IHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE7XHJcbiAgICAgICAgdGhpcy5qdW1waW5nPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmp1bXBGb3JjZSA9IDEzO1xyXG4gICAgICAgIHRoaXMuanVtcFRpY2tzID0gMDtcclxuICAgICAgICB0aGlzLm1heEhlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5kb2dIZXJvID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgdGhpcy5kb2dIZXJvLnNyYyA9IFwiLi9hc3NldHMvY2FwZWRfaGVyby5wbmdcIjtcclxuICAgICAgICB0aGlzLndhbGtjeWNsZSA9IDA7XHJcbiAgICAgICAgdGhpcy5zcHJpdGVUaWxlcyA9IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc1g6IDYxLFxyXG4gICAgICAgICAgICAgICAgc1k6IDM0LFxyXG4gICAgICAgICAgICAgICAgdzogNjEsXHJcbiAgICAgICAgICAgICAgICBoOiAzMlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzWDogMjQ0LFxyXG4gICAgICAgICAgICAgICAgc1k6IDM1LFxyXG4gICAgICAgICAgICAgICAgdzogNjMsXHJcbiAgICAgICAgICAgICAgICBoOiAzMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyB7ICAgXHJcbiAgICAgICAgICAgIC8vICAgICBzWDogNDI2LFxyXG4gICAgICAgICAgICAvLyAgICAgc1k6IDMxLFxyXG4gICAgICAgICAgICAvLyAgICAgdzogNjcsXHJcbiAgICAgICAgICAgIC8vICAgICBoOiAzOFxyXG4gICAgICAgICAgICAvLyB9LCBcclxuICAgICAgICAgICAgLy8geyAgIFxyXG4gICAgICAgICAgICAvLyAgICAgc1g6IDYxMCxcclxuICAgICAgICAgICAgLy8gICAgIHNZOiAzMCxcclxuICAgICAgICAgICAgLy8gICAgIHc6IDY3LFxyXG4gICAgICAgICAgICAvLyAgICAgaDogNDBcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy8ge1xyXG4gICAgICAgICAgICAvLyAgICAgc1g6IDc5NyxcclxuICAgICAgICAgICAgLy8gICAgIHNZOiAzMSxcclxuICAgICAgICAgICAgLy8gICAgIHc6IDYxLFxyXG4gICAgICAgICAgICAvLyAgICAgaDogMzhcclxuICAgICAgICAgICAgLy8gfSAgICAgICAgICAgICBcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgXHJcbiAgICAvLyBqdW1wKCl7XHJcbiAgICAvLyAgICBpZiAodGhpcy5qdW1waW5nKXtcclxuICAgIC8vICAgICAgICAvL2ZyaWN0aW9uXHJcbiAgICAvLyAgICAgICAgdGhpcy52ZWxvY2l0eSA9IC0yMDtcclxuICAgIC8vICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgLy8gICAgICAgICAvL25lZ2F0aXZlIHZlbG9jaXR5LCAtMSBmb3IgZXZlcnkgNjAgcGl4ZWxzIHVwXHJcbiAgICAvLyAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgdGhpcy5qdW1wQ291bnQgKz0gMTtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMueSA8IDI1MCl7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmdyb3VuZGVkKCk7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmp1bXBDb3VudCA9IDA7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICB9XHJcbiAgICAvLyB9XHJcbiAgICAvLyBtb3ZlVXAoKXsgIFxyXG4gICAgLy8gICAgIHRoaXMueSArPSB0aGlzLnZlbG9jaXR5O1xyXG4gICAgLy8gICAgIHRoaXMudmVsb2NpdHkgKz0gdGhpcy5ncmF2aXR5O1xyXG4gICAgLy8gICAgIGlmIChNYXRoLmFicyh0aGlzLnZlbG9jaXR5KSA+IENPTlNUQU5UUy5URVJNSU5BTF9WRUwpIHtcclxuICAgIC8vICAgICAgICAgLy9pZiB0aGUgdGVybWluYWwgdmVsb2NpdHkgaXMgZXhjZWVkZWQsIHdlIHNldCBpdCB0byB0aGUgdGVybWluYWwgdmVsaWN0eVxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy52ZWxvY2l0eSA+IDApIHtcclxuICAgIC8vICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gQ09OU1RBTlRTLlRFUk1JTkFMX1ZFTDtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICB0aGlzLnZlbG9jaXR5ID0gQ09OU1RBTlRTLlRFUk1JTkFMX1ZFTCAqIC0xO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAvLyB9XHJcbiAvL2VkaXQgbW9yZSBzcHJpdGVzIGFuZCBhZGQgdGhlbVxyXG4gICAgbG9hZFNwcml0ZSgpIHtcclxuICAgICAgICBzd2l0Y2godHJ1ZSl7XHJcbiAgICAgICAgY2FzZSAodGhpcy55IDwgMjY2KTpcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlVGlsZXNbMV07XHJcbiAgICAgICAgY2FzZSAodGhpcy53YWxrY3ljbGUgPCAxMCk6XHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2N5Y2xlICs9IDE7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNwcml0ZVRpbGVzWzBdO1xyXG4gICAgICAgIGNhc2UgKHRoaXMud2Fsa2N5Y2xlIDwgMjApOlxyXG4gICAgICAgICAgICB0aGlzLndhbGtjeWNsZSArPSAxO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zcHJpdGVUaWxlc1sxXTtcclxuICAgICAgICBjYXNlICh0aGlzLndhbGtjeWNsZSA8IDMwKTpcclxuICAgICAgICAgICAgdGhpcy53YWxrY3ljbGUgKz0gMTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlVGlsZXNbMV07XHJcbiAgICAgICAgZGVmYXVsdDogXHJcbiAgICAgICAgICAgIHRoaXMud2Fsa2N5Y2xlID0gMDtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlVGlsZXNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAganVtcCgpIHtcclxuICAgICAgICBpZiAodGhpcy5qdW1waW5nKSB7XHJcbiAgICAgICAgICAgIC8vaXQgaXMgcmVhbGx5IG1ha2luZyBtYW55IG1pY3JvanVtcHMgKGp1bXBUaWNrcykgb24gdGhlIHBhZ2UgYW5kIHN0aW11bGF0aW5nIG9uZSBsYXJnZSBqdW1wXHJcbiAgICAgICAgICAgIC8vanVtcFRpY2tzIGhlbHBzIGdlbmVyYXRlIGNoYW5naW5nIHBvc2l0aW9uZGlzcGxhY2VtZW50cyB1c2luZyBncmF2aXR5XHJcbiAgICAgICAgICBpZiAodGhpcy5qdW1wVGlja3MgPT09IDAgfHwgdGhpcy55IDwgMjY2KXsgXHJcbiAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkRpc3BsYWNlbWVudCA9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuanVtcFRpY2tzO1xyXG4gICAgICAgICAgICAgIHRoaXMueSAtPSB0aGlzLmp1bXBGb3JjZSAtIHRoaXMucG9zaXRpb25EaXNwbGFjZW1lbnQ7XHJcbiAgICAgICAgICAgIC8vanVtcEZvcmNlIGlzIHNwZWVkIGF0IHdoaWNoIG9iamVjdCBqdW1wc1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBUaWNrcyArPSAxO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAvL2Vsc2UgcmVzZXQgZXZlcnl0aGluZyBcclxuICAgICAgICAgICAgdGhpcy55ID0gMjY2O1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBUaWNrcyA9IDA7IFxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIC8vIGp1bXAoY3R4KXtcclxuICAgIC8vICAgICBpZiAoY3R4LmNhbnZhcy5rZXlwcmVzcyA9PT0gXCJTcGFjZVwiKXtcclxuICAgIC8vICAgICAgY29uc29sZS5sb2coXCJoZWxsb1wiKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcbiAgXHJcbi8vICAgIGdyb3VuZGVkKCl7XHJcbi8vICAgICBpZiAodGhpcy55ID4gdGhpcy5kaW1lbnNpb25zLmhlaWdodCAtIHRoaXMuc2l6ZSB8fCB0aGlzLnkgPD0gdGhpcy5tYXhIZWlnaHQpe1xyXG4vLyAgICAgICAgIHRoaXMueSA9IHRoaXMuZGltZW5zaW9ucy5oZWlnaHQgLSB0aGlzLnNpemU7IC8vc28gd2UgY2FuIGp1bXAgYWdhaW5cclxuLy8gICAgICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7Ly9ubyBsb25nZXIgbW92aW5nLCB2ZWxvY2l0eSBpcyAwXHJcbi8vICAgICAgICAgIH1cclxuLy8gXHJcbi8vICAgIGZhbGwoKSB7XHJcbi8vICAgICAgICB0aGlzLnkgKz0gMTAwO1xyXG4vLyAgICB9XHJcblxyXG4gICAgYW5pbWF0ZShjdHgpe1xyXG4gICAgICAgIHRoaXMuanVtcChjdHgpO1xyXG4gICAgICAgIHRoaXMuZHJhdyhjdHgpO1xyXG4gICAgfVxyXG4gICAgZHJhdyhjdHgpe1xyXG4gICAgICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgODAwLCAzMDApXHJcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMubG9hZFNwcml0ZSgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5kb2dIZXJvLCBzcHJpdGUuc1gsIHNwcml0ZS5zWSwgc3ByaXRlLncsIHNwcml0ZS5oLCB0aGlzLngsIHRoaXMueSwgc3ByaXRlLncsIHNwcml0ZS5oKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy54ICsxMCwgdGhpcy55LCA2OC0yMCwgMzIpO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSAxO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICd5ZWxsb3cnO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuIFxyXG4gICAgLy8gY29sbGlkZWRXaXRoKG9ic3RhY2xlKSB7XHJcbiAgICAvLyAgICAgY29uc3QgcGxheWVySGl0Ym94ID0gdGhpcy5oaXRib3goKTtcclxuICAgIC8vICAgICBjb25zdCB2YWN1dW1IaXRib3ggPSB2YWN1dW0uaGl0Ym94KCk7XHJcbiAgICAvLyAgICAgcmV0dXJuICEoXHJcbiAgICAvLyAgICAgICBwbGF5ZXJIaXRib3gubWF4WCA8IHZhY3V1bUhpdGJveC5taW5YIHx8XHJcbiAgICAvLyAgICAgICBwbGF5ZXJIaXRib3gubWluWCA+IHZhY3V1bUhpdGJveC5tYXhYIHx8XHJcbiAgICAvLyAgICAgICBwbGF5ZXJIaXRib3gubWF4WSA8IHZhY3V1bUhpdGJveC5taW5ZIHx8XHJcbiAgICAvLyAgICAgICBwbGF5ZXJIaXRib3gubWluWSA+IHZhY3V1bUhpdGJveC5tYXhZXHJcbiAgICAvLyAgICAgKTtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgIFxyXG4gICAgXHJcbiAgICAvLyBkcmF3KGN0eCl7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgY3R4LmNsZWFyUmVjdCgwLDAsODAwLDMwMCk7XHJcbiAgICAvLyAgICAgZm9yKGxldCBjdXJyZW50RnJhbWUgPSAwOyBjdXJyZW50RnJhbWUgPCB0aGlzLnNwcml0ZVRpbGVzLmxlbmd0aDsgY3VycmVudEZyYW1lKyspe1xyXG4gICAgLy8gICAgICAgICB0aGlzLnNyY1ggPSB0aGlzLnNwcml0ZVRpbGVzW2N1cnJlbnRGcmFtZV0uc1g7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3JjWSA9IHRoaXMuc3ByaXRlVGlsZXNbY3VycmVudEZyYW1lXS5zWTtcclxuICAgIC8vICAgICAgICAgdGhpcy5kb2dXaWR0aCA9IHRoaXMuc3ByaXRlVGlsZXNbY3VycmVudEZyYW1lXS53O1xyXG4gICAgLy8gICAgICAgICB0aGlzLmRvZ0hlaWdodCA9IHRoaXMuc3ByaXRlVGlsZXNbY3VycmVudEZyYW1lXS5oO1xyXG4gICAgLy8gICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuZG9nSGVybywgdGhpcy5zcmNYLCB0aGlzLnNyY1ksIHRoaXMuZG9nV2lkdGgsIHRoaXMuZG9nSGVpZ2h0LCB0aGlzLngsIHRoaXMueSwgdGhpcy5zaXplLCB0aGlzLnNpemUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gY3VycmVudEZyYW1lID0gKysgY3VycmVudEZyYW1lICUgY29sczsgLy9nZXRzIHVwZGF0ZWQgaW5kZXggb2YgZnJhbWVcclxuICAgIC8vIGRlYnVnZ2VyO1xyXG4gICAgLy8gY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgLy8gY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMuc2l6ZSwgdGhpcy5zaXplKTtcclxuICAgIC8vIC8vIGN0eC5kcmF3SW1hZ2UodGhpcy5pbWcsIHRoaXMueCwgdGhpcy55KTtcclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcInllbGxvd1wiO1xyXG4gICAgLy8gY3R4LmZpbGwoKTtcclxuICAgIC8vIGN0eC5zdHJva2VTdHlsZSA9ICd5ZWxsb3cnO1xyXG4gICAgLy8gY3R4LnN0cm9rZSgpO1xyXG4gICAgYm91bmRzKCkge1xyXG4gICAgICAgIHJldHVybntcclxuICAgICAgICAgICAgbGVmdDogdGhpcy54LFxyXG4gICAgICAgICAgICByaWdodDogdGhpcy5wbGF5ZXIueCArIHRoaXMucGxheWVyLnNwcml0ZVRpbGVzWzFdLncsXHJcbiAgICAgICAgICAgIHRvcDogdGhpcy55LFxyXG4gICAgICAgICAgICBib3R0b206IHRoaXMucGxheWVyLnkgKyB0aGlzLnBsYXllci5zcHJpdGVUaWxlc1sxXS5oXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIG91dE9mQm91bmRzKCl7XHJcbiAgICAgICAgY29uc3QgYWJvdmVUaGVUb3AgPSB0aGlzLnkgPCAwO1xyXG4gICAgICAgIGNvbnN0IGJlbG93VGhlQm90dG9tID0gdGhpcy5ncm91bmQgPiB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICAgIHJldHVybiBhYm92ZVRoZVRvcCB8fCBiZWxvd1RoZUJvdHRvbTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuLy8gdXBkYXRlKCl7XHJcbi8vICAgICAvL2FyZSB3ZSB1bmRlcmdyb3VuZD8gd2lsbCBhZGRpbmcgMzAgbWFrZSBpcyBncmVhdGVyIHRoYW4gdGhlIHRvdGFsIGhlaWdodFxyXG4vLyAgICAgLy8gZGVidWdnZXI7XHJcbi8vICAgICBpZiAodGhpcy55ICsgdGhpcy52ZWxvY2l0eSArIHRoaXMuc2l6ZSAgKyAzMCA+IDMwMCkgeyBcclxuLy8gICAgICAgICAvL2lmIHNvIHRha2UgdXMgdG8gZ3JvdW5kIGxldmVsIGFuZCByZXNldCB2ZWxvY2l0eSB0byAwXHJcbi8vICAgICAgICAgdGhpcy52ZWxvY2l0eSA9IDA7XHJcbi8vICAgICAgICAgdGhpcy55ID0gMzAwIC0gdGhpcy5zaXplIC0gMzA7XHJcbi8vICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgIC8vIGVsc2UsIG1vdmVcclxuLy8gICAgICAgICBkZWJ1Z2dlcjtcclxuLy8gICAgICAgICB0aGlzLnZlbG9jaXR5ICs9IHRoaXMuZ3Jhdml0eTtcclxuLy8gICAgICAgICB0aGlzLnkgKz0gdGhpcy52ZWxvY2l0eTtcclxuXHJcbi8vICAgICB9XHJcbi8vIH1cclxuICAgIFxyXG4gICAgXHJcbiBcclxuXHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IFBsYXllcjtcclxuXHJcbiIsImNsYXNzIFRyZWF0IHtcclxuICAgIGNvbnN0cnVjdG9yKHBvc2l0aW9uWCwgcG9zaXRpb25ZKXtcclxuICAgICAgICAvLyBzdXBlcihwb3NpdGlvblgsIHBvc2l0aW9uWSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5zcmMgPSBcIi4vYXNzZXRzL2JvbmVfdHJlYXQuZ2lmXCI7XHJcbiAgICAgICAgdGhpcy5ib25lV2lkdGggPSAzMDsgXHJcbiAgICAgICAgdGhpcy5zcGF3blggPSBwb3NpdGlvblg7XHJcbiAgICAgICAgdGhpcy54ID0gcG9zaXRpb25YO1xyXG4gICAgICAgIHRoaXMuYm9uZUhlaWdodCA9IDE0OyAgICBcclxuICAgICAgICB0aGlzLnNwYXduWSA9IHBvc2l0aW9uWTtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZHJhdyhjdHgpe1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5zcHJpdGUsIHRoaXMuc3Bhd25YLCB0aGlzLnNwYXduWSwgdGhpcy5ib25lV2lkdGgsIHRoaXMuYm9uZUhlaWdodCk7XHJcbiAgICAgICAgaWYodGhpcy5zcGF3blggPD0gKGN0eC5jYW52YXMud2lkdGgqLTEpKXsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25YID0gY3R4LmNhbnZhcy53aWR0aDsgXHJcbiAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNwYXduWCAtPSB0aGlzLnNwZWVkO1xyXG4gICAgfVxyXG59XHJcbm1vZHVsZS5leHBvcnRzID0gVHJlYXQ7IiwiY2xhc3MgVmFjdXVte1xyXG4gICAgY29uc3RydWN0b3IocG9zaXRpb25YLCBwb3NpdGlvblkpe1xyXG4gICAgICAgIC8vIHN1cGVyKHBvc2l0aW9uWCwgcG9zaXRpb25ZKTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnNyYyA9IFwiLi9hc3NldHMvZXZpbF92YWN1dW0ucG5nXCI7XHJcbiAgICAgICAgdGhpcy52YWN1dW1XaWR0aCA9IDY1OyBcclxuICAgICAgICB0aGlzLnNwYXduWCA9IHBvc2l0aW9uWDtcclxuICAgICAgICB0aGlzLnggPSBwb3NpdGlvblg7XHJcbiAgICAgICAgdGhpcy52YWN1dW1IZWlnaHQgPSAxMTY7ICAgXHJcbiAgICAgICAgdGhpcy5zcGF3blkgPSBwb3NpdGlvblk7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDIuODtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIGRyYXcoY3R4KXtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuc3ByaXRlLCB0aGlzLnNwYXduWCwgdGhpcy5zcGF3blksIHRoaXMudmFjdXVtV2lkdGgsIHRoaXMudmFjdXVtSGVpZ2h0KTtcclxuICAgICAgICBpZih0aGlzLnNwYXduWCA8PSAoY3R4LmNhbnZhcy53aWR0aCotMSkpeyBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5zcGF3blggPSBjdHguY2FudmFzLndpZHRoO1xyXG4gICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zcGF3blggLT0gdGhpcy5zcGVlZDtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy5zcGF3blggKyAyMCwgdGhpcy5zcGF3blkgKzIwICwgNDAsIDEyMCk7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJ3llbGxvdyc7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcbn1cclxubW9kdWxlLmV4cG9ydHM9IFZhY3V1bTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9