const mycheckbox=document.getElementById("mycheckbox");
const visaBtn=document.getElementById("visaBtn");
const masterCardBtn=document.getElementById("masterCardBtn");
const paypalbtn=document.getElementById("paypalbtn");
const mySubmit=document.getElementById("mySubmit");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");


mySubmit.onclick=function(){
    if(mycheckbox.checked){
        subResult.textContent="you are subscribed!";
    }
    else{
        subResult.textContent="you are not subscribed!";
    }
    if(visaBtn.checked){
        paymentResult.textContent="you are paying with visa";
    }
    else if(masterCardBtn.checked){
         paymentResult.textContent="you are paying with mastercard";
    }
    else if(paypalbtn.checked){
         paymentResult.textContent="you are paying with paypal";
    }
    else{
         paymentResult.textContent="you must select a payment type";
    }
}