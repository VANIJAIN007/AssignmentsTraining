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


//Self-Invoking Function

(function(){
    console.log("This is self Invoking function and its get called itself");
})();


// Function Hoisting

sayHello(5,10);

function sayHello(a,b){
    console.log("Result "+(a+b));
}

// Add(5,10);
// var Add=function(){
//     return a+b;
// };

//Javascript Scope:Visibility of Code

//There are three types of scope
// 1. Block scope->ES5 there is no block,its available in ES6(let and const)
// 2. Function scope->only in function
// 3.Global scope->outside also

function Scope1(){{
    var a=10;

    console.log(a);
}
console.log(a);//available also in this as var is a global scope
}
Scope1();

function Scope2(){
    var b=10;
    console.log(b);
}
// console.log(b);

Scope2();


// a function which is defined inside is called callback function
function Scope3(){
    var b=10;
    console.log("Inside scope3");

    console.log(b);
    function Scope4(){ 
        var b=20;
        console.log("Inside scope4");
        console.log(b);
    }
    Scope4();
    //console.log(b); //lexical scope ->which is tested inside a function
}
Scope3();
console.log("Outside scope");
// console.log(b);

var c=30;
function Scope5(){
var b=10;
console.log("Inside scope3");

console.log(b);
function Scope6(){ 
        var b=20;
        console.log("Inside scope4");
        console.log(b);
        console.log(c);
    }
    Scope6();
    
    
}
Scope5();
console.log("Outside cope");
    console.log(c);

console.log("Checking ")
    function checkvar(){
        data=20;//without var treated as global varible
        console.log(data);
    }
    checkvar();
    console.log(data);

    // console.log("Checking1 ")
    // function checkvar(){
    //     let data1=20;//without var treated as global varible
    //     console.log(data1);
    // }
    // checkvar();
    // console.log(data);


    //Alias ->
    //refersence of add function function is also stored in sum
    //so we call the function using add() as well as sum()
    function add(a,b){
        return a+b;
    }

    var sum=add;
    console.log(sum(5,1));
    console.log(add(6,2));


//Passing function to a function
function avg(a,b,sum){
    return sum(a,b)/2;
}    
function sum(a,b){
    return a+b;
}
var add=sum;
var result=avg(5,10,add);
console.log("Result for finding average "+result);

