var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
	engine = Engine.create();
	world = engine.world;
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2

}
    groundObj=new Ground(width/2,670,width,20)
	leftSide = new Ground(900,600,20,120)
	rightSide = new Ground(1120,600,20,120)
	//Create the Bodies Here.
ball=Matter.Bodies.circle(100,400,50, ball_options)

World.add(world, ball)
	Engine.run(engine);
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.position.x,ball.position.y,{x:2, y:1})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  drawSprites();
  leftSide.display()
  rightSide.display()
  ellipseMode(RADIUS)
ellipse(ball.position.x, ball.position.y,50, 50)
 
}



