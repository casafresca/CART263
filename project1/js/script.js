/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";
var img;
var vid;
var song;
var fft;
var amp;
var particles = [];

/**
Description of preload
*/
function preload() {
    img = loadImage('assets/images/neon_disco_lights.jpg');
    vid = createVideo('assets/images/abstract_slowmotion.mp4');
    song = loadSound('assets/sounds/MyMix.mp3');    
}

/**
Description of setup
*/
function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
  
    angleMode(DEGREES);
    imageMode(CENTER);
    fft = new p5.FFT();
    vid.hide();  
}

function mouseClicked() {
    //plays song and background
    if(!song.isPlaying()){
        song.play();
        vid.loop();
    }
    else{
        song.stop();
        vid.stop();
        
    }
   
}

/**
Description of draw()
*/
function draw() {

    background(0);
    //analyse the music being played
    fft.analyze();
    amp = fft.getEnergy(20, 200);

    //adds a shaking affect to background thats in time width the music 
    push();
    if(amp > 230){
        rotate(random(-0.5, 0.5));
    }
    image(vid, 0, 0, width, height);
    pop();
    
    //draws the disco ball
    push();
    drawSphere(); 
    pop();

    // draws the synth wave 
    push();
    displayWave();
    pop();

    //displays the particles
    push();
    displayParticles();   
    pop();     
}

function drawSphere(){
    if(song.isPlaying()){
        rotateY(millis() / 10); // what makes the sphere spin
    }
    texture(img); // the image that makes the sphere look nice
    sphere(150); 
}

function displayWave(){
    //color variables
    var r = random(0, 255);
    var g = random(0, 255);
    var b = random(0, 255); 

    // takes the analysed song and turns it into a wave
    beginShape();

    if(amp == 0){
        stroke(255);
    }
    else{
        stroke(r, g, b);
    }
   
    strokeWeight(3);
    noFill();
    
    var wave = fft.waveform();  

    //first half of the circle 
    for (var i = 0; i <= 180; i += 0.5) {
        var index = floor(map(i, 0, 180, 0, wave.length - 1));
        var r = map(wave[index], -1, 1, 150, 350);

        var x = r * sin(i);
        var y = r * cos(i);
        vertex(x, y);

    }
    endShape();
    
    // second half of the circle 
    beginShape();
    for (var i = 0; i <= 180; i += 0.5) {
        var index = floor(map(i, 0, 180, 0, wave.length - 1));
        var r = map(wave[index], -1, 1, 150, 350);

        var x = r * -sin(i);
        var y = r * cos(i);
        vertex(x, y);

    }
    endShape(); 
}

function displayParticles(){
    var p = new Particle();
    particles.push(p);

    for (var i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].edges()) {
            if(song.isPlaying()){
                particles[i].update();
                particles[i].show();
            }
        }
        else {
            particles.splice(i, 1);
        }

    }
}

class Particle{
    constructor(){
        this.pos = p5.Vector.random2D().mult(275); //position of particle
        this.vel = createVector(0,0); //velocity 
        this.acc = this.pos.copy().mult(random(0.001, 0.00001)); // acceleration
       
        this.w = random(3, 5); //width

        //color values
        this.r = random(200, 255);
        this.g = random(200, 255);
        this.b = random(200, 255);
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel); 
       
    }

    edges(){
        //check if particles reach the edge of the screen so later can remove them
        if(this.pos.x < -width / 2 || this.pos.x > width / 2 ||
        this.pos.y < -height / 2 || this.pos.y > height / 2) {
            return true;
        }
        else{
            return false;
        }
    }

    show(){
        noStroke();
        fill(this.r, this.g, this.b);
        ellipse(this.pos.x, this.pos.y, this.w);
    } 
}








