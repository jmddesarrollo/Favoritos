"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Componentes de rutas
var router_1 = require("@angular/router");
//Importación de componentes
var favoritos_list_component_1 = require("./components/favoritos-list.component");
var favorito_detail_component_1 = require("./components/favorito-detail.component");
var favorito_add_component_1 = require("./components/favorito-add.component");
var favorito_edit_component_1 = require("./components/favorito-edit.component");
// Array con la definición de todas las rutas
// '': Ruta vacía; '**': Cuando no existe la ruta (debe ir al final, pq sino considera que no existe)
var appRoutes = [
    { path: '', component: favoritos_list_component_1.FavoritosListComponent },
    { path: 'marcador/:id', component: favorito_detail_component_1.FavoritoDetailComponent },
    { path: 'crear-marcador', component: favorito_add_component_1.FavoritoAddComponent },
    { path: 'editar-marcador/:id', component: favorito_edit_component_1.FavoritoEditComponent },
    { path: '**', component: favoritos_list_component_1.FavoritosListComponent }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map