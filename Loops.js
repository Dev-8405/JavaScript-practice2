// for Loop 

for (let i = 0; i < 5;i++){
    console.log(i);
}

for (let i =10; i>=0; i--){
    console.log(i);
}

for (let i =2; i< 20; i+=2){
            console.log(i);    
}
for (let i = 1; i<=10; i+=2){
    console.log(i);
}

let num =5;

for (let i =1; i<=10; i++){
    console.log(num + "*" +i +"="+ num*i);
}

let num2 = 10;

for (let i =1; i <=10; i ++){
    console.log(num2 +"*" + i +"=" +num2*i);
}

let n = 5;
let fact =1;

for (let i =1; i<=n; i++){
    fact = fact * i;
}
console.log("fact= " + fact);


let n3 = 6;
let fact2 =1;
 for (let i =1; i<=n3; i++){
    fact2 = fact2 * i;
 }
 console.log("fact2=" + fact2);

                           //  while Loop 

//  let i = 1;

// while (i <= 5) {
//     console.log(i);
//     i++;
// }

// let d = 1;
// while (d <= 10) {
//     console.log(d);
//     i++;
// }

// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }

// let i = 2;

// while (i <= 20) {
//     console.log(i);      
//     i += 2;
// }

// let num3 = 5;
// let i = 1;

// while (i <= 10) {
//     console.log(num3 + " * " + i + " = " + (num3 * i));
//     i++;
// }


     // .do...while Loop 

// let i = 1;
// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// let i = 2;
// do {
//     console.log(i);
//     i += 2;
// } while (i <= 20);

let i = 10;
do {
    console.log(i);
    i++;
} while (i <= 5);


//   for...in Loop 

let student = {
     name :"dev",
     city :"pune",
     age : "22"
};

 for (let name in student){
    console.log(name);
 }

 let student2 ={
    name :"smit",
    age :"25",
    city :"banglore"
 }
  for (let key in student2){
    console.log(key +":", student[key]) 
  }

  let employee= {
    name :"hardik",
    salary :"25000",
    dept :"IT",
    experince :"2"
  }

  for (let key in employee){
    console.log(key +":", employee[key])
  }

  let fruitrs =["apple", "banana", "grapes"]

  for (let index in fruitrs){
    console.log(index);
  }

    //    for...of Loop 

// let fruits = ["Apple", "Banana", "Mango", "Orange"];
// for (let fruit of fruits) {
//     console.log(fruit);
// }

// let numbers =[10,20,30,40,50];
// for (let num of numbers){
//     console.log(num)

// }

// let number =[10,20,30, 40 , 50]
// let sum =0 

// for(let num of number){
//     sum = sum + num;
// }
//  console.log("total sum =" + sum);


//  let numbers =[10,20,30,40,50];
//  let largest =numbers[0];

//  for (let num of numbers){
//    if(num > largest){
//     largest =num;
//    }
 
//  }

//  console.log("largest numbers ="+largest)

 let numbers =[20,30, 40, 50 ,60];
 let minimum = numbers[0];

 for(let num of numbers){
    if(num < minimum){
        minimum = num;
    }
 }
  
 console.log("minimum numbers ="+minimum)

 let word ="Javascripts";

 for(let letter of word ){
    console.log(letter);
 }

//    Controlling Loops with break and continue 


// for (let i = 1; i <= 10; i++) {

//     if (i === 5) {
//         break;
//     }

//     console.log(i);
// }


for (let i =1; i<=5; i++){
    if ( i === 3){
        continue;
    }
}
console.log(i);