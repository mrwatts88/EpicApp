"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var http_service_service_1 = require("./http-service.service");
describe('HttpServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [http_service_service_1.HttpServiceService]
        });
    });
    it('should be created', testing_1.inject([http_service_service_1.HttpServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=http-service.service.spec.js.map