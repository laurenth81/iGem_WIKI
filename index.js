let timer = setInterval(swap, 2400);
function swap(){
    var gif = document.getElementById("imgBody");
    gif.style.backgroundImage="url(https://2021.igem.org/wiki/images/f/f7/T--KCIS_NewTaipei--mainPageAnimationLoop.gif)";
    clearInterval(swap);
}