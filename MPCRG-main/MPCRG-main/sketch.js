var canvas;
var database;
var form;
var game1;
var distance = 0
var player;
var gamestate = 0;
var playerCount ;
var AllPlayers;

function setup(){
    database=firebase.database();
    canvas = createCanvas(400, 400);
    game1 = new Game();
    game1.getState();
    game1.start();
}

function draw(){
    if(playerCount == 4){
        game1.update(1);
    }
    if(gamestate == 1){
        clear();
        game1.play();
    }
}