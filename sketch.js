

var bow , arrow,arrowGroup,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage,greenBalloonGroup,red_balloonImage,redBalloongroup,pink_balloonImage ,pinkBalloonGroup,blue_balloonImage,blueBalloonGroup, backgroundImage;

var score
function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(600, 600);
  
  //creating background
  bg = createSprite(0,0,600,600);
  bg.addImage(backgroundImage);
  bg .scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(480,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  greenBalloonGroup = createGroup();
  blueBalloonGroup = createGroup();
  redBalloonGroup = createGroup();
  pinkBalloonGroup = createGroup();
  arrowGroup = createGroup();
   score = 0  
  
  
}

function draw() {
background("white");
  // moving ground
    bg.velocityX = -3 
    text("score"+score,500,50);
    if (bg.x < 0){
      bg.x = bg.width/2;
    }
  
  //moving bow
  bow.y = World.mouseY
  
   // release arrow when space key is pressed
  if (keyDown("space")) {
    createArrow();
    
  }
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      blueBalloon();
    } else if (select_balloon == 3) {
      pinkBalloon();
    } else {
      greenBalloon();
    }
  }
  
  if(arrowGroup.isTouching(greenBalloonGroup)||arrowGroup.isTouching(blueBalloonGroup)||arrowGroup.isTouching(redBalloonGroup)||arrowGroup.isTouching(pinkBalloonGroup)){
    redBalloonGroup.destroyEach();
    greenBalloonGroup.destroyEach();
    blueBalloonGroup.destroyEach();
    pinkBalloonGroup.destroyEach();
    arrowGroup.destroyEach();
    score=score+1;
   }

  
  drawSprites();
    text("Score: "+ score, 400,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBalloonGroup.add(red);

}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBalloonGroup.add(blue);

}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBalloonGroup.add(green);

}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkBalloonGroup.add(pink);

}


// Creating  arrows for bow
 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);
}
