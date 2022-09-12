

var head=document.querySelector('h1');
var mole=document.getElementById("mole");
var mud=document.getElementById("mud");
var start1=document.getElementById("start");
var point=document.getElementById("point1");
var current=document.getElementById('currentPoint');
// var source=document.getElementById('audio1');
var time=document.getElementById("timer4");
var time1=document.getElementById("timer2");
var mole1=document.getElementById("mole1");

// var loss=document.getElementById("loss");
var audio=document.getElementById("myAudio");
// console.log(audio);
// var points=document.querySelectorAll(".points");
// var moles=document.querySelectorAll(".mole");
var moles=document.getElementsByClassName("mole")
var dirts=document.querySelectorAll(".dirt");
// var dirts=document.querySelectorAll('.')
function start(){
    mole.style.visibility="hidden";
    head.style.visibility="hidden";
    start1.style.visibility="hidden";
     mud.style.visibility="hidden";
     current.style.visibility="visible";
     point.style.visibility="visible";
     time.style.visibility="visible";
     time1.style.visibility="visible";
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
        dirts[i].style.visibility="visible";
     }
     var inc=0;
     setInterval(moleVisible,1000);
        // moles[i].onclick=incrementPoints
     
     updateCount();
     
    }
    var count=21;
    function updateCount(){
      if(count>0){
      count=count-1;
      time.innerHTML=count;
      if(count==0){
         // console.log(inc);
         mole.style.visibility="visible"; 
         mud.style.visibility="visible";     
         for(var i=0;i<6;i++){
            dirts[i].style.visibility="hidden";
         }
         mole.style.visibility="visible"; 
            mud.style.visibility="visible";  


            
         if(inc<10){
            console.log("loss");
            time1.style.visibility="hidden";
            time.innerHTML="Game Over";
            // loss.style.visibility="visible";
               
         }
         else{
            console.log("win");
            time.innerHTML="You win";
            time1.style.visibility="hidden";
         }
      }
      // time.innerHTML=count;
      setTimeout(updateCount,1000);
   }
    }
         function randomNumber(min,max){
            return Math.floor(Math.random()*(max-min+1)+min);
         }
        
      //  setTimeout(()=>{
      //    time.textContent=
      //  },3000)
         function moleVisible(){
            // var inc=0;
            if(count>0){
            var b=randomNumber(1,6);
            // moles[b-1].onclick=document.getElementById('myAudio').onplay();

            moles[b-1].style.visibility="visible";
            console.log(count);
            moles[b-1].onclick = updatePoints;

            // return b;
            setTimeout(()=>{for(var i=0;i<6;i++){
                // moles[i].onclick=incrementPoints;
                moles[i].style.visibility="hidden";
            }},900)
         }
    
      }
         var inc=0;
         function updatePoints(){
            // document.getElementById('myAudio').play();

            inc++;
            currentPoint.textContent=inc;
            console.log(inc);
            
         }
         function moleInvisible(){
            var b=randomNumber(1,6);
            moles[b-1].style.visibility="hidden";
         }







