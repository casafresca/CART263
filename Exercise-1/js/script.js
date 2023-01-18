/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
var playerState;
var gameIsPlaying;
var won;
var restart;

var positionArray = {

    "00":[[0, 165], [0, 165]],
    "10":[[0, 165], [165, 330]],
    "20":[[0, 165], [330, 495]],

    "01":[[165, 330], [0, 165]],
    "11":[[165, 330], [165, 330]],
    "21":[[165, 330], [330, 495]],

    "02":[[330, 495], [0, 165]],
    "12":[[330, 495], [165, 330]],
    "22":[[330, 495], [330, 500]]
};

var WinningOutcomes = {

    //horizontal wins
    "0":[[82.5, 82.5], [247.5, 247.5], [412.5, 82.5]],
    "1":[[82.5, 247.5], [247.5,247.5], [412.5, 247.5]],
    "2":[[82.5, 412.5], [247.5, 412.5], [412.5, 415]],

    "3":[[412.5, 82.5], [247.5, 247.5], [82.5, 82.5]],
    "4":[[412.5, 247.5], [247.5, 247.5], [82.5, 247.5]],
    "5":[[412.5, 415], [247.5, 412.5], [82.5, 412.5]],

    //Vertical wins
    "6":[[82.5, 82.5], [82.5, 247.5], [82.5, 412.5]],
    "7": [[247.5, 82.5], [247.5, 247.5], [247.5, 412.5]],
    "8":[[412.5, 82.5], [412.5, 247.5], [412.5, 415]],

    "9":[[82.5, 412.5], [82.5, 247.5], [82.5, 82.5]],
    "10":[[247.5, 412.5], [247.5, 247.5], [247.5, 82.5]],
    "11":[[412.5, 415], [412.5, 247.5], [412.5, 82.5]],

    //Diagonal wins
    "12":[[82.5, 82.5], [247.5, 247.5], [412.5, 415]],
    "13":[[82.5, 412.5], [247.5, 247.5], [412.5, 82.5]],

    "14":[[412.5, 415], [247.5, 247.5], [82.5, 82.5]],
    "15":[[412.5, 82.5], [247.5, 247.5], [82.5, 412.5]]
};


var board = [[], [], []];
var onBoard = [];


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(500,500);
    background(255);
    playerState = 1;
    gameIsPlaying = true;
    restart = false;
}


/**
Description of draw()
*/
function draw() {

    drawGrid();
    afterGameIsDone();
    
    //console.log(mouseX, mouseY);
    
}

function drawGrid(){

    var w = width / 3;
    var h = height / 3;

    //game board
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);
}

function drawX(x, y){

    fill(0);
    translate(x, y);
    rotate(PI / 4);
    rect(-30, -4, 60, 8);
    rect(-4, -30, 8, 60);
}

function drawO(x,y){
    fill(0);
    circle(x, y, 60);
    fill(255);
    circle(x, y, 45);
}

function mouseClicked() {
    
    for (let coordinates in positionArray){
        let x1 = positionArray[coordinates][0][0];
        let x2 = positionArray[coordinates][0][1];
        let y1 = positionArray[coordinates][1][0];
        let y2 = positionArray[coordinates][1][1];

        if(x1 <= mouseX && mouseX <= x2 && y1 <= mouseY && mouseY <= y2){
            let midX = (x1 + x2) / 2;
            let midY = (y1 + y2) / 2;

            if(gameIsPlaying == true){
                if (playerState == 1) {
                    drawX(midX, midY);
                    onBoard.push("X");
                    board[coordinates[0]][coordinates[1]] = playerState;
                    playerState = 2;
                }
                else if (playerState == 2) {
                    drawO(midX, midY);
                    onBoard.push("O");
                    board[coordinates[0]][coordinates[1]] = playerState;
                    playerState = 1;
                }
            }
           
            delete positionArray[coordinates[0] + coordinates[1]];

            if(onBoard.length >= 5){
                checkForWinner();     
            }

        }
    }

    if(restart == true){
        location.reload();
    }
  
}

function checkForWinner(){

    var sumH1;
    var sumH2;
    var sumH3;

    var sumV1;
    var sumV2;
    var sumV3;

    var sumD1;
    var sumD2;

    
    for(var i = 0; i < 3; i++){
        //Horizontal check
        sumH1 = board[0][0] + board[0][1] + board[0][2];
        sumH2 = board[1][0] + board[1][1] + board[1][2];
        sumH3 = board[2][0] + board[2][1] + board[2][2];

        //Vertical check
        sumV1 = board[0][0] + board[1][0] + board[2][0];
        sumV2 = board[0][1] + board[1][1] + board[2][1];
        sumV3 = board[0][2] + board[1][2] + board[2][2];

        //Diagonal check 
        sumD1 = board[0][0] + board[1][1] + board[2][2];
        sumD2 = board[0][2] + board[1][1] + board[2][0];
    }


    if(sumH1 == 3 || sumH2 == 3 || sumH3 == 3 || sumV1 == 3 || sumV2 == 3 || sumV3 == 3 || sumD1 == 3 || sumD2 == 3){
        console.log("X has won");
        won = "X";
        gameIsPlaying = false;
    }
    else if (sumH1 == 6 || sumH2 == 6 || sumH3 == 6 || sumV1 == 6 || sumV2 == 6 || sumV3 == 6 || sumD1 == 6 || sumD2 == 6){
        console.log("O has won");
        won = "O";
        gameIsPlaying = false;
    }
    else{
        if(onBoard.length == 9){
            console.log("It's a draw");
            won = "Draw";
            gameIsPlaying = false;
        }
    }
}

function gameEndMessage(str){
    background(255);
    strokeWeight(2);
    stroke(0);
    fill(0);
    textSize(50);
    textAlign(CENTER);
    text(str, 300, 250);
    textSize(20);
    noStroke();
    text("Click to restart", 300, 350);
}

function afterGameIsDone(){
    if(gameIsPlaying == false && won == "X"){
       gameEndMessage("X WINS!");
       restart = true;
    }
    else if (gameIsPlaying == false && won == "O"){
        gameEndMessage("O WINS!");
        restart = true;
    }
    else if (gameIsPlaying == false && won == "Draw"){
        gameEndMessage("IT'S A DRAW!");
        restart = true;
    }
}


