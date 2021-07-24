const trackButton = document.getElementById("menuButton");
trackButton.addEventListener("click", menuBarSwitch);
function menuBarSwitch(){
    var x = document.getElementById("menuButton");
    x.classList.toggle("transit");
}