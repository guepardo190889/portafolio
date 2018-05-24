var index = 0;

function imagenSiguiente() {
  console.log("indexInicial: " + index);
  index++;

  if(index == (MAX_IMAGENES_FACTURABLE - 1)) {
    index = 0;
  }

  console.log("indexNuevo: " + index);

  var foto = document.getElementById("foto");

  console.log("mostrarImagen: " + IMAGENES_FACTURABLE[index]);

  foto.src = IMAGENES_FACTURABLE[index];
}
