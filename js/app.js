/*================= Loader function ====================*/

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
});

/*================= Mostrar el botton de nav ====================*/

const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

// si damos click al toggle agrega la clase show-menu

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu")
  })
}

// si damos click al close-button remueve la clase show-menu

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu")
  })
}

/*============== Remove menu mobile ==============*/

const navLinks = document.querySelectorAll(".nav__item")

function linkAction() {
  const navMenu = document.getElementById("nav-menu")
  // cuando damos click al link nav este removera el menu
  navMenu.classList.remove("show-menu")
}

navLinks.forEach((link) => {
  link.addEventListener("click", linkAction)
})

/*=============== SCROLL UP ===============*/ 

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up');
  // cuando el scroll sea superior a 560 de altura del viewport, agrega show-scroll 
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

/*================= Funcion para los botones seccion lcd y performance ====================*/

document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.button__interactive');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // Seleccionar el contenedor del botón
      const container = button.parentElement;
      const targetClass = button.getAttribute('data-target');
      
      // Encontrar y desactivar cualquier contenedor activo dentro del mismo contenedor padre
      const activeContainer = container.parentElement.querySelector('.interactive__text__container.active');
      if (activeContainer && activeContainer !== container) {
        activeContainer.classList.remove('active');
      }

      // Alternar la clase 'active' en el contenedor del botón
      container.classList.toggle('active');

      // Determinar el contenedor de imágenes correspondiente
      const imgsContainer = container.closest('section').querySelector('.active-imgs') || container.closest('section').querySelector('.performance-imgs');
      
      // Encontrar y desactivar cualquier imagen activa dentro del mismo contenedor padre
      const activeImage = imgsContainer.querySelector('.active');
      if (activeImage) {
        activeImage.classList.remove('active');
      }

      // Activar la imagen correspondiente
      const targetImage = imgsContainer.querySelector(`.${targetClass}`);
      if (targetImage) {
        targetImage.classList.add('active');
      }
    });
  });
});
