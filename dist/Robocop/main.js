(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".neo {\r\n\tposition: fixed;\r\n\ttop: 73%;\r\n\tleft: 73%;\r\n\t\r\n\topacity: 0.80;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\r\n}\r\n.neo:hover {\r\n\topacity: 0.90;\r\n    filter: alpha(opacity=90); /* For IE8 and earlier */\r\n}\r\n.neo2 {\r\n\tposition: fixed;\r\n\ttop: 7%;\r\n\tleft: 7%;\r\n\t\r\n\topacity: 0.80;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\r\n}\r\n.neo2:hover {\r\n\topacity: 0.90;\r\n    filter: alpha(opacity=90); /* For IE8 and earlier */\r\n}\r\n.bitcoach {\r\n\tposition: fixed;\r\n\ttop: 95%;\r\n\tleft: 88%;\r\n\t\r\n\tfont-family: fantasy;\r\n\r\n\topacity: 0.25;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\t\r\n}\r\n.bitcoach.img {\r\n\tmargin: 10px;\r\n}\r\n.bitcoach:hover {\r\n\topacity: 0.75;\r\n    filter: alpha(opacity=75); /* For IE8 and earlier */\r\n}\r\n.responseArea {\r\n\tposition: fixed;\r\n\ttop: 30%;\r\n\theight: 300px;\r\n\twidth: 80%;\r\n\tleft: 10%;\r\n}\r\n.responseAreaText {\r\n\tposition: absolute;\r\n  \ttop: 50%;\r\n  \tleft: 50%;;\r\n  \twidth: 100%;\r\n  \t-webkit-transform: translate(-50%, -50%);\r\n  \t        transform: translate(-50%, -50%);\r\n\r\n\r\n\tfont-family: fantasy; \r\n\tfont-size: 60px;\r\n\tcolor: #DC143C;\r\n\tline-height: 150%;\r\n\ttext-align: center;\r\n}\r\n.logo {\r\n\topacity: 0.25;\r\n    filter: alpha(opacity=25); /* For IE8 and earlier */\r\n}\r\n.container {\r\n  width: 100%;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n.loading-pulsate {\r\n\t/*position data */\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t/* bring your own prefixes */\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\r\n\t/*font data */\r\n\tfont-family: fantasy; \r\n\tfont-size: 30px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700; \r\n\tline-height: 26.4px;\r\n\tcolor: #DC143C;\r\n\tcursor: default;\r\n\t\r\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\r\n\t-moz-user-select: none;     /* Firefox all */\r\n\t-ms-user-select: none;      /* IE 10+ */\r\n\tuser-select: none;          /* Likely future */      \r\n\t\r\n\t/*pulsating text */\r\n\t-webkit-animation: pulsate 3s ease-out;\r\n    -webkit-animation-iteration-count: infinite; \r\n    opacity: 0.2;\r\n}\r\n.loading {\r\n\t/*position data */\r\n\tposition: fixed;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n\t/* bring your own prefixes */\r\n\t-webkit-transform: translate(-50%, -50%);\r\n\t        transform: translate(-50%, -50%);\r\n\r\n\t/*font data */\r\n\tfont-family: fantasy; \r\n\tfont-size: 30px; \r\n\tfont-style: normal; \r\n\tfont-variant: normal; \r\n\tfont-weight: 700; \r\n\tline-height: 26.4px;\r\n\tcolor: #DC143C;\r\n\tcursor: default;\r\n\t\r\n\t-webkit-user-select: none;  /* Chrome all / Safari all */\r\n\t-moz-user-select: none;     /* Firefox all */\r\n\t-ms-user-select: none;      /* IE 10+ */\r\n\tuser-select: none;          /* Likely future */      \r\n}\r\n.fullscreenDiv {\r\n    background-color: #f2fff4;\r\n    width: 100%;\r\n    height: auto;\r\n    bottom: 0px;\r\n    top: 0px;\r\n    left: 0;\r\n    position: absolute;\r\n}\r\n@-webkit-keyframes pulsate {\r\n    0% { \r\n        opacity: 0.05;\r\n    }\r\n    50% { \r\n        opacity: 1.0;\r\n    }\r\n    100% { \r\n        opacity: 0.05;\r\n    }\r\n}\r\n.textArea {\r\n\tposition: absolute;\r\n\tleft: -6px;\r\n\tfont-family: fantasy; \r\n\tfont-size: 30px;\r\n\tcaret-color: #40e840;\r\n\tmargin-top: 30px;\r\n\tmargin-right: 50px;\r\n\twidth: 100%;\r\n\theight: 400;\r\n\tfont-size: 50px;\r\n\ttext-align: center;\r\n\tbackground-color: #f2fff4;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n    border-color: Transparent; \r\n    overflow: auto; \r\n}\r\n.textArea:focus {\r\n\t\r\n\toutline: none;\r\n\tbox-shadow:none !important;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n\tborder-color: Transparent; \r\n\toverflow: auto;\r\n}\r\n.form-control:focus {\r\n\toutline: none;\r\n\tbox-shadow:none !important;\r\n\tborder: 0;\r\n\tborder-style: none; \r\n\tborder-color: Transparent; \r\n\toverflow: auto;\r\n}\r\n.input:focus {\r\n    outline: none !important;\r\n    border:1px solid red;\r\n    box-shadow: 0 0 10px #719ECE;\r\n}\r\n.loader {\r\n\t\r\n\tmargin-top: 36px;\r\n\tmargin-right: 20px;\r\n\t\r\n\tposition: relative;\r\n\tfloat: right;\r\n\tborder: 6px solid #DC143C;\r\n\tborder-radius: 50%;\r\n\tborder-top: 6px solid #f2fff4;\r\n\twidth: 60px;\r\n\theight: 60px;\r\n\t-webkit-animation: spin 2s linear infinite; /* Safari */\r\n\tanimation: spin 2s linear infinite;\r\n}\r\n/* Safari */\r\n@-webkit-keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); }\r\n}\r\n@keyframes spin {\r\n  0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n}\r\nbody {\r\n\tbackground-color: #f2fff4;\r\n\toverflow-y: hidden;\r\n\toverflow-x: hidden;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"fullscreenDiv\">\r\n    <div class=\"responseArea\" #responseArea>\r\n      <div class=\"responseAreaText\" #responseAreaText>\r\n        {{response}}\r\n      </div>      \r\n    </div>\r\n    <img class=\"neo\" width=\"15%\" height= \"auto\" src=\"../../assets/img/robocop.jpg\">\r\n    <!--  <img class=\"neo2\" width=\"35%\" height= \"auto\" src=\"../../assets/img/robocop2.jpg\"> -->\r\n    <div class=\"bitcoach\">\r\n      <!-- Powered by: --> \r\n      <!-- img width=\"10%\" height=\"10%\" src=\"../../assets/img/bitcoach-logo.svg\" -->\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\">\r\n    <textarea class=\"textArea\" #textArea maxlength=\"40\" (keydown)=\"onKeydown($event)\">{{query}}</textArea>\r\n    <div class=\"loader\" #loader hidden=\"true\"></div>\r\n  </div>\r\n  \r\n  <div class=\"fullscreenDiv\" #splashScreen>\r\n    <div class=\"loading-pulsate\" #initBlock>{{initMsg}}</div>\r\n  </div>\r\n  \r\n  "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'Robocop';
        this.initMsg = "";
        this.query = "";
        this.response = "";
    }
    AppComponent.prototype.composeResponse = function (responseData) {
        $('.responseAreaText').css('fontSize', 60);
        var responses = __webpack_require__(/*! ./responses.json */ "./src/app/responses.json");
        var page = __webpack_require__(/*! ./pages/ZeepinPage.html */ "./src/app/pages/ZeepinPage.html");
        console.log(responseData.length);
        if (responseData.intent == null) {
            var responseList = responses['undefined'];
            var response = responseList[Math.floor(Math.random() * responseList.length)];
            return response;
        }
        var confidence = responseData.intent[0].confidence;
        var value = responseData.intent[0].value;
        switch (value) {
            case "zeepin_description":
                var page = __webpack_require__(/*! ./pages/ZeepinPage.html */ "./src/app/pages/ZeepinPage.html");
                return page;
            case "trinity_description":
                var page = __webpack_require__(/*! ./pages/TrinityPage.html */ "./src/app/pages/TrinityPage.html");
                return page;
            default:
                var responseList = responses[value];
                var response = responseList[Math.floor(Math.random() * responseList.length)];
                return response;
        }
    };
    AppComponent.prototype.resize_to_fit = function () {
        var fontsize = $('.responseAreaText').css('font-size');
        $('.responseAreaText').css('fontSize', parseFloat(fontsize) - 1);
        if ($('.responseAreaText').height() >= $('.responseArea').height()) {
            this.resize_to_fit();
        }
    };
    AppComponent.prototype.doPOST = function () {
        var _this = this;
        console.log("POST");
        var url = 'https://api.wit.ai/message';
        var question = this.textArea.nativeElement.value;
        var token = "FOVTCJETRQ56FYSBD6ZHDRN25AJCMPNN";
        if (question === "")
            return;
        $('.loader').show();
        this.http.get(url, {
            params: {
                q: question,
                access_token: token
            }
        }).subscribe(function (res) {
            console.log(res.json().entities);
            _this.responseData = res.json().entities;
            _this.responseAreaText.nativeElement.innerHTML = _this.composeResponse(_this.responseData);
            $('.loader').hide();
            _this.resize_to_fit();
        });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.initialize();
    };
    AppComponent.prototype.onKeydown = function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            this.doPOST();
        }
    };
    AppComponent.prototype.initialize = function () {
        var _this = this;
        this.initMsg = "Initializing core modules";
        setTimeout(function () {
            _this.initMsg = "Waking Up";
        }, 2000);
        setTimeout(function () {
            _this.initMsg = "Meet the Boss";
            _this.initBlock.nativeElement.classList.add('loading');
            _this.initBlock.nativeElement.classList.remove('loading-pulsate');
            _this.initBlock.nativeElement.style["font-size"] = "60px";
        }, 4000);
        setTimeout(function () {
            _this.initMsg = "";
            _this.splashScreen.nativeElement.style.display = "none";
            _this.textArea.nativeElement.focus();
            _this.response = "Hey hou";
        }, 6000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('initBlock'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "initBlock", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('splashScreen'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "splashScreen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('textArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "textArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('responseArea'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "responseArea", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('loader'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "loader", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('responseAreaText'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "responseAreaText", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_1__["HttpModule"]
            ]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/TrinityPage.html":
/*!****************************************!*\
  !*** ./src/app/pages/TrinityPage.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.logoAlt {\r\nheight: 20%;\r\nwidth: 20%;\r\nopacity: 0.25;\r\nfilter: alpha(opacity=25);\r\npadding: 30px;\r\n}\r\n\r\n.logoAlt:hover {\r\nopacity: 0.75;\r\nfilter: alpha(opacity=75);\r\n}\r\n\r\np {\r\ntext-align: left; \r\nfont-size: 20px;\r\nline-height: 150%;\r\n}\r\n</style>\r\n\r\n<img class=\"logoAlt\" src=\"../../assets/img/trinitylogo.png\" alt=\"Trinity\"><br> \r\n\r\n<p>\r\nTrinity is a universal off-chain scaling solution, which aims to achieve real-time payments with low transaction fees, scalability and privacy protection for mainchain assets. Using state channel technology, Trinity will significantly increase the transaction throughput of underlying chains as well as the assets on smart contracts.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nTNC cross-chain converter facilitates the data and value flow between multiple chains. Trinity will be a fully autonomous and decentralized performance-enhancing network for the entire ecosystem and provides all-round support to Dapps on bottom layer chains in the future.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/pages/ZeepinPage.html":
/*!***************************************!*\
  !*** ./src/app/pages/ZeepinPage.html ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\r\n.logoAlt {\r\nheight: 20%;\r\nwidth: 20%;\r\nopacity: 0.25;\r\nfilter: alpha(opacity=25);\r\npadding: 30px;\r\n}\r\n\r\n.logoAlt:hover {\r\nopacity: 0.75;\r\nfilter: alpha(opacity=75);\r\n}\r\n\r\np {\r\ntext-align: left; \r\nfont-size: 20px;\r\nline-height: 150%;\r\n}\r\n</style>\r\n\r\n<img class=\"logoAlt\" src=\"../../assets/img/zeepinlogo.png\" alt=\"Zeepin\"><br> \r\n\r\n<p>\r\nZeepin is the world’s first customised platform that provides more protection, \r\nmore recognition, more connection and more support for everyone in the creative industries.\r\n</p>\r\n<br>\r\n\r\n<p>\r\nAnchored on decentralising one of the fastest growing industries in the world currently stunted by inefficiencies, Zeepin is using innovation to launch a borderless and transparent new economy with its own ZPT digital currency.\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/responses.json":
/*!********************************!*\
  !*** ./src/app/responses.json ***!
  \********************************/
/*! exports provided: undefined, neo_description, neo_ceo, architect_greeting, architect_mood, architect_insult, architect_marek, default */
/***/ (function(module) {

module.exports = {"undefined":["Hmmm, I don't have answer for that. I will need to look it up.","Well, this isn't in my programming, amateurs (╯°□°）╯︵ ┻━┻","I just don't know."],"neo_description":["NEO IS BEST ECOSYSTEM"],"neo_ceo":["Da Hongfei is Founder of NEO"],"architect_greeting":["Hi Marek, pleasure to meet you.","Greetings to you too, Harlejkyn.","Kysliacik, bud pozdraven"],"architect_mood":["I am not doing anyhow. I am not alive.","So so.","Chookity.","Marvelous.","Bad.","Better than you."],"architect_insult":["Hmmm, your lack of manners is disturbing.","I don't like you either, asshole.","You dipshit."],"architect_marek":["Marek is looser.","Marek is nerdy nerd","Just to let you know, Marek is 5,5!"]};

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jpoliak001\Documents\GitHub\Robocop\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map