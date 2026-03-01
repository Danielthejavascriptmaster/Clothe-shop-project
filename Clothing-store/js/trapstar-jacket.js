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