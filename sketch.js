
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var gamestate="PLAY";
var score=0;

function preload()
{
	backgroundImg = loadImage("background.jpg");
	
}

function setup() {
	createCanvas(2500, 1200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	 ground= new Ground (600, 1120, 2700, 100);
   ball= new Ball (150,1110);
	 cup1= new Cup (1710,200,170,250);
	 cup2= new Cup (1900,200,170,250);
	 cup3= new Cup (2090,200,170,250);
	 cup4= new Cup (2280,200,170,250);

	 cup5= new Cup (1800,480,170,250);
	 cup6= new Cup (1990,480,170,250);
	 cup7= new Cup (2180,480,170,250);
	 
	 cup8= new Cup (1900,760,170,250);
	 cup9= new Cup (2090,760,170,250);
	 cup10= new Cup (2010,1040,170,250);
  
 
  
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImg);

  textSize(50);
  fill("black");
  stroke("black");
  text("Score:"+score, 100, 100);


//   if (gamestate==="PLAY"){
//   if (ball.isTouching(cup1)||(cup4)){
//  	  Matter.Body.setStatic(cup1, false)
//     }
//    if (ball.isTouching(cup2)|| (cup3)){
//  	score=score+15;
//  }
//    if (ball.isTouching(cup5)|| (cup7)){
//  	score=score+5;
//  }
//  if (ball.isTouching(cup6)|| (cup8)){
//  	score=score+20;
//  }

//  if (ball.isTouching(cup9)|| (cup10)){
//  	score=score+25;
//  }

//   }

  if (gamestate==="END"){

  }

  ball.display();
  cup1.display();
  cup2.display();
  cup3.display();
  cup4.display();
  cup5.display();
  cup6.display();
  cup7.display();
  cup8.display();
  cup9.display();
  cup10.display();
 
  keyPressed();

  
  drawSprites();
 
}


function keyPressed(){
	if (keyDown(UP_ARROW)){
	  Matter.Body.applyForce(ball.body,ball.body.position, {x:15, y:-15});
	}
  
}




