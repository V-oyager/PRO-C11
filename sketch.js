var mar, mar_img;
var barco, barco_move;
function preload(){
  //cargar imagen del mar y animación del barco
  mar_img = loadImage("sea.png");
  barco_move = loadAnimation("ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  // crear sprite del mar 
  mar = createSprite(200,200);
  mar.addImage("mar",mar_img);
  mar.scale= 0.24;
  //crear sprite del barco
  
  barco = createSprite(250,250,20,20);
  barco.addAnimation("navegar",barco_move);
  barco.scale=0.2;
}

function draw() {
  background("blue");

  mar.velocityX = -2;
  console.log(mar.x);

  if (mar.x+200 < 100){
    mar.x = 200;
  }
  drawSprites();
 
}