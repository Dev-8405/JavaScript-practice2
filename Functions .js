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