// ===== 1. Slider del comparador Idea <-> Obra =====
const comparador = document.getElementById('comparador');
const slider = document.getElementById('corte');

slider.addEventListener('input', () => {
    comparador.style.setProperty('--corte', slider.value + '%');
});


// ===== 2. Formulario de contacto -> WhatsApp =====
const NUMERO_WHATSAPP = '593997129859'; // sin "+" ni espacios
const formulario = document.getElementById('form-contacto');
const nota = document.getElementById('nota-form');

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const tipo = document.getElementById('tipo').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    const texto = `Hola, soy ${nombre}. Me interesa: ${tipo}.\n${mensaje}`;
    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');
    nota.textContent = 'Abriendo WhatsApp...';
});