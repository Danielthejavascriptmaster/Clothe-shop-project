const blackBtn = document.getElementById("blackBtn");
const whiteBtn = document.getElementById("whiteBtn");
const greyBtn = document.getElementById("greyBtn");
const beigeBtn = document.getElementById("beigeBtn")
const blueBtn = document.getElementById("blueBtn")
const productImage = document.getElementById("productImage");

function resetActive(){
    blackBtn.classList.remove("active");
    whiteBtn.classList.remove("active");
    greyBtn.classList.remove("active");
    blueBtn.classList.remove("active");
    beigeBtn.classList.remove("active");
};

whiteBtn.addEventListener("click", function(){
    resetActive();
    whiteBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/white t shirt.webp"
})

beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/beige t shirt.jpg"
});

blueBtn.addEventListener("click", function(){
    resetActive();
    blueBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/navy blue t shirt.avif"
});

greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/grey t shirt.jpg"
});

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/black t shirt.jpg"
});

const cartBtn = document.querySelector(".cartBtn");
const jacketPrice = 5;
let money = 700;
const balanceDisplay = document.getElementById("balanceContainer");

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