// Proyecto final del primer módulo
// guardamos el estado de la columna activa
let columnaActiva = 1;
// seleccionamos las columnas
const columnas = document.querySelectorAll(".columna");
// escuchamos el click en cada columna
columnas.forEach((columna, indice) => {
  columna.addEventListener("click", function () {
    cambiarColumna(indice);
  });
});
// cambiar el estado de las columnas
function cambiarColumna(indice) {
  columnas[columnaActiva].classList.remove("activa");
  columnas[indice].classList.add("activa");
  columnaActiva = indice;
}
