//Update Scroll bar once leaving the top section.
window.onscroll = function() {
  scrollNav();
};

myName = document.querySelector("#myName");
header = document.querySelector("header");

baseY = header.offsetTop;

function scrollNav() {
  if (window.pageYOffset > baseY) {
    header.classList.add("headerScroll");
    myName.classList.add("myNameScroll");
  } else {
    header.classList.remove("headerScroll");
    myName.classList.remove("myNameScroll");
  }
}
