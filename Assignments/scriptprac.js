var head=document.querySelector('h1');
// var mole=document.getElementById("mole");
// var mud=document.getElementById("mud");
var start1=document.getElementById("start");
// var point=document.getElementById("point1");
// var current=document.getElementById('currentPoint')
// var points=document.querySelectorAll(".points");
// var moles=document.querySelectorAll(".mole");
var moles=document.getElementsByClassName("mole")
// var dirts=document.querySelectorAll(".dirt");
var newpagedirt=document.getElementsByClassName("dirt");
// var dirts=document.querySelectorAll('.')
var frontimg=document.getElementById('front');

function start(){
   //  mole.style.visibility="hidden";
    head.style.visibility="visible";
    start1.style.visibility="hidden";
   //   mud.style.visibility="hidden";
   //   current.style.visibility="visible";
   //   point.style.visibility="visible";
    //  for(var i=0;i<2;i++){
    //     points.style.visibility="hidden";
    //  }
    //  for(var i=0;i<6;i++){
    //     moles[i].style.visibility="visible";
    //  }
    frontimg.style.visibility="hidden";
     for(var i=0;i<6;i++){
        newpagedirt[i].style.visibility="visible";
     }
     setInterval(moleVisible,1000);
        // moles[i].onclick=incrementPoints
     

     
    }
    
         function randomNumber(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
         }
        
        //  console.log(a);
         function moleVisible(){
            // var inc=0;
            var b=randomNumber(1,6);
            moles[b-1].style.visibility="visible";
            moles[b-1].onclick = updatePoints;

            // return b;
            setTimeout(()=>{for(var i=0;i<6;i++){
                // moles[i].onclick=incrementPoints;
                moles[i].style.visibility="hidden";
            }},900)
    
         }
         var inc=0;
         function updatePoints(){
            
            inc++;
            currentPoint.textContent=inc;
            console.log(inc);
         }