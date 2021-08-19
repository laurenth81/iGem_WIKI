let progressBar = document.getElementById("progressBar");
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHeight) * 40;
  progressBar.style.height = progressHeight + "%";
  if (progressHeight >= "10") {
    $('#rb').fadeIn();
  } else {
    $('#rb').fadeOut();
  }
};

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

$("#rb").bind("click", function () {
  $("html, body").animate({ scrollTop: 0 });
});