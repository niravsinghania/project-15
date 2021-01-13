var tomone,jerryone,tomtwo,tom3,tom4,jerry_running,jerry4,jerry,tom_running,tom,jerry;
var garden;
function preload() {
tomone =loadAnimation("jerryOne.png");
jerryone=loadAnimation("tomOne.png");
tom_running=loadAnimation("tomTwo.png","tomThree.png");
jerry_running=loadAnimation("jerryTwo.png","tomThree.png");
tom4=loadAnimation("tomFour.png");
jerry4=loadAnimation("jerryFour.png");
garden=loadAnimation("garden.png");
}
function setup() {
createCanvas(600,600);
tom=createSprite(40,30,30,20);
tom.setAnimation("tomone");
jerry=createSprite(200,400,10,10);
jerry.setAnimation("jerryone")
}
function draw() {
garden=createSprite(600,600)
garden.setAnimation("garden");
if(tom.keyDown("LEFT_ARROW")){
tom.velocityY=-5;
tom.changeAnimation("tom_running",tom);
jerry.changeAnimation("jerry_running",jerry);
}
if(tom.isTouching(jerry)){
tom.changeAnimation("tom4");
jerry.changeAnimation("jerry4");
tom.velocityY=0;
}
drawSprites();
}