import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
// Necesario para los servicios
import { HttpModule, JsonpModule } from '@angular/http';
// Importar nuestro fichero creado de rutas.
import { routing, appRoutingProviders } from './app.routing'; 

import { AppComponent }  from './app.component';
import { FavoritosListComponent }  from './components/favoritos-list.component';
import { FavoritoDetailComponent }  from './components/favorito-detail.component';
import { FavoritoAddComponent }  from './components/favorito-add.component';
import { FavoritoEditComponent }  from './components/favorito-edit.component';

// En imports se recoge los modulos de la plataforma de Angular que vamos a ir utilizando.
// En declarations se recoge los componentes que vamos desarrollando para la aplicación.
// En bootstrap se indica el componente inicial de la aplicación.
@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
    declarations: [ 
                AppComponent,
                FavoritosListComponent,
                FavoritoDetailComponent,
                FavoritoAddComponent,
                FavoritoEditComponent
                ],
    providers: [appRoutingProviders],
    bootstrap:    [ AppComponent ]
})
 
export class AppModule { }