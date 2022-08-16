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

console.log("Data Received "+myfunction3(3,7));//without console

