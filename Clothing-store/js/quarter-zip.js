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
