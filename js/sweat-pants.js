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
