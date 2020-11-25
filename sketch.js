var fr, mr;



function setup() {
  createCanvas(800,400);
  fr=createSprite(100, 50, 50, 50);
  fr.shapeColor= "blue";
  mr = createSprite(100,350,50,50);
  mr.shapeColor= "red";
  fr.velocityY = 3;
  mr.velocityY = -3;
}

function draw() {
  background(0);  
if(mr.x - fr.x <= mr.width/2 + fr.width/2  && fr.x - mr.x <= fr.width/2 + mr.width/2){
fr.velocityX = fr.velocityX * (-1);
mr.velocityX = mr.velocityX * (-1);
}
if(mr.y - fr.y <= mr.height/2 + fr.height/2  && fr.y - mr.y <= fr.height/2 + mr.height/2){
  fr.velocityY = fr.velocityY * (-1);
  mr.velocityY = mr.velocityY * (-1);
  }
  


  drawSprites();
}