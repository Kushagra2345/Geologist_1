
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var a=100;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.

	ground=new Ground(800,688,1600,24)
	hammer=new Hammer(800,350,100,50);
	stone=new Stone(random(125,1500),200,50,50)
	rubber=new Rubber(random(350,1000),150,30);
	sand1=new Sand(random(100,200),100,7)
	sand2=new Sand(random(200,300),100,7)
	sand3=new Sand(random(300,400),100,7)
	sand4=new Sand(random(400,500),100,7)
	sand5=new Sand(random(500,600),100,7)
	sand6=new Sand(random(600,700),100,7)
	sand7=new Sand(random(700,800),100,7)
	sand8=new Sand(random(800,900),100,7)
	sand9=new Sand(random(900,1000),100,7)
	sand10=new Sand(random(1000,1100),100,7)
	sand11=new Sand(random(1100,1200),100,7)
	sand12=new Sand(random(1200,1300),100,7)
	sand13=new Sand(random(1300,1400),100,7)
	sand14=new Sand(random(1400,1500),100,7)
	sand15=new Sand(random(1500,1600),100,7)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  console.log(rubber)
  console.log(stone)
  console.log(hammer)

  
  
  drawSprites();

  ground.display();
  hammer.display();
  stone.display()
  rubber.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()
  sand11.display()
  sand12.display()
  sand13.display()
  sand14.display()
  sand15.display()
  
  
}



