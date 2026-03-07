const blackBtn = document.getElementById("blackBtn");
const greyBtn = document.getElementById("redBtn");
const productImage = document.getElementById("productImage");

function resetActive(){
    blackBtn.classList.remove("active");
    greyBtn.classList.remove("active");
};

greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/brown lv belt.webp"
})

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
   
    productImage.src = "/Clothing-store/assets/images/black lv belt.png"
});

const cartBtn = document.querySelector(".cartBtn");

cartBtn.addEventListener("click", function(event){
    window.alert("Item added to cart!")
})