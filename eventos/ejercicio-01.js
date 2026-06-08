const misImagenes = [
  "imagenes/foto0.png",
  "imagenes/foto1.png",
  "imagenes/foto2.png",
  "imagenes/foto3.png",
  "imagenes/foto4.png",
  "imagenes/foto5.png",
  "imagenes/foto6.png",
  "imagenes/foto7.png",
  "imagenes/foto8.png",
  "imagenes/foto9.png",
];

// 2. Escuchamos el evento de pulsar una tecla en todo el documento
document.addEventListener("keydown", (event) => {
  const tecla = event.key; // Capturamos la tecla pulsada

  // 3. Verificamos si la tecla es un número del 0 al 9
  if (tecla >= "0" && tecla <= "9") {
    const indice = parseInt(tecla); // Convertimos el texto "5" al número 5
    const imagenElement = document.getElementById("miImagen");

    // 4. Cambiamos el atributo src de la imagen
    imagenElement.src = misImagenes[indice];

    console.log(`Imagen cambiada a: ${misImagenes[indice]}`);
  }
});
