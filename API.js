let jsonres='{"fact":"Approximately 1/3 cat ownres think their pets are able to read their mind","length":78}';
let validres=JSON.parse(jsonres);
console.log(validres.fact);

//to convert js into json object
let student={
    name:"abhay",
    rollno :"2500320100029",
};


// Testing APIs requests
//1.) Hoppscoth
//2.) postman

//Ajax- asynchronous java script and xml.

//Verbs
// GET - to get any information through API
// POST - to share data through API requests
// DELETE - to delete data from API requests


//Status Codes
// 200- ok
// 404 - not found
// 400 - bad requests
// 500 - internal server error;


//-------
// Http headers
//any website-->inspect-->network-->Headers.
 

// our first request
let url="https://catfact.ninja/fact";
// fetch(url)
// .then((res)=>{
//     console.log(res)
//     res.json().then((data)=>{
//         console.log(data);
//     })
// })
// .catch((error)=>{
//     console.log("error -", err);
// });

async function getfacts(){
   let res= await fetch(url);
   let data=await res.json();
   console.log(data.fact);

   let res2= await fetch(url);
   let data2=await res2.json();
   console.log(data2.fact);





}