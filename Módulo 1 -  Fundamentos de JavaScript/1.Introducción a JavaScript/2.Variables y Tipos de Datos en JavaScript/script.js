// Mostrar y explicar datos
function mostrarDato(tipo, valor, explicacion) {
    document.getElementById('info').textContent = tipo + ': ' + valor;
    document.getElementById('explicacion').textContent = explicacion;
    showCode(`
// Declaración de una constante '${tipo}' con un valor
const ${tipo} = ${JSON.stringify(valor)};
document.getElementById('info').textContent = '${tipo}: ' + ${tipo};
    `);
}

document.getElementById('btnNumero').addEventListener('click', function() {
    mostrarDato('numero', 2024, 'Un número es cualquier tipo de dato numérico, como enteros o decimales. Se utiliza para cálculos matemáticos, medidas, y más.');
});

document.getElementById('btnCadena').addEventListener('click', function() {
    mostrarDato('cadena', 'Hola, mundo', 'Una cadena de texto es una secuencia de caracteres, usada para representar texto.');
});

document.getElementById('btnBooleano').addEventListener('click', function() {
    mostrarDato('booleano', true, 'Un booleano representa uno de dos valores: true (verdadero) o false (falso). Es útil para decisiones de sí/no en la lógica de programación.');
});

document.getElementById('btnObjeto').addEventListener('click', function() {
    mostrarDato('objeto', { nombre: "Juan", edad: 41 }, 'Un objeto es una colección de propiedades, donde cada propiedad está definida por un nombre y un valor asociado. Los objetos son fundamentales para organizar datos y comportamientos en JavaScript.');
});

function showCode(code) {
    // Eliminar el contenido actual
    const jsCode = document.getElementById('jsCode');
    while (jsCode.firstChild) {
        jsCode.removeChild(jsCode.firstChild);
    }

    // Crear un nuevo elemento con el código y aplicar el resaltado de syntax
    const codeElement = document.createElement('code');
    codeElement.textContent = code;
    jsCode.appendChild(codeElement);
    hljs.highlightBlock(codeElement);
}