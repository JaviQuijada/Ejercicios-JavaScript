// Script compartido para ejercicios JS

document.addEventListener('DOMContentLoaded', () => {
    console.log('Aplicación de ejercicios cargada correctamente.');
    
    // Efecto simple para las tarjetas si existen
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease forwards ${index * 0.1}s`;
        card.style.opacity = '0';
    });
});

// Agregar animación dinámica al CSS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
`;
document.head.appendChild(styleSheet);
