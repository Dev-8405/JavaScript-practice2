    //       // Error Handling (try...catch)
     
    // try{
    //     let x=y;
    //     console.log(x);

    // }  catch(error){
    //     console.log("error",error.message);
    // }
    // console.log("progarm continues...");

    // try{
    //     let a = 10;
    //     let b = 20;
    //     console.log(a +b );
    // } catch(error ){
    //     console.log(error.message);
    // }

            //   LocalStorage & SessionStorage
  
// // Store data
// localStorage.setItem("name", "John");

// // Get data
// console.log(localStorage.getItem("name"));         
    
                 //  Prototype & Inheritance in JavaScript

//    function person(name){
//     this.name =name;

//    } 
   
//    person.prototype.greet=function (){
//     console.log("hello",+this.name);
//    };

//    let john =new person("john");

//    john.greet();

//  function student(name,age){
//     this.name= name;
//     this.age = age;
//  }

//  student.prototype.display=function(){
//     console.log("name"+ this.name);
//     console.log("age"+ this.age);
//  };

//  let student1 = new student("rahul",21);
//  let student2 = new student("ajay", 22);

//  student1.display();
//  student2.display();

 function car(brand, color){
    this.brand= brand;
    this.color= color;
 }

 car.prototype.start=function(){
    console.log(this.color +"car is starting");
 }

 let car1 = new car ("BMW", "black");
 let car2 = new car("audi", "white");

 car1.start();
 car2.start();

 function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + " is eating");
};

function Dog(name) {
    Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let dog1 = new Dog("Tommy");

dog1.eat();

//    Event Loop & Call Stack

console.log("Start");
setTimeout(() => {
    console.log("Async Task");
}, 0);

console.log("End");
