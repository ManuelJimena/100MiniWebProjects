// Seleccionar el elemento button usando su ID 'btn'
const button = document.getElementById('btn');

// Agregar un evento de clic al botón para mostrar un mensaje
button.addEventListener('click', function() {
    alert('¡Hola desde JavaScript!');
});

// Función para mostrar y resaltar el código JavaScript en la página
function showCode() {
    const code = `
// Seleccionar el elemento HTML con ID 'btn'
const button = document.getElementById('btn');

// 'addEventListener' es una función que escucha eventos, como 'click' aquí
button.addEventListener('click', function() {
    // 'alert()' muestra un mensaje en una ventana emergente
    alert('¡Hola desde JavaScript!');
});
    `;
    // Mostrar el código JavaScript en el elemento HTML 'pre' con ID 'jsCode'
    document.getElementById('jsCode').textContent = code;

    // Aplicar resaltado de sintaxis con Highlight.js
    hljs.highlightElement(document.getElementById('jsCode'));
}

// Ejecutar la función showCode cuando la página se cargue
window.onload = showCode;
