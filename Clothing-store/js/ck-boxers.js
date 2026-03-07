const jacketPrice = 30.99;
let money = 700;
const balanceDisplay = document.getElementById("balanceContainer");
const cartBtn = document.querySelector(".cartBtn");
const thankYouPopup = document.getElementById("thankYouPopup");

cartBtn.addEventListener("click", function(){
    money -= jacketPrice;
     window.alert("Item added to cart!")

    balanceDisplay.textContent = "Balance: £" + money.toFixed(2);


    thankYouPopup.style.opacity = 1;

    setTimeout(() => {
        thankYouPopup.style.opacity = 0;
    }, 2500);

    if(money < -200){
        window.alert("blud go sell your organs at this point, go get a job you broke ahh bum loser.")

    } else if(money < 0){
        window.alert("yo blud be carful you are in debt try to not go into more debt.")
    } else{
        money = money - 1;
    }

     
    
})