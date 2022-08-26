var canvas=document.getElementById('canvas');
var ctx=canvas.getContext('2d');

const image1=document.getElementById("beetle");
const image2=document.getElementById("coin");
// canvas.width=window.innerWidth;
// ctx.fillStyle="red";
// ctx.fillRect(50,50,150,100);
const coin1={
    x:40,
    y:50,
    w:100,
    h:200,
    size:40

};
const beetle={
    x:10,
    y:2,
    w:300,
    h:200,
    speed:5,
    dx:2,
    dy:2
    
};

// coinImage();
// coinImage1();
function coinImage(){
    ctx.drawImage(image2,coin1.x+400,coin1.y,coin1.w,coin1.h);
    
}
function coinImage1(){
    ctx.drawImage(image2,coin1.x+400,coin1.y+300,coin1.w,coin1.h);
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
function movebeetle(){
    ctx.clearRect(0,0,canvas.clientWidth,canvas.clientHeight)
    beetleimage();
    beetleimage1();
    beetleimage3();
    coinImage();
    coinImage1();
    
    beetle.x+=beetle.dx;
    if(beetle.x==canvas.width){
        beetle.x=0;
    }
    requestAnimationFrame(movebeetle);
}

// function coinImages(){
//     coinImage();
//     // coinImage1();
// }
function update(){
    
    // beetleimage();
    // beetleimage1();
    // beetleimage3();
    movebeetle()

    

}

// movebeetle();
update();