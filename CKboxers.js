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