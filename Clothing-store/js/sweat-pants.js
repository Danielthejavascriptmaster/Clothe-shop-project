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



var sizeButtons = document.getElementsByClassName("size"); 
var selectedSize = ""; 

for (var i = 0; i < sizeButtons.length; i++) {  
    sizeButtons[i].onclick = function() {        
        
        
        for (var j = 0; j < sizeButtons.length; j++) {
            sizeButtons[j].style.backgroundColor = "black"; 
            sizeButtons[j].style.color = "white";          
        }

        this.style.backgroundColor = "white"; 
        this.style.color = "black";          

       
        selectedSize = this.innerText;
        console.log(selectedSize)
    }
}


