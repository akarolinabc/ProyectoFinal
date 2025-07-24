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
});//  menu hamburguesa fin //  


// Espera a que el DOM esté completamente cargado
  document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.artista-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxText = document.getElementById('lightbox-text');

    // Abrir lightbox al hacer clic en una imagen
    items.forEach(item => {
      item.addEventListener('click', function () {
        const img = item.querySelector('img');
        const imgSrc = img.getAttribute('src');
        const altText = img.getAttribute('alt');
        const bio = item.getAttribute('data-bio');

        lightboxImg.setAttribute('src', imgSrc);
        lightboxImg.setAttribute('alt', altText);
        lightboxText.textContent = bio;

        lightbox.style.display = 'flex';
      });
    });

    // Cerrar lightbox con botón
    window.cerrarLightbox = function () {
      lightbox.style.display = 'none';
      lightboxImg.setAttribute('src', '');
      lightboxText.textContent = '';
    };

    // Cerrar lightbox si se hace clic fuera del contenido
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        cerrarLightbox();
      }
    });
  });

  // Carrusel infinito
  const carrusel = document.querySelector(".carrousel-infinito");
  if (carrusel) {
    const slides = carrusel.innerHTML;
    carrusel.innerHTML += slides; // efecto continuo

    let scrollX = 0;
    const velocidad = 0.5; // ajuste de  velocidad

    function animar() {
      scrollX += velocidad;
      if (scrollX >= carrusel.scrollWidth / 2) {
        scrollX = 0;
      }
      carrusel.scrollLeft = scrollX;
      requestAnimationFrame(animar);
    }

    animar();
  }

  // carrusel horizontal con botones izq y der
  const btnPrev = document.querySelector(".btn-prev");
  const btnNext = document.querySelector(".btn-next");
  const carrouselConfirmados = document.querySelector(".carrousel-confirmados");

  if (btnPrev && btnNext && carrouselConfirmados) {
    btnPrev.addEventListener("click", () => {
      carrouselConfirmados.scrollBy({ left: -300, behavior: "smooth" });
    });

    btnNext.addEventListener("click", () => {
      carrouselConfirmados.scrollBy({ left: 300, behavior: "smooth" });
    });
  }

// Mostrar escenarios por categoría
const filtros = document.querySelectorAll('.escenario-filtro button');
const categorias = document.querySelectorAll('.escenarios-categoria');

filtros.forEach(boton => {
  boton.addEventListener('click', () => {
    const tipo = boton.getAttribute('data-tipo');
    categorias.forEach(cat => {
      if (cat.classList.contains(tipo)) {
        cat.style.display = 'block';
      } else {
        cat.style.display = 'none';
      }
    });
    filtros.forEach(btn => btn.classList.remove('activo'));
    boton.classList.add('activo');
  });
});

