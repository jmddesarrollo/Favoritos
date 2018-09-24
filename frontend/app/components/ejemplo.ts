// Importar Component desde el núcleo de Angular
import {Component} from '@angular/core';
 
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'favoritos-list',
    templateUrl: 'app/views/favoritos-list.html'
})
 
// Clase del componente donde irán los datos y funcionalidades
export class FavoritosListComponent { 
    public titulo: string;
    public favoritos: Array<string>;
    public favoritosVisibles: boolean;
    public color: string;

    constructor(){
        this.titulo = "Listado de marcadores";
        this.favoritos = ['primer elemento', 'segundo elemento', 'tercer elemento'];
        this.favoritosVisibles = false;
    }

    public showVisible(){
        this.favoritosVisibles = true;
    }
    public hideVisible(){
        this.favoritosVisibles = false;
    }

    public changeColor(){
    }
}   