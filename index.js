let timer = setInterval(swap, 2400);
function swap(){
    var gif = document.getElementById("unLooped")
    gif.src="https://2021.igem.org/wiki/images/f/f7/T--KCIS_NewTaipei--mainPageAnimationLoop.gif";
    clearInterval(swap);
}