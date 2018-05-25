var index = 0;

function imagenSiguiente() {
  console.log("indexInicial: " + index);
  index++;

  if(index == (MAX_IMAGENES_SIA - 1)) {
    index = 0;
  }

  console.log("indexNuevo: " + index);

  var foto = document.getElementById("foto");

  console.log("mostrarImagen: " + MAX_IMAGENES_SIA[index]);

  foto.src = MAX_IMAGENES_SIA[index];
}
