function len(){
    // "Numbers to add are "+arguments.length;
    var s=0;
    var a=arguments.length;
    for(var i=0;i<a;i++){
        // var n=parseInt(prompt("Enter your number to add"));
        var n=arguments[i];
        s=s+n;
    }
    console.log(s);
    // document.write(s);
     
}
len(1,2,3,4);
len(1,2);


//Task2

function Name(){
    let firstname="Vani",
     lastname="Jain";
    return [firstname,lastname];
}

let name=Name();
console.log(name[0]);
console.log(name[1]);

//Task3

function myfunc1(message){
    if(message){
        return function ram(){"I have got my function"};
    }
    else{
        return "Function is not there";
    }
}
// var ms=myfunc1("Hello");
// console.log(ms);
console.log(myfunc1("Hello"));

//Task4

function checkString(str){
    var s=str;
    if(s.substring(0,4)!="New!"){
        s="New!"+s;
        return s;
    }
    else{
        return s;
    }
}
console.log(checkString("New! abc jkwn"));
console.log(checkString("jsbek ehbcse"));

//Task5

function addString(str){
    var a=str;
    if(a.length<3){
        return a;
    }
    // console.log(a.length);
    var first=a.substring(0,3);
    var last=a.substring(a.length-3,a.length+1);
    var addString=first+last;
    console.log(addString);
    if(addString.length>=3){
        return "We get good string";
    }

}
console.log(addString("abcjndef"));
console.log(addString("ab"));