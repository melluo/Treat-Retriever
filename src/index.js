import "../styles/index.scss";
const Game = require('./game');

document.addEventListener("DOMContentLoaded",()=> {
    const cvs = document.getElementById("canvas_container");
    const gamectx = cvs.getContext("2d");

    const backgroundcvs = document.getElementById("main_background");
    const backgroundctx = backgroundcvs.getContext("2d");
    console.log("hello");
    const game = new Game(gamectx, backgroundctx);
    console.log("nihao");
 
})

