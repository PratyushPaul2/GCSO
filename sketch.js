var car,wall,speed,weight, deformation;


function setup() {
  createCanvas(1600,400);
  
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1500, 200, 60, height/2);
  speed=Math.round(random(55, 95));
  weight=Math.round(random(400, 1500));
  car.velocityX=speed;
  deformation=(.5*weight*speed*speed)/22500;
  console.log(speed);
  console.log(weight);
  console.log(deformation);
  
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<(car.width+wall.width)/2) {
car.velocityX =0;
if(deformation>180){
  car.shapeColor="red";
  wall.shapeColor="red";
}
if(deformation<180&&deformation>100){
  car.shapeColor="orange"
  wall.shapeColor="orange"
}
if(deformation<100){
  car.shapeColor="green";
  wall.shapeColor="green";
}

  }
  drawSprites();
  
}