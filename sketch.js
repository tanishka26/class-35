var ball;
var database;
var gameState=0;
var playerCount,form,player,game;
function setup(){
    createCanvas(500,500);
   
     database = firebase.database();
    game=new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
   
}


