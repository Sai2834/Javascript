let ind;
document.getElementById("mySubmit").onclick=function(){
    ind=Number(document.getElementById("myText").value);
    if(ind>=18){
       document.getElementById("resultElement").textContent="eligible to vote at your age "+ind;
    }
    else{
        document.getElementById("resultElement").textContent="not eligible to vote";
    }

}