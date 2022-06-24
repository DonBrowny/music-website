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