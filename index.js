//script for drawer

function openSlideMenu(){
    document.getElementById("side-nav").style.width = "250px";
}
function closeSlideMenu(){
    document.getElementById("side-nav").style.width ="0";
}

//script for darkmode

let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.getElementById("dark-mode");

const activateDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "active")
};

const deactivateDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null)
};

darkMode === "active" ? activateDarkMode() : deactivateDarkMode()

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    darkMode !== "active" ? activateDarkMode() : deactivateDarkMode()
});

//Script for drawer and hamburger component
function openDrawer(){
    document.getElementById("drawer").style.width = "25rem";
}
function closeDrawer(){
    document.getElementById("drawer").style.width ="0";
}