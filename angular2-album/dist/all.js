"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent = __decorate([
        core_1.Component({
            selector: 'about-component',
            template: "\n        <div class=\"container\">\n            <h1>Building yourself a simple CRUD application with Angular</h1>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about-component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
require('rxjs/Rx');
var album_service_1 = require('./album.service');
var AlbumFormComponent = (function () {
    function AlbumFormComponent(albumService, route, router) {
        this.albumService = albumService;
        this.route = route;
        this.router = router;
        this.editMode = false;
        this.submitted = false;
    }
    AlbumFormComponent.prototype.onSubmit = function () {
        var _this = this;
        if (!this.editMode) {
            this.submitted = true;
            this.editMode = !this.editMode;
        }
        else {
            // save, then, back to list screen 
            var link_1 = ['/artists/43ZHCT0cAZBISjO8DG9PnE'];
            this.albumService.update(this.album).subscribe(function (res) { return _this.router.navigate(link_1); });
        }
    };
    AlbumFormComponent.prototype.ngOnInit = function () {
        /*
        this.route.params.forEach((params: Params) => {
          let id = params['id'];
          if (id) {
            this.album = this.albumService.getAlbum(id);
          } else {
            this.editMode = true;
          }
        });
        */
        var _this = this;
        this.route.params.flatMap(function (params) { return _this.albumService.getById(params['id']); })
            .subscribe(function (album) { return _this.album = album; });
    };
    AlbumFormComponent.prototype.goBack = function () {
        window.history.back();
    };
    AlbumFormComponent = __decorate([
        core_1.Component({
            selector: 'album-form',
            templateUrl: 'app/album-form.component.html'
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, router_1.ActivatedRoute, router_1.Router])
    ], AlbumFormComponent);
    return AlbumFormComponent;
}());
exports.AlbumFormComponent = AlbumFormComponent;
//# sourceMappingURL=album-form.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var album_service_1 = require('./album.service');
var artist_service_1 = require('./artist.service');
var AlbumListComponent = (function () {
    function AlbumListComponent(albumService, artistService, router) {
        this.albumService = albumService;
        this.artistService = artistService;
        this.router = router;
    }
    AlbumListComponent.prototype.onSelect = function (album) {
        var link = ['/detail', album.id];
        this.selectedAlbum = album;
        this.router.navigate(link);
    };
    AlbumListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.albumService.getAll()
            .subscribe(function (albums) { return _this.albums = albums; });
        this.artistService.getAll()
            .subscribe(function (artists) { return _this.artists = artists; });
    };
    AlbumListComponent = __decorate([
        core_1.Component({
            selector: 'album-list',
            templateUrl: 'app/album-list.component.html'
        }), 
        __metadata('design:paramtypes', [album_service_1.AlbumService, artist_service_1.ArtistService, router_1.Router])
    ], AlbumListComponent);
    return AlbumListComponent;
}());
exports.AlbumListComponent = AlbumListComponent;
//# sourceMappingURL=album-list.component.js.map
"use strict";
var Album = (function () {
    function Album(id, name, type, album_type, available_markets, external_urls, href, images, uri) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.album_type = album_type;
        this.available_markets = available_markets;
        this.external_urls = external_urls;
        this.href = href;
        this.images = images;
        this.uri = uri;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=album.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var iservice_1 = require('./iservice');
var constants = require('./constants');
var AlbumService = (function (_super) {
    __extends(AlbumService, _super);
    function AlbumService(http) {
        _super.call(this, http);
    }
    AlbumService.prototype.getAll = function () {
        return this.http.get(constants.ALBUMS_API_ENDPOINT)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.getById = function (id) {
        return this.http.get(constants.ALBUMS_API_ENDPOINT + id)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    AlbumService.prototype.update = function (album) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.put(constants.ALBUMS_API_ENDPOINT + album['id'], JSON.stringify(album), { headers: headers }).catch(this.handleError);
    };
    AlbumService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AlbumService);
    return AlbumService;
}(iservice_1.AbstractService));
exports.AlbumService = AlbumService;
//# sourceMappingURL=album.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.title = "Simple CRUD Angular2 App";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <nav class=\"container\">\n        <a routerLink=\"/artists/43ZHCT0cAZBISjO8DG9PnE\">Album List</a>\n        <a routerLink=\"/about\">About</a>\n      </nav>\n      <router-outlet></router-outlet>\n      "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var album_form_component_1 = require('./album-form.component');
var album_list_component_1 = require('./album-list.component');
var about_component_1 = require('./about-component');
var album_service_1 = require('./album.service');
var artist_service_1 = require('./artist.service');
var app_routing_1 = require('./app.routing');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing],
            declarations: [app_component_1.AppComponent,
                album_form_component_1.AlbumFormComponent,
                album_list_component_1.AlbumListComponent,
                about_component_1.AboutComponent
            ],
            providers: [
                album_service_1.AlbumService,
                artist_service_1.ArtistService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
"use strict";
var router_1 = require('@angular/router');
var album_form_component_1 = require('./album-form.component');
var album_list_component_1 = require('./album-list.component');
var about_component_1 = require('./about-component');
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
    },
    {
        path: 'about',
        component: about_component_1.AboutComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/Rx');
var iservice_1 = require('./iservice');
var constants = require('./constants');
var ArtistService = (function (_super) {
    __extends(ArtistService, _super);
    function ArtistService(http) {
        _super.call(this, http);
    }
    ArtistService.prototype.getAll = function () {
        return this.http.get(constants.ARTISTS_API_ENDPOINT)
            .map(function (r) { return r.json(); })
            .catch(this.handleError);
    };
    ArtistService.prototype.getById = function () {
        console.log("Not yet implemented");
    };
    ArtistService.prototype.update = function () {
        console.log("Not yet implemented");
    };
    ArtistService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ArtistService);
    return ArtistService;
}(iservice_1.AbstractService));
exports.ArtistService = ArtistService;
//# sourceMappingURL=artist.service.js.map
"use strict";
exports.ALBUMS_API_ENDPOINT = 'http://localhost:3000/albums/';
exports.ARTISTS_API_ENDPOINT = "http://localhost:3000/artists/";
//# sourceMappingURL=constants.js.map
"use strict";
var AbstractService = (function () {
    function AbstractService(http) {
        this.http = http;
    }
    AbstractService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    return AbstractService;
}());
exports.AbstractService = AbstractService;
//# sourceMappingURL=iservice.js.map
"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_module_1 = require('./app.module');
var platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map