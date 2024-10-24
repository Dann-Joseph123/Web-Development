let text1;
let text2;

function myFunction() {
    text1 = parseInt(document.getElementById("firstAge").value);
    text2 = parseInt(document.getElementById("secondAge").value);
    let result = text1 - text2;
    document.getElementById("demo").innerHTML = result;
    
}