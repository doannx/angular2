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