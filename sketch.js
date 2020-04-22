const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var canon;
var cannn_Image;
var bg_Image;
var ground;
var canonBall;
var box1;
var ball_Image;


function preload (){
   canon_Image = loadImage("cannon.png");
   bg_Image = loadImage("bg.jpg");
   ball_Image = loadImage("shootball.png");
}

function setup(){
  var canvas = createCanvas(1000,500);
  engine = Engine.create();
  world = engine.world;
  

   canon = createSprite(130,430,1,1);
   canon.addImage(canon_Image);
   canon.scale = 0.2;

   ground = new Ground(500,500,1000,10);

   canonBall = new CanonBall(); 
   box1 = new Box(650,455,120,70);
   box2 = new Box(775,455,120,70);
   box3 = new Box(650,385,100,60);
   box4 = new Box(775,385,100,60);
   box5 = new Box(650,320,70,50);
   box6 = new Box(775,320,70,50);
}


function draw(){
  background((bg_Image));

  ground.display();
  canonBall.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  
  ShootBall();

  drawSprites();
}
function ShootBall(){
  var options ={
    "resitution": 0.7,
    "friction": 1,
    "density": 0.4,
}
   if(keyDown("Space")){
     var ball = createSprite(190,380,50,50,options);
     ball.addImage(ball_Image);
     ball.scale = 0.1;
    ball.velocityX = 5;
   }
}