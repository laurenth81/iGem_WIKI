let timer = setInterval(swap, 2400);

function swap(){
    var gif = document.getElementById("imgBody");
    gif.style.backgroundImage="url(https://2021.igem.org/wiki/images/f/f7/T--KCIS_NewTaipei--mainPageAnimationLoop.gif)";
    clearInterval(swap);
}

function emailFunc(x) {
    if (x.matches) {
        document.getElementById("googleEmail").style.display = "none";
        document.getElementById("emailIcon").style.display = "block";
    } else {
        document.getElementById("emailIcon").style.display = "none";
        document.getElementById("googleEmail").style.display = "block";
    }
}

var width = window.matchMedia("(max-width: 1000px)");
emailFunc(width);
width.addListener(emailFunc);

window.addEventListener("load", function() {
    let loader = document.getElementById("loader");
    setTimeout(function() {
        loader.classList.add("loaded")
    }, 200);
});