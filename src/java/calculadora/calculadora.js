var iOpUno = document.getElementById("operadorUno");
var iOpDos = document.getElementById("operadorDos");

var bSumar = document.getElementById("sumar");
bSumar.addEventListener("click", sumar);

function sumar() {
  console.log("suma: " + (parseInt(iOpUno.value) +  parseInt(iOpDos.value)));

  testJar();
}

function testJar(){
  var rutaJava = "java";
  console.log("rutaJava: " + rutaJava);
  var rutaJar = "resources\\jar\\calculadora.jar";
  console.log("rutaJar: " + rutaJar);

  var comando = rutaJava + " -jar " + rutaJar + " 1 2";

  console.log("exec exist: " + exec != null);

  child = exec(comando, respuestaCalculadoraJava);
}

function respuestaCalculadoraJava(error, stdout, stderr) {
  //El de la respuesta es el stdout
  console.log('stdout: ' + stdout);
  console.log('stderr: ' + stderr);
  if(error !== null){
    console.log('exec error: ' + error);
  }
}
