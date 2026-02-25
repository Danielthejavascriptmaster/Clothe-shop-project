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
    productImage.src = "/pictures/green quarter zip.webp"
})

beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/pictures/beige quarter zip.jpg"
});

greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "/pictures/grey quarter zip.jpg"
});

