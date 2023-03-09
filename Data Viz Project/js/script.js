
var yugioh_card;
var darkMagician;
var darkMagicianGirl;
var blueEyes;
var flameWingMan;
var starDust;
var utopia;
var oddEyes;
var oddEyesArc;
var oddEyesGraph;
var oddEyesRebellion;
var oddEyesVenom;
var oddEyesWing;
var decodeTalker;
var accessCodeTalker;
var topologicZeroboros;
var potOfGreed
var mirrorForce;

var backgroundImg;
var linkCardTexture;

var matrixSmallCapsBoldFont;
var matrixSmallCapsRomanFont;
var matrixBookFont;
var itcStoneSerifBoldFont;
var itcStoneSerifItalicFont;
var goodTimingFont;

var dmImage;
var dmgImage;
var beImage;
var fwImage;
var sdImage;
var utImage;
var oeImage;
var oeaImage;
var oegImage;
var oerImage;
var oevImage;
var oewImage;
var dcImage;
var actImage;
var tzImage;
var pogImage;
var mfImage;

var darkAttImage;
var lightAttImage;
var windAttImage;
var spellAttImage;
var trapAttImage;

var song;

var counter = 0;

String.prototype.insert = function (index, string) {
  if (index > 0) {
    return this.substring(0, index) + string + this.substring(index, this.length);
  }

  return string + this;
};

function preload() {

  //Connect to the Yugioh API
  yugioh_card = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php');
  darkMagician = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark%20Magician');
  darkMagicianGirl = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=dark%20magician%20girl');
  blueEyes = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Blue-Eyes%20Chaos%20MAX%20Dragon');
  flameWingMan = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Elemental%20HERO%20Flame%20Wingman');
  starDust = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Stardust%20Dragon');
  utopia = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Number%2039:%20Utopia');
  oddEyes = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Odd-eyes%20Pendulum%20Dragon');
  oddEyesArc = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Odd-Eyes%20Arc%20Pendulum%20Dragon');
  oddEyesGraph = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=odd-eyes%20pendulumgraph%20dragon');
  oddEyesRebellion = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=odd-eyes%20rebellion%20dragon');
  oddEyesVenom = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=odd-eyes%20venom%20dragon');
  oddEyesWing = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=odd-eyes%20wing%20dragon');
  decodeTalker = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=decode%20talker');
  accessCodeTalker = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Accesscode%20Talker');
  potOfGreed = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Pot%20of%20Greed');
  mirrorForce = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Mirror%20Force');
  topologicZeroboros = loadJSON('https://db.ygoprodeck.com/api/v7/cardinfo.php?name=topologic%20zeroboros');

  //Load Images
  backgroundImg = loadImage('assets/images/yugioh_background.png');
  darkAttImage = loadImage('assets/images/attribute_symbols/dark_attribute.png');
  lightAttImage = loadImage('assets/images/attribute_symbols/light_attribute.png');
  windAttImage = loadImage('assets/images/attribute_symbols/wind_attribute.png');
  spellAttImage = loadImage('assets/images/attribute_symbols/spell_attribute.png');
  trapAttImage = loadImage('assets/images/attribute_symbols/trap_attribute.png');
  dmImage = loadImage('assets/images/monster_artwork/Dark_Magician.png');
  dmgImage = loadImage('assets/images/monster_artwork/Dark_Magician_Girl.png');
  beImage = loadImage('assets/images/monster_artwork/Blue-Eyes_Max.png');
  fwImage = loadImage('assets/images/monster_artwork/Flame_Wingman.png');
  sdImage = loadImage('assets/images/monster_artwork/Stardust.png'); 
  utImage = loadImage('assets/images/monster_artwork/Utopia.png');
  oeImage = loadImage('assets/images/monster_artwork/Odd-Eyes.png');
  oeaImage = loadImage('assets/images/monster_artwork/Odd-Eyes_Arc.png');
  oegImage = loadImage('assets/images/monster_artwork/Odd-Eyes_Pendulumgraph.png');
  oerImage = loadImage('assets/images/monster_artwork/Odd-Eyes_Rebellion.png');
  oevImage = loadImage('assets/images/monster_artwork/Odd-Eyes_Venom.png');
  oewImage = loadImage('assets/images/monster_artwork/Odd-Eyes_Wing.png');
  dcImage = loadImage('assets/images/monster_artwork/Decode_Talker.png');
  actImage = loadImage('assets/images/monster_artwork/Access_Code_Talker.png');
  pogImage = loadImage('assets/images/monster_artwork/Pot_of_Greed.png');
  mfImage = loadImage('assets/images/monster_artwork/Mirror_Force.png');
  tzImage = loadImage('assets/images/monster_artwork/topologic_zeroboros.png');
  linkCardTexture = loadImage('assets/images/card_texture.png');
  
  //Load Fonts
  matrixSmallCapsBoldFont = loadFont('assets/fonts/MatrixSmallCaps_Bold.ttf');
  matrixSmallCapsRomanFont = loadFont('assets/fonts/MatrixSmallCaps_Roman.ttf');
  matrixBookFont = loadFont('assets/fonts/Matrix-Book_Book.ttf');
  itcStoneSerifBoldFont = loadFont('assets/fonts/ITC_Stone_Serif_Bold.otf');
  itcStoneSerifItalicFont = loadFont('assets/fonts/ITC_Stone_Serif_Italic.otf');
  goodTimingFont = loadFont('assets/fonts/good_timing_bd.otf');

  //Load Song
  song = createAudio('assets/sounds/Yu-Gi-Oh_Music.mp3');
  
}

function setup() {

  createCanvas(2000, 800);
  background(backgroundImg);
  
  print(yugioh_card);
  print(darkMagician);
 
  rectMode(CENTER);
  imageMode(CENTER);

  //play song in the background
  song.volume(0.2);
  song.loop();
}

function draw(){
  //draws the cards
  switch (counter) {
    case 0:
      drawCard(darkMagician);
      break;
    case 1:
      drawCard(darkMagicianGirl);
      break;
    case 2:
      drawCard(blueEyes);
      break;
    case 3:
      drawCard(flameWingMan);
      break;
    case 4:
      drawCard(starDust);
      break;
    case 5:
      drawCard(utopia);
      break;
    case 6:
      drawCard(oddEyes);
      break;
    case 7:
      drawCard(oddEyesArc);
      break;
    case 8:
      drawCard(oddEyesGraph);
      break;
    case 9:
      drawCard(oddEyesVenom);
      break;
    case 10:
      drawCard(oddEyesWing);
      break;
    case 11:
      drawCard(oddEyesRebellion);
      break;
    case 12:
      drawCard(decodeTalker);
      break;
    case 13:
      drawCard(accessCodeTalker);
      break;
    case 14:
      drawCard(topologicZeroboros);
      break;
    case 15:
      drawCard(potOfGreed);
      break;
    case 16:
      drawCard(mirrorForce);
  }
}

function mousePressed() {
  counter++;
  if(counter > 16){
    counter = 0;
  }
}

function star(x, y, nPoints, outerRadius, innerRadius, rotation){
  var theta = TAU / nPoints;
  beginShape();
  for(var i = 0; i < nPoints; i++) {
    vertex(x + cos(i * theta + rotation) * outerRadius, y + sin(i * theta + rotation) * outerRadius);
    vertex(x + cos((i + 0.5) * theta + rotation) * innerRadius, y + sin((i + 0.5) * theta + rotation) * innerRadius);
  }
  endShape(CLOSE);
}

function drawCard(card){
  //card border
  push();
  fill(0);
  stroke(255);
  rect(1005, 355, 490, 660);
  pop();

  //card inside color
  push();
  displayColor(card.data[0].type);
  if(card.data[0].type == "Link Monster"){
    image(linkCardTexture, 1005, 355, 470, 630);
  }
  else{
    rect(1005, 355, 470, 630);
  }
 
  if (checkIfPendulum(card.data[0].frameType)){
    fill(23, 127, 120);
    noStroke();
    rect(1005, 500, 469, 350);
  }
  pop();

  //card title box
  push();
  displayColor(card.data[0].type);
  stroke(0);
  if (card.data[0].type == "Link Monster") {
    image(linkCardTexture, 1005, 95, 430, 65);
  }
  else{
    rect(1005, 95, 430, 65);
  }
  pop();

  displayLevel(card, card.data[0].level);

  //artwork border
  push();
  fill(255);
  stroke(0);
  if (card.data[0].type == "Link Monster"){
    rect(1001, 320, 305, 305);
  }
  else if (checkIfPendulum(card.data[0].frameType)) {
    rect(1004, 290, 450, 205);
  }
  else{
    rect(1001, 340, 305, 305);
  }
  pop();

  //description box
  push();
  if(checkIfPendulum(card.data[0].frameType)){
    fill(191, 223, 193);
  }
  else{
    displayDescColor(card.data[0].type);
  }
  if (checkIfPendulum(card.data[0].frameType)){
    stroke(111, 4, 29);
    rect(1004, 585, 450, 150);
  }
  else{
    stroke(111, 4, 29);
    rect(1003, 585, 410, 150);
  }
  
  if (checkIfPendulum(card.data[0].frameType)){
    rect(1004, 450, 450, 110);
    line(830, 395, 830, 505);
    line(1176, 395, 1176, 505);
  }
  pop();

  //Pendulum scale numbers
  if (checkIfPendulum(card.data[0].frameType)){
    push();
    textSize(25);
    textFont(matrixSmallCapsBoldFont);
    if (card.data[0].scale > 9){
      text(card.data[0].scale, 796, 459);
      text(card.data[0].scale, 1190, 459);
    }
    else{
      text(card.data[0].scale, 799, 459);
      text(card.data[0].scale, 1195, 459);
    }
    pop();
  }

  //Pendulum scales
  if (checkIfPendulum(card.data[0].frameType)) {
    push();
    fill(0, 75, 162);
    quad(784, 420, 809, 410, 825, 420, 809, 430);
    quad(786, 420, 809, 412, 823, 420, 809, 428);
    fill(215, 15, 34);
    quad(1182, 420, 1198, 410, 1223, 420, 1198, 430);
    quad(1184, 420, 1198, 412, 1221, 420, 1198, 428);
    pop();
  }
 

  //line divider 
  push();
  if (card.data[0].type == "Spell Card" || card.data[0].type == "Trap Card"){
    noStroke();
  }
  else{
    stroke(0);
  }
  if (checkIfPendulum(card.data[0].frameType)){
    line(779, 635, 1228, 635);
  }
  else{
    line(797, 635, 1207, 635);
  }
  //line(797, 635, 1207, 635);
  pop();

  //card title
  push();
  if (card.data[0].type == "XYZ Monster" ){
    fill(212, 175, 55);
  }
  else if (card.data[0].type == "Link Monster"){
    fill(255);
  }
  else{
    fill(0);
  }

  if (card.data[0].name == "Blue-Eyes Chaos MAX Dragon" || card.data[0].name == "Odd-Eyes Pendulum Dragon" || card.data[0].name == "Odd-Eyes Rebellion Dragon"){
    textSize(30);
  }
  else if (card.data[0].name == "Elemental HERO Flame Wingman" || card.data[0].name == "Odd-Eyes Pendulumgraph Dragon"){
    textSize(25);
  }
  else if (card.data[0].name == "Topologic Zeroboros"){
    textSize(40);
  }
  else if (card.data[0].name == "Odd-Eyes Arc Pendulum Dragon") {
    textSize(27);
  }
  else if (card.data[0].name == "Odd-Eyes Venom Dragon" || card.data[0].name == "Odd-Eyes Wing Dragon") {
    textSize(35);
  }
  else{
    textSize(45);
  }
  textFont(matrixSmallCapsBoldFont);
  text(card.data[0].name, 810, 110);
  pop();

  //display attribute symbol
  if (card.data[0].type == "Spell Card" || card.data[0].type == "Trap Card"){
    displayAttribute(card.data[0].type);
  }
  else{
    displayAttribute(card.data[0].attribute);
  }
  
  displayArtwork(card.data[0].name);

  //display card type and frame type
  push();
  textFont(itcStoneSerifBoldFont);
  if (card.data[0].type == "Spell Card"){
    textSize(20);
    text("[" + "Spell Card" +"]", 1030, 170);
  }
  else if (card.data[0].type == "Trap Card"){
    textSize(20);
    text("[" + "Trap Card" + "]", 1030, 170);
  }
  else if (card.data[0].type == "Normal Monster" || card.data[0].type == "Effect Monster"){
    textSize(15);
    text("[" + card.data[0].race + "/" + card.data[0].frameType + "]", 806, 525);
  }
  else if(checkIfPendulum(card.data[0].frameType) == true){
    if (card.data[0].frameType == "normal_pendulum"){
      textSize(15);
      text("[" + card.data[0].race + "/" + "Pendulum" + "]", 785, 525);
    }
    else if (card.data[0].frameType == "effect_pendulum"){
      textSize(15);
      text("[" + card.data[0].race + "/" + "Pendulum" + "/" +"Effect" +"]", 785, 525);
    }
    else if (card.data[0].frameType == "ritual_pendulum"){
      textSize(15);
      text("[" + card.data[0].race + "/" + "Ritual" + "/" + "Pendulum" + "/" + "Effect" + "]", 785, 525);
    }
    else if (card.data[0].frameType == "fusion_pendulum"){
      textSize(15);
      text("[" + card.data[0].race + "/" + "Fusion" + "/" + "Pendulum" + "/" + "Effect" + "]", 785, 525);
    }
    else if (card.data[0].frameType == "synchro_pendulum"){
      textSize(15);
      text("[" + card.data[0].race + "/" + "Synchro" + "/" + "Pendulum" + "/" + "Effect" + "]", 785, 525);
    }
    else if (card.data[0].frameType == "xyz_pendulum"){
      textSize(15);
      text("[" + card.data[0].race + "/" + "XYZ" + "/" + "Pendulum" + "/" + "Effect" + "]", 785, 525);
    }
  }
  else{
    textSize(15);
    text("[" + card.data[0].race + "/" + card.data[0].frameType + "/" + "Effect" + "]", 806, 525);
  }
  pop();

  //card description
  push();
  if (card.data[0].name == "Accesscode Talker" 
    || card.data[0].name == "Topologic Zeroboros" 
    || card.data[0].name == "Odd-Eyes Pendulumgraph Dragon" 
    || card.data[0].name == "Odd-Eyes Venom Dragon" 
    || card.data[0].name == "Odd-Eyes Wing Dragon" 
    || card.data[0].name == "Odd-Eyes Rebellion Dragon"){
    textSize(10);
  }
  else{
    textSize(15);
  }

  if (card.data[0].type == "Normal Monster" || card.data[0].type == "Pendulum Normal Monster"){
    textFont(itcStoneSerifItalicFont);
  }
  else{
    textFont(matrixBookFont);
  }
  displayDescription(card, card.data[0].name);
  pop();


  // card attack and defense points
  push();
  textSize(15);
  textFont(itcStoneSerifBoldFont);
  if(card.data[0].def == 0){
    text("ATK" + "/" + card.data[0].atk + " " + "DEF" + "/" + card.data[0].def, 1060, 653);
  }
  else if (card.data[0].type == "Link Monster"){
    text("ATK" + "/" + card.data[0].atk, 1040, 653);
    push();
    textSize(20);
    textFont(goodTimingFont);
    text("LINK" + "-" + card.data[0].linkval, 1130, 653);
    pop();
  }
  else if (card.data[0].type == "Normal Monster" 
          || card.data[0].type == "Effect Monster"
          || card.data[0].type == "Ritual Effect Monster" 
          || card.data[0].type == "Fusion Monster" 
          || card.data[0].type == "Synchro Monster" 
          || card.data[0].type == "XYZ Monster")
  {
    text("ATK" + "/" + card.data[0].atk + " " + "DEF" + "/" + card.data[0].def, 1035, 653);
  }
  else if (checkIfPendulum(card.data[0].frameType)){
    text("ATK" + "/" + card.data[0].atk + " " + "DEF" + "/" + card.data[0].def, 1055, 653);
  }
  pop();

  if (card.data[0].type == "Link Monster"){
    displayLinkTriangles(card);
  }
}

function displayLevel(card, level){
  let space = 0;
  if (card.data[0].type == "XYZ Monster" || card.data[0].type == "XYZ Pendulum Effect Monster"){
    for (var i = 0; i < level; i++) {
      push();
      fill(32, 32, 32);
      ellipse(795 + (space * 40), 155, 40, 40);
      fill(231, 255, 6);
      star(795 + (space * 40), 155, 5, 15, 10, 50);
      pop();
      space++;
    }
  }
  else{
    for (var i = 0; i < level; i++) {
      push();
      fill(252, 28, 28);
      ellipse(1220 - (space * 40), 155, 40, 40);
      fill(231, 255, 6);
      star(1220 - (space * 40), 155, 5, 15, 10, 50);
      pop();
      space++;
    }
  }
}

function displayAttribute(attribute) {
  if(attribute == "DARK") {
    image(darkAttImage, 1190, 95, 50, 50);
  }
  else if(attribute == "LIGHT") {
    image(lightAttImage, 1190, 95, 50, 50);
  }
  else if(attribute == "WIND") {
    image(windAttImage, 1190, 95, 50, 50);
  }
  else if(attribute == "Spell Card") {
    image(spellAttImage, 1190, 95, 50, 50);
  }
  else if(attribute == "Trap Card") {
    image(trapAttImage, 1190, 95, 50, 50);
  }
}

function displayArtwork(name){
  if(name == "Dark Magician"){
    image(dmImage, 1001, 340, 300, 300);
  }
  else if (name == "Dark Magician Girl"){
    image(dmgImage, 1001, 340, 300, 300);
  }
  else if (name == "Blue-Eyes Chaos MAX Dragon"){
    image(beImage, 1001, 340, 300, 300);
  }
  else if (name == "Elemental HERO Flame Wingman"){
    image(fwImage, 1001, 340, 300, 300);
  }
  else if (name == "Stardust Dragon"){
    image(sdImage, 1001, 340, 300, 300);
  }
  else if (name == "Number 39: Utopia"){
    image(utImage, 1001, 340, 300, 300);
  }
  else if (name == "Odd-Eyes Pendulum Dragon"){
    image(oeImage, 1004, 290, 450, 205);
  }
  else if(name ==  "Odd-Eyes Arc Pendulum Dragon"){
     image(oeaImage, 1004, 290, 450, 205);
  }
  else if(name ==  "Odd-Eyes Pendulumgraph Dragon"){
     image(oegImage, 1004, 290, 450, 205);
  }
  else if(name ==  "Odd-Eyes Rebellion Dragon"){
     image(oerImage, 1004, 290, 450, 205);
  }
  else if(name ==  "Odd-Eyes Venom Dragon"){
     image(oevImage, 1004, 290, 450, 205);
  }
  else if(name ==  "Odd-Eyes Wing Dragon"){
     image(oewImage, 1004, 290, 450, 205);
  }
  else if(name ==  "Decode Talker"){
    image(dcImage, 1001, 320, 300, 300);
  }
  else if (name == "Accesscode Talker"){
    image(actImage, 1001, 320, 300, 300);
  }
  else if (name == "Topologic Zeroboros"){
    image(tzImage, 1001, 320, 300, 300);
  }
  else if (name == "Pot of Greed"){
    image(pogImage, 1001, 340, 300, 300);
  }
  else if (name == "Mirror Force"){
    image(mfImage, 1001, 340, 300, 300);
  }
}

function displayDescription(card, cardName){
  if (cardName == "Elemental HERO Flame Wingman"){
    text(card.data[0].desc.insert(55, "\n"), 1005, 610, 410, 150);
  }
  else if (cardName == "Stardust Dragon"){
    text(card.data[0].desc.insert(32, "\n"), 1005, 610, 410, 150);
  }
  else if (cardName == "Number 39: Utopia"){
    text(card.data[0].desc.insert(18, "\n"), 1005, 610, 410, 150);
  }
  else if(checkIfPendulum(card.data[0].frameType)){
    let pdesc = card.data[0].desc;
    let descArray = pdesc.split(/\[|\]/);
    push();
    textSize(13);
    textFont(matrixBookFont);
    text(descArray[2], 1005, 455, 310, 105);
    pop();
    text(descArray[4], 1005, 610, 445, 150);
  }
  else if (cardName == "Decode Talker"){
    text(card.data[0].desc.insert(18, "\n"), 1005, 610, 410, 150);
  }
  else if (cardName == "Accesscode Talker"){
    text(card.data[0].desc.insert(18, "\n"), 1005, 610, 408, 150);
  }
  else if (cardName == "Topologic Zeroboros" ){
    text(card.data[0].desc.insert(18, "\n"), 1005, 610, 408, 150);
  }
  else if (card.data[0].type == "Spell Card"){
    text(card.data[0].desc, 1005, 590, 410, 150);
  }
  else if (card.data[0].type == "Trap Card"){
    text(card.data[0].desc, 1005, 590, 410, 150);
  }
  else{
    text(card.data[0].desc, 1005, 610, 410, 150);
  }
 
}

function displayColor(cardType){
  if (cardType == "Normal Monster" || cardType == "Pendulum Normal Monster"){
    fill(189, 181, 103);
  }
  else if (cardType == "Effect Monster" || cardType == "Pendulum Effect Monster"){
    fill(152, 96, 49);
  }
  else if (cardType == "Ritual Effect Monster" || cardType == "Pendulum Effect Ritual Monster"){
    fill(36, 90, 152);
  }
  else if (cardType == "Fusion Monster" || cardType == "Pendulum Effect Fusion Monster"){
    fill(102, 0, 204);
  }
  else if (cardType == "Synchro Monster" || cardType == "Synchro Pendulum Effect Monster"){
    fill(242, 242, 242);
  }
  else if (cardType == "XYZ Monster" || cardType == "XYZ Pendulum Effect Monster"){
    fill(64, 64, 64);
  }
  else if (cardType == "Spell Card"){
    fill(23, 127, 120);
    
  }
  else if (cardType == "Trap Card"){
    fill(155, 9, 92);
  }
}

function displayDescColor(cardType){
  if (cardType == "Normal Monster") {
    fill(192, 177, 128);
  }
  else if (cardType == "Effect Monster"){
    fill(155, 146, 117);
  }
  else if (cardType == "Ritual Effect Monster") {
    fill(156, 211, 235);
  }
  else if (cardType == "Fusion Monster") {
    fill(205, 148, 222);
  }
  else if (cardType == "Synchro Monster") {
    fill(244, 238, 246);
  }
  else if (cardType == "XYZ Monster") {
    fill(215, 206, 218);
  }
  else if (cardType == "Link Monster"){
    fill(156, 211, 235);
  }
  else if (cardType == "Spell Card") {
    fill(191, 223, 193);
  }
  else if (cardType == "Trap Card") {
    fill(223, 191, 206);
  }
}

function displayLinkTriangles(card){
  push();
  //bottom triangle
  if (card.data[0].linkmarkers.includes("Bottom")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(1001, 498, 961, 470, 1041, 470);
  if (card.data[0].linkmarkers.includes("Bottom")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(1001, 492, 974, 475, 1028, 475);

  //top triangle
  if (card.data[0].linkmarkers.includes("Top")){
    fill(255);
  }
  else{
    fill(88, 86, 86);
  }
  triangle(1001, 143, 961, 171, 1041, 171);
  if (card.data[0].linkmarkers.includes("Top")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(1001, 149, 974, 166, 1028, 166);

  //left triangle
  if (card.data[0].linkmarkers.includes("Left")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(822, 320, 850, 280, 850, 360);
  if (card.data[0].linkmarkers.includes("Left")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(828, 320, 846, 293, 846, 347);

  //right triangle
  if (card.data[0].linkmarkers.includes("Right")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(1180, 320, 1152, 280, 1152, 360);
  if (card.data[0].linkmarkers.includes("Right")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(1176, 320, 1156, 293, 1156, 347);

  //top left corner
  if (card.data[0].linkmarkers.includes("Top-Left")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(840, 160, 875, 160, 840, 195);
  if (card.data[0].linkmarkers.includes("Top-Left")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(844, 164, 866, 164, 844, 186);

  //bottom left corner
  if (card.data[0].linkmarkers.includes("Bottom-Left")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(840, 480, 840, 445, 875, 480);
  if (card.data[0].linkmarkers.includes("Bottom-Left")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(844, 476, 844, 455, 866, 476);

  //top right corner
  if (card.data[0].linkmarkers.includes("Top-Right")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(1160, 160, 1160, 195, 1125, 160);
  if (card.data[0].linkmarkers.includes("Top-Right")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(1156, 164, 1156, 186, 1134, 164);

  //bottom right corner
  if (card.data[0].linkmarkers.includes("Bottom-Right")) {
    fill(255);
  }
  else {
    fill(88, 86, 86);
  }
  triangle(1160, 480, 1160, 445, 1125, 480);
  if (card.data[0].linkmarkers.includes("Bottom-Right")) {
    fill(255, 67, 20);
  }
  else {
    fill(0);
  }
  triangle(1156, 476, 1156, 455, 1134, 476);
  pop();
}

function checkIfPendulum(cardFrameType){
  if (cardFrameType == "normal_pendulum"
    || cardFrameType == "effect_pendulum"
    || cardFrameType == "ritual_pendulum"
    || cardFrameType == "fusion_pendulum"
    || cardFrameType == "synchro_pendulum"
    || cardFrameType == "xyz_pendulum") {
      return true;
    }
    else{
      return false;
    }
}



