//Documentación:
//Instalar expres: http://expressjs.com/es/starter/static-files.html
//Agregar archivos en carpetas: https://www.npmjs.com/package/express

var express = require("express");
var path = require("path");

var PUERTO = 8080;

var aplicacion = express();

//Definir rutas
aplicacion.get("/", inicio);

aplicacion.get("/java", navegacionJava);
aplicacion.get("/actionscript", navegacionActionscript);
aplicacion.get("/flex", navegacionFlex);
aplicacion.get("/javascript", navegacionJavaScript);
aplicacion.get("/shellscript", navegacionShellScript);
aplicacion.get("/sql", navegacionSql);

aplicacion.get("/culebrita", culebrita);
aplicacion.get("/cajero", cajero);
aplicacion.get("/canvas", canvas);
aplicacion.get("/fizzbuzz", fizzbuzz);
aplicacion.get("/pakiman", pakiman);
aplicacion.get("/teclas", teclas);
aplicacion.get("/villaplatzi", villaplatzi);
aplicacion.get("/pizarra", pizarra);

//Cargar directorios
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/culebrita/")));
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/cajero/")));
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/canvas/")));
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/fizzbuzz/")));
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/pakiman/")));
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/teclas/")));
aplicacion.use(express.static(path.join(__dirname, "../src/javascript/villaplatzi/")));

//Reidrección de rutas a páginas html
function inicio(request, response) {
  response.sendFile(path.join(__dirname, "../src/index.html"));
}

function navegacionJava(request, response) {
  response.sendFile(path.join(__dirname, "../src/navegacion/navegacionJava.html"));
}

function navegacionActionscript(request, response) {
  response.sendFile(path.join(__dirname, "../src/navegacion/navegacionActionScript.html"));
}

function navegacionFlex(request, response) {
  response.sendFile(path.join(__dirname, "../src/navegacion/navegacionFlex.html"));
}

function navegacionJavaScript(request, response) {
  response.sendFile(path.join(__dirname, "../src/navegacion/navegacionJavaScript.html"));
}

function navegacionShellScript(request, response) {
  response.sendFile(path.join(__dirname, "../src/navegacion/navegacionShellScript.html"));
}

function navegacionSql(request, response) {
  response.sendFile(path.join(__dirname, "../src/navegacion/navegacionSql.html"));
}

//Navegación JavaScript
function culebrita(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/culebrita/culebrita.html"));
}

function cajero(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/cajero/atm.html"));
}

function canvas(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/canvas/canvas.html"));
}

function fizzbuzz(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/fizzbuzz/modulo.html"));
}

function pakiman(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/pakiman/pakiman.html"));
}

function teclas(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/teclas/flechas.html"));
}

function villaplatzi(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/villaplatzi/villa.html"));
}

function pizarra(request, response){
  response.sendFile(path.join(__dirname, "../src/javascript/teclas/pizarra.html"));
}

aplicacion.listen(PUERTO, mensajeServidorIniciado);

function mensajeServidorIniciado() {
  return console.log("Servidor iniciado en el puerto " + PUERTO);
}
