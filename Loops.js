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

 let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}