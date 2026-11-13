// Asynchronous JavaScript



// setTimeout()

console.log("start");

setTimeout(()=>{
    console.log("hello after 2 sec ");
})
console.log("end");


setTimeout(()=>{
    console.log("good morning");
    console.log("good afthernoon");
    console.log("good evening");

});

let name ="dev";

setTimeout(() => {
    console.log("hey "+ name  );
});

function hello(){
    console.log("hello dev ");

}
setTimeout( hello);

                        //    setInterval

    // setInterval(()=>{
    //     console.log("hello js");
    // },2);   
    
//  let names = "Dev";
// setInterval(() => {
//     console.log("Hello " + names);
// }, 3000);


//    JavaScript Callbacks

function greet(callback) {
    console.log("Hello!");

    callback();
}

function message() {
    console.log("Welcome to JavaScript!");
}

greet(message);

function greet(name, Callback) {

    console.log("Hello " + name);

    Callback();
}

greet("Dev", () => {
    console.log("How are you?");
});