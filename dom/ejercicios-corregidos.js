//      1. Selecciona el primer p de la página y modificarlo para que cambie el texto que lleva dentro y que ponga "hola que tal"
// let primerParrafo = document.getElementsByTagName("p")[0];
// primerParrafo.textContent = "hola que tal";

//      2. Selecciona el 2º enlace del primer p de la página y cambia su href por https://www.google.com
// let primerParrafo = document.getElementsByTagName("p")[0];
// enlace = primerParrafo.getElementsByTagName("a");
// enlace[1].setAttribute("href", "http://www.google.com");
//      3. Selecciona el penúltimo hijo de una etiqueta con el id "milista"
// let milista = document.getElementById("milista");
// let hijos = milista.children;
// let penultimo = hijos[hijos.length -2];
// debugger;

//      4. Desactiva el atributo class del último p de la página
// let parrafos = document.getElementsByTagName("p");
// let ultimoParrafo = parrafos[parrafos.length - 1];
// ultimoParrafo.removeAttribute("class");
// debugger;

//      5. Crea un elemento h3 e insertalo al final del body
// let newH3 = document.createElement("H3");
// newH3.textContent = "Hola soy un  uevo H3";
// document.body.append(newH3);

//      6. Selecciona el elemento h3 que acabas de crear y añádele un span con el texto "Soy nuevo"
// let newSpan = document.createElement("span");
// newSpan.textContent = " soy nuevo";
// newH3.append(newSpan);

//      7. Modifica el contenido de la segunda etiqueta p, añadiéndole una etiqueta a con el contenido "aquí" y que apunte a https://google.com.
// let segundoP = document.getElementsByTagName("p")[1];
// let newA = document.createElement("a");
// newA.setAttribute("href", "http://google.com");
// newA.textContent = " aqui";
// segundoP.append(newA);

//      8. Comprueba que todos los p que estén dentro de un div con clase "hero" tiene clase, en caso de ser verdadero, elimínalo
// let parrafos = document.querySelectorAll("div.hero p");
// for (let p of parrafos) {
//   if (p.hasAttribute("class")) {
//     p.remove();
//   }
// }

//      9. Selecciona el último nodo hijo de body
// let ultimoElemento = document.body.lastElementChild;
// debugger;

//      10. Selecciona el siguiente elemento hermano del primer p
// let primerP = document.getElementsByTagName("p")[0];
// let siguenteHermano = primerP.nextElementSibling;
// debugger;

//      11. Borra el último elemento de body
// let ultimoElemento = document.body.lastElementChild;
// ultimoElemento.remove();
// debugger;

//      12. Modifica el valor del atributo de todas las imágenes cuyo src sea cambiame <img src="cambiame"> a "cambiado"
// let imagenes = document.getElementsByTagName("img");
// for (let i of imagenes) {
//   if (i.getAttribute("src") === "cambiame") {
//     i.setAttribute("src", "cambiado");
//   }
// }

//      13. Dale la clase "claseejemplo" al primer p
// let primerP = document.getElementsByTagName("p")[0];
// primerP.setAttribute("class", "claseEjemplo");

// 14. Para cada ul que tenga únicamente 2 li, añade un tercer li con contenido "tercer elemento"
// Seleccionamos todos los elementos <ul> de la página
// const listas = document.querySelectorAll('ul');

// listas.forEach(ul => {
//     // Comprobamos si el número de hijos directos (li) es exactamente 2
//     if (ul.children.length === 2) {
//         // Creamos el nuevo elemento de lista
//         const nuevoLi = document.createElement('li');

//         // Asignamos el contenido de texto solicitado
//         nuevoLi.textContent = "tercer elemento";

//         // Lo añadimos al final del ul actual
//         ul.appendChild(nuevoLi);
//     }
// });

//      15. Selecciona el padre del primer p
    let primerP = document.getElementsByTagName("p")[0];
    let padre = primerP.parentElement;
    debugger

//      16. Selecciona el hermano anterior del primer p
//      17. Selecciona el primer div con clase "container" y modifica su background-color a red
//      18. Selecciona el p con id "text" y cambia su contenido poniendole un enlace que apunte a Google
//      19. Selecciona los div con clase "eustakio"
//      20. Selecciona el párrafos que un ID con valor "paisa"
//      21. Selecciona el primer párrafo hijo de un div
//      22. Selecciona el penúltimo enlace de las página.
