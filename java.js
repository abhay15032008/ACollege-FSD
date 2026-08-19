//DOM
//Document Object Model
// it allows us to manipulate webpages content (HTML)
// let smallimg=document.getElementsByClassName("oldImg")
// ;
// for(let i=0;i<smallimg.length;i++){
//     smallimg[i].src="assets/spiderman_img.png";
//     console.log(`value of image no.${i} is changed`);

// const { Children } = require("react")

// }

// selcting element by Id

// selecting elements by className

// selecting elements by tagName

// query selectors{

// 1️⃣document.querySelector('p');// select first p elements
// 2️⃣document.querySelector('#myId');//selects first elements with id=myId
// 3️⃣document.querySelector('.myClass');//selects first elements with class= myClass
// }
// console.dir(document.querySelector('h1'));
// console.dir(document.querySelector('#description'));
// console.dir(document.querySelector('.oldImg'));//
// console.dir(document.querySelectorAll("div a"));

// //queryselector ALL (selects all tags/objects)
// console.log(document.querySelectorAll('p'));

//Using specific properties and methods

// 1) innerText- shows the visible text contained in a node.
// 2) textContent- shows all full text.
// 3) innerHTML- shows the full markup.

//Manipulating Attributes
//obj.getAttributes(attr)
// obj.setAttribute(attr ,val)

//this are known as getter and setter

//Manipulating styles
//we can access easily the inline styles

//Navigation.......
// 1) parent element
// 2) Children
// 3) previous element sibling/next element sibling
//.....
// ul.children;
// ul.children[1].previousElementSibling
// ul.children[1].nextElementSibling
// let img=document.querySelector('img')
// img.previousElementSibling
// img.previousElementSibling.style.color="red";

//Adding elements......
// document.createElement('p');
// 1️⃣ appendChild(element)
// 2️⃣ append(element)
// 3️⃣ Prepend(element)
// 4️⃣insertAdjacent(Where,element){
// insertAdjacentElement(position, element)

// position
// A string representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:

// 'beforebegin':  Before the targetElement itself.
// 'afterbegin':  Just inside the targetElement, before its first child.
// 'beforeend':  Just inside the targetElement, after its last child.
// 'afterend':   After the targetElement itself.
// element

//}

// question 1️⃣
// create a<p> with red text says "hii i'm red</p>
//  let para=document.createElement('p');
// para.innerText="hey im red";
//  document.querySelector('body').appendChild(para);
//  //<p class=​"red">​hey im red​</p>​
//  para.classList.add('red');

//Question2️⃣

// let div=document.createElement('div');
// let h1=document.createElement('h1');
// let para1=document.createElement('p');

// h1.innerText="I'm a div";
// para1.innerText="Me too";

// div.append(h1);
// div.append(para1);
// div.classList.add("box");
// document.querySelector("body").append(div);

//Question3️
// let button = document.createElement("button");
// let input = document.createElement("input");
// btn.innerText="click me";
// document.querySelector("body").append(btn);

//Question4️⃣
// Add following attributes to the element:
// -Change place holder value of input to “username”.
// -Change the id of button to “btn”.

// button.setAttribute("id", "btn");
// input.setAttribute("placeholder", "username");

//Question5️⃣

// let btn=document.createElement("button")
// btn.innerText="click me";
// btn.classList.add("white");
// document.querySelector("body").append(btn);

//Question6️⃣
// let h1=document.createElement("h1");
// h1.innerText="DOM practice";
// h1.classList.add("purple");
// document.querySelector("body").append(h1);

//Question7️⃣
let p = document.createElement("p");
p.innerText = "Abhay Singh DOM practice";
p.classList.add("purple");
document.querySelector("body").append(p);
