/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";


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