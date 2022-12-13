const menuButton = document.getElementById("menuBars");
const menuIcon = document.getElementById("menuIcon");
const menuList = document.getElementById("menuList");

// Function toggles classes on menBars click
function mobileMenu() {
  menuIcon.classList.toggle("fa-x");
  menuIcon.classList.toggle("rotate");
  menuList.classList.toggle("inactive");
}
