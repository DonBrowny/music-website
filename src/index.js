let menuOpen = false;
function onHamburgerClick(element) {
    element.classList.toggle("open");
    document.getElementById("overlay").classList.toggle("open");
    const nav = document.getElementsByTagName('nav');
    nav[0].classList.toggle("open");
    menuOpen = !menuOpen;
    const body = document.body;
    if(menuOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
}

var prevScrollPos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollPos > currentScrollPos) {
    document.getElementsByTagName("header")[0].style.top = "0";
  } else {
    document.getElementsByTagName("header")[0].style.top = "-72px";
  }
  prevScrollPos = currentScrollPos;
}