'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var FavoritoSchema = Schema({
    title: String,
    description: String,
    url: String
});

// La colección de objetos se llama favoritos, pero un objeto concreto se llama favorito.
// Buena practica de POO. Se realiza automáticamente. En MongoDb la colección se pluraliza.
module.exports = mongoose.model('Favorito', FavoritoSchema);