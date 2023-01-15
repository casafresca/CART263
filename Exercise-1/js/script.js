/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
var playerState;
var positionArray = {

    "00":[[0, 165], [0, 165]],
    "10":[[0, 165], [165, 330]],
    "20":[[0, 165], [330, 495]],

    "01":[[165, 330], [0, 165]],
    "11":[[165, 330], [165, 330]],
    "21":[[165, 330], [330, 495]],

    "02":[[330, 495], [0, 165]],
    "12":[[330, 495], [165, 330]],
    "22":[[330, 495], [330, 500]],
}

var board = [[],[],[]];

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
}


/**
Description of draw()
*/
function draw() {

    var w = width/3;
    var h = height/3;

    //game board
    line(w, 0, w, height);
    line(w * 2, 0, w * 2, height);
    line(0, h, width, h);
    line(0, h * 2, width, h * 2);

    
    //console.log(mouseX, mouseY);

    
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

            if (playerState == 1) {
                drawX(midX, midY);
                playerState = 2;
            }
            else if (playerState == 2) {
                drawO(midX, midY);
                playerState = 1;
            }

        }
    }
  
}