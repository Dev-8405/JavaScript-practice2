//  Function Declaration (Named Function) 


function multiply(a, b){
    return a * b
}
 console.log(multiply(3, 4));

 function student(){
    console.log("name :Dev");
    console.log("age :22");
    console.log("couse :BCA");
 }

 student();

function addition(a , b){
    console.log("addition =", a + b);
}

addition(10, 20);
addition(40, 50);
addition(2 , 4);

function CalculateSqure(num){
    return num * num;

}

console.log("squre =", CalculateSqure(5));
console.log("squre =", CalculateSqure(3));

function checknumber(num){
    if(num > 0){
        console.log("positive number");
    }
    else if ( num < 0 ){
        console.log("nagitive number"); 
    }
    else {
        console.log(any);
    }

}

checknumber(10);
checknumber(-4);
checknumber(4);

function factorial(num) {

    let fact = 1;

    for (let i = 1; i <= num; i++) {

        fact = fact * i;

    }

    return fact;
}

console.log("Factorial =", factorial(5));
console.log("Factorial =", factorial(4));
console.log("Factorial =", factorial(3));

     // Function Expression (Anonymous Function) 

     const divide =function (a , b){
      return a / b;
     }
     console.log(divide(10, 2));

    // Arrow Function (ES6) 

// let greet = () => {
// console.log("Hello JavaScript");
// };

// greet();

//   Function Parameters & Arguments 

        //    1. Default Parameters (ES6) 


function greet(name="guest"){
     console.log("hello"+ name);
  }   

greet("Dev");
greet();

function student( name , age ="21"){
    console.log("name", name );
    console.log("age", age );
}

student("dev",22);
student("rahul");

function addition(a = 10, b = 20) {
    return a + b;
}

console.log(addition(5, 15));
console.log(addition());
console.log(addition(50));


      //    Rest Parameters (... Operator) 

 function myNumbers(...numbers) {
 console.log(numbers);
}

myNumbers(10, 20, 30, 40, 50);

function add(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum = sum + num;
    }

    console.log("Addition =", sum);
}

add(10, 20, 30);
add(5, 10, 15, 20);



//    Function Scope & Closures 

// Function Scope 


function showmessage() {
    let message = "hello!";
    console.log(message);
}

showmessage();

function calculate() {
    let a = 10;
    let b = 20;

    let sum = a + b;

    console.log("Sum =", sum);
}

calculate();


// Closures (Functions Inside Functions)

// function outerFunction() {
//     let name = "Dev";

//     function innerFunction() {
//         console.log(name);
//     }

//     return innerFunction;
// }

// let result = outerFunction();

// result();

function counter() {
    let count = 0;

    return function() {
        count++;
        console.log(count);
    };
}

let result = counter();

result();
result();
result();

    //   Callback Functions 

function processUserInput(name, callback) {
console.log(`Processing user: ${name}`);
callback();
}

function displayMessage() {
    console.log("User processed successfully!");
}

processUserInput("John", displayMessage);


  // Higher-Order Functions 

function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    };
}

const double = multiplyBy(2);

console.log(double(5));