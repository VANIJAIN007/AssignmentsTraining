window.onload=function(){
    console.log("script called")
    setTimeout(()=>{
        stopLoader();
    },1000);
};

function stopLoader(){
    document.querySelector('.container').style.display="none";
    document.getElementById("todo").style.display="block";
}
