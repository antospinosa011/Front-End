const content = document.querySelector("#content");

document.querySelector("#boton-nav").addEventListener("click", () => {
  // si no tiene active se lo colocará y si lo tiene se lo quitará
  content.classList.toggle("active");
});

const menu = document.querySelector(".contenedor-busqueda");
const busquedas = document.querySelector(".busqueda");
const flechaIzquierda = document.getElementById("flecha-izq");
const flechaDerecha = document.getElementById("flecha-der");

flechaDerecha.addEventListener("click", () => {
  menu.scrollLeft += 871;
});

flechaIzquierda.addEventListener("click", () => {
  menu.scrollLeft -= 871;
});
