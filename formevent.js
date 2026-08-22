// let form= document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     alert("form is submitted");


// });

//⭐Extracting form data
// let form= document.querySelector("form");
// form.addEventListener("submit",function(event){
//     event.preventDefault();
//     // let inpt=document.querySelector("input");
//     let user=document.querySelector("#user");
//     let pass=document.querySelector("#pass");
//     console.log(user.value);
//     console.log(pass.value);

    

//     // console.dir(inpt);
//     // console.log(inpt.value);
//    alert(`hii ${user.value}, your password is set to ${pass.value}`);
// });


//⭐hum form ke andr ke object ko directly track kar skte hai

let form= document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
//     console.dir(form);
//     console.log(form.elements);
    
 });

//⭐ more events
//👉 change events{
//the change event occurs when the value of an Element has been changed (only  works on<input>,<textarea>and<select> elements)}

//👉 input events{
//the input events fires when the valueof an<input/> ,<select/> pr<textarea/> elements has been changed}

let user=document.querySelector("#user");
user.addEventListener("change", function(){
console.log("change event");
console.log("final value = ",this.value);
});

user.addEventListener("input", function(){
console.log("input event");
console.log("final value = ",this.value);
})

