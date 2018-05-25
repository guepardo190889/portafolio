var iOpUno = document.getElementById("operadorUno");
var iOpDos = document.getElementById("operadorDos");

var bSumar = document.getElementById("sumar");
bSumar.addEventListener("click", sumar);

function sumar() {
  console.log("suma: " + (parseInt(iOpUno.value) +  parseInt(iOpDos.value)));

  testJar();
}

function testJar(){
var exec = require("child_process").exec;
var compileit = "java -jar calculadora.jar" + iOpUno.value + " " + iOpDos.value;
console.log("ejecutar: " + compleit);
exec(compileit, function(error, stdout, stderr) {
});
}
