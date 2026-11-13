// // Promises & Async/Await in JavaScript

// function fetchdata(){
//     return new Promise((resolve) => {
//     setTimeout(()=> resolve("data fetch"),2000);
//     }
// )};

// async function getdata() {
//     let data =await fetchdata();
//     console.log(data);
    
// }
//  getdata();

//  function getstudent(){
//     return new Promise((resolve)=>{
//         setTimeout(()=> resolve("student data recevived"), 3000);
//     });
//  }
  
//  async function studentdisplay() {
//     console.log("fetching student data");
//     let result = await getstudent();
//     console.log(result);
    
//  }
//  studentdisplay();



// function login(){
//     return new Promise((resolved)=>{
//         setTimeout(() => { resolved("login sucessful...");
            
//         }, 3000);
//     });
// }

//  async function checklogin(){
//     console.log("checking login...")
//     let result = await login();
//     console.log(result);
//  }

//  checklogin();

// function placeorder(){
//     return new Promise((resolved)=>{
//         setTimeout(()=>{resolved("order placed succesfully ");

//         }, 2000);
//     })
// }

// async function orderdetails() {
//     console.log("placing your order")
//     let result = await placeorder();
//     console.log(result);
//     console.log("thank for shopping ");
    
// }
// orderdetails();


// function recharge(){
//     return new Promise((resloved)=>{
//         setTimeout(() => {resloved("recharge sucessful..")
            
//         }, 2000);
//     })
// }

// async function checkrecharge(){
//     console.log("processing recharge.. ")
//     let result = await recharge();
//     console.log("thank you...")
    
// }

// checkrecharge();


function downloadfile(){
    return new Promise((resloved)=>{
        setTimeout(()=> {resloved (" downloading file sucessfully...")},
    2000);
    });
}

async function startdownload () {
    console.log("downloading file...")
    let result = await startdownload();   
}

startdownload();

