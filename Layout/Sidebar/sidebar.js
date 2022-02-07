const sideNav = document.querySelector("#side-nav");
const main = document.querySelector("#main");

function openSlideMenu(){
    sideNav.style.width = "250px";
    main.style.marginLeft = "250px";
}
function closeSlideMenu(){
    sideNav.style.width ="0";
    main.style.marginLeft = "0";
}