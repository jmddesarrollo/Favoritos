'use strict'

var Favorito = require("../models/favorito");

function prueba(req, res){
    var nombre = "Invitado";
    
    if (req.params.nombre){
        var nombre = req.params.nombre;
    }else{
        var nombre = "Invitado";
    }
        
    res.status(200).send({status: "200", data: [2,3,4], message: "Respuesta para prueba - "+nombre});
}

function getFavorito(req, res){
    var favoritoId = req.params.id;
    
    Favorito.findById(favoritoId, function(err, favorito){
        if(err){
            res.status(500).send({message: "Error al recuperar marcador."});
        }else if(!favorito){
            res.status(404).send({message: "No se ha encontrado marcador."});
        }else{
            res.status(200).send({favorito: favorito});  
        }              
    });    
}
function getFavoritos(req, res){
    Favorito.find({}).sort('-title').exec(function(err, favoritos){
        if(err){
            res.status(500).send({message: "Error al recuperar marcadores."});
        }else if(!favoritos){
            res.status(404).send({message: "No se han encontrado marcadores."});
        }else{
            res.status(200).send({favoritos});
        }        
    });
}
function saveFavorito(req, res){
    var favorito = new Favorito;
    
    var params = req.body;
    
    favorito.title = params.title;
    favorito.description = params.description;
    favorito.url = params.url;
    
    // save recibe una función callback, con el posible error y el objeto que guarda.
    favorito.save(function(err, favoritoStored){
        if(err){
            res.status(500).send({message: "Error al guardar el marcador."});
        }else{
            res.status(200).send({favorito: favoritoStored});
        }
    });
}
function updateFavorito(req, res){
    var favoritoId = req.params.id;
    var update = req.body;

    Favorito.findByIdAndUpdate(favoritoId, update, function(err, favoritoUpdated){
        if(err){
            res.status(500).send({message: "Error al actualizar el marcador."});
        }else{
            res.status(200).send({favorito: favoritoUpdated}); 
        }                  
    });   
}
function deleteFavorito(req, res){
    var favoritoId = req.params.id;
    
    Favorito.findById(favoritoId, function(err, favorito){
        if(err){
            res.status(500).send({message: "Error al recuperar el marcador."});
        }else if(!favorito){
            res.status(404).send({message: "No se ha encontrado marcador."});
        }else{
            favorito.remove(function(err){
                if(err){
                    res.status(500).send({message: "Error al eliminar marcador."});
                }else{
                    res.status(200).send({message: "El marcador se ha eliminado."}); 
                }
            });
        }        
    });     
}

module.exports = {
    prueba,
    getFavorito,
    getFavoritos,
    saveFavorito,
    updateFavorito,
    deleteFavorito
}