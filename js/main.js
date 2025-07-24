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
});

/* Efecto de escritura tipo máquina, texto letra por letra*/
function typeEffect(elementId, text, speed = 60) {
    const element = document.getElementById(elementId);
    let i = 0; /* índice para recorrer cada letra del texto*/
    function typeChar() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeChar, speed);/* espera y llama de nuevo*/
        }
    }
    typeChar(); /* inicia el efecto*/
}

/* llamada para los efectos*/
document.addEventListener("DOMContentLoaded", function () {
    typeEffect("typing1", "Del 14 al 17 de agosto de 2025 en Praia da Pipa – RN, Brasil");
    setTimeout(() => {
        typeEffect("typing2", "+40 shows · 6 escenarios · talleres musicales y socioambientales");
    }, 4000);
})