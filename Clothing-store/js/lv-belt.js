const blackBtn = document.getElementById("blackBtn");
const greyBtn = document.getElementById("redBtn");
const productImage = document.getElementById("productImage");

function resetActive(){
    blackBtn.classList.remove("active");
    greyBtn.classList.remove("active");
};

greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/brown lv belt.webp"
})

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
   
    productImage.src = "/Clothing-store/assets/images/black lv belt.png"
});

const jacketPrice = 89.99;
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