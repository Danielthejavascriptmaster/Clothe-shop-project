const blueBtn = document.getElementById("blueBtn");
const greyBtn = document.getElementById("greyBtn");
const whiteBtn = document.getElementById("whiteBtn");
const blackBtn = document.getElementById("blackBtn")
const productImage = document.getElementById("productImage");

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");



function resetActive(){
    greyBtn.classList.remove("active");
    whiteBtn.classList.remove("active");
    blueBtn.classList.remove("active");
    blackBtn.classList.remove("active");
};

blueBtn.addEventListener("click", function(){
    resetActive();
    blueBtn.classList.add("active");
    productImage.src = "../assets/images/navy blue sweatpants.webp";
});


whiteBtn.addEventListener("click", function(){
    resetActive();
    whiteBtn.classList.add("active");
    productImage.src = "../assets/images/white sweatpants.webp";
});


blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
    productImage.src = "../assets/images/black sweatpants.jpg"
});


greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "../assets/images/grey sweatpants.jpg"
});


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



