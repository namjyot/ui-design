const mobileMenu = document.getElementById("mobile-menu");
const bars = document.getElementById("bars");

function toggleMenu() {
  mobileMenu.classList.toggle("show");
  if (mobileMenu.className == "mobile-menu show") {
    bars.style.display = "none";
    x.style.display = "block";
  } else {
    bars.style.display = "block";
    x.style.display = "none";
  }
}
