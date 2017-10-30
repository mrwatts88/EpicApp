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
var file_saver_1 = require("file-saver");
var ResumeComponent = (function () {
    function ResumeComponent(httpServ) {
        this.httpServ = httpServ;
        this.pdfSrc = '../../assets/Resume.pdf';
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    ResumeComponent.prototype.download = function () {
        this.httpServ.getResume().subscribe(function (res) {
            file_saver_1.saveAs(res, "MatthewWattsResume.pdf");
            var fileURL = URL.createObjectURL(res);
            window.open(fileURL);
        });
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    core_1.Component({
        selector: 'app-resume',
        templateUrl: './resume.component.html',
        styleUrls: ['./resume.component.css']
    }),
    __metadata("design:paramtypes", [http_service_service_1.HttpServiceService])
], ResumeComponent);
exports.ResumeComponent = ResumeComponent;
//# sourceMappingURL=resume.component.js.map