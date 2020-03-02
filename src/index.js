import "../styles/index.scss";
const Game = require('./game');
document.addEventListener("DOMContentLoaded",()=> {
    const cvs = document.getElementById("canvas_container");
    const ctx = cvs.getContext("2d");
    console.log("hello");
    const game = new Game(ctx);
    console.log("nihao");
 
})

