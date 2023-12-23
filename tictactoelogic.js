let ting=new Audio("news-ting-6832.mp3");
let gameover=new Audio("violin-lose-1-175615.mp3");
let turn = "X";
let finish=false;

const changeturn = () =>{
    return turn=="X"?"0":"X"
}
const checkwin = () =>{
    let boxtext=document.querySelectorAll(".boxtext"); 
   
let wins=[
    [0,1,2,10,21,0],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8,20,20,42
    ],
    [2,4,6]

]
wins.forEach((e)=>{
    if((boxtext[e[0]].innerText == boxtext[e[1]].innerText) && (boxtext[e[1]].innerText==boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !=="")){
        document.querySelector(".info").innerText=boxtext[e[0]].innerText+" Won";
        finish=true;
        gameover.play();
        document.getElementsByTagName("img")[0].style.width="100px";
        document.querySelector(".line").style.transform=`translate(${e[3]}px , ${e[4]}px) rotate(${e[5]}deg)`;
        document.querySelector(".line").style.width="85%"
    }
})
}

let boxes=document.querySelectorAll(".box");
// console.log(boxes)
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector(".boxtext");
    element.addEventListener("click",()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=changeturn();
            checkwin();
            ting.play();
            if(!finish){
            document.querySelector(".info").innerHTML="Turn for "+turn;
            }
        }
    })
})

let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{
    let boxtext=document.querySelectorAll(".boxtext"); 
    Array.from(boxtext).forEach((e)=>{
        e.innerText="";
    });
    turn="X";
    finish=false;
    document.querySelector(".info").innerHTML="Turn for "+turn;
    document.getElementsByTagName("img")[0].style.width="0px";
    document.querySelector(".line").style.width="0"
})