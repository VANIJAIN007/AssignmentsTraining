// var canvas=document.getElementById('canvas');
// var ctx=canvas.getContext('2d');

// const image1=document.getElementById("beetle");
// const image2=document.getElementById("coin");
// // canvas.width=window.innerWidth;
// // ctx.fillStyle="red";
// // ctx.fillRect(50,50,150,100);
// const coin1={
//     x:20,
//     y:20,
//     w:50,
//     h:50,
//     size:40

// };
// const beetle={
//     x:10,
//     y:2,
//     w:300,
//     h:200,
//     speed:5,
//     dx:2,
//     dy:2
    
// };

// // coinImage();
// // coinImage1();
// function coinImage(){
//     ctx.drawImage(image2,coin1.x+50,coin1.y,coin1.w,coin1.h);
    
// }
// function coinImage1(){
//     ctx.drawImage(image2,coin1.x+70,coin1.y+300,coin1.w,coin1.h);
// }
// function coinImage2(){
//     ctx.drawImage(image2,coin1.x+30,coin1.y+400,coin1.w,coin1.h);
// }
// function coinImage3(){
//     ctx.drawImage(image2,coin1.x+30,coin1.y+400,coin1.w,coin1.h);
// }
// function coinImage4(){
//     ctx.drawImage(image2,coin1.x+400,coin1.y+300,coin1.w,coin1.h);
// }
// function coinImage5(){
//     ctx.drawImage(image2,coin1.x+200,coin1.y+200,coin1.w,coin1.h);
// }
// function coinImage6(){
//     ctx.drawImage(image2,coin1.x+600,coin1.y+300,coin1.w,coin1.h);
// }
// function coinImage7(){
//     ctx.drawImage(image2,coin1.x+400,coin1.y+300,coin1.w,coin1.h);
// }

// function coinImage8(){
//     ctx.drawImage(image2,coin1.x+500,coin1.y+50,coin1.w,coin1.h);
// }
// function coinImage9(){
//     ctx.drawImage(image2,coin1.x+200,coin1.y+500,coin1.w,coin1.h);
// }
// function beetleimage(){
//     ctx.drawImage(image1,beetle.x,beetle.y,beetle.w,beetle.h);

// }
// function beetleimage1(){
//     ctx.drawImage(image1,beetle.x+100,beetle.y+200,beetle.w,beetle.h);
// }
// function beetleimage3(){
//     ctx.drawImage(image1,beetle.x+50,beetle.y+400,beetle.w,beetle.h);
// }
// function movebeetle(){
//     ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
//     beetleimage();
//     beetleimage1();
//     beetleimage3();
//     coinImage();
//     coinImage1();
//     coinImage2();
//     coinImage3();
//     coinImage4();
//     coinImage5();
//     coinImage6();
//     coinImage7();
//     coinImage8();
//     coinImage9();
    
//     beetle.x+=beetle.dx;
//     if(beetle.x==canvas.width){
//         beetle.x=0;
//     }
//     requestAnimationFrame(movebeetle);
// }

// // function coinImages(){
// //     coinImage();
// //     // coinImage1();
// // }
// function update(){
    
//     // beetleimage();
//     // beetleimage1();
//     // beetleimage3();
//     movebeetle()

    

// }

// // movebeetle();
// update();



var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');
var inc=document.getElementById("inc");
const image1=document.getElementById("beetle");
const image2=document.getElementById("coin");
const image3=document.getElementById("walk");
// canvas.width=window.innerWidth;
// ctx.fillStyle="red";
// ctx.fillRect(50,50,150,100);
const walk={
    x:10,
    y:10,
    w:100,
    h:100,
    speed:2,
    dx:2,
    dy:2
}
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
    detectWalls();

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
    document.addEventListener("keyup",keyUp);
    document.addEventListener("keydown",keyDown);

    newPos();

    
    
}
// walk.on('mouseenter',image2,function(){
//     $(this).addclass('hover');
// }).on('mouseleave',image2,function(){
//     $(this).removeClass('hover');
// })
update();

