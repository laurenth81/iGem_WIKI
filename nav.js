const trackButton = document.getElementById("menuButton");
trackButton.addEventListener("click", menuBarSwitch);
function menuBarSwitch(){
    var x = document.getElementById("menuButton");
    x.classList.toggle("transit");
    var y = document.getElementById("navBar");
    if (y.className === "menuBar"){
        y.className += " dropDown";
    }else{
        y.className = "menuBar";
    }
}