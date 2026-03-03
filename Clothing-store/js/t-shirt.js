const blackBtn = document.getElementById("blackBtn");
const whiteBtn = document.getElementById("whiteBtn");
const greyBtn = document.getElementById("greyBtn");
const beigeBtn = document.getElementById("beigeBtn")
const blueBtn = document.getElementById("blueBtn")
const productImage = document.getElementById("productImage");

function resetActive(){
    blackBtn.classList.remove("active");
    whiteBtn.classList.remove("active");
    greyBtn.classList.remove("active");
    blueBtn.classList.remove("active");
    beigeBtn.classList.remove("active");
};

whiteBtn.addEventListener("click", function(){
    resetActive();
    whiteBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/white t shirt.webp"
})

beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/beige t shirt.jpg"
});

blueBtn.addEventListener("click", function(){
    resetActive();
    blueBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/navy blue t shirt.avif"
});

greyBtn.addEventListener("click", function(){
    resetActive();
    greyBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/grey t shirt.jpg"
});

blackBtn.addEventListener("click", function(){
    resetActive();
    blackBtn.classList.add("active");
    productImage.src = "/Clothing-store/assets/images/black t shirt.jpg"
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