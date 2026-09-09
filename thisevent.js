//⭐ this in event listener{
// when 'this' is used in a callback of event handler of something , it refers to that something}

// function changecolor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor='blue';
// }
// let heading1=document.querySelector("h1");
// heading1.addEventListener("click",changecolor);
 
// let heading3=document.querySelector("h3");
// heading3.addEventListener("click",changecolor)

// let parag=document.querySelector("p");
// parag.addEventListener("click",changecolor)

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(event){
//     console.log(event);
//     console.log("button clicked")
// });
// btn.addEventListener("dblclick",function(event){
//     console.log(event);
//     console.log("button clicked")
// });


//🏳️
//⭐ Keyboard events
// let inp=document.querySelector("input");
// inp.addEventListener("keydown", function(){
//     console.log("key was pressed")

// })
let inp=document.querySelector("input");
inp.addEventListener("keydown", function(event){
    console.log("code = ",event.code);
if(event.code=="KeyU"){
    console.log('character moves forward');
    
}else if(event.code=="KeyD"){
    console.log("character moves backward");

}u
});
