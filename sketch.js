
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var log1,log2,log3,ball,ground;



function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,570,1200,20);
  	log1=new DustBin(1000,550,200,20);
	log2=new DustBin(1090,490,20,100);
  	log3=new DustBin(910,490,20,100);
  	ball=new PaperBall(80,450);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
 
  log1.display();
  log2.display();
  log3.display();
  ground.display();
  ball.display();
  
  keyPressed();
  drawSprites();
 
}
function keyPressed() {
	if (keyDown=== UP_ARROW) {
	  Matter.Body.applyForce(ball.body,ball.body.position,{x:80,y:-85});
	}
}
	



