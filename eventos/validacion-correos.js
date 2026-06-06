console.log("Empieza el ejercicio");

let buttonSubmit = document.getElementById("buttonSubmit");
let buttonReset = document.getElementById("buttonReset");
let primerForm = document.forms[0];

buttonSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Boton de envio pulsado");

  //Comprobamos que el email tiene una arroba
  if (primerForm.elements[0].value.includes("@")) {
    primerForm.submit();
  } else alert("Debe añadir una @ en el campo de texto");
});

buttonReset.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("Boton de reset pulsado");
  primerForm.reset();
});
