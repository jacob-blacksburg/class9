var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,30,30);
  box.shapeColor="red";
}

function draw() 
{
  background("gray");
drawSprites();
if(keyDown("w")){
  box.y= box.y-3;
}
if(keyDown("a")){
  box.x= box.x-3;
}
if(keyDown("s")){
  box.y= box.y+3;
}
if(keyDown("d")){
  box.x= box.x+3;
}
}




