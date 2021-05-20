var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
}

function setup(){
  
  createCanvas(displayWidth,displayHeight);
  
// Moving background
path=createSprite(width/2,200);
path.addImage(pathImg);
path.velocityY = 4;

//creating boy running
boy = createSprite(width/2,height-20,20,20);
boy.addAnimation("JakeRunning",boyImg);
boy.scale=0.08;
  
// create left Boundary
leftBoundary=createSprite(0,0,100,800);
leftBoundary.visible = false;

//create right Boundary
rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moving on Xaxis with mouse
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background
  if(path.y > height ){
    path.y = height/2;
  }
  
  drawSprites();
}