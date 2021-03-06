const Engine=Matter.Engine
const World=Matter.World 
const Bodies=Matter.Bodies

function setup(){
canvas=createCanvas(600,600);
engine=Engine.create();
world=engine.world;

 //create paddle
 paddle=createSprite(300,500,100,20)
 paddle.shapeColor="brown"

 //create ball
 ball=createSprite(270,400,20,20)
 ball.shapeColor="green"
 ball.velocityX = 4;
 ball.velocityY = 5;


 

 //create bricks
 //1st row
 brick1=createSprite(100,75,100,40)
 brick1.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick2=createSprite(220,75,100,40)
 brick2.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick3=createSprite(340,75,100,40)
 brick3.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick4=createSprite(480,75,150,40)
 brick4.shapeColor=color(random (0,255),random(0,255),random(0,255))
 //2nd row
 brick5=createSprite(100,145,100,40)
 brick5.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick6=createSprite(220,145,100,40)
 brick6.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick7=createSprite(340,145,100,40)
 brick7.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick8=createSprite(480,145,150,40)
 brick8.shapeColor=color(random (0,255),random(0,255),random(0,255))
 //3rd row
 brick9=createSprite(100,215,100,40)
 brick9.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick10=createSprite(220,215,100,40)
 brick10.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick11=createSprite(340,215,100,40)
 brick11.shapeColor=color(random (0,255),random(0,255),random(0,255)) 
 brick12=createSprite(480,215,150,40)
 brick12.shapeColor=color(random (0,255),random(0,255),random(0,255))
 //4th row 
 brick13=createSprite(100,285,100,40)
 brick13.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick14=createSprite(220,285,100,40)
 brick14.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick15=createSprite(340,285,100,40)
 brick15.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick16=createSprite(480,285,150,40)
 brick16.shapeColor=color(random (0,255),random(0,255),random(0,255))  
 //5th row 
 brick17=createSprite(100,355,100,40)
 brick17.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick18=createSprite(220,355,100,40)
 brick18.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick19=createSprite(340,355,100,40)
 brick19.shapeColor=color(random (0,255),random(0,255),random(0,255))
 brick20=createSprite(480,355,150,40)
 brick20.shapeColor=color(random (0,255),random(0,255),random(0,255))
 
  //back
  ba=createSprite(300,45,29048,3448)
  ba.shapeColor='#D5D6D6'
  ba.visible=false

  //inside edge create
  insideedge1 = createSprite(10, 270, 25, 800);
  insideedge1.shapeColor = "lightblue";
  insideedge2 = createSprite(200, 10, 800, 25);
  insideedge2.shapeColor = "lightblue";
  insideedge3 = createSprite(590, 309, 25, 800);
  insideedge3.shapeColor = "lightblue";
  insideedge4 = createSprite(200, 590, 800, 25);
  insideedge4.shapeColor = "lightblue";
}
function draw(){
	background("white");
	Engine.update(engine);
	
	if(keyDown("LEFT_ARROW")){
		paddle.x=paddle.x-3
	}
	else if(keyDown("RIGHT_ARROW")){
		paddle.x=paddle.x+3
	}
    paddle.bounceOff(insideedge1);
	paddle.bounceOff(insideedge3);

	if(ball.isTouching(paddle)){
		ball.bounceOff(paddle)
	}
	ball.bounceOff(insideedge1)
	ball.bounceOff(insideedge2)
    ball.bounceOff(insideedge3)

	
	
	drawSprites();
}