let progressBar = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHeight) * 50;
    progressBar.style.height = progressHeight + "%";
}

$('#rb').bind('click', function () {
    $('html,body').animate({ scrollTop: 0 });
});