var moving, fixed;


function setup() {
  createCanvas(400,400);
 fixed= createSprite(200, 200, 50, 50);
 moving = createSprite(300,300,100,50)
 fixed.shapeColor= "green"
 moving.shapeColor= "green"
}

function draw() {
  background(255,255,255);  
  moving.x= World.mouseX
  moving.y = World.mouseY
  console.log(moving.x-fixed.x)
  if (moving.x-fixed.x<moving.width/2+fixed.width/2 && fixed.x-moving.x<moving.width/2+fixed.width/2 && moving.y-fixed.y<moving.height/2+fixed.height/2 &&  fixed.y - moving.y<moving.height/2+fixed.height/2){
    fixed.shapeColor= "red"
    moving.shapeColor= "red"
  }
  else {
    fixed.shapeColor= "green"
    moving.shapeColor= "green" 
  }
  drawSprites();
}