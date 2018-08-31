// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
// Recorrerlos
links.forEach(function (link) {
// Agregar un evento click a  cada una de ellos
  link.addEventListener("click", function (ev) {
    ev.preventDefault();
      let content = document.querySelector('.content');
    //Quitarle las clases de animaacion que ya tiene
    content.classList.remove("fadeInDown");
    content.classList.remove("animated");
    // Agregar clases para animar su salida
    content.classList.add("fadeOutUp");
    content.classList.add("animated");

    setTimeout(function() {
      location.href = "/boletines";
    },600);
    return false;
  });
});
