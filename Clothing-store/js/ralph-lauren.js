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

window.onload = function(){
        const sizeS = document.getElementById("S");
        const sizeM = document.getElementById("M");
        const sizeL = document.getElementById("L");
        const sizeXL = document.getElementById("XL")
        const sizeXS = document.getElementById("XS")

        sizeS.addEventListener("click", function(){
           sizeS.style.background = "white";
            sizeS.style.color = "black";

            sizeM.style.background = "black";
            sizeM.style.color = "white"

            sizeL.style.background = "black"
            sizeL.style.color = "white"

            sizeXS.style.background = "black"
            sizeXS.style.color = "white"

            sizeXL.style.background = "black"
            sizeXL.style.color = "white"
        });

        sizeM.addEventListener("click", function(){
           sizeM.style.background = "white";
            sizeM.style.color = "black";

            sizeS.style.background = "black";
            sizeS.style.color = "white"

            sizeL.style.background = "black"
            sizeL.style.color = "white"

            sizeXS.style.background = "black"
            sizeXS.style.color = "white"

            sizeXL.style.background = "black"
            sizeXL.style.color = "white"
        });

        sizeL.addEventListener("click", function(){
           sizeL.style.background = "white";
            sizeL.style.color = "black";

            sizeS.style.background = "black";
            sizeS.style.color = "white"

            sizeM.style.background = "black"
            sizeM.style.color = "white"

            sizeXS.style.background = "black"
            sizeXS.style.color = "white"

            sizeXL.style.background = "black"
            sizeXL.style.color = "white"
        });

        sizeXL.addEventListener("click", function(){
            sizeXL.style.background = "white";
            sizeXL.style.color = "black";

            sizeS.style.background = "black";
            sizeS.style.color = "white"

            sizeM.style.background = "black"
            sizeM.style.color = "white"

            sizeXS.style.background = "black"
            sizeXS.style.color = "white"

            sizeL.style.background = "black"
            sizeL.style.color = "white"
        })

        sizeXS.addEventListener("click", function(){
            sizeXS.style.background = "white";
            sizeXS.style.color = "black";

            sizeS.style.background = "black";
            sizeS.style.color = "white"

            sizeM.style.background = "black";
            sizeM.style.color = "white";

            sizeL.style.background = "black";
            sizeL.style.color = "white";

            sizeXL.style.background = "black";
            sizeXL.style.color = "white";
        })
}
