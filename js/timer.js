//Escuchar el cick
const boton = document.getElementById("boton");
boton.addEventListener("click", preguntaNombre);

// guardamos referencias
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");

// Preguntar y obtener el nombre de usuario
function preguntaNombre() {
  const nombre = prompt("introduce tu nombre");
  mostrarNombre(nombre);
}

// Reemplazar el nombre del usuario
function mostrarNombre(nombre) {
  h2.textContent = "Hola ✌✌";
  h1.textContent = nombre;
}