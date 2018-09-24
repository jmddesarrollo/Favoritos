// Importar Component desde el núcleo de Angular
import {Component, OnInit} from '@angular/core';
// Provoca que nuestra página sea SPA (aplicación de una página).
import { Router, ActivatedRoute, Params } from '@angular/router';

// Importar Servicio y Modelo.
import {FavoritoService} from '../services/favorito.service';
import {Favorito} from '../models/favorito';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html',
    providers: [FavoritoService]
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritosListComponent implements OnInit{ 
    public titulo: string;
    public loading: boolean;
    public errorMessage;    
    public favoritos: Favorito[];
    public confirmado;

    constructor(private _favoritoService: FavoritoService){
        this.titulo = "Listado de marcadores";
        this.loading = true;
    }

    // 
    ngOnInit(){
        console.log("Favoritos List Component cargado");
        this.getFavoritos();
    }

    getFavoritos(){
        this._favoritoService.getFavoritos().subscribe(
            result => {                
                this.favoritos = result.favoritos;
                console.log(this.favoritos);
                if(!this.favoritos){
                    alert("Error en el servidor");
                    
                }
                this.loading = false;
            },
            error  => {
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
        );
    }

    onBorrarConfirm(id){
        this.confirmado = id;
    }

    onCancelarConfirm(id){
        this.confirmado = null;
    }

    onBorrarFavorito(id){
        this._favoritoService.deleteFavorito(id).subscribe(
            response => {
                if (!response.message){
                    alert("Error en la petición de eliminación");
                }else{
                    this.getFavoritos();
                }
            },
            error => {
                this.errorMessage = <any>error;
                if(this.errorMessage != null){
                    console.log(this.errorMessage);
                    alert("Error en la petición");
                }
            }
        );
    }
}   