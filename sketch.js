
var monkey , monkey_running_pic;
var banana ,bananapic;
var obstacle, obstaclepic;
var BananaGroup, ObstacleGroup;
var score;
var ground, groundpic, realground;

function preload(){
  
  
  monkey_running_pic =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananapic = loadImage("banana.png");
  obstaclepic = loadImage("obstacle.png");
  groundpic = loadImage("ground for whitehat.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(50, 320, 10, 10);
  monkey.addAnimation("running", monkey_running_pic)
  monkey.scale = 0.15;

  ground = createSprite(200, 360);
  ground.addImage("ground", groundpic);
  realground = createSprite(200, 400, 400, 40);
  realground.visible = false;
  
  
}


function draw() {
  background("#96d3ff");
  score = Math.round(Math.ceil((frameCount/frameRate())));
  ground.velocityX = -5;
  if(ground.x < 145){
    ground.x = 200;
  }
  //console.log(ground.x);
  if(keyDown("space") && monkey.y > 319){
    monkey.velocityY = -16;
    
  }
  monkey.velocityY = monkey.velocityY + 0.6;
  monkey.collide(realground);
  

  
  spawnBananas();
  spawnRocks();
  
  fill("#ffff00");
  stroke("black");
  strokeWeight(4);
  textSize(36);
  textFont("Arial Black");
  text("Survival Time: " + score, 0, 50);
  drawSprites();
}

function spawnBananas(){
  BananaGroup = createGroup();
  if(frameCount%70 === 0|| frameCount%190 === 0){
    var randyb = Math.round(random(120, 180));
    banana = createSprite(390, randyb, 10, 10);
    banana.addImage("banana", bananapic);
    banana.scale = 0.15;
    banana.velocityX = -5;
    banana.lifetime = 80;
    //console.log(banana.lifetime);
    BananaGroup.add(banana);
    
  }
}

function spawnRocks(){
  ObstacleGroup = createGroup();
  if(frameCount%300 === 0){
    obstacle = createSprite(390, 330, 10, 10);
    obstacle.addImage("obstacle", obstaclepic)
    obstacle.depth = -5;
    obstacle.scale = 0.2;
    obstacle.velocityX = -5;
  }
  
  
  
}




