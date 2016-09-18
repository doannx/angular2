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