const blueBtn = document.getElementById("blueBtn");
const beigeBtn = document.getElementById("beigeBtn");
const whiteBtn = document.getElementById("whiteBtn");
const productImage = document.getElementById("productImage");

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");

let whiteView = 1;

rightArrow.addEventListener("click", function(){

if(whiteBtn.classList.contains("active") && whiteView ===1){
    productImage.src = "/Clothing-store/assets/images/ralph lauren cable knit sweater white backside.jpg";
    whiteView = 2;
}   

else if(whiteBtn.classList.contains("active") && whiteView === 2){
    productImage.src = "/Clothing-store/assets/images/ralph lauren cable knit sweater white third view.jpg";
    whiteView = 3;
}
});

leftArrow.addEventListener("click", function(){
    if(whiteBtn.classList.contains("active"))
    productImage.src = "/Clothing-store/assets/images/ralph lauren cable knit sweater white.jpg";
});

function resetActive(){
    beigeBtn.classList.remove("active");
    whiteBtn.classList.remove("active");
    blueBtn.classList.remove("active");
};

blueBtn.addEventListener("click", function(){
    resetActive();
    blueBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/ralph lauren cable knit sweater navy blue.jpg"
})

whiteBtn.addEventListener("click", function(){
    resetActive();
    whiteBtn.classList.add("active");
    whiteView = 1;
    productImage.src = "/Clothing-store/assets/images/ralph lauren cable knit sweater white.jpg"
});


beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/ralph lauren cable knit sweater beige.jpg"
});

const jacketPrice = 70.99;
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


