const blackBtn = document.getElementById("blackBtn");
const redBtn = document.getElementById("redBtn");
const productImage = document.getElementById("productImage");

function resetActive(){
    blackBtn.classList.remove("active");
    redBtn.classList.remove("active");
};

redBtn.addEventListener("click", function(){
    resetActive();
    redBtn.classList.add("active");
    productImage.src = "/pictures/golden goose shoe red.avif"
})

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
    whiteView = 1;
    productImage.src = "/pictures/golden goose shoe black.avif"
});