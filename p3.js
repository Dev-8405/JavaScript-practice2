//number
let age =25;

//sring
let name ="dev chandegara"

// boolean
let isJavaScriptFun = true; let isRaining = false; 

//	Undefined 
let x; 

// object 
  let person = {
    firstName:"dev", 
    lastName:"chandegara",
     age:25};
     console.log(person.firstName);
     console.log(person.lastName);
     console.log(person.age);

   // Array

   let fruits = ["apple", "banana", "orange","mango"];
   console.log(fruits[0]);
   console.log(fruits[1]);
   console.log(fruits[2]);
   console.log(fruits[3]);

   //Function 

   function greet(name){
    console.log("Hello " + name);
   }
   console.log(greet("virat"));
  
   //let Date 

    let today = new Date();
    console.log(today);

    //    Conditional Statements 


let a = 20;

if (age >= 18) {
    console.log("You are eligible to vote");
}


let number =10;
if(number > 2){
    console.log("number is positive");
}

let marks =65;
if(marks>35){
    console.log("you are pass");
}
 

// let num =10;
// if(num % 2 == 0){
//     console.log("number is even");
// }

// let num = 7;
// if(num % 2!=0){
//     console.log("number is odd");



// let a = 50;
// let b = 30;

// if (a > b) {
//     console.log("A is greater than B");

 
    //if...else Statement 

let Age = 16;
if(Age >=18){
    console.log("you are eligible to vote");
}else{
    console.log("you are not eligible to vote");
}


 let marks3 = 30;
 if(marks3 >= 35){
    console.log("you are pass");
 }else {
    console.log("you are fail");
 }

 let number4 = -10;

if (number4 >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
} 

// let a = 20;
// let b = 30;

// if (a > b) {
//     console.log("A is Greater");
// } else {
//     console.log("B is Greater");
// }

let temperature = 20;

if (temperature >= 30) {
    console.log("Hot Weather");
} else {
    console.log("Cold Weather");
}


   // if...else if...else Statement 

 let score = 75;

if (score >= 90) {
    console.log("Grade A");
} else if (score >= 80) {
    console.log("Grade B");
} else if (score >= 70) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}



let age4 = 16;
if( age4 < 13){
    console.log("You are a child");
}else if (age4 < 20){
    console.log("You are a teenager");
}else if (age4 < 60){
    console.log("you are an adult");
}else {
    console.log("you are a senior citizen");
}
