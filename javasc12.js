async function greet(){
    throw "weak conection"
  return "hello world"
}
greet()
.then((result)=>{
    console.log("promise was resolve");
    console.log("result was :", result);
})
.catch((err)=>{
    console.log("promise was rejected with err :", err)
})
// arrow function for mak async
let hello =async()=>{
    return 5;
};// returns a promise


// Await keyword
// pauses the execution of its sorroundings async function until the promises is settled (resolved or fulfilled)
 function getnum(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            let number=Math.floor(Math.random()*10)+1;
        console.log(number);
        resolve();
        },1000);
    });

 }
 async function demo(){
     await getnum();
     await  getnum();
     await getnum();
     await getnum();


 }

// reject handings



