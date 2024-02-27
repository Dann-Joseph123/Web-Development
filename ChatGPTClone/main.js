function getChat() {
    var chatValue = document.getElementById("chat").value;
    var x = document.getElementById("row");
    var texts = document.getElementById("output");
    var graphics = document.getElementById("userChat");
    if (x.style.display != "none") {
        x.style.display = "none";
        texts.style.display = "block";
        graphics.style.display = "block";
        document.getElementById("output").innerHTML = chatValue;
        console.log("Walang display");
    }
    
} 
