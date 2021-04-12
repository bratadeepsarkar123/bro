
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var a,b,c,d,e;
var s1,s2,s3,s4,s5;
var r1,r2,r3
function preload()
{
	
}

function setup() {
	createCanvas(windowWidth,windowHeight);

  
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	//creating ball1
	a= new Ball(2*width/8,3*height/5,width/16)
	r1 = new Rod(2*width/8,height/5,width/8,height/20)
	s1= new String(r1.body,a.body)

	//creating ball2
	b= new Ball(3*width/8,3*height/5,width/16)
	r2 = new Rod(3*width/8,height/5,width/8,height/20)
	s2= new String(r2.body,b.body)

	//creating ball3
	c= new Ball(4*width/8,3*height/5,width/16)
	r3 = new Rod(4*width/8,height/5,width/8,height/20)
	s3= new String(r3.body,c.body)

    //creating ball4
	d= new Ball(5*width/8,3*height/5,width/16)
	r4 = new Rod(5*width/8,height/5,width/8,height/20)
	s4= new String(r4.body,d.body)

	//creating ball5
	e= new Ball(6*width/8,3*height/5,width/16)
	r5 = new Rod(6*width/8,height/5,width/8,height/20)
	s5= new String(r5.body,e.body)

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(0);

  //Strike();
  
  s1.display();
  r1.display();
  a.display();
 
  console.log(width)
  s2.display();
  r2.display();
  b.display();

  s3.display();
  r3.display();
  c.display();

  s4.display();
  r4.display();
  d.display();

  s5.display();
  r5.display();
  e.display();

  drawSprites();
  Strike();
}

function Strike(){
 	if ( keyCode==RIGHT_ARROW || keyCode==LEFT_ARROW  ){
		if ( keyCode==RIGHT_ARROW ){
		Matter.Body.applyForce(e.body, e.body.position, {x:(1000*width/1290),y:(0) })
		}
		if ( keyCode==LEFT_ARROW ){
		Matter.Body.applyForce(a.body, a.body.position, {x:-(1000*width/1290),y:(0) })
		}
  	}
}

//y:-(8+29*height/125)