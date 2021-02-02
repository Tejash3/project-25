var dustbinObj;
var ground;


var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
  rectMode(CENTER);
	createCanvas(1200, 600);  
  
  engine = Engine.create();
	world = engine.world;

  ground = new Ground(600,570,1200,20);
  dustbinObj = new Dustbin(1000,565);
  ball=new  Paper(80,450);
  object1000=new Object100(1100,507,10,100);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black")
  Engine.update(engine);
 
  ground.display();
  dustbinObj.display();
  ball.display();
  object1000.display();
  
  drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(ball.body,ball.body.position,{x:175,y:-175});

  
  }
}
