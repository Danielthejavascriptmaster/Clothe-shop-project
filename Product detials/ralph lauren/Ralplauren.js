const blueBtn = document.getElementById("blueBtn");
const beigeBtn = document.getElementById("beigeBtn");
const whiteBtn = document.getElementById("whiteBtn");
const productImage = document.getElementById("productImage");

const rightArrow = document.querySelector(".rightArrow");
const leftArrow = document.querySelector(".leftArrow");

let whiteView = 1;

rightArrow.addEventListener("click", function(){

if(whiteBtn.classList.contains("active") && whiteView ===1){
    productImage.src = "/pictures/ralph lauren cable knit sweater white backside.jpg";
    whiteView = 2;
}   

else if(whiteBtn.classList.contains("active") && whiteView === 2){
    productImage.src = "/pictures/ralph lauren cable knit sweater white third view.jpg";
    whiteView = 3;
}
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

blueBtn.addEventListener("click", function(){
    resetActive();
    blueBtn.classList.add("active");
    productImage.src = "/pictures/ralph lauren cable knit sweater navy blue.jpg"
})

whiteBtn.addEventListener("click", function(){
    resetActive();
    whiteBtn.classList.add("active");
    whiteView = 1;
    productImage.src = "/pictures/ralph lauren cable knit sweater white.jpg"
});


beigeBtn.addEventListener("click", function(){
    resetActive();
    beigeBtn.classList.add("active");
    productImage.src = "/pictures/ralph lauren cable knit sweater beige.jpg"
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

