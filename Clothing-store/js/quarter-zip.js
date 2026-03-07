const greenBtn = document.getElementById("greenBtn");
const greyBtn = document.getElementById("greyBtn");
const beigeBtn = document.getElementById("beigeBtn")
const productImage = document.getElementById("productImage");

function resetActive(){
    greenBtn.classList.remove("active");
    greyBtn.classList.remove("active");
    beigeBtn.classList.remove("active");
};

greenBtn.addEventListener("click", function(){
    resetActive();
    greenBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/green quarter zip.webp"
})

beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/beige quarter zip.jpg"
});

greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/grey quarter zip.jpg"
});


const jacketPrice = 50.99;
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