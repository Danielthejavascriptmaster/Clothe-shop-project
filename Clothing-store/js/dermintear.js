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

const cartBtn = document.querySelector(".cartBtn");

cartBtn.addEventListener("click", function(event){
    window.alert("Item added to cart!")
})