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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var HttpServiceService = (function () {
    function HttpServiceService(http) {
        this.http = http;
    }
    HttpServiceService.prototype.getResume = function () {
        return this.http.get('resumedownload', { responseType: http_2.ResponseContentType.Blob })
            .map(function (res) {
            return new Blob([res.blob()], { type: 'application/pdf' });
        });
    };
    HttpServiceService.prototype.getStockData = function () {
        return this.http.get('getStockData', { responseType: http_2.ResponseContentType.Json }).map(function (res) {
            return res;
        });
    };
    return HttpServiceService;
}());
HttpServiceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpServiceService);
exports.HttpServiceService = HttpServiceService;
//# sourceMappingURL=http-service.service.js.map