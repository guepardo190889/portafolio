var index = 0;

function imagenSiguiente() {
  console.log("indexInicial: " + index);
  index++;

  if(index == (MAX_IMAGENES_SIA - 1)) {
    index = 0;
  }

  console.log("indexNuevo: " + index);

  var foto = document.getElementById("foto");

  console.log("mostrarImagen: " + IMAGENES_SIA[index]);

  foto.src = IMAGENES_SIA[index];
}

function imagenAnterior() {
  console.log("indexInicial: " + index);
  index--;

  if(index <= (0)) {
    index = MAX_IMAGENES_SIA - 1;
  }

  console.log("indexNuevo: " + index);

  var foto = document.getElementById("foto");

  console.log("mostrarImagen: " + IMAGENES_SIA[index]);

  foto.src = IMAGENES_SIA[index];
}
