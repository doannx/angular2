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