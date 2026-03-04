window.onload = function(){
    
    setTimeout(function() {
        document.getElementById("cookie-popup").style.display = "block";
    }, 10000);

        
    document.getElementById("accept-btn").onclick = function() {
        document.getElementById("cookie-popup").style.display = "none";
    }
    document.getElementById("reject-btn").onclick = function() {
    document.getElementById("cookie-popup").style.display = "none";
 }

}