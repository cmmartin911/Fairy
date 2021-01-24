
function preload(){
   //preload the images here
    fairyIMG = loadImage("fairy1.png");
    starIMG = loadImage("star.png");
    starnightIMG = loadImage("starnight.png");
    music = loadSound("JoyMusic.mp3");
}

function setup() {
  createCanvas(800, 750);

  starnight = createSprite(375,400,1,1);
  starnight.addImage(starnightIMG);
  starnight.scale = 0.6;

  fairy = createSprite(150,550,10,10);
  fairy.addImage(fairyIMG);
  fairy.scale = 0.2;
  fairy.setCollider("circle",500,-20,30);

  star = createSprite(700,50,10,10);
  star.addImage(starIMG);
  star.scale = 0.3;

  music.play();
}


function draw() {
  fairy.velocityX = 0;
 
  background("black");

  move();

  if(keyWentDown(DOWN_ARROW)){
    star.velocityY = 7+star.y/10;
  }

  star.collide(fairy);



  drawSprites();
}

function move(){
  if(keyDown(LEFT_ARROW)){
    fairy.velocityX = -4;
  }

  if(keyDown(RIGHT_ARROW)){
    fairy.velocityX = 4;
  }
}