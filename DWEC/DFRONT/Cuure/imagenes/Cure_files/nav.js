const menu = document.querySelector('.menu');
const logo = document.querySelector('elem-cabe');
const menuAltura = menu.offsetHeight;
const scrollPosicion = window.scrollY;

function activarColorMenu() {
    console.log("ha hecho scroll")
  if (window.scrollY >= menuAltura) {
    menu.classList.add('scrolled');
  } else {
    menu.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', activarColorMenu);