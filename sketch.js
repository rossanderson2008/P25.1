
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
  
  dustbinimg= loadImage("dustbingreen.png")
  
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground=new Ground(600,680,1200,20)
  ball=new Ball(100,100,50)
  b=new dustbin(690,650,200,20)
  l=new dustbin(600,600,20,100)
  r=new dustbin(775,600,20,100)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  ground.display () 
  ball.display () 
  //b.display () 
 // l.display()
//  r.display()
  drawSprites();
  image(dustbinimg,600,500,220,180)
}



function keyPressed(){
	if(keyCode === UP_ARROW)  {
Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}