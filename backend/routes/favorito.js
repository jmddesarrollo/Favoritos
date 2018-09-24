'use strict'

var express = require('express');
var FavoritoController = require('../controllers/favorito');
// Clase express.Router para crear manejadores de rutas montables y modulares. 
// Una instancia Router es un sistema de middleware y direccionamiento completo.
var api = express.Router();

// Crear una ruta por GET con express
api.get('/prueba/:nombre?', FavoritoController.prueba);
api.get('/favorito/:id', FavoritoController.getFavorito);
api.get('/favoritos', FavoritoController.getFavoritos);
api.post('/favorito', FavoritoController.saveFavorito);
api.put('/favorito/:id', FavoritoController.updateFavorito);
api.delete('/favorito/:id', FavoritoController.deleteFavorito);

module.exports = api;