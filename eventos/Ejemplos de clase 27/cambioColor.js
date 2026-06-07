// 1. Seleccionamos todos los elementos que tienen la clase 'caja'
const elementos = document.querySelectorAll(".caja");

// 2. Función para generar un color aleatorio en formato rgb(r, g, b)
function obtenerColorAleatorio() {
  const r = Math.floor(Math.random() * 256); // Número aleatorio 0-255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// 3. Recorremos la lista de elementos para asignarles eventos a cada uno
elementos.forEach((elemento) => {
  // Evento: Cuando el ratón entra en el elemento
  elemento.addEventListener("mouseover", () => {
    // Cambiamos el color de fondo por uno generado aleatoriamente
    elemento.style.backgroundColor = obtenerColorAleatorio();
  });

  // Evento: Cuando el ratón sale del elemento
  elemento.addEventListener("mouseout", () => {
    // Restauramos el color a blanco
    elemento.style.backgroundColor = "white";
  });
});
