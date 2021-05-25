var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var backgroundImg;
var snow = [];

function preload(){
  backgroundImg = loadImage("snow1.jpg")
}


function setup() {
  var canvas = createCanvas(1000,700);
 engine = Engine.create();
  world = engine.world;

  
 
}

function draw() {
  background(backgroundImg);
  Engine.update(engine);
    
  if(frameCount%60===0){
    snow.push(new Snow(random(width/2-30, width/2+30), 10,10));
   
  }

 for (var j = 0; j < snow.length; j++) {
  
    snow[j].display();
  }
  
}



