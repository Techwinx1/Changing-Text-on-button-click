const h1 = document.querySelector("h1");
h1.style.color = "pink";

const body = document.querySelector('body');
var isBlue = false;
/*
setInterval (function() {
    if (isBlue) {
        body.style.background = "white";
     } else{
         body.style.background = "#3498db";
     }
     isBlue = !isBlue;
},1000 );
*/
const button = document.querySelector("button");
const p = document.querySelector("#paragraph");
button.addEventListener("click", changeText)

function changeText (){
    paragraph.textContent = "someone clicked the button";
}

/*
var lis = document.querySelector("ul");
for (var i = 0; i < lis.length; i++){
    ul[i].addEventListener("click" function() {
        ul[i].style.color = "pink";
    })
}
*/