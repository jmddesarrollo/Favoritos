'use strict'

// Cargar librería Mongoose.
var mongoose = require('mongoose');

var app = require('./app');
var port = process.env.PORT || 3678;

// Dos parametros
// Url de MongoDB donde tenemos la BDD alojada. Por defecto se aloja en local en puerto 27017 e indicar la base de datos a conectarse.
// Función de callback
mongoose.connect('mongodb://localhost:27017/cursofavoritos', function(err, res){
    if(err){
        throw err;
    }else{
        console.log("Conexión a MongoDB correctamente");
        // Crear y lanzar el servidor.
        app.listen(port, function(){
           console.log("A la escucha en http://localhost:"+port);
        });        
    }
});