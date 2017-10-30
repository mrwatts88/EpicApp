"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var ng2_scroll_to_1 = require("ng2-scroll-to");
var router_1 = require("@angular/router");
var ng2_pdf_viewer_1 = require("ng2-pdf-viewer");
var http_service_service_1 = require("./http-service.service");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./navbar/navbar.component");
var jumbo_component_1 = require("./jumbo/jumbo.component");
var below_the_fold_component_1 = require("./below-the-fold/below-the-fold.component");
var who_i_am_component_1 = require("./who-i-am/who-i-am.component");
var what_i_do_component_1 = require("./what-i-do/what-i-do.component");
var welcome_component_1 = require("./welcome/welcome.component");
var resume_component_1 = require("./resume/resume.component");
var whoa_component_1 = require("./whoa/whoa.component");
var p5_component_1 = require("./p5/p5.component");
var stock_analyzer_component_1 = require("./stock-analyzer/stock-analyzer.component");
var appRoutes = [
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'whoiam', component: who_i_am_component_1.WhoIAmComponent },
    { path: 'whatido', component: what_i_do_component_1.WhatIDoComponent },
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'whoa', component: whoa_component_1.WhoaComponent },
    { path: 'stocks', component: stock_analyzer_component_1.StockAnalyzerComponent },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            jumbo_component_1.JumboComponent,
            below_the_fold_component_1.BelowTheFoldComponent,
            who_i_am_component_1.WhoIAmComponent,
            what_i_do_component_1.WhatIDoComponent,
            welcome_component_1.WelcomeComponent,
            resume_component_1.ResumeComponent,
            whoa_component_1.WhoaComponent,
            ng2_pdf_viewer_1.PdfViewerComponent,
            p5_component_1.P5Component,
            stock_analyzer_component_1.StockAnalyzerComponent
        ],
        imports: [
            router_1.RouterModule.forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            ng2_scroll_to_1.ScrollToModule.forRoot()
        ],
        providers: [http_service_service_1.HttpServiceService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map