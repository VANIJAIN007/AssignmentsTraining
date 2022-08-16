//function parts
//1. Function Defination
//2. Function Calling
//3. Function Argumments(optional)
//4. Return value->need to return data(optional)

// Function Versions
//1. Function without arguments and without return

function myfunction1(){ //function defination
    console.log("This is function");
    console.log("It will perform some tasks");

}
myfunction1();

//function with arguments and without return

function myfunction2(){
    console.log("This is another function");
}
myfunction2();

//2. Function with arguments and without return
function myfunction1(a,b){
    console.log("Function with data");
    console.log("Result "+(a+b));
}
myfunction1(3,2);

//3. Function with arguments and with return

function myfunction3(a,b){
    return a+b;
}

var result=myfunction3(10,2);
console.log(result);//with console

console.log("Data Received "+myfunction3(3,7));//without console , we not check type
console.log(myfunction3("hi ","Vani"));

function sayHi(message){
    // if(message){
    //     return message;
    // }
    // else{
    //     return "No data received";
    // }
    if(!message) return;
    else return message;

}
console.log(sayHi("Hello"));
console.log(sayHi());

function myfunction4(a,b){
    if(b==undefined){
         b=0;
    }
    return a+b;
}
console.log("Sum of numbers"+myfunction4(5,10));
console.log("Sum is "+myfunction4(5));

function sum(){
    console.log(arguments.length);
}
sum(1,2);
sum(1,2,2,3,4);
sum(1,2,3,4,5,6,7,8,9);

//We can also create function using constructor

var myfunction4=new Function("a","b","return a+b");
//similar to functions
console.log("Function using constructor "+myfunction4(1,2));

//to create a new Function object. it execute code globally . However if we call a constructor directly, a function is created dynamically but in a unsecured way.

//Function Expression--> it means storing function defination inside a variable is called function expression. It is also known as Anonymous Function


//var a=10;  what we write is a statement
//statement is similar to expression

var a=function(){ //NO NAME also known as anonymous function
    console.log("This is a function expression");
    return "Hello VANI";
};

console.log(a());

