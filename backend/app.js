'use strict'

// En app.js lleva toda la configuración de Express

// Modulo de Node para trabajo con HTML: rutas, controladores, protocolo HTTP:POST-GET-DELETE-UPDATE, ...
var express = require('express');
// Librería que nos convierte cualquier parametro que llegue por HTML y lo convierte a objeto javascript para poder manipular.
// Es un middleware pq se ejecuta antes que node. Es un software que asiste a nuestra aplicación para comunicarse con las peticiones que recibe.
var bodyParser = require('body-parser');

var app = express();

// Cargar fichero de rutas.
var api = require('./routes/favorito');

// Llamar a otro método en Express.
// Middleware: Antes de recibir http se lanza lo que le indiquemos aquí.
// Recibe datos por método HTTP.
// Convierte esos datos recibidos a JSON como un objeto javascript listo para usar.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Prueba de recepción de GET por HTTP con respuesta ecreado en JSON.
//app.get('/prueba', function(req,res){
//   res.status(200).send({mensaje: "Prueba de GET por HTTP."}); 
//});
// con parametros. '?': parametro opcional (funciona la ruta sin parametro)
//app.get('/prueba/:nombre?', function(req,res){
//   var nombre = req.params.nombre;
//   res.status(200).send({mensaje: "Prueba de GET por HTTP con parámetro: Nombre->."+nombre}); 
//});

// Al crear nuestro cliente (Frontend) que tire del API puede dar problemas con el CORS, cruzado de dominios, ...
// Middleware propio para solucionar este problema.
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    
    next();
});

// Uso de Express de las rutas.
app.use('/api', api);

// Exportación del modulo para poder ser usado en otro componente.
module.exports = app;