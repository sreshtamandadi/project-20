var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  
  wall=createSprite(1200, 200, thickness, 310);
  wall.shapeColor=color(80,80,80);

  bullet=createSprite(50, 200, 60, 30);
  bullet.velocityX=speed;
  bullet.shapeColor=color("black");
}

function draw() {
  background("brown");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    textSize(60);
    fill("black")

  if(damage>10){
    wall.shapeColor=color("red");
    text("Rating: D" ,520,180)
    text("IT'S THE WORST MATERAL FOR WALLS",290,260)
  }

  if(damage<10){
    wall.shapeColor=color("green");
    text("Rating: A ",520,180)
    text("IT'S THE BEST MATERIAL FOR WALLS",300,260)
  }
  }
  drawSprites();
}

function hasCollided(object1,object2){
  object1RightEdge=object1.x+object1.width;
  object2LeftEdge=wall.x;
  if(object1RightEdge>=object2LeftEdge){
    return true;
  }
  return false;
}





