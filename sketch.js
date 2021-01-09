var tom,jerry;
var garden;
function preload() {
gardenImage = loadImage("images/garden.png");
tomImage1 = loadAnimation("images/tomOne.png");
tomImage2 = loadAnimation("images/tomTwo.png","images/tomThree.png");
tomImage3 = loadAnimation("images/tomFour.png");
jerryImage1 = loadAnimation("images/jerryOne.png");
jerryImage2 = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
jerryImage3=loadAnimation("images/jerryFour.png");

}

function setup(){
    createCanvas(1000,800);
tom=createSprite(800,600,15,10);
tom.addAnimation("tomsleeping",tomImage1);
tom.scale=0.2;

jerry=createSprite(200,600,20,10);
jerry.addAnimation("jerrystanding",jerryImage1);
jerry.scale=0.2;





}

function draw(){
  background(gardenImage);

if(tom.x - jerry.x < (tom.width-jerry.width)/2){
  tom.velocityX=0;
  tom.addAnimation("tomlastImage", tomImage3);
  tom.velocityX=0;
  tom.x=300;
  tom.changeAnimation("tomlastImage");
  jerry.addAnimation("jerrylastImage",jerryImage3);
  jerry.changeAnimation("tomlastImage");
}
    
    

    drawSprites();
}


function keyPressed(){

  if(keyCode === LEFT_ARROW){
    tom.velocityX = -5; 
    tom.addAnimation("tomRunning", tomImage2);
    tom.changeAnimation("tomRunning");

    jerry.addAnimation("jerryTeasing", jerryImage2);
    jerry.franeDelay=25;
    jerry.changeAnimation("jerryTeasing");
  }
}
