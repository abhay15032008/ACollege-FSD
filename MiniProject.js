let gameseq=[];
let userseq=[];
let buttons=["pink","orange", "blue","grey"];

let started=false;
let level=0;
let highscore=0;
let h2=document.querySelector("h2");
let h3=document.createElement("h3");
h3.innerText=`Highest score : ${highscore}`;
h2.insertAdjacentElement("afterend",h3);
document.addEventListener("keypress",function(){
    if(started==false){
    console.log("game started");
    started=true;
    levelup();
    }

});
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)

}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)

}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`level ${level}`;
    ////random button choose
    let randomx=Math.floor(Math.random()*4);
    let randomcolor=buttons[randomx];
    let ranbtn=document.querySelector(`.${randomcolor}`);
    // console.log(randomx);
    // console.log(randomcolor);
    // console.log(ranbtn);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(ranbtn);


}
function check(idx){

    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,600);
        }
    }
    else{
        if(level>highscore){
            highscore=level;
            h3.innerText=`Highest score : ${highscore}`;
        }
        h2.innerHTML=`game over! <b>${level}</b> <br> press any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },250);
        reset();
    }
}
function btnpress(){
    let btn=this;
    userflash(btn);

    let userColor=btn.getAttribute("id");
    
    userseq.push(userColor);
    check(userseq.length-1);


}
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}