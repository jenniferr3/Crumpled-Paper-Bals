
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var balls_option={
		isStatic: false,
		restitution: 0.3,
		friction:0,
		density:1.2

	}

	//Create the Bodies Here.
	ball=Bodies.circle(200,200,20,ball_options)

World.add(world,ball);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function keyPressed (){
	if (keycode === UP_ARROW){

       //write code to apply force
	   function hForce () {
		Matter.Body.applyForce (ball,{x:0,y:0},{x:0.02,y:0})
		}
		
		function vForce () {
		Matter.Body.applyForce (ball,{x:0,y:0},{x:0,y:-0.02})
		}
		
	}


	Engine.run(engine);
  


function draw() {
  rectMode(CENTER);
  background(0);
  

  groundObj.display ();
  groundObj = new ground (width/2,670,width,20)
  leftSide = new ground (1100,600,20,120)

  drawSprites();
 
}

