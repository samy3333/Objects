var a, b;


function setup() {
  createCanvas(800,400);
  b= createSprite(400, 200, 50, 50);
  a= createSprite(200, 300, 20, 70);
}

function draw() {
  background(0);  

  a.x= mouseX;
  a.y= mouseY;

  a.shapeColor= "green";
  b.shapeColor= "blue";

if(a.x-b.x<a.width/2+b.width/2&& b.x-a.x< b.width/2+a.width/2 && a.y-b.y< a.height/2+b.height/2&& b.y- a.y<a.height/2+b.height/2){
a.shapeColor= "red";
b.shapeColor= "red"; 

}


  drawSprites();
}