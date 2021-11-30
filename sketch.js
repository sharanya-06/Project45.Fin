var bruno;
var invisiibleGround;

function preload(){

}

function setup() {
  createCanvas(800,400);
  bruno = createSprite(400, 200, 50, 50);

  invisibleGround = createSprite(300,390,600,10);
  invisibleGround.visible = false;
}

function draw() {
  background("green");  
  text("Score: ", 600,50,fill("black"));
  
  if(keyDown("UP_ARROW") && bruno.y >= 159) {
    bruno.velocityY = -12;
  }

  bruno.velocityY = bruno.velocityY + 0.8

  bruno.collide(invisibleGround);

  drawSprites();
}