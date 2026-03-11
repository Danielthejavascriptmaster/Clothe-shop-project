const greenBtn = document.getElementById("greenBtn");
const blackBtn = document.getElementById("blackBtn");
const orangeBtn = document.getElementById("orangeBtn");
const redBtn = document.getElementById("redBtn");
const blueBtn = document.getElementById("blueBtn");
const pinkBtn = document.getElementById("pinkBtn");
const productImage = document.getElementById("productImage");

function resetActive(){
    blackBtn.classList.remove("active");
    orangeBtn.classList.remove("active");
    greenBtn.classList.remove("active");
    blueBtn.classList.remove("active");
    redBtn.classList.remove("active");
    pinkBtn.classList.remove("active");
};

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/denim tear black shorts.webp"
})

greenBtn.addEventListener("click", function(){
    resetActive();
    greenBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/denim tear green.jpg"
});

orangeBtn.addEventListener("click", function(){
    resetActive();
    orangeBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/denim tear orange.webp"
});

blueBtn.addEventListener("click", function(){
    resetActive();
    blueBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/denim tear blue.webp"
});

pinkBtn.addEventListener("click", function(){
    resetActive();
    pinkBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/denim tear pink.webp"
});

redBtn.addEventListener("click", function(){
    resetActive();
    redBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/denim tear red.webp"
});

const jacketPrice = 40;
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