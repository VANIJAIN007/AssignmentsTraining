// //global Scope
// var bg,bgImage;
// var mario,mario_running;
// var ground;
// var brickImage,bricksGroup;
// var coinImage,coinsGroup;
// var coinScore=0;
// var enemyImage,enemyGroup;



// //Load Assets
// function preload(){  //it will load all resources in memory
//     bgImage=loadImage("./images/bgnew.jpg");
//     mario_running=loadAnimation("./images/mar1.png","./images/mar2.png","./images/mar3.png","./images/mar4.png","./images/mar5.png","./images/mar6.png");
//     brickImage=loadImage("images/brick.png");
//     coinImage=loadAnimation("./images/con1.png","./images/con2.png","./images/con3.png","./images/con4.png","./images/con5.png","./images/con6.png");
//     enemyImage=loadAnimation("./images/tur1.png","./images/tur2.png","./images/tur3.png","./images/tur4.png","./images/tur5.png");
//     //load image
// }

// //function setup //for location,size creating basic skeleton with their required credentials
// function setup(){
//     createCanvas(1000,600);

//     //create objects
//     bg=createSprite(600,300,150,50);
//     mario=createSprite(200,520,50,50);

//     //Add pictures on objects
//     bg.addImage(bgImage);
//     mario.addAnimation("running",mario_running);
//     mario.scale=0.2

//     //scale objects
//     bg.scale=.5;

//     bg.x=bg.x-400;


//     //create ground
       
//     ground=createSprite(200,580,400,10);
//     bricksGroup=new Group();

//     coinsGroup=new Group();
//     // coinsGroup=new Group();
//     enemyGroup=new Group();



// } 


// //used to redraw objects on the canvas
// function draw(){
//     //make background move and repeat
//     bg.velocityX=-5;
//     if(bg.x<100) bg.x=bg.width/4
//     if(keyDown("space")){
//         mario.velocityY=-10;

//     }

//     mario.velocityY=mario.velocityY+0.5;

//     //mario stuck on ground   
//     mario.collide(ground);
//     ground.visible=false;

//     //call GenerateBricks
//     generateBricks();
    
//     for(var i=0;i<bricksGroup.length;i++){
//         var temp=bricksGroup.get(i);
//         if(mario.isTouching(temp)){
//             mario.collide(temp);
//         }
//     }
//     if(mario.x<200){
//         mario.x=200;
//     }
//     if(mario.y<50){
//         mario.y=50;        
//     }
//     generateCoins();

//     for(var i=0;i<coinsGroup.length;i++){
//         var temp=coinsGroup.get(i);
//         if(mario.isTouching(temp)){
//             temp.destroy();
//             coinScore++;
//             temp=null;
//         }
//     }
//     // enemyEntered();
//     // for(var i=0;i<enemyGroup.length;i++){
//     //     var temp=enemyGroup.get(i);
//     //     if(mario.isTouching(temp)){       
//     //         enemy.destroy();
//     //         temp=null;
//     //     }
//     // }
    


//     // background("black");
//     drawSprites();

//     text("Coins Collected :"+coinScore,500,50);


// }

// function generateBricks(){
//     if(frameCount % 80==0){
//         console.log(frameCount);
    
//     var brick=createSprite(1200,100,40,10);
//     brick.y=random(50,450);
//     brick.addImage(brickImage);
//     brick.velocityX=-5;
//     brick.lifetime=250;
//     brick.scale=0.5;
//     bricksGroup.add(brick);
//     }

// }

// function generateCoins(){
//     if(frameCount%80==0){
//         // console.log(frameCount);
    
//     var coins=createSprite(1200,100,40,10);   
//     coins.y=random(50,450);
//     coins.addAnimation("rotate",coinImage);
//     coins.scale=0.1;  
//     coins.velocityX=-5;
//     coins.lifetime=250;
//      coinsGroup.add(coins);
//     }

// }
// function enemyEntered(){
//     if(frameCount%80==0){
//         console.log(frameCount);
//         var enemy=createSprite(200,520,40,10);
//         enemy.y=random(1200,200);
//         enemy.addAnimation("rotate",enemyImage);
//         enemy.scale=0.1;
//         enemy.velocityX=-5;
//         enemy.lifetime=250;
//         enemyGroup.add(enemy);
//     }

// }

var bg, bgImage;

var mario, mario_running;
var mario_collided;

var brickGroup, brickImage;

var coinImage, coinsGroup;
var coinScore = 0;

var mushObstacleImage, turtleObstacleImage, obstaclesGroup;
var containerImage,containerGroup;

var gameState = "PLAY";
var startImg;
var restartImg;

function preload() {
  bgImage = loadImage("images/bgnew.jpg");
  containerImage=loadImage("./images/containerImg.png");
  mario_running = loadAnimation(
    "images/mar1.png",
    "images/mar2.png",
    "images/mar3.png",
    "images/mar4.png",
    "images/mar5.png",
    "images/mar6.png",
    "images/mar7.png"
  );

  brickImage = loadImage("images/brick.png");

  coinImage = loadAnimation(
    "images/con1.png",
    "images/con2.png",
    "images/con3.png",
    "images/con4.png",
    "images/con5.png"
  );

  // Add Sounds
  coinSound = loadSound("sounds/coinSound.mp3");
  jumpSound = loadSound("sounds/jump.mp3");

  mushObstacleImage = loadAnimation(
    "images/mush1.png",
    "images/mush2.png",
    "images/mush3.png",
    "images/mush4.png",
    "images/mush5.png",
    "images/mush6.png"
  );
  turtleObstacleImage = loadAnimation(
    "images/tur1.png",
    "images/tur2.png",
    "images/tur3.png",
    "images/tur4.png",
    "images/tur5.png"
  );
  mario_collided = loadAnimation("images/dead.png");

  dieSound = loadSound("sounds/dieSound.mp3");

  restartImg = loadImage("images/restart.png");

  // startImg=loadImage("images/startimg.jpg");

}

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(600, 300);
  bg.addImage(bgImage);

  bg.scale = 0.5;

  mario = createSprite(-300, 320, 20, 50);
  mario.addAnimation("running", mario_running);
  mario.scale = 0.2;

  ground = createSprite(200, 580, 400, 10);

  brickGroup = new Group();

  coinsGroup = new Group();

  obstaclesGroup = new Group();

  containerGroup=new Group();

  mario.addAnimation("collided", mario_collided);
    // startImg.visible=true;
  restart = createSprite(500, 300);
  restart.addImage(restartImg);
  restart.visible = false;


}

function draw() {
  drawSprites();

  if (gameState == "PLAY") {
    // Make background Move
    bg.velocityX = -5;
    if (bg.x < 100) {
      bg.x = bg.width / 4;
    }

    // Make Mario Jump-Up
    if (keyDown("space")) {
      mario.velocityY = -10;
      

      // Mario Jump Sound
      jumpSound.play();
    }

    // Make Mario Come-Down
    mario.velocityY = mario.velocityY + 0.5;

    // Ground for Mario
    mario.collide(ground);
    ground.visible = false;

    generateContainer();

    for(var i=0;i<containerGroup.length;i++){
      
        var temp=containerGroup.get(i);
        if(mario.isTouching(temp)){
          mario.addImage("./images/mar1.png")
        }
    }


    generateBricks();

    // Stay on Bricks
    for (var i = 0; i < brickGroup.length; i++) {
      var temp = brickGroup.get(i);
      if (temp.isTouching(mario)) {
        mario.collide(temp);
      }
    }

    // Mario Issue
    if (mario.x < 200) mario.x = 200;
    if (mario.y < 50) mario.y = 50;

    generateCoins();

    // Collect Coins
    for (var i = 0; i < coinsGroup.length; i++) {
      var temp = coinsGroup.get(i);
      if (temp.isTouching(mario)) {
        coinScore++;
        //Coin Sound
        coinSound.play();

        temp.destroy();
        temp = null;
      }
    }

    generateObstacles();
    if (obstaclesGroup.isTouching(mario)) {
      dieSound.play();
      gameState = "END";
    }
  } 
  
  else if (gameState === "END") {
    bg.velocityX = 0;
    mario.velocityY = 0;
    mario.velocityX = 0;
    // container.velocityX=0;

    obstaclesGroup.setVelocityXEach(0);
    coinsGroup.setVelocityXEach(0);
    brickGroup.setVelocityXEach(0);
    containerGroup.setVelocityXEach(0);

    brickGroup.setLifetimeEach(-1);
    coinsGroup.setLifetimeEach(-1);
    containerGroup.setLifetimeEach(-1); 
    obstaclesGroup.setLifetimeEach(-1);

    mario.changeAnimation("collided", mario_collided);
    mario.y = 570;
    mario.scale = 0.4;

    restart.visible = true;
    if (mousePressedOver(restart)) {
      restartGame();
    }
  }

  // Score Card
  textSize(20);
  fill("brown");
  text("Coins Collected: " + coinScore, 500, 50);
}

function generateBricks() {
  if (frameCount % 70 === 0) {
    var brick = createSprite(1200, 120, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;

    brick.lifetime = 250;

    brickGroup.add(brick);
  }
}

function generateCoins() {
  if (frameCount % 80 === 0) {
    var coin = createSprite(1200, 120, 40, 10);
    coin.y = Math.round(random(80, 350));
    coin.addAnimation("coin", coinImage);
    coin.scale = 0.1;
    coin.velocityX = -3;

    coin.lifetime = 500;

    coinsGroup.add(coin);
  }
}

function generateContainer(){
    if(frameCount%80==0){
        var container=createSprite(1200,452,10,30);
        // container.y=Math.round(random(1,2));
        container.addImage(containerImage);
          container.velocityX=-5; 
            container.scale=1;
        container.lifetime=250;
        containerGroup.add(container);
    }
}

function generateObstacles() {
  if (frameCount % 100 === 0) {
    var obstacle = createSprite(1200, 555, 10, 40);
    obstacle.velocityX = -5;
    obstacle.scale = 0.1;  
    
    var rand = Math.round(random(1, 2));
    switch (rand) {
      case 1:
        obstacle.addAnimation("mush", mushObstacleImage);
        
        break; 
      case 2:
        obstacle.addAnimation("turtle", turtleObstacleImage);
        break;
      default:
        break;
    }
    obstacle.lifetime = 300;
    obstaclesGroup.add(obstacle);
  }
}

function restartGame() {
  gameState = "PLAY";

  obstaclesGroup.destroyEach();
  brickGroup.destroyEach();
  coinsGroup.destroyEach();
  containerGroup.destroyEach();          

  mario.changeAnimation("running", mario_running);
  mario.scale = 0.2;

  coinScore = 0;

  restart.visible = false;
}

// document.addEventListener("keyup",keyUp);
// function keyUp(){
//   if(mario.isTouching(obstacle)){
//     obstacle.scale(0);
//   }
// }