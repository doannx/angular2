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