/* Inicio, menu hamburguesa*/
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("navToggle"); /* seleccion del botón del menú hamburguesa por su ID*/
  const primaryMenu = document.querySelector(".nav-primary")/* menú principal visible*/
  const secondaryMenu = document.getElementById("navMenu"); /* menú secundario al activar el toggle en el móvil*/
  /* Evento al hacer clic en el ícono del menú hamburguesa*/
  toggle.addEventListener("click", function () {
    toggle.classList.toggle("open"); /* alternar la clase "open" en el botón para animación del icono*/
    primaryMenu.classList.toggle("active"); /* alternar visibilidad del menú principal y secundario*/
    secondaryMenu.classList.toggle("active");
  });
}); //  fin menu  // 

// --- animacion entrada secsion sobre ---// 
// Espera a que todo el DOM esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", () => {

  // Selecciona lo quie queremos animar al entrar
  const sections = document.querySelectorAll('.sobre-festival, .ley-festival');

  // comprobar si las secciones están visibles al hacer scroll
  const revealOnScroll = () => {
    const windowHeight = window.innerHeight; // altura de la ventana del navegador

    // recorre cada sección 
    sections.forEach(section => {
      const top = section.getBoundingClientRect().top; // distancia entre el top y el viewport

      // tp dentro del 85% , añade clase para mostrar
      if (top < windowHeight * 0.85) {
        section.classList.add('visible'); // activa la animación CSS 
      }
    });
  };

  // se ejecuta cada vez que hace scroll
  window.addEventListener('scroll', revealOnScroll);

  // Llamada al cargar la pagina
  revealOnScroll();
});