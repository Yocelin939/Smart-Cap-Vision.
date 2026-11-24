
// ======================================
// SMART CAP VISION
// FUNCIONES INTERACTIVAS
// ======================================


// 1. EFECTO DE APARICIÓN AL DESPLAZARSE

const elementos = document.querySelectorAll(
    ".section, .card, .info-card, .photo-placeholder"
);

const observador = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("visible");

            observador.unobserve(entrada.target);

        }

    });

}, {
    threshold: 0.15
});

elementos.forEach((elemento) => {

    elemento.classList.add("revelar");

    observador.observe(elemento);

});


// 2. EFECTO INTERACTIVO DE LA GORRA

const gorra = document.querySelector(".cap");

if (gorra) {

    gorra.addEventListener("mouseenter", () => {

        gorra.style.filter =
            "drop-shadow(0 0 25px #d09aff)";

    });

    gorra.addEventListener("mouseleave", () => {

        gorra.style.filter = "none";

    });

}


// 3. NAVEGACIÓN SUAVE

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", (evento) => {

        const destino = document.querySelector(
            enlace.getAttribute("href")
        );

        if (destino) {

            evento.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// 4. MENSAJE DE BIENVENIDA EN CONSOLA

console.log(
    "%c SMART CAP VISION ",
    "background: #8e5bd5; color: white; font-size: 18px; padding: 10px;"
);

console.log(
    "Tecnología que acompaña. Innovación con propósito."
);


// 5. AÑO AUTOMÁTICO EN EL PIE DE PÁGINA

const pie = document.querySelector("footer");

if (pie) {

    const anio = new Date().getFullYear();

    pie.innerHTML += `<p>© ${anio} Smart Cap Vision</p>`;

}
