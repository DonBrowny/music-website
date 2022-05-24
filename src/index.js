function onHamburgerClick(element) {
    element.classList.toggle("open");
    const nav = document.getElementsByTagName('nav');
    console.log(nav)
    nav[0].classList.toggle("open");
  }