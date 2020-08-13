
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,ground,dustbin

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   paper= new Paper(100,200,50)
   ground = new Ground(400,700)
   dustbin = new Dustbin(350,650)

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbin.display()
  
  
 
}

function keyPressed(){
  if (keyCode ===UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
  }
}


