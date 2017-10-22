webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen \r\nand (max-width: 640px) \r\nand (max-height: 360px) \r\nand (orientation: landscape) {\r\n  .navbar{\r\n    min-height: 30px !important;\r\n  }\r\n}\r\n\r\n.full-screen-height{\r\n  height: 100vh;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top navbar-inverse\">\n  <div class=\"container\">\n    <app-navbar></app-navbar>\n  </div>\n</nav>\n<router-outlet></router-outlet>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_scroll_to__ = __webpack_require__("../../../../ng2-scroll-to/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_scroll_to___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_scroll_to__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__ = __webpack_require__("../../../../ng2-pdf-viewer/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__jumbo_jumbo_component__ = __webpack_require__("../../../../../src/app/jumbo/jumbo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__below_the_fold_below_the_fold_component__ = __webpack_require__("../../../../../src/app/below-the-fold/below-the-fold.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__who_i_am_who_i_am_component__ = __webpack_require__("../../../../../src/app/who-i-am/who-i-am.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__what_i_do_what_i_do_component__ = __webpack_require__("../../../../../src/app/what-i-do/what-i-do.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resume_resume_component__ = __webpack_require__("../../../../../src/app/resume/resume.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__whoa_whoa_component__ = __webpack_require__("../../../../../src/app/whoa/whoa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__p5_p5_component__ = __webpack_require__("../../../../../src/app/p5/p5.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var appRoutes = [
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_11__welcome_welcome_component__["a" /* WelcomeComponent */] },
    { path: 'whoiam', component: __WEBPACK_IMPORTED_MODULE_9__who_i_am_who_i_am_component__["a" /* WhoIAmComponent */] },
    { path: 'whatido', component: __WEBPACK_IMPORTED_MODULE_10__what_i_do_what_i_do_component__["a" /* WhatIDoComponent */] },
    { path: 'resume', component: __WEBPACK_IMPORTED_MODULE_12__resume_resume_component__["a" /* ResumeComponent */] },
    { path: 'whoa', component: __WEBPACK_IMPORTED_MODULE_13__whoa_whoa_component__["a" /* WhoaComponent */] },
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__jumbo_jumbo_component__["a" /* JumboComponent */],
            __WEBPACK_IMPORTED_MODULE_8__below_the_fold_below_the_fold_component__["a" /* BelowTheFoldComponent */],
            __WEBPACK_IMPORTED_MODULE_9__who_i_am_who_i_am_component__["a" /* WhoIAmComponent */],
            __WEBPACK_IMPORTED_MODULE_10__what_i_do_what_i_do_component__["a" /* WhatIDoComponent */],
            __WEBPACK_IMPORTED_MODULE_11__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__resume_resume_component__["a" /* ResumeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__whoa_whoa_component__["a" /* WhoaComponent */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_pdf_viewer__["PdfViewerComponent"],
            __WEBPACK_IMPORTED_MODULE_14__p5_p5_component__["a" /* P5Component */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
            ),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_scroll_to__["ScrollToModule"].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/below-the-fold/below-the-fold.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron{\r\n    margin-top:20px;\r\n    margin-bottom: 20px;\r\n    padding: 11px;\r\n    text-align: center;\r\n}\r\n\r\n.card{\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    margin: auto;\r\n    \r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/below-the-fold/below-the-fold.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h2>\n     About this site.\n    </h2>\n    <p>\n      I created this site as a way to differentiate myself from other applicants during the hiring process, and to showcase\n      a piece of my skillset.  I used the following technologies:\n      <br>\n      <br>\n       NodeJS backend\n   <br>\n        Express Server\n        <br>\n        Angular frontend\n        <br>\n        Bootstrap 4 styling\n        <br>\n        p5.js animation library\n        <br>\n        Deployed to Heroku    \n    </p>\n       \n    \n\n  </div>\n<div class=\"jumbotron\">\n  <h2>\n    Contact Me.\n  </h2>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <b>email</b>\n      <p>\n        matthew.watts.mw@gmail.com\n      </p>\n    </div>\n    <div class=\"col-md-6\">\n      <b>phone</b>\n      <p>\n        (262) 894-6758\n      </p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <b>github</b>\n      <p>\n        github.com/mrwatts88\n      </p>\n    </div>\n    <div class=\"col-md-6\">\n      <b>\n       linkedIn\n     </b>\n      <p>\n        linkedin.com/in/matthewrwatts\n      </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/below-the-fold/below-the-fold.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BelowTheFoldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BelowTheFoldComponent = (function () {
    function BelowTheFoldComponent() {
    }
    BelowTheFoldComponent.prototype.ngOnInit = function () {
    };
    return BelowTheFoldComponent;
}());
BelowTheFoldComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-below-the-fold',
        template: __webpack_require__("../../../../../src/app/below-the-fold/below-the-fold.component.html"),
        styles: [__webpack_require__("../../../../../src/app/below-the-fold/below-the-fold.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BelowTheFoldComponent);

//# sourceMappingURL=below-the-fold.component.js.map

/***/ }),

/***/ "../../../../../src/app/jumbo/jumbo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/aoeu.png") + ");\r\n    background-size: 100%;   \r\n    margin-bottom: 0;\r\n    margin-top: -20px;   \r\n    height: calc(100vh - 52px); \r\n  }\r\n\r\n.jumbotron h1{\r\n  -webkit-text-stroke-width: 2px;\r\n    -webkit-text-stroke-color: white;\r\n    color: #464444;    \r\n}\r\n\r\n.jumbotron .btn-primary {\r\n  background: #222222;\r\n  border-color: black; \r\n}\r\n\r\n.jumbotron .btn-default {\r\n  background: white;\r\n  border-color: black; \r\n}\r\n\r\n.jumbotron .btn-primary:hover {\r\n  background: darkgray; \r\n}\r\n\r\n.jumbotron .btn-default:hover {\r\n  background: darkgray; \r\n}\r\n\r\n.jumbotron p {\r\n  color: black;\r\n  max-width: 75%;\r\n  margin: 1em auto 2em;\r\n }\r\n\r\n.jumbotron .lang-logo {\r\n  display: block;\r\n  background: white;\r\n  border-radius: 50%;\r\n  overflow: hidden;\r\n  width: 100px;\r\n  height: 100px;\r\n  margin: auto;\r\n  border: 2px solid white;\r\n }\r\n\r\n.jumbotron .lang-logo img {    \r\n  max-width: 100%;\r\n}\r\n\r\n.jumbotron .btn-block{\r\n  position: absolute;\r\n  bottom: 0px;\r\n  height: 25px;\r\n  border-radius: 0px;\r\n}\r\n\r\n \r\n.glyphicon-triangle-bottom{\r\n\r\ntop:-6px;\r\n}\r\n\r\n\r\n\r\n/* Portrait */\r\n@media screen \r\nand (max-width: 360px) \r\nand (max-height: 640px) \r\nand (orientation: portrait) {\r\n\r\n  .jumbotron {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/aoeu.png") + ");\r\n    background-size: 100%;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n     \r\n  }\r\n\r\n.jumbotron h1{\r\n  -webkit-text-stroke-width: 0px;\r\n    color: black;    \r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    margin-top:25px;\r\n}\r\n\r\n.jumbotron p{\r\n  color: #464444;    \r\n  font-size: 1em;\r\n  font-weight: bold;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.jumbotron .btn-default {\r\n  background: white;\r\n  border-color: black; \r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.jumbotron .btn-primary:hover {\r\n  background: #222222;\r\n  border-color: black; \r\n}\r\n\r\n\r\n\r\n}\r\n\r\n/* Landscape */\r\n@media screen \r\nand (max-width: 640px) \r\nand (max-height: 360px) \r\nand (orientation: landscape) {\r\n\r\n .jumbotron {\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/aoeu.png") + ");\r\n    background-size: 100%;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    height: calc(100vh - 43px); \r\n\r\n  }\r\n\r\n.jumbotron h1{\r\n  -webkit-text-stroke-width: 0px;\r\n    color: black;    \r\n    font-size: 1.5em;\r\n    font-weight: bold;\r\n    margin-top:5px;\r\n    margin-left:125px;\r\n    \r\n}\r\n\r\n.jumbotron p{\r\n  color: #464444;    \r\n  font-size: 1em;\r\n  font-weight: bold;\r\n margin-bottom: 10px;\r\n  margin-left:125px;\r\n\r\n}\r\n\r\n.jumbotron .btn-default {\r\n  background: white;\r\n  border-color: black; \r\n  font-size: .9em;\r\n\r\n}\r\n\r\n.jumbotron .btn-primary {\r\n  background: #222222;\r\n  border-color: black; \r\n  font-size: .9em;\r\n}\r\n\r\n.jumbotron .btn-primary:hover {\r\n  background: #222222;\r\n  border-color: black; \r\n}\r\n\r\n\r\n.glyphicon-triangle-bottom{  \r\n  top:-3px;\r\n  }\r\n\r\n.jumbotron .lang-logo {\r\n float:left;\r\n margin-top:5px;\r\n}\r\n\r\n\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jumbo/jumbo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron text-center\">\r\n  <div class=\"container\">\r\n    <span class=\"lang-logo\">\r\n      <img style='height: 100%; width: 100%; object-fit: contain' src=\"./assets/matt.png\">      \r\n    </span>\r\n    <h1>Welcome, Epic! Thanks for taking the time to visit.</h1>\r\n    <p><strong>This is just a way for me to introduce myself, and provide you with a small view into my life.  Have a look around.</strong></p>\r\n    <a routerLink=\"/whoiam\" class=\"btn btn-lg btn-default\" ><span class=\"glyphicon glyphicon-info-sign\"></span> Learn about who I am...</a>\r\n    <a routerLink=\"/whatido\" class=\"btn btn-lg btn-primary\" ><span class=\"glyphicon glyphicon-info-sign\"></span> Learn about what I do...</a>\r\n    \r\n  </div>\r\n  <a scrollTo href=\"#scrollToMe\" class=\"btn btn-primary btn-lg btn-block\"><span class=\"glyphicon glyphicon-triangle-bottom\"></span></a>\r\n</div>  "

/***/ }),

/***/ "../../../../../src/app/jumbo/jumbo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JumboComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JumboComponent = (function () {
    function JumboComponent() {
    }
    JumboComponent.prototype.ngOnInit = function () {
    };
    return JumboComponent;
}());
JumboComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-jumbo',
        template: __webpack_require__("../../../../../src/app/jumbo/jumbo.component.html"),
        styles: [__webpack_require__("../../../../../src/app/jumbo/jumbo.component.css")]
    }),
    __metadata("design:paramtypes", [])
], JumboComponent);

//# sourceMappingURL=jumbo.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar{\r\n    margin-top: -20px;\r\n   }\r\n\r\n   /* Landscape */\r\n@media screen \r\nand (max-width: 640px) \r\nand (max-height: 360px) \r\nand (orientation: landscape) {\r\n\r\n.nav>li{\r\n    float: left;\r\n\r\n\r\n}\r\n\r\n.navbar-nav{\r\n    margin: 0px -15px !important;\r\n  }\r\n\r\n}\r\n\r\n/* portrait */\r\n@media screen \r\nand (max-width: 360px) \r\nand (max-height: 640px) \r\nand (orientation: portrait) {\r\n\r\n.nav>li{\r\n    float: left;\r\n\r\n\r\n}}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav\">\n  <li class=\"welcome\">\n    <a routerLink=\"/welcome\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-home\"></span> Welcome</a>\n  </li>\n  <li class=\"resume\">\n    <a routerLink=\"/resume\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-user\"></span> Resume</a>\n  </li>\n  <li class=\"whoa\">\n    <a routerLink=\"/whoa\" routerLinkActive=\"active\"><span class=\"glyphicon glyphicon-flash\"></span> Whoa!!</a>\n  </li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/p5/p5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* canvas{\r\n    width:100%;\r\n    height: 600px;\r\n} */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/p5/p5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <h3>\n        What's going on here?\n      </h3>\n      <p>\n        This is a simulation of evolution using a genetic algorithm that I implemented in JavaScript.\n        <br>\n        <br>\n        The first generation of wanderers are exactly that.  They have 2000 random moves assigned upon their\n        creation.  After all 2000 moves, the wanderer expires.\n        <br>\n        <br>\n        When a generation is about to leave our existence,\n        each wanderer is given value based on the performance (In this case, the goal is to get to the top right corner).  This level of performance is known as fitness, and is\n        determined using a fitness function that I wrote.  The wanderers with a fitness score in the top 50% are selected to pass\n        on their DNA, which in this case is their 2000 move set. \n        <br>\n        <br>\n        A new generation is born with DNA very similar to the top \n        peformers of the previous generation.\n        There are some more intricacies taken into account to prevent the population from degrading to a very poor\n        performance.  A lot more can be done to improve their performance and I plan to make this more \n        interactive to give visitors the ability to control the algorithm's variables.\n      </p>\n    </div>\n    <div class=\"col-md-8\">\n      <div id='container'></div>\n\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/p5/p5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return P5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var P5Component = P5Component_1 = (function () {
    function P5Component() {
        this.learners = [];
        this.deadLearners = [];
        this.obstacles = [];
        this.home = this;
    }
    P5Component.prototype.ngOnInit = function () { };
    P5Component.prototype.ngAfterViewInit = function () {
        var _this = this;
        var sketch = function (p) {
            _this.p5ref = p;
            _this.p5ref.setup = function () {
                _this.p5ref.frameRate(100);
                var width = document.getElementById("container").offsetWidth;
                _this.p5ref.createCanvas(width, document.documentElement.clientHeight - 100);
                for (var i = 0; i < P5Component_1.NUM_OBSTACLES; i++) {
                    _this.obstacles.push(new Obstacle(_this.p5ref.width * (1 / (P5Component_1.NUM_OBSTACLES + 1)) * (i + 1), _this.p5ref));
                    ;
                }
                for (var i = 0; i < P5Component_1.NUM_LEARNERS; i++) {
                    var movements = [];
                    for (var i_1 = 0; i_1 < P5Component_1.LIFESPAN; i_1++) {
                        movements[i_1] = _this.p5ref.createVector(_this.p5ref.random(-P5Component_1.STEP_SIZE, P5Component_1.STEP_SIZE * 1.01), _this.p5ref.random(-P5Component_1.STEP_SIZE, P5Component_1.STEP_SIZE));
                    }
                    _this.learners.push(new Learner(8, _this.p5ref.height - 8, 0, movements, _this.p5ref, _this.home));
                }
            };
            _this.p5ref.draw = function () {
                _this.p5ref.background(0);
                _this.drawObstacles();
                if (_this.learners.length == 0) {
                    var run = true;
                    _this.p5ref.noLoop();
                    if (run) {
                        _this.calculateFitness();
                        _this.selectParents();
                        _this.reproduce();
                        run = false;
                    }
                    else {
                        console.log("dont run me");
                    }
                }
                else {
                    _this.drawLearners();
                    _this.removeDeadLearners();
                }
            };
        };
        var myp5 = new p5(sketch, 'container');
        this.p5ref.mousePressed = function () { };
        this.p5ref.windowResized = function () {
            var width = document.getElementById("container").offsetWidth;
            _this.p5ref.resizeCanvas(width, document.documentElement.clientHeight - 100);
            _this.p5ref.background(0);
            _this.drawObstacles();
        };
    };
    P5Component.prototype.drawObstacles = function () {
        for (var _i = 0, _a = this.obstacles; _i < _a.length; _i++) {
            var obstacle = _a[_i];
            obstacle.draw();
        }
    };
    P5Component.prototype.drawLearners = function () {
        for (var _i = 0, _a = this.learners; _i < _a.length; _i++) {
            var learner = _a[_i];
            learner.draw();
            learner.update();
        }
    };
    P5Component.prototype.removeDeadLearners = function () {
        for (var i = this.learners.length - 1; i >= 0; i--) {
            if (this.learners[i].isDead()) {
                var l = this.learners.splice(i, 1);
                this.deadLearners.push(l[0]);
            }
        }
    };
    P5Component.prototype.calculateFitness = function () {
        var maxDistToGoal = this.p5ref.dist(0, 0, this.p5ref.width, this.p5ref.height);
        var maxDistancesToNextOpening = [];
        var maxDistIndex = 0;
        var openingLocations = [{ 'x': 0, 'y': 0 }];
        for (var i = 0; i < P5Component_1.NUM_OBSTACLES; i++) {
            openingLocations.push({ 'x': this.obstacles[i].getX(), 'y': this.obstacles[i].getOpeningHeight() });
        }
        openingLocations.push({ 'x': this.p5ref.width, 'y': 0 });
        for (var i = 0; i < P5Component_1.NUM_OBSTACLES + 1; i++) {
            maxDistancesToNextOpening.push(this.p5ref.dist(openingLocations[i].x, openingLocations[i].y, openingLocations[i + 1].x, openingLocations[i + 1].y));
        }
        for (var _i = 0, _a = this.deadLearners; _i < _a.length; _i++) {
            var learner = _a[_i];
            var nextOpening = openingLocations[1];
            for (var i = openingLocations.length - 1; i <= 0; i++) {
                if (openingLocations[i].x > learner.getX()) {
                    nextOpening = openingLocations[i];
                    maxDistIndex = i;
                }
            }
            var distToNextOpening = this.p5ref.dist(learner.getX(), learner.getY(), nextOpening.x, nextOpening.y);
            var distToGoal = this.p5ref.dist(learner.getX(), learner.getY(), 0, this.p5ref.width);
            var obstacleBonus = 0;
            if (learner.getX() > (this.p5ref.width / 4)) {
                obstacleBonus += 40;
            }
            if (learner.getX() > (this.p5ref.width / 2)) {
                obstacleBonus += 40;
            }
            if (learner.getX() > (this.p5ref.width * 0.75)) {
                obstacleBonus += 40;
            }
            var fit = (((learner.getX()) / (this.p5ref.width)) + (1 - (distToGoal / maxDistToGoal)) + (1 - (distToNextOpening / maxDistancesToNextOpening[maxDistIndex]))) * 33;
            fit += obstacleBonus;
            learner.setFitness(fit);
        }
    };
    P5Component.prototype.selectParents = function () {
        this.topLearners = [];
        var topLearnerValue = 0;
        var topLearnerIndex = 0;
        for (var i = 0; i < 20; i++) {
            for (var j = 0; j < this.deadLearners.length; j++) {
                if (this.deadLearners[j].getFitness() > topLearnerValue) {
                    topLearnerValue = this.deadLearners[j].getFitness();
                    topLearnerIndex = j;
                }
            }
            var tl = this.deadLearners.splice(topLearnerIndex, 1);
            this.topLearners.push(tl[0]);
            console.log(topLearnerValue);
            topLearnerIndex = 0;
            topLearnerValue = 0;
        }
    };
    P5Component.prototype.reproduce = function () {
        this.learners = [];
        this.deadLearners = [];
        for (var i = 0; i < P5Component_1.NUM_LEARNERS; i++) {
            var movements = [];
            var parent = this.p5ref.random(this.topLearners);
            for (var i_2 = 0; i_2 < P5Component_1.LIFESPAN; i_2++) {
                var parentVector = parent.getMovements()[i_2];
                if (Math.random() < 0.02) {
                    movements[i_2] = this.p5ref.createVector(this.p5ref.random(-P5Component_1.STEP_SIZE, P5Component_1.STEP_SIZE * 1.05));
                }
                else {
                    movements[i_2] = this.p5ref.createVector(this.p5ref.random(parentVector.x, parentVector.x + 0.5), this.p5ref.random(parentVector.y - 1, parentVector.y + 1));
                }
            }
            this.learners.push(new Learner(8, this.p5ref.height - 8, 0, movements, this.p5ref, this.home));
        }
        this.p5ref.loop();
    };
    return P5Component;
}());
P5Component.NUM_OBSTACLES = 3;
P5Component.NUM_LEARNERS = 40;
P5Component.STEP_SIZE = 8;
P5Component.LIFESPAN = 3000;
P5Component = P5Component_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-p5',
        template: __webpack_require__("../../../../../src/app/p5/p5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/p5/p5.component.css")]
    }),
    __metadata("design:paramtypes", [])
], P5Component);

var Learner = (function () {
    function Learner(posX, posY, fitness, movements, p5ref, componentRef) {
        this.posX = posX;
        this.posY = posY;
        this.lastX = posX;
        this.lastY = posY;
        this.fitness = fitness;
        this.p5ref = p5ref;
        this.componentRef = componentRef;
        this.movements = movements;
        this.movementCounter = 0;
        this.dead = false;
    }
    Learner.prototype.draw = function () {
        this.p5ref.ellipse(this.posX, this.posY, 16);
    };
    Learner.prototype.update = function () {
        this.lastX = this.posX;
        this.lastY = this.posY;
        this.posX += this.movements[this.movementCounter++].x;
        this.posY += this.movements[this.movementCounter].y;
        for (var _i = 0, _a = this.componentRef.obstacles; _i < _a.length; _i++) {
            var ob = _a[_i];
            if (this.hits(ob)) {
                this.posX = this.lastX;
                this.posY = this.lastY;
            }
        }
        if (this.posX + 8 >= this.p5ref.width || this.posX - 8 <= 0 || this.posY + 8 >= this.p5ref.height || this.posY - 8 <= 0) {
            this.posX = this.lastX;
            this.posY = this.lastY;
        }
        if (this.movementCounter == this.movements.length - 1) {
            this.dead = true;
        }
    };
    Learner.prototype.hits = function (ob) {
        return (this.posX + 8 >= ob.getX() && this.posX - 8 <= ob.getX() + 15) && !(this.posY - 8 > ob.getOpeningHeight() - 100 && this.posY + 8 < ob.getOpeningHeight() + 100);
    };
    Learner.prototype.isDead = function () {
        return this.dead;
    };
    Learner.prototype.setFitness = function (x) {
        if (x >= 0) {
            this.fitness = x;
        }
    };
    Learner.prototype.getFitness = function () {
        return this.fitness;
    };
    Learner.prototype.getX = function () {
        return this.posX;
    };
    Learner.prototype.getY = function () {
        return this.posY;
    };
    Learner.prototype.getMovements = function () {
        return this.movements;
    };
    return Learner;
}());
var Obstacle = (function () {
    function Obstacle(posX, p5ref) {
        this.posX = posX;
        this.p5ref = p5ref;
        this.openingHeight = this.p5ref.random(100, document.documentElement.clientHeight - 200);
    }
    Obstacle.prototype.getX = function () {
        return this.posX;
    };
    Obstacle.prototype.getOpeningHeight = function () {
        return this.openingHeight;
    };
    Obstacle.prototype.draw = function () {
        this.p5ref.rect(this.posX, 0, 15, this.openingHeight - 100);
        this.p5ref.rect(this.posX, this.openingHeight + 100, 15, this.p5ref.height);
    };
    return Obstacle;
}());
var P5Component_1;
//# sourceMappingURL=p5.component.js.map

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resume-background{\r\n    background-color: #cccccc;\r\n    background-image: url(" + __webpack_require__("../../../../../src/assets/resumeBg.png") + ");\r\n    margin-top: -20px;\r\n}\r\n\r\n.twenty-px-padding-top{\r\n    padding-top:20px;\r\n    padding-bottom:45px;\r\n}\r\n\r\n\r\n/* Landscape */\r\n@media screen \r\nand (max-width: 640px) \r\nand (max-height: 360px) \r\nand (orientation: landscape) {\r\n    .twenty-px-padding-top{\r\n        padding-top:20px;\r\n      \r\n    }\r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"resume-background\">\n  <div class=\"container\">\n\n    <pdf-viewer class=\"twenty-px-padding-top\" [src]=\"pdfSrc\" [render-text]=\"true\" [original-size]=\"false\" style=\"display: block;\"></pdf-viewer>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/resume/resume.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResumeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResumeComponent = (function () {
    function ResumeComponent() {
        this.pdfSrc = '../../assets/Resume.pdf';
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    return ResumeComponent;
}());
ResumeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-resume',
        template: __webpack_require__("../../../../../src/app/resume/resume.component.html"),
        styles: [__webpack_require__("../../../../../src/app/resume/resume.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ResumeComponent);

//# sourceMappingURL=resume.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .full-view-height{\r\n    min-height: 100vh;\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<app-jumbo></app-jumbo>\r\n<div id=\"scrollToMe\" class=\"container full-view-height\">\r\n<app-below-the-fold></app-below-the-fold>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/what-i-do/what-i-do.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-1{\r\n    background: #DADCE2;\r\n    min-height: 100vh;\r\n    text-align: left;\r\n    padding: 20px 50px 50px 50px;  \r\n}\r\n\r\n.color-2{\r\n    background: rgb(240, 243, 237);\r\n    min-height: 100vh;\r\n    text-align: left;\r\n    padding: 20px 50px 50px 50px;   \r\n}\r\n\r\n.color-3{\r\n    background: #DADCE2;\r\n    min-height: 100vh;\r\n    text-align: left;\r\n    padding: 20px 50px 50px 50px;  \r\n}\r\n\r\n.negative-twenty-margin{\r\n    margin-top:-20px;\r\n    overflow: hidden;  \r\n}\r\n\r\n.btn-default{\r\n    margin-top:10px;\r\n}\r\n\r\n/* Landscape */\r\n@media screen \r\nand (max-width: 640px) \r\nand (max-height: 360px) \r\nand (orientation: landscape) {\r\n   \r\n    .color-1{\r\n        min-height: 0;\r\n    }\r\n    .color-2{\r\n        min-height: 0;\r\n    }\r\n    .color-3{\r\n        min-height: 0;\r\n    }\r\n    \r\n}\r\n\r\n/* portriat */\r\n@media screen \r\nand (max-width: 360px) \r\nand (max-height: 640px) \r\nand (orientation: portrait) {\r\n    .color-1{\r\n        min-height: 0;\r\n    }\r\n    .color-2{\r\n        min-height: 0;\r\n    }\r\n    .color-3{\r\n        min-height: 0;\r\n    }\r\n    \r\n\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/what-i-do/what-i-do.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row negative-twenty-margin\">\n  <div class=\"col-md-4 color-1\">\n    <h4>\n      Programming Languages\n      <a class=\"btn btn-default\" routerLink=\"/welcome\">Go back.</a>\n    </h4>\n    <p>\n      I love to write code.\n      <br>\n      <br>\n      There are 4 programming languages that are in my life organically.  At work, I use C# and JavaScript/TypeScript on\n      a regular basis, and this semester, I am taking classes in Java and MIPS assembly.\n      <br>\n      <br>\n      I wanted more, so I created a new repository with the goal of learning about 7 popular languages at the same time.\n      I am working on coding up examples of the fundamentals, as well as implementing common data structures/algorithms in each language.\n      This is a relatively new undertaking, but I am enjoying it a lot.  I plan to look into the standard libraries and popular frameworks for each as well.\n      <br>\n      <br>\n      The languages I'm exploring are :   \n    </p>\n        <ul>\n          <li>\n            C\n          </li>\n          <li>\n            C#\n          </li>\n          <li>\n            C++\n          </li>\n          <li>\n            Java\n          </li>\n          <li>\n            JavaScript\n          </li>\n          <li>\n            Python\n          </li>\n          <li>\n            Ruby\n          </li>\n        </ul>\n        <p>\n          My strongest languages at this time are Java and JavaScript.\n        </p>\n  </div>\n  <div class=\"col-md-4 color-2\">\n    <h4>\n      8-bit Computer\n    </h4>\n    <p>\n      Software is definitely my strongest area of interest, but I'm interested in hardware as well.\n      As a way to gain a deeper understanding of how a computer works, and to supplement my Digital Logic and Computer Architecture courses,\n      I am building an 8-bit computer on breadboards.\n      <br>\n      <br>\n      As I learned about latches and comparators, I built a clock for the CPU.  As I learned about JK flip flops, I built some\n      registers.  I plan to continue to add components as I learn about them.\n      <br>\n      <br>\n      When I'm feeling crazy, I imagine I might implement TCP/IP on it from scratch.  We'll see...\n    </p>\n  </div>\n  <div class=\"col-md-4 color-3\">\n    <h4>\n      Energy Analytics      \n    </h4>\n    <p>\n      I am currently working at Rockwell Automation in Milwaukee as a Systems Architect intern.  I am learning a lot about \n      creating an end to end solution from conception through commercialization.  \n      <br>\n      <br>\n      Our team is building an application to help manufacturers increase their energy efficiency and lower overall consumption.\n      I have been given a lot of responsibility on the development of our application.\n      <br>\n      <br>\n      In my time at Rockwell, I have gained experience\n      in network programming, .NET, ASP.NET Core, Angular, MongoDB, and SQL Server, among other technologies.\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/what-i-do/what-i-do.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhatIDoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhatIDoComponent = (function () {
    function WhatIDoComponent() {
    }
    WhatIDoComponent.prototype.ngOnInit = function () {
    };
    return WhatIDoComponent;
}());
WhatIDoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-what-i-do',
        template: __webpack_require__("../../../../../src/app/what-i-do/what-i-do.component.html"),
        styles: [__webpack_require__("../../../../../src/app/what-i-do/what-i-do.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WhatIDoComponent);

//# sourceMappingURL=what-i-do.component.js.map

/***/ }),

/***/ "../../../../../src/app/who-i-am/who-i-am.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".right-border{\r\n    border-style: solid;\r\n    border-width: 0 1px 0 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/who-i-am/who-i-am.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <section>\n    <div class=\"row\">\n      <div class=\"col-md-6 right-border\">\n        <h1>\n          A little about me.\n          <a class=\"btn btn-default\" routerLink=\"/welcome\">Go back.</a>\n        </h1>\n        <p>\n          Hi, my name is Matt Watts.  I am back in college...for the third time.  What can I say, I love to learn.  In 2012, I graduated with my MBA and went on \n          to work in third party logistics for a short period of time.  \n          <br>\n          <br>\n          It wasn't for me.  \n          <br>\n          <br>\n          So I made the choice to leave my job to try and find something\n          more fulfilling.  After a backpacking trip in southeast Asia, I decided to try out the casino industry.  I always excelled at Math,\n          and am a big fan of games as well as the statistics behind them.\n          <br>\n          <br>\n          So I began supervising at a casino. I enjoyed it for a while, but I wasn't using my mind\n          to the extent that I wanted to.  I didn't feel that I was contributing anything meaningful, never had the opportunity to innovate,\n          and nothing was challenging me.\n          <br>\n          <br>\n          I have always enjoyed the STEM fields, but for some reason didn't major in one.  I even started writing code in 8th grade, so what happened\n          when I went off to college?  I don't know; thinking about it now, it seems like I was just on autopilot.  Going to college because I was\n          supposed to, majoring in business because it was popular.  Not a good way to make important life choices, I know.\n          <br>\n          <br>\n          So 2 years ago, I made the big decision to go back to school for something that would really make me happy.  I wanted a career where I could \n          innovate everyday, always be solving problems, and actually contribute to our society.  It has turned out to be the correct decision by a long shot.\n          \n          Fast forward to today.  I am 3 semesters from graduating, have had excellent academic peformance, experienced industry-relevant internships at 2 companies, \n          and am thouroughly enjoying every day. \n        </p>\n      </div>  \n      <div class=\"col-md-6\">\n          <h1>\n              So what's next?\n            </h1>\n            <p>\n                Well, as the last Summer before my graduation approaches, I am doing everything I can to make it one that will help define myself and my future career.\n                <br>\n                <br>\n                I want that definition to include a broad range of knowledge, a passion for engineering and computer science, a wide array of cultural experiences, and the opportunity to innovate every day.\n                Now that I am in my junior year studying computer science and have gained relevant industry experience, I feel that I am well-qualified for many internship opportunities.  That being said, I have been on the search for the company that could make this all possible.\n                <br>\n                <br>\n                I believe Epic Healthcare may be that company.  I am trying to explore outside of my comfort zone by working with technologies that I may lack experience with, in an environment that I am not used to.  I believe this is a great way to make myself into a more powerful and resourceful developer.\n                <br>\n                <br>\n                Are you wondering if I made this site specifically to apply to Epic?  Yes I did.  I have heard great things about the company, and believe that\n                I could learn invaluable skills from the software developer internship during next summer.  I know that in return I would bring a lot of value to Epic and\n                leave a lasting impression.\n                <br>\n                <br>\n                I know this is a very wordy page, but there is some fun to be had, don't worry.  Just click on \"Whoa!!\" in the navbar.\n\n            </p>\n      </div>\n    </div>\n  </section>\n</div>"

/***/ }),

/***/ "../../../../../src/app/who-i-am/who-i-am.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoIAmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoIAmComponent = (function () {
    function WhoIAmComponent() {
    }
    WhoIAmComponent.prototype.ngOnInit = function () {
    };
    return WhoIAmComponent;
}());
WhoIAmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-who-i-am',
        template: __webpack_require__("../../../../../src/app/who-i-am/who-i-am.component.html"),
        styles: [__webpack_require__("../../../../../src/app/who-i-am/who-i-am.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WhoIAmComponent);

//# sourceMappingURL=who-i-am.component.js.map

/***/ }),

/***/ "../../../../../src/app/whoa/whoa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/whoa/whoa.component.html":
/***/ (function(module, exports) {

module.exports = "<app-p5></app-p5>"

/***/ }),

/***/ "../../../../../src/app/whoa/whoa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WhoaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WhoaComponent = (function () {
    function WhoaComponent() {
    }
    WhoaComponent.prototype.ngOnInit = function () {
    };
    return WhoaComponent;
}());
WhoaComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-whoa',
        template: __webpack_require__("../../../../../src/app/whoa/whoa.component.html"),
        styles: [__webpack_require__("../../../../../src/app/whoa/whoa.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WhoaComponent);

//# sourceMappingURL=whoa.component.js.map

/***/ }),

/***/ "../../../../../src/assets/aoeu.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aoeu.74e0f66356d3dc1c258e";

/***/ }),

/***/ "../../../../../src/assets/resumeBg.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "resumeBg.04c21d286d0868ef46fe";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map