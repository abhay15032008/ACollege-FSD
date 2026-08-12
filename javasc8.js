//Array methods

//forEach function => arr.forEach(some function definition or name)

// let arr=[1,2,3,4,5];
//  let print =function(el){
//     console.log(el);
//  };

//  arr.forEach(print);

//  //direct provide function definition
// arr.forEach((el)=>{
//     console.log(el);//array func used
// });


// let students=[{
//     name:'abhay',
//     marks:95,
// },
// {
//     name:'kanak',
//     marks:85,

// },
// {
//     name:'kli',
//     marks:80,
// }];
// // arr.forEach((student)=>[
// //     console.log(student.marks)
// // ])
// //stuents k makrs ko gpa mein convert karte hai
// let gpa=students.map((el)=>{
//     return el.marks/10;
// }
//)


//Map function

// let num=[1,2,3,4];
// let double=num.map((el)=>{
//     return el*5;
// });

// filter function
// let nums=[1,2,3,4,5,6,7,8,9];
// let ans=nums.filter((el)=>{
//     //return el%2!=0;
//     return el>5;
// });


//Every function{

// returns true if every elements of array gives true for some functiopn . else returns false}

// const array=[2,4,6,8];
//  let element =array.every((el)=>
//     (el%2==0);
//console.log(element)
    
// );

//Reduce funcion
//arr.reducer (reducer function with 2 variables for ( accumulator , element));

// let nums=[1,2,3,4,5,6,7,8];
// let finalval=nums.reduce((res,el)=> {
//     console.log(res);
//     return res+el;

// });
// console.log(finalval);


//Ques: print the max no. in array
 //let  arr=[1,3,5,6,70,12,30,76,40];
// let max=-1;
// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }
// console.log(max);

//now doing it by reduce method
// let max= arr.reduce((max,el)=>{
//     if(max<el){
//         return el;

//     }else{
//         return max;
//     }
// });
// console.log(max);

//Ques: check all no. in array are multiples of 10 or not.
// let max=-1;
// let multi=arr.reduce((multi,el)=>{
//     if(el % 10===0){
//         console.log(multi ,el)
//         return multi;
        

//     }else{
//         console.log("not multiple of 10", el);
//         return multi;
//     }
// },true);


//Ques: 
// let nums=[12,40,32,21,-24,-21];
// function getmin(nums){
//     let min = nums.reduce((min, el)=>{
//         if( min<el ){
//             return min;
//         }else{
//             return el;
//         }
//     });
//     return min;
// }

//Default parameters........
// function sum(a,b=2){
//       return a+b;
// }

//spread {(...)this is syntax.

// expands an iterable into multiple values}
// let arr=[1,2,-8,4,5,-3,7,-1,12,15];
// let minimum =Math.min(...arr);
// console.log(minimum);

// //another method
// let arrr=[1,2,3,4,5,-4,-21,12];
// let min=arrr[0];
// for(let i=0;i<arrr.length;i++){
//     if(arrr[i]<min){
//         min=arrr[i];
//     };
// };
// console.log(min)


//spread used for array literals
// let arr=[1,2,3,4,5,6,7];
// let newarr=[...arr];
// console.log(newarr);

// spread used with object literals

// const data={
//     email: "abc@gmail.com",
//     password: 12345678,};
// const datacopy={...data , id:23,};


// let arr=[1,2,3,4,5,6,7];
// let obj1={...arr};
// let arr2={..."hello"};

//Rest { array methods}
// Rest allows a function to take an indefinite number of arguments and bundles them in a array

// function sum (...args){
//     for(let i=0;i<args.length;i++){
//         console.log("you gave us" , args[i]);
//     };
// };
function min(a,b,c,d){
     console.log(arguments);
    console.log(arguments.length);
}

//practice ques.
function sum(...args){
    return args.reduce((sum,el)=>sum+el);

}

//practice ques.
function min(msg,...args){
    console.log(msg);
    console.log(text);
    return args.reduce((min,el)=>{
        if(min>el){
            return el;
        }else{
            return min;
        }
    })
}

//Destructuring  "Array Destructuring"
//storing values of arrays into multiple variavles;
 let names=['Abhay ', "kanak", "kli", "palak"];
let[ winner,runnerup,...secondrunnerup]=names;


//Object destructuring
const student={
    name:"karan",
    age:14,
    class:9,
    subjects: ["maths", "physics", "chemistry"],
    username:"abhay15032008",
    password:"12345678"
};
// let username=student.username;
// let password=student.password;  //old method
let{username: user,password: secret, city: location="fatehpur"}=student;

















