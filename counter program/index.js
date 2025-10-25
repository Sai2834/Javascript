const incbutton=document.getElementById("incbutton");
const resetbutton=document.getElementById("resetbutton");
const decreasebutton=document.getElementById("decreasebutton");
let count=0;

incbutton.onclick=function(){
    count++;
    countlabel.textContent=count;
}
resetbutton.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
decreasebutton.onclick=function(){
    count--;
    countlabel.textContent=count;
}