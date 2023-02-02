/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
var ball = [];

var fps;

/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
    createCanvas(600, 600, WEBGL);

    // for( var i = 0; i < 50; i++){
    //     ball[i] = new Particle(5, 10);
    // }
   

   
}


/**
Description of draw()
*/
function draw() {
    //background(200, 50, 100);
    // for(var i = 0; i < ball.length; i++){
    //     ball[i].move();
    //     ball[i].display();
    // }

    clear();
    //orbitControl(4,4, 4);
  
    //drawSphere();
    //rotateY(millis() / 10000);
    rotateY(millis() / 1000);
    sphere(150);

   
    
}

function drawSphere(){
    
    rotateY(millis() / 10000);
    for(var i = 0; i < 180; i += 5){
        for(var j = 0; j < 360; j += 5){
            beginShape(POINTS);
            vertex(
                200 * sin(i) * cos(j),
                200 * cos(i),
                200 * sin(i) * sin(j)
            );
            endShape();
            
        }
    }
  
}

class Particle{
    constructor(speed, diameter){
        this.x = width/2;
        this.y = height/2;
        this.speed = speed;
        this.diameter = diameter; 
    }
    display(){
        noStroke();
        fill(this.x, this.y, this.diameter);
        ellipse(this.x, this.y, this.diameter);
    }
    move(){
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
}