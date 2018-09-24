// El injectable permite inyectar este servicio en otras clases.
import {Injectable} from '@angular/core';
import {Http, Response, Headers} from '@angular/http';
// Mapear y recoger respuestas que llegan de los servicios
import 'rxjs/add/operator/map';
// Observable permite mayormente recoger respuestas Ajax
import {Observable} from 'rxjs/Observable';
import {Favorito} from '../models/Favorito';

@Injectable()
export class FavoritoService{
    public url: string;
    constructor(private _http: Http){
        this.url = 'http://localhost:3678/api/';
    }

    getFavoritos(){
        return this._http.get(this.url+'favoritos').map(res => res.json());
    }

    getFavorito(id: string){
        return this._http.get(this.url+'favorito/'+id).map(res => res.json());
    }

    addFavorito(favorito: Favorito){
        // Convierte a un string el objeto que llega de JSON.
        let json = JSON.stringify(favorito);
        let params = json;
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.post(this.url+'/favorito', params, {headers: headers}).map(res => res.json());

    }

    editFavorito(id: string, favorito: Favorito){
        let json = JSON.stringify(favorito);
        let params = json;
        let headers = new Headers({'Content-Type':'application/json'});

        return this._http.put(this.url+'/favorito/'+id, params, {headers: headers}).map(res => res.json());
    }

    deleteFavorito(id: string){
        return this._http.delete(this.url+'favorito/'+id).map(res => res.json());
    }
}