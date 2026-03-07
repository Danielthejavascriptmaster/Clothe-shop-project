const blackBtn = document.getElementById("blackBtn");
const blueBtn = document.getElementById("blueBtn");
const productImage = document.getElementById("productImage");

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");


let currentView = 1;


function resetActive() {
    blackBtn.classList.remove("active");
    blueBtn.classList.remove("active");
}



blackBtn.addEventListener("click", function () {
    resetActive();
    blackBtn.classList.add("active");

    currentView = 1;
    productImage.src = "/Clothing-store/assets/images/black trapstar jacket.webp";
});

blueBtn.addEventListener("click", function () {
    resetActive();
    blueBtn.classList.add("active");

    currentView = 1;
    productImage.src = "/Clothing-store/assets/images/blue trapstar jacket.webp";
});



rightArrow.addEventListener("click", function () {

    if (currentView === 1) {

        if (blackBtn.classList.contains("active")) {
            productImage.src = "/Clothing-store/assets/images/black trapstar jacket backside.webp";
        }

        if (blueBtn.classList.contains("active")) {
            productImage.src = "/Clothing-store/assets/images/blue trapstar jacket backside.webp";
        }

        currentView = 2;
    }
});



leftArrow.addEventListener("click", function () {

    if (currentView === 2) {

        if (blackBtn.classList.contains("active")) {
            productImage.src = "/Clothing-store/assets/images/black trapstar jacket.webp";
        }

        if (blueBtn.classList.contains("active")) {
            productImage.src = "/Clothing-store/assets/images/blue trapstar jacket.webp";
        }

        currentView = 1;
    }
});


const jacketPrice = 199.99;
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



