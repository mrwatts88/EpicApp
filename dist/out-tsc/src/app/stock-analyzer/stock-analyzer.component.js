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
var http_service_service_1 = require("../http-service.service");
var StockAnalyzerComponent = (function () {
    function StockAnalyzerComponent(httpServ) {
        this.httpServ = httpServ;
    }
    StockAnalyzerComponent.prototype.ngOnInit = function () {
    };
    StockAnalyzerComponent.prototype.getStockData = function () {
        this.httpServ.getStockData().subscribe(function (res) {
            console.log(res);
        });
    };
    return StockAnalyzerComponent;
}());
StockAnalyzerComponent = __decorate([
    core_1.Component({
        selector: 'app-stock-analyzer',
        templateUrl: './stock-analyzer.component.html',
        styleUrls: ['./stock-analyzer.component.css']
    }),
    __metadata("design:paramtypes", [http_service_service_1.HttpServiceService])
], StockAnalyzerComponent);
exports.StockAnalyzerComponent = StockAnalyzerComponent;
//# sourceMappingURL=stock-analyzer.component.js.map