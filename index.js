let timer = setInterval(swap, 2400);
let progressBar = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 40;
    progressBar.style.height = progressHeight + "%";
}

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

$('#rb').bind('click', function () {
    $('html, body').animate({ scrollTop: 0 });
});