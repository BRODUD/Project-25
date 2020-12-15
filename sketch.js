
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;	
var paper,trashcani,ground,leftSprite,bottomSprite,rightSprite;
var bottomBody,leftBody,rightBody;

function preload(){
	trashcani = loadImage("dustbingreen.png")
}



function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 
	
	 
	 ground = new Ground(500,590,1000,20);
	 
	 bottomSprite = createSprite(800,height-83,250,20);
	 bottomSprite.shapeColor = "red";
	 bottomSprite.addImage(trashcani);
	 bottomSprite.scale = 0.5;

	 paper = new Paper(200,550,60);

	 bottomBody = Bodies.rectangle(800,height-83, 250,20, {isStatic:true} );
	 World.add(world, bottomBody);
	 
	 leftBody = Bodies.rectangle(750,540,20,100,{isStatic:true} );
	 World.add(world, leftBody);
	 
	rightBody = Bodies.rectangle(875, 540, 20, 100 , {isStatic:true} );
	 World.add(world, rightBody);
	 
	 Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  drawSprites();
  paper.display();
 

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
	  
	   Body.applyForce(paper.body,paper.body.position,{x:65,y:-65})
	   
	 }
   }


