var bullet, wall;
var speed,weight;
function setup() {
  createCanvas(1300,400);
  bullet = createSprite(50,200,50,10);
  bullet.shapeColor = "white";
speed = random(55,90);
weight = random(400,1500);
thickness = random(22,83);
bullet.velocityX = speed;
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = "grey";
}

function draw() {
  background("black");  

if(wall.x-bullet.x < bullet.width/2 + wall.width/2){
  bullet.velocityX = 0;
  var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
  if(damage<10){
    wall.shapeColor = "green";
  }
  else if(damage>10){
    wall.shapeColor = "red";
  }
}


  drawSprites();
}