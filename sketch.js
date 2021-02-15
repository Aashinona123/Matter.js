
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	hammer = new Hammer(920, 490, 70, 70)
	rubber = new Rubber(200, 490, 60, 60)
	ground = new Ground(600, 580, 1200, 10)
	stone = new Stone(300, 490, 50, 50)
	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	drawSprites();
	ground.display();
	hammer.display();
	rubber.display();
	stone.display();
}



