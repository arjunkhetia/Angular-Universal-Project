(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@angular/router/router.ngfactory.js":
/*!**********************************************************!*\
  !*** ./node_modules/@angular/router/router.ngfactory.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! @angular/router */ "@angular/router");
var RouterModuleNgFactory = i0.ɵcmf(i1.RouterModule, [], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [ɵangular_packages_router_router_lNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(1073742336, i1.RouterModule, i1.RouterModule, [[2, i1.ɵangular_packages_router_router_a], [2, i1.Router]])]); });
exports.RouterModuleNgFactory = RouterModuleNgFactory;
var styles_ɵangular_packages_router_router_l = [];
var RenderType_ɵangular_packages_router_router_l = i0.ɵcrt({ encapsulation: 2, styles: styles_ɵangular_packages_router_router_l, data: {} });
exports.RenderType_ɵangular_packages_router_router_l = RenderType_ɵangular_packages_router_router_l;
function View_ɵangular_packages_router_router_l_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i0.ɵdid(1, 212992, null, 0, i1.RouterOutlet, [i1.ChildrenOutletContexts, i0.ViewContainerRef, i0.ComponentFactoryResolver, [8, null], i0.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_ɵangular_packages_router_router_l_0 = View_ɵangular_packages_router_router_l_0;
function View_ɵangular_packages_router_router_l_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ng-component", [], null, null, null, View_ɵangular_packages_router_router_l_0, RenderType_ɵangular_packages_router_router_l)), i0.ɵdid(1, 49152, null, 0, i1.ɵangular_packages_router_router_l, [], null, null)], null, null); }
exports.View_ɵangular_packages_router_router_l_Host_0 = View_ɵangular_packages_router_router_l_Host_0;
var ɵangular_packages_router_router_lNgFactory = i0.ɵccf("ng-component", i1.ɵangular_packages_router_router_l, View_ɵangular_packages_router_router_l_Host_0, {}, {}, []);
exports.ɵangular_packages_router_router_lNgFactory = ɵangular_packages_router_router_lNgFactory;


/***/ }),

/***/ "./server.ts":
/*!*******************!*\
  !*** ./server.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = __webpack_require__(/*! tslib */ "tslib");
__webpack_require__(/*! zone.js/dist/zone-node */ "zone.js/dist/zone-node");
const express_engine_1 = __webpack_require__(/*! @nguniversal/express-engine */ "@nguniversal/express-engine");
const express = __webpack_require__(/*! express */ "express");
const path_1 = __webpack_require__(/*! path */ "path");
const common_1 = __webpack_require__(/*! @angular/common */ "@angular/common");
const fs_1 = __webpack_require__(/*! fs */ "fs");
const __NgCli_bootstrap_1 = __webpack_require__(/*! ./src/app/app.server.module.ngfactory */ "./src/app/app.server.module.ngfactory.js");
// The Express app is exported so that it can be used by serverless Functions.
function app() {
    const server = express();
    const distFolder = path_1.join(process.cwd(), 'dist/Angular-Universal-Project');
    const indexHtml = fs_1.existsSync(path_1.join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';
    // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
    server.engine('html', express_engine_1.ngExpressEngine({
        bootstrap: __NgCli_bootstrap_1.AppServerModuleNgFactory,
    }));
    server.set('view engine', 'html');
    server.set('views', distFolder);
    // Example Express Rest API endpoints
    // app.get('/api/**', (req, res) => { });
    // Serve static files from /browser
    server.get('*.*', express.static(distFolder, {
        maxAge: '1y'
    }));
    // TODO: implement data requests securely
    server.get('/api/*', (req, res) => {
        res.status(404).send('data requests are not supported');
    });
    // All regular routes use the Universal engine
    server.get('*', (req, res) => {
        res.render(indexHtml, { req, providers: [{ provide: common_1.APP_BASE_HREF, useValue: req.baseUrl }] });
    });
    // Server static files from /browser
    server.get('*.*', express.static(path_1.join(distFolder, 'browser')));
    return server;
}
exports.app = app;
function run() {
    const port = process.env.PORT || 4000;
    // Start up the Node server
    const server = app();
    server.listen(port, () => {
        console.log(`Node Express server listening on http://localhost:${port}`);
    });
}
const mainModule = require.main;
if (mainModule && mainModule.filename === __filename) {
    run();
}
tslib_1.__exportStar(__webpack_require__(/*! ./src/main.server */ "./src/main.server.ts"), exports);
exports.LAZY_MODULE_MAP = {};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __webpack_require__(/*! @angular/router */ "@angular/router");
const routes = [];
class AppRoutingModule {
}
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
const i1 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i2 = __webpack_require__(/*! @angular/router */ "@angular/router");
const i3 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var styles_AppComponent = [i0.styles];
var RenderType_AppComponent = i1.ɵcrt({ encapsulation: 0, styles: styles_AppComponent, data: {} });
exports.RenderType_AppComponent = RenderType_AppComponent;
function View_AppComponent_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 3, "div", [["style", "text-align:center"]], null, null, null, null, null)), (_l()(), i1.ɵeld(1, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), i1.ɵted(2, null, [" Welcome to ", "! "])), (_l()(), i1.ɵeld(3, 0, null, null, 0, "img", [["alt", "Angular Logo"], ["src", "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg=="], ["width", "300"]], null, null, null, null, null)), (_l()(), i1.ɵeld(4, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), i1.ɵdid(5, 212992, null, 0, i2.RouterOutlet, [i2.ChildrenOutletContexts, i1.ViewContainerRef, i1.ComponentFactoryResolver, [8, null], i1.ChangeDetectorRef], null, null)], function (_ck, _v) { _ck(_v, 5, 0); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); }); }
exports.View_AppComponent_0 = View_AppComponent_0;
function View_AppComponent_Host_0(_l) { return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), i1.ɵdid(1, 49152, null, 0, i3.AppComponent, [], null, null)], null, null); }
exports.View_AppComponent_Host_0 = View_AppComponent_Host_0;
var AppComponentNgFactory = i1.ɵccf("app-root", i3.AppComponent, View_AppComponent_Host_0, {}, {}, []);
exports.AppComponentNgFactory = AppComponentNgFactory;


/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
exports.styles = styles;


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppComponent {
    constructor() {
        this.title = 'Angular-Universal-Project';
    }
}
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppModule {
}
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/app.server.module.ngfactory.js":
/*!************************************************!*\
  !*** ./src/app/app.server.module.ngfactory.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
Object.defineProperty(exports, "__esModule", { value: true });
const i0 = __webpack_require__(/*! @angular/core */ "@angular/core");
const i1 = __webpack_require__(/*! ./app.server.module */ "./src/app/app.server.module.ts");
const i2 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
const i3 = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
const i4 = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
const i5 = __webpack_require__(/*! @angular/common */ "@angular/common");
const i6 = __webpack_require__(/*! @angular/platform-browser */ "@angular/platform-browser");
const i7 = __webpack_require__(/*! @angular/platform-server */ "@angular/platform-server");
const i8 = __webpack_require__(/*! @angular/animations/browser */ "@angular/animations/browser");
const i9 = __webpack_require__(/*! @angular/platform-browser/animations */ "@angular/platform-browser/animations");
const i10 = __webpack_require__(/*! @angular/router */ "@angular/router");
const i11 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
const i12 = __webpack_require__(/*! ./universal-interceptor */ "./src/app/universal-interceptor.ts");
const i13 = __webpack_require__(/*! @nguniversal/express-engine/tokens */ "@nguniversal/express-engine/tokens");
const i14 = __webpack_require__(/*! @angular/animations */ "@angular/animations");
const i15 = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
const i16 = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
var AppServerModuleNgFactory = i0.ɵcmf(i1.AppServerModule, [i2.AppComponent], function (_l) { return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i3.ɵangular_packages_router_router_lNgFactory, i4.AppComponentNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(5120, i0.LOCALE_ID, i0.ɵangular_packages_core_core_p, [[3, i0.LOCALE_ID]]), i0.ɵmpd(4608, i5.NgLocalization, i5.NgLocaleLocalization, [i0.LOCALE_ID, [2, i5.ɵangular_packages_common_common_a]]), i0.ɵmpd(5120, i0.ɵangular_packages_core_core_ba, i0.ɵangular_packages_core_core_r, [i0.NgZone]), i0.ɵmpd(5120, i0.IterableDiffers, i0.ɵangular_packages_core_core_n, []), i0.ɵmpd(5120, i0.KeyValueDiffers, i0.ɵangular_packages_core_core_o, []), i0.ɵmpd(4608, i6.DomSanitizer, i6.ɵDomSanitizerImpl, [i5.DOCUMENT]), i0.ɵmpd(6144, i0.Sanitizer, null, [i6.DomSanitizer]), i0.ɵmpd(4608, i6.HAMMER_GESTURE_CONFIG, i6.HammerGestureConfig, []), i0.ɵmpd(5120, i6.EVENT_MANAGER_PLUGINS, function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3, p3_0) { return [new i6.ɵDomEventsPlugin(p0_0, p0_1, p0_2), new i6.ɵKeyEventsPlugin(p1_0), new i6.ɵHammerGesturesPlugin(p2_0, p2_1, p2_2, p2_3), new i7.ɵangular_packages_platform_server_platform_server_d(p3_0)]; }, [i5.DOCUMENT, i0.NgZone, i0.PLATFORM_ID, i5.DOCUMENT, i5.DOCUMENT, i6.HAMMER_GESTURE_CONFIG, i0.ɵConsole, [2, i6.HAMMER_LOADER], i5.DOCUMENT]), i0.ɵmpd(4608, i6.EventManager, i6.EventManager, [i6.EVENT_MANAGER_PLUGINS, i0.NgZone]), i0.ɵmpd(135680, i6.ɵDomSharedStylesHost, i6.ɵDomSharedStylesHost, [i5.DOCUMENT]), i0.ɵmpd(4608, i6.ɵDomRendererFactory2, i6.ɵDomRendererFactory2, [i6.EventManager, i6.ɵDomSharedStylesHost, i0.APP_ID]), i0.ɵmpd(4608, i7.ɵangular_packages_platform_server_platform_server_c, i7.ɵangular_packages_platform_server_platform_server_c, [i5.DOCUMENT, [2, i6.ɵTRANSITION_ID]]), i0.ɵmpd(6144, i6.ɵSharedStylesHost, null, [i7.ɵangular_packages_platform_server_platform_server_c]), i0.ɵmpd(4608, i7.ɵServerRendererFactory2, i7.ɵServerRendererFactory2, [i6.EventManager, i0.NgZone, i5.DOCUMENT, i6.ɵSharedStylesHost]), i0.ɵmpd(4608, i8.AnimationDriver, i8.ɵNoopAnimationDriver, []), i0.ɵmpd(5120, i8.ɵAnimationStyleNormalizer, i9.ɵangular_packages_platform_browser_animations_animations_b, []), i0.ɵmpd(4608, i8.ɵAnimationEngine, i9.ɵInjectableAnimationEngine, [i5.DOCUMENT, i8.AnimationDriver, i8.ɵAnimationStyleNormalizer]), i0.ɵmpd(5120, i0.RendererFactory2, i7.ɵangular_packages_platform_server_platform_server_a, [i7.ɵServerRendererFactory2, i8.ɵAnimationEngine, i0.NgZone]), i0.ɵmpd(4352, i0.Testability, null, []), i0.ɵmpd(5120, i10.ActivatedRoute, i10.ɵangular_packages_router_router_g, [i10.Router]), i0.ɵmpd(4608, i10.NoPreloading, i10.NoPreloading, []), i0.ɵmpd(6144, i10.PreloadingStrategy, null, [i10.NoPreloading]), i0.ɵmpd(135680, i10.RouterPreloader, i10.RouterPreloader, [i10.Router, i0.NgModuleFactoryLoader, i0.Compiler, i0.Injector, i10.PreloadingStrategy]), i0.ɵmpd(4608, i10.PreloadAllModules, i10.PreloadAllModules, []), i0.ɵmpd(4608, i5.ViewportScroller, i5.ɵNullViewportScroller, []), i0.ɵmpd(5120, i10.ɵangular_packages_router_router_o, i10.ɵangular_packages_router_router_c, [i10.Router, i5.ViewportScroller, i10.ROUTER_CONFIGURATION]), i0.ɵmpd(5120, i10.ROUTER_INITIALIZER, i10.ɵangular_packages_router_router_j, [i10.ɵangular_packages_router_router_h]), i0.ɵmpd(5120, i0.APP_BOOTSTRAP_LISTENER, function (p0_0) { return [p0_0]; }, [i10.ROUTER_INITIALIZER]), i0.ɵmpd(4608, i11.HttpXsrfTokenExtractor, i11.ɵangular_packages_common_http_http_g, [i5.DOCUMENT, i0.PLATFORM_ID, i11.ɵangular_packages_common_http_http_e]), i0.ɵmpd(4608, i11.ɵangular_packages_common_http_http_h, i11.ɵangular_packages_common_http_http_h, [i11.HttpXsrfTokenExtractor, i11.ɵangular_packages_common_http_http_f]), i0.ɵmpd(5120, i11.HTTP_INTERCEPTORS, function (p0_0, p1_0) { return [p0_0, new i12.UniversalInterceptor(p1_0)]; }, [i11.ɵangular_packages_common_http_http_h, [2, i13.REQUEST]]), i0.ɵmpd(4608, i11.XhrFactory, i7.ɵangular_packages_platform_server_platform_server_e, []), i0.ɵmpd(4608, i11.HttpXhrBackend, i11.HttpXhrBackend, [i11.XhrFactory]), i0.ɵmpd(6144, i11.HttpBackend, null, [i11.HttpXhrBackend]), i0.ɵmpd(5120, i11.HttpHandler, i7.ɵangular_packages_platform_server_platform_server_f, [i11.HttpBackend, i0.Injector]), i0.ɵmpd(4608, i11.HttpClient, i11.HttpClient, [i11.HttpHandler]), i0.ɵmpd(4608, i11.ɵangular_packages_common_http_http_d, i11.ɵangular_packages_common_http_http_d, []), i0.ɵmpd(4608, i14.AnimationBuilder, i9.ɵBrowserAnimationBuilder, [i0.RendererFactory2, i5.DOCUMENT]), i0.ɵmpd(1073742336, i5.CommonModule, i5.CommonModule, []), i0.ɵmpd(1024, i0.ErrorHandler, i6.ɵangular_packages_platform_browser_platform_browser_a, []), i0.ɵmpd(1024, i0.NgProbeToken, function () { return [i10.ɵangular_packages_router_router_b()]; }, []), i0.ɵmpd(512, i10.ɵangular_packages_router_router_h, i10.ɵangular_packages_router_router_h, [i0.Injector]), i0.ɵmpd(256, i0.APP_ID, "serverApp", []), i0.ɵmpd(2048, i6.ɵTRANSITION_ID, null, [i0.APP_ID]), i0.ɵmpd(1024, i0.APP_INITIALIZER, function (p0_0, p1_0, p2_0, p2_1, p2_2) { return [i6.ɵangular_packages_platform_browser_platform_browser_j(p0_0), i10.ɵangular_packages_router_router_i(p1_0), i6.ɵangular_packages_platform_browser_platform_browser_h(p2_0, p2_1, p2_2)]; }, [[2, i0.NgProbeToken], i10.ɵangular_packages_router_router_h, i6.ɵTRANSITION_ID, i5.DOCUMENT, i0.Injector]), i0.ɵmpd(512, i0.ApplicationInitStatus, i0.ApplicationInitStatus, [[2, i0.APP_INITIALIZER]]), i0.ɵmpd(131584, i0.ApplicationRef, i0.ApplicationRef, [i0.NgZone, i0.ɵConsole, i0.Injector, i0.ErrorHandler, i0.ComponentFactoryResolver, i0.ApplicationInitStatus]), i0.ɵmpd(1073742336, i0.ApplicationModule, i0.ApplicationModule, [i0.ApplicationRef]), i0.ɵmpd(1073742336, i6.BrowserModule, i6.BrowserModule, [[3, i6.BrowserModule]]), i0.ɵmpd(1024, i10.ɵangular_packages_router_router_a, i10.ɵangular_packages_router_router_e, [[3, i10.Router]]), i0.ɵmpd(512, i10.UrlSerializer, i10.DefaultUrlSerializer, []), i0.ɵmpd(512, i10.ChildrenOutletContexts, i10.ChildrenOutletContexts, []), i0.ɵmpd(256, i10.ROUTER_CONFIGURATION, { initialNavigation: "enabled" }, []), i0.ɵmpd(1024, i5.LocationStrategy, i10.ɵangular_packages_router_router_d, [i5.PlatformLocation, [2, i5.APP_BASE_HREF], i10.ROUTER_CONFIGURATION]), i0.ɵmpd(512, i5.Location, i5.Location, [i5.LocationStrategy, i5.PlatformLocation]), i0.ɵmpd(512, i0.Compiler, i0.Compiler, []), i0.ɵmpd(512, i0.NgModuleFactoryLoader, i0.SystemJsNgModuleLoader, [i0.Compiler, [2, i0.SystemJsNgModuleLoaderConfig]]), i0.ɵmpd(1024, i10.ROUTES, function () { return [[]]; }, []), i0.ɵmpd(1024, i10.Router, i10.ɵangular_packages_router_router_f, [i0.ApplicationRef, i10.UrlSerializer, i10.ChildrenOutletContexts, i5.Location, i0.Injector, i0.NgModuleFactoryLoader, i0.Compiler, i10.ROUTES, i10.ROUTER_CONFIGURATION, [2, i10.UrlHandlingStrategy], [2, i10.RouteReuseStrategy]]), i0.ɵmpd(1073742336, i10.RouterModule, i10.RouterModule, [[2, i10.ɵangular_packages_router_router_a], [2, i10.Router]]), i0.ɵmpd(1073742336, i15.AppRoutingModule, i15.AppRoutingModule, []), i0.ɵmpd(1073742336, i16.AppModule, i16.AppModule, []), i0.ɵmpd(1073742336, i11.HttpClientXsrfModule, i11.HttpClientXsrfModule, []), i0.ɵmpd(1073742336, i11.HttpClientModule, i11.HttpClientModule, []), i0.ɵmpd(1073742336, i9.NoopAnimationsModule, i9.NoopAnimationsModule, []), i0.ɵmpd(1073742336, i7.ServerModule, i7.ServerModule, []), i0.ɵmpd(1073742336, i1.AppServerModule, i1.AppServerModule, []), i0.ɵmpd(256, i0.ɵAPP_ROOT, true, []), i0.ɵmpd(256, i11.ɵangular_packages_common_http_http_e, "XSRF-TOKEN", []), i0.ɵmpd(256, i11.ɵangular_packages_common_http_http_f, "X-XSRF-TOKEN", []), i0.ɵmpd(256, i9.ANIMATION_MODULE_TYPE, "NoopAnimations", [])]); });
exports.AppServerModuleNgFactory = AppServerModuleNgFactory;


/***/ }),

/***/ "./src/app/app.server.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.server.module.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class AppServerModule {
}
exports.AppServerModule = AppServerModule;


/***/ }),

/***/ "./src/app/universal-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/universal-interceptor.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __webpack_require__(/*! @angular/common/http */ "@angular/common/http");
class UniversalInterceptor {
    constructor(request) {
        this.request = request;
    }
    intercept(req, next) {
        let serverReq = req;
        if (this.request) {
            let newUrl = `${this.request.protocol}://${this.request.get('host')}`;
            if (!req.url.startsWith('/')) {
                newUrl += '/';
            }
            newUrl += req.url;
            serverReq = req.clone({ url: newUrl });
        }
        return next.handle(serverReq);
    }
}
exports.UniversalInterceptor = UniversalInterceptor;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.server.ts":
/*!****************************!*\
  !*** ./src/main.server.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = __webpack_require__(/*! @angular/core */ "@angular/core");
const environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
var app_server_module_1 = __webpack_require__(/*! ./app/app.server.module */ "./src/app/app.server.module.ts");
exports.AppServerModule = app_server_module_1.AppServerModule;


/***/ }),

/***/ 0:
/*!*************************!*\
  !*** multi ./server.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/arjunkhetia/Angular-Universal-Project/server.ts */"./server.ts");


/***/ }),

/***/ "@angular/animations":
/*!**************************************!*\
  !*** external "@angular/animations" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations");

/***/ }),

/***/ "@angular/animations/browser":
/*!**********************************************!*\
  !*** external "@angular/animations/browser" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/animations/browser");

/***/ }),

/***/ "@angular/common":
/*!**********************************!*\
  !*** external "@angular/common" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common");

/***/ }),

/***/ "@angular/common/http":
/*!***************************************!*\
  !*** external "@angular/common/http" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/common/http");

/***/ }),

/***/ "@angular/core":
/*!********************************!*\
  !*** external "@angular/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "@angular/platform-browser":
/*!********************************************!*\
  !*** external "@angular/platform-browser" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser");

/***/ }),

/***/ "@angular/platform-browser/animations":
/*!*******************************************************!*\
  !*** external "@angular/platform-browser/animations" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-browser/animations");

/***/ }),

/***/ "@angular/platform-server":
/*!*******************************************!*\
  !*** external "@angular/platform-server" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/platform-server");

/***/ }),

/***/ "@angular/router":
/*!**********************************!*\
  !*** external "@angular/router" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@angular/router");

/***/ }),

/***/ "@nguniversal/express-engine":
/*!**********************************************!*\
  !*** external "@nguniversal/express-engine" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine");

/***/ }),

/***/ "@nguniversal/express-engine/tokens":
/*!*****************************************************!*\
  !*** external "@nguniversal/express-engine/tokens" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nguniversal/express-engine/tokens");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "zone.js/dist/zone-node":
/*!*****************************************!*\
  !*** external "zone.js/dist/zone-node" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("zone.js/dist/zone-node");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map