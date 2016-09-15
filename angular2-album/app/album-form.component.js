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
var album_1 = require('./album');
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
        if (!this.editMode) {
            this.submitted = true;
            this.editMode = !this.editMode;
        }
        else {
            // save
            console.log('new album: ', this.album);
            // back to list screen
            var link = ['/artists/43ZHCT0cAZBISjO8DG9PnE'];
            this.router.navigate(link);
        }
    };
    AlbumFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            if (id) {
                _this.albumService.getAlbum(id).then(function (album) {
                    _this.album = album;
                });
            }
            else {
                _this.album = new album_1.Album(1, '', '', '');
                _this.editMode = true;
            }
        });
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