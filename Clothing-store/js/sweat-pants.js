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


const cartBtn = document.querySelector(".cartBtn");

cartBtn.addEventListener("click", function(event){
    window.alert("Item added to cart!")
})



