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
    productImage.src = "/pictures/grey lv beanie.jpg"
})

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
   
    productImage.src = "/pictures/black lv beanie.jpg"
});