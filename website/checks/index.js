//.checks = property that determine the checked state of and HTML checkbox
//          or radio button element

const mycheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mysubmitBtn = document.getElementById("mySubmitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mysubmitBtn.onclick = function(){
    if(mycheckBox.checked){
        //console.log("You are subscribed")
        subResult.textContent = "You subscribed";
    }else{
        //console.log("You are not subscribed")
        subResult.textContent = "You are not subscribed";
    }

    if(visaBtn.checked){
        paymentResult.textContent = "You Are paying with visa";
    }else if(masterCardBtn.checked){
        paymentResult.textContent = "You are paying with master card";
    }else if(paypalBtn.checked){
        paymentResult.textContent = "You are paying with paypal";

    }else{
        paymentResult.textContent = "You must select a payment option";
    }

    
    

}

