const blueBtn = document.getElementById("blueBtn");
const beigeBtn = document.getElementById("beigeBtn");
const whiteBtn = document.getElementById("whiteBtn");
const productImage = document.getElementById("productImage");

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");



rightArrow.addEventListener("click", function(){
    if(whiteBtn.classList.contains("active"))
    productImage.src = "/pictures/ralph lauren cable knit sweater white backside.jpg"
});



leftArrow.addEventListener("click", function(){
    if(whiteBtn.classList.contains("active"))
    productImage.src = "/pictures/ralph lauren cable knit sweater white.jpg";
});



function resetActive(){
    beigeBtn.classList.remove("active");
    whiteBtn.classList.remove("active");
    blueBtn.classList.remove("active");
};



whiteBtn.addEventListener("click", function(){
    resetActive();
    whiteBtn.classList.add("active");
    productImage.src = "/pictures/ralph lauren cable knit sweater white.jpg"
});



beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/pictures/ralph lauren cable knit sweater beige.jpg"
});

