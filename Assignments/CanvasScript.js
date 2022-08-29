var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var inc=document.getElementById("inc");
const image1=document.getElementById("beetle");
const image2=document.getElementById("coin");
const image3=document.getElementById("walk");

// let start=img.src;
// let img=document.querySelector('walk');
// let hover=img.getAttribute('data-hover');

// img.onmouseover=()=>{img.src=hover;}
// img.onmouseout=()=>{img.src=start;}
// canvas.width=window.innerWidth;
// ctx.fillStyle="red";
// ctx.fillRect(50,50,150,100);
// const walk={
//     x:10,
//     y:10,
//     w:100,
//     h:100,
//     speed:2,
//     dx:2,
//     dy:2
// }
const coin1={
    x:20,
    y:20,
    w:50,
    h:50,
    size:40

};
const beetle={
    x:-200,
    y:0,
    w:300,
    h:200,
    speed:5,
    dx:2,
    dy:2
    
};
const walk={
    x:50,
    y:50,
    w:100,
    h:200,
    speed:5,
    dx:2,
    dy:3
}

// coinImage();
// coinImage1();
function walkImage(){
    ctx.drawImage(image3,walk.x,walk.y,walk.w,walk.h);
}
function coinImage(){
    ctx.drawImage(image2,coin1.x+50,coin1.y,coin1.w,coin1.h);
    
}
function coinImage1(){
    ctx.drawImage(image2,coin1.x+70,coin1.y+300,coin1.w,coin1.h);
}
function coinImage2(){
    ctx.drawImage(image2,coin1.x+30,coin1.y+400,coin1.w,coin1.h);
}
function coinImage3(){
    ctx.drawImage(image2,coin1.x+30,coin1.y+400,coin1.w,coin1.h);
}
function coinImage4(){
    ctx.drawImage(image2,coin1.x+400,coin1.y+300,coin1.w,coin1.h);
}
function coinImage5(){
    ctx.drawImage(image2,coin1.x+200,coin1.y+200,coin1.w,coin1.h);
}
function coinImage6(){
    ctx.drawImage(image2,coin1.x+600,coin1.y+300,coin1.w,coin1.h);
}
function coinImage7(){
    ctx.drawImage(image2,coin1.x+400,coin1.y+300,coin1.w,coin1.h);
}

function coinImage8(){
    ctx.drawImage(image2,coin1.x+500,coin1.y+50,coin1.w,coin1.h);
}
function coinImage9(){
    ctx.drawImage(image2,coin1.x+200,coin1.y+500,coin1.w,coin1.h);
}
function beetleimage(){
    ctx.drawImage(image1,beetle.x,beetle.y,beetle.w,beetle.h);

}
function beetleimage1(){
    ctx.drawImage(image1,beetle.x+100,beetle.y+200,beetle.w,beetle.h);
}
function beetleimage3(){
    ctx.drawImage(image1,beetle.x+50,beetle.y+400,beetle.w,beetle.h);
}
function newPos(){
    if(walk.width){

    }
    detectWalls();
    // if((walk.x>=coin1.x && walk.x<=coin1.x+coin1.w) && (walk.y >=coin1.y && walk.y<=coin1.y)){
    //     ctx.fillStyle="red";
    //     // ctx.moveLeft();
    //     ctx.beetleimage1();
    //     ctx.fill();
    // }
    // else{
    //     canvas.style.cursor="default";
    // }
    // var img=ctx.drawImage(image2,coin1.w,coin1.h);
    // for(var i=img.data.length;--i>=0;)
    //     img.data[i]=0;
    // ctx.putImageData(img,100,100);
    walk.x+=walk.dx;
    walk.y+=walk.dy;
}
function detectWalls(){
    if(walk.x<0){
        walk.x=0;
    }
    if(walk.x+walk.w>canvas.width){
        walk.x=canvas.width-walk.w;
    }
    if(walk.y<0){
        walk.y=0;
    }
    // if(player.y+player.)
    if(walk.y+walk.h>canvas.height){
        walk.y=canvas.height-walk.h;
    }
}
function moveRight(){
    walk.dx=walk.speed;
}
function moveLeft(){
    walk.dx=-walk.speed;
}
function moveUp(){
    walk.dy=-walk.speed;
}
function moveDown(){
    walk.dy=walk.speed;
}
function keyUp(e){
    if(e.key=="Right" || 
    e.key=="ArrowRight" || 
    e.key=="Left" || 
    e.key=="ArrowLeft" || 
    e.key=="Up" || 
    e.key=="ArrowUp" || 
    e.key=="Down" || 
    e.key=="ArrowDown"){
        walk.dx=0;
        walk.dy=0;
    }
}
function keyDown(e){
    console.log(e.key);
    if(e.key=="Right" || e.key=="ArrowRight"){

        moveRight();
    }
    if(e.key=="Left" || e.key=="ArrowLeft"){
        moveLeft();
    }
    if(e.key=="Up" || e.key=="ArrowUp"){
        moveUp();
    }
    if(e.key=="Down" || e.key=="ArrowDown"){
        moveDown();
    }
}
function movebeetle(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight);
     moveImage();
    // function moveRight(){
    //     walk.dx=walk.speed;
    // }
    // function moveLeft(){
    //     walk.dx=-walk.speed;
    // }
    // function moveUp(){
    //     walk.dy=-walk.speed;
    // }
    // function moveDown(){
    //     walk.dy=walk.speed;
    // }
    beetleimage();
    beetleimage1();
    beetleimage3();
    coinImage();
    coinImage1();
    coinImage2();
    coinImage3();
    coinImage4();
    coinImage5();
    coinImage6();
    coinImage7();
    coinImage8();
    coinImage9();
    walkImage();
    beetle.x+=beetle.dx;
    if(beetle.x==canvas.width){
        beetle.x=-200;
    }
    requestAnimationFrame(movebeetle);
    // document.addEventListener("keyup",keyUp);
    // document.addEventListener("keydown",keyDown);
}

// function coinImages(){
//     coinImage();
//     // coinImage1();
// }
// function clear(){
//     ctx.clearRect(0,0,canvas.width,canvas.height);
// }
// walkImage();

function update(){
    
    // beetleimage();
    // beetleimage1();
    // beetleimage3();
    // walkImage();
    // clear();
    // newPos();
    // movebeetle();
    // walkImage();
    movebeetle();


    

}
function moveImage(){
    
    walkImage();

    // var coin=canvas.style.display="none";
    newPos();

    
    
}
// walk.on('mouseenter',image2,function(){
//     $(this).addclass('hover');
// }).on('mouseleave',image2,function(){
//     $(this).removeClass('hover');
// })
update();


// var coinRisePixels = Math.floor((deltaTime * risingSpeed)/1000);

//     var survivingCoins = [];
//     for (var i=0;i<coinsOnScreen.length;i++) {
//         var coin = coinsOnScreen[i];
//       coin.y = coin.y - coinRisePixels;
//       //the stl variable controlls the alpha of the image
//       coin.stl = (coin.stl * 1000 - deltaTime)/1000;            
//       if (coin.y+50 > 0) {
//       var alpha = coin.stl/6;      
//         context.save();
//         context.globalAlpha=alpha;        
//         context.drawImage(coinImage, coin.x, coin.y);
//         context.restore();
//         //this coin is still on the screen, so promote it to the new array...
//         survivingCoins.push(coin);
//       }
//     }
//     coinsOnScreen = survivingCoins;
//    }   
//   lastAnimationTime = new Date().getTime();  
//   //Wait, and then call this function again to animate:
//   setTimeout(function() {
//     doDraw();
//   }, 30);   
// }

// doDraw();

// function getCoinImage() {
// var image = new Image(50, 50);
// return image;
// }
document.addEventListener("keyup",keyUp);
document.addEventListener("keydown",keyDown);