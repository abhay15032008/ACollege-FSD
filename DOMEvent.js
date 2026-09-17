// //DOM Events
// //events are signals that something has occured (user inputs/actions)

// let btns = document.querySelectorAll("button");
// for (btn of btns) {
//   // btn.onclick=sayhello;//there only assinging func value not calling function
//   // btn.onclick=sayname;
//   // btn.addEventListener("click",sayhello);
//   // btn.addEventListener("click", sayname);
//   btn.addEventListener("dblclick", function () {
//     console.log("you double clicked");
//   });
// }
// function sayhello() {
//   alert("hello!!");
// }
// function sayname() {
//   alert("Abhay Singh!");
// }
//🏳️

//⭐Event Listener
// 💨 syntax{
// Element.addEventListener(event,callback)
// }

// let p=document.querySelector("p");
// p.addEventListener("click", function(){
//     console.log("clicked");


// })
// let box=document.querySelector(".box");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside box")
// })

//🏳️

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

let btn=document.querySelector("button");
btn.addEventListener("click",function(event){
    console.log(event);
    console.log("button clicked")
});
btn.addEventListener("dblclick",function(event){
    console.log(event);
    console.log("button clicked")
});

//🏳️
//⭐ Keyboard events







