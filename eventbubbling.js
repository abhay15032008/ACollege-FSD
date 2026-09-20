//Event Bubbling - if inner element event listener is trigger then the outer or parent element automatically trigerred .

// let div=document.querySelector("div");
// let ul=document.querySelector("ul");
// let lis=document.querySelectorAll("li");

// div.addEventListener("click",function(){
//     console.log("div was clicked");
// })
// // if we want to stop bubbling then use 
// //event.stopPropagation method
// ul.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// })

// for(li of lis){
// li.addEventListener("click",function(event){
//     event.stopPropagation();
//     console.log("li was clicked");
// });
// }
let btn=document.querySelector("button")
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText=inp.value;


        let delbtn=document.createElement("button");
        delbtn.innerText="delete";
        delbtn.classList.add("delete");
        item.appendChild(delbtn);
        ul.appendChild(item);
    inp.value="";

})
ul.addEventListener("click", function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
    }

})

