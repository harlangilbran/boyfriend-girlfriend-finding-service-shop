// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//when the list menu is clicked
document.querySelector("#list-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//Click outside the sidebar to remove the nav
const hamburger = document.querySelector("#list-menu");

document.addEventListener("click", function (e) {
  if (!list.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
