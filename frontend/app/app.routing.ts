// Librería necesaria para funcionamiento de Router
import { ModuleWithProviders } from '@angular/core';
// Componentes de rutas
import { Routes, RouterModule } from '@angular/router';

//Importación de componentes
import {FavoritosListComponent } from './components/favoritos-list.component';
import {FavoritoDetailComponent } from './components/favorito-detail.component';
import {FavoritoAddComponent } from './components/favorito-add.component';
import {FavoritoEditComponent } from './components/favorito-edit.component';

// Array con la definición de todas las rutas
// '': Ruta vacía; '**': Cuando no existe la ruta (debe ir al final, pq sino considera que no existe)
const appRoutes: Routes = [    
    {path: '', component: FavoritosListComponent},
    {path: 'marcador/:id', component: FavoritoDetailComponent},
    {path: 'crear-marcador', component: FavoritoAddComponent},
    {path: 'editar-marcador/:id', component: FavoritoEditComponent},
    {path: '**', component: FavoritosListComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);