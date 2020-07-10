var gamestate = 0, playercount = 0;
var form, player, game;
var car1, car2;
var cars = [];
var database;
var allplayers;
var distance = 0;
function setup(){
    
    var canvas = createCanvas(displayWidth, displayHeight);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.start();


}
function draw(){

    if (playercount === 2){
        game.updategameState(1);

    }
    if (gamestate === 1 ){
        clear();
        game.play();
    }
    drawSprites();

}



