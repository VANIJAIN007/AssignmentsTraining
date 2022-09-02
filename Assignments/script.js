var head=document.querySelector('h1');
var mole=document.getElementById("mole");
var mud=document.getElementById("mud");
var start1=document.getElementById("start");
var point=document.getElementById("point1");
var current=document.getElementById('currentPoint');
var source=document.getElementById('audio1');
var time=document.getElementById("timer");
var a=time.innerText;
console.log(a);
// var audio=document.getAnimations("myAudio");
// console.log(audio);
// var points=document.querySelectorAll(".points");
// var moles=document.querySelectorAll(".mole");
var moles=document.getElementsByClassName("mole")
// var dirts=document.querySelectorAll(".dirt");
var newpagedirt=document.getElementsByClassName("dirt");
// var dirts=document.querySelectorAll('.')
console.log(time);
function start(){
    mole.style.visibility="hidden";
    head.style.visibility="hidden";
    start1.style.visibility="hidden";
     mud.style.visibility="hidden";
     current.style.visibility="visible";
     point.style.visibility="visible";
     timer(a);
   //   document.getElementById('audio2').play();
   // source.play();
   //   console.log(audio);
   //   document.getElementById('myAudio').play();

    //  for(var i=0;i<2;i++){
    //     points.style.visibility="hidden";
    //  }
    //  for(var i=0;i<6;i++){
    //     moles[i].style.visibility="visible";
    //  }
     for(var i=0;i<6;i++){
        newpagedirt[i].style.visibility="visible";
     }
     var inc=0;
     setInterval(moleVisible,1000);
        // moles[i].onclick=incrementPoints
     

     
    }
    
    
         function randomNumber(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
         }
        
      //  setTimeout(()=>{
      //    time.textContent=
      //  },3000)
         function moleVisible(){
            // var inc=0;
            var b=randomNumber(1,6);
            moles[b-1].style.visibility="visible";
            // moles[b-1].onclick=document.getElementById('myAudio').onplay();
            moles[b-1].onclick = updatePoints;

            // return b;
            setTimeout(()=>{for(var i=0;i<6;i++){
                // moles[i].onclick=incrementPoints;
                moles[i].style.visibility="hidden";
            }},900)
    
         }
         var inc=0;
         function updatePoints(){
            document.getElementById('myAudio').play();

            inc++;
            currentPoint.textContent=inc;
            console.log(inc);
            
         }