// var newDix=document.createElement('div');
// newDix.classList.add("todo");


// var newLi=document.createElement('li');
// newLi.classList.add('todoli');
// newLi.innerHTML=toinput.value;
// newDix.appendChild(newLi);

// var compbtn=document.createElement('button');
// compbtn.classList.add('compbtn');
// compbtn.innerHTML='<i class="fa fa check"</i>;
// newDix.appendChild(compbtn);


// todoList.appendChild(newDix);

// toInput.value="";

// todolist.onclick=checkBtn(e){
//     var check=e.target;//it will say what we click
//     if(check.classList[0]=="deltbtn"){
//         console.log("delete button");
//         var parentNode=check.parentElement;
//         console.log(parentNode);
//         parentNode.remove();
//     }
//     else if(check=="complbtn"){
//         console.log("Complete button pressed")
//         var parentNode=check.parentElement;
//         parentNode.classList.add("check");
//     }
//     console.log(check);
// }

// //to remove icon click we use pointer-events=none

var btn=document.querySelector("button");
var toList=document.querySelector(".todo-list");
var toInput=document.querySelector(".todo-input");
var formEvent=document.querySelector("form");
var output=document.getElementById('output');
var newStore1=document.getElementsByClassName(".newStore1");
var i=1;
var a="";
// output.innerText=toInput.val;
// localStorage.get(toInput.val);
// window.setTimeout(function () {
//     window.location.reload();
//   }, 30000);
// window.onload=function(){
    
// }

btn.onclick=function createList(e){
        e.preventDefault();
        if(toInput.value==""){
            alert("Input value can't be blank");
        }
        else{
            
            window.localStorage.setItem("my list"+i,toInput.value);
            
            i++;
            // var saveValue;
// function load(){
// saveValue = localStorage.getItem("saveValue");
// document.getElementById("saveField").value = saveValue;
// };
// function save(){
// saveValue = document.getElementById("saveField").value;
// localStorage.setItem("saveValue", saveValue);
// };

        var newDiv=document.createElement('div');
        newDiv.classList.add("divEle");

        var list=document.createElement('li');
        list.classList.add('newLi');
        list.innerHTML=toInput.value;
        newDiv.appendChild(list);


        var complbtn=document.createElement('button');
        complbtn.classList.add("completebutton");
        complbtn.innerHTML='<i class="fa-solid fa-check"></i>';
        newDiv.appendChild(complbtn);



        var deleteBtn=document.createElement('button');
        deleteBtn.classList.add("deletebutton");
        deleteBtn.innerHTML='<i class="fa-solid fa-trash-can"></i>';
        newDiv.appendChild(deleteBtn);

        // var newStore=document.createElement("div");
        // newDiv.appendChild(newStore);
        // newStore.appendChild(newStore1);

        // newStore.classList.add("storeDiv");
        // newStore.appendChild(newDiv);
        // newStore1.appendChild(newStore);





        toList.appendChild(newDiv);

        toInput.value="";

        toList.onclick=function checkBtn(e){
            var check=e.target;
            // console.log(check);
            if(check.classList[0]=="deletebutton"){
                console.log(a);
                var parentNode=check.parentElement;
                parentNode.remove();

            }
            else if(check.classList[0]=="completebutton"){

                var parentNode=check.parentElement;
                parentNode.classList.add('check');
                // var a=check.parentNode.classList;
                // console.log(a);

                console.log(parentNode);
            }
            // else if(check.classList="completebutton"){
            //     var parentNode=check.parentElement;
            //     parentNode.classList.add('check');
            //     console.log(parentNode);
            //     i
            // }
        }
        
    }
    }
    
    // var newDiv=document.createElement('div');
    // newDiv.classList.add("divEle");
    // toList.appendChild(newDiv);

    // var todoList=document.createElement('li');
    // todoList.classList.add("mylist");
    // todoList.innerHTML=toInput.ariaValueMax;

