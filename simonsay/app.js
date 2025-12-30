let game=[];
let user=[];
let started=false;
let level=0;
let h2=document.querySelector("h2");
let btns=["red","yellow","green","purple"];

document.addEventListener("keypress",function () {
    if (started===false){
        console.log("Game Started");
        started=true;
        levelup();
    }
} );
function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 100);
}


function levelup(){
    level++;
    h2.innerText=`Level ${level}`;
    let idx=Math.floor(Math.random()*4);
    let randclr=btns[idx];
    let randbtn=document.querySelector(`.${randclr}`);
    game.push(randclr);
    console.log(game);
    btnflash(randbtn);
}

function checkans(){
    let idx=user.length-1;
    if (user[idx]===game[idx]){
        if(user.length===game.length){
            setTimeout(levelup,1000);
            user=[];
        }
    }
    else{
        h2.innerHTML=`Game Over! Your score was <b>${level}</b> <br> Press Any Key to Restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor="white";
        }, 200);
        reset();
}}

function btnpress(){
    console.log("Button Pressed");
    let btn=this;
    btnflash(btn);
    userclr=btn.getAttribute("id");
    user.push(userclr);
    checkans();
}
let allbtns=document.querySelectorAll(".btn");
allbtns.forEach(function (btn) {
    btn.addEventListener("click",btnpress);
});

function reset(){
    game=[];
    user=[];
    started=false;
    level=0;
}