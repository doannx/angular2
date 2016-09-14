"use strict";
var router_1 = require('@angular/router');
var album_form_component_1 = require('./album-form.component');
var album_list_component_1 = require('./album-list.component');
var appRoutes = [
    {
        path: 'artists/43ZHCT0cAZBISjO8DG9PnE',
        component: album_list_component_1.AlbumListComponent
    },
    {
        path: 'create',
        component: album_form_component_1.AlbumFormComponent
    },
    {
        path: '',
        redirectTo: 'artists/43ZHCT0cAZBISjO8DG9PnE',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: album_form_component_1.AlbumFormComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map