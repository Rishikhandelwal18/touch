var moving,fixed;


function setup() {
  createCanvas(800,400);
  fixed = createSprite(200,200,50,70);
  moving = createSprite(400, 200, 50, 50);
  moving.shapeColor = "green";
  fixed.shapeColor = "blue";

}

function draw() {
  background("yellow"); 
  moving.x = World.mouseX;
  moving.y = World.mouseY;
   if (moving.x-fixed.x<moving.width/2+fixed.width/2) {
     moving.shapeColor = "red";
     fixed.shapeColor =  "red";

   }
   else{
    moving.shapeColor = "green";
    fixed.shapeColor = "blue";
   }
  drawSprites();
  
}