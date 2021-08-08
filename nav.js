const trackButton = document.getElementById("menuButton");
const navBar = document.getElementById("navBar");
const teamHover = document.getElementById("linkHover");

trackButton.addEventListener("click", menuBarSwitch);
teamHover.addEventListener("mouseover", hideOut);

function menuBarSwitch() {
    trackButton.classList.toggle("transit");
    if (navBar.className === "menuBar") {
        navBar.className += " dropDown";
    } else {
        navBar.className = "menuBar";
        navBar.style.overflowX = "hidden";
    }
}

function hideOut() {
    navBar.style.overflowX = "visible";
}