window.onload = function(){
    
    setTimeout(function() {
        document.getElementById("cookie-popup").style.display = "block";
    }, 10000);

        
    document.getElementById("accept-btn").onclick = function() {
        document.getElementById("cookie-popup").style.display = "none";
    }
    document.getElementById("reject-btn").onclick = function() {
    document.getElementById("cookie-popup").style.display = "none";
 }

}

const form = document.querySelector(".newsletter-form");
const emailInput = document.getElementById("input");
const logo = document.querySelector(".logo");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const emailValue = emailInput.value;

    if(emailValue === "Danielisthegoat@gmail.com"){
        window.alert("WOW you are really smart maybe you could get a discpunt on one of the products")
        console.log("choose any of the products for free, you welcome blud")
    }

    if(emailValue === "Abbasisthegoat@gmail.com"){
        window.alert("Nah who told you that he is really bad at fifa")
    }

    if(emailValue === "Mikaelisthegoat@gmail.com"){
        logo.textContent = "Bro is not the goat"
    }

});