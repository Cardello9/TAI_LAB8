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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_blog_item_details_blog_item_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/blog-item-details/blog-item-details.component */ "./src/app/components/blog-item-details/blog-item-details.component.ts");
/* harmony import */ var _blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blog-home/blog-home.component */ "./src/app/blog-home/blog-home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: '',
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    },
    {
        path: 'blog/detail/:id',
        component: _components_blog_item_details_blog_item_details_component__WEBPACK_IMPORTED_MODULE_5__["BlogItemDetailsComponent"]
    },
    {
        path: 'contact',
        component: _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"],
    },
    {
        path: 'blog', component: _blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_6__["BlogHomeComponent"],
    },
    {
        path: 'quiz',
        component: _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_4__["QuizComponent"],
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\r\n<router-outlet></router-outlet>\r\n\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/blog/blog.component */ "./src/app/components/blog/blog.component.ts");
/* harmony import */ var _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/quiz/quiz.component */ "./src/app/components/quiz/quiz.component.ts");
/* harmony import */ var _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/contact/contact.component */ "./src/app/components/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/blog-item/blog-item.component */ "./src/app/components/blog-item/blog-item.component.ts");
/* harmony import */ var _components_blog_item_text_blog_item_text_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/blog-item-text/blog-item-text.component */ "./src/app/components/blog-item-text/blog-item-text.component.ts");
/* harmony import */ var _components_blog_item_image_blog_item_image_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/blog-item-image/blog-item-image.component */ "./src/app/components/blog-item-image/blog-item-image.component.ts");
/* harmony import */ var _components_blog_item_details_blog_item_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/blog-item-details/blog-item-details.component */ "./src/app/components/blog-item-details/blog-item-details.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/summary.pipe */ "./src/app/pipes/summary.pipe.ts");
/* harmony import */ var _shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/search-bar/search-bar.component */ "./src/app/shared/search-bar/search-bar.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blog-home/blog-home.component */ "./src/app/blog-home/blog-home.component.ts");
/* harmony import */ var _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pipes/filter.pipe */ "./src/app/pipes/filter.pipe.ts");
/* harmony import */ var _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/text-format.directive */ "./src/app/directives/text-format.directive.ts");
/* harmony import */ var _components_selectize_selectize_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/selectize/selectize.component */ "./src/app/components/selectize/selectize.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _components_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"],
                _components_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_5__["QuizComponent"],
                _components_contact_contact_component__WEBPACK_IMPORTED_MODULE_6__["ContactComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _components_blog_item_blog_item_component__WEBPACK_IMPORTED_MODULE_9__["BlogItemComponent"],
                _components_blog_item_text_blog_item_text_component__WEBPACK_IMPORTED_MODULE_10__["BlogItemTextComponent"],
                _components_blog_item_image_blog_item_image_component__WEBPACK_IMPORTED_MODULE_11__["BlogItemImageComponent"],
                _components_blog_item_details_blog_item_details_component__WEBPACK_IMPORTED_MODULE_12__["BlogItemDetailsComponent"],
                _pipes_summary_pipe__WEBPACK_IMPORTED_MODULE_15__["SummaryPipe"],
                _shared_search_bar_search_bar_component__WEBPACK_IMPORTED_MODULE_16__["SearchBarComponent"],
                _blog_home_blog_home_component__WEBPACK_IMPORTED_MODULE_18__["BlogHomeComponent"],
                _pipes_filter_pipe__WEBPACK_IMPORTED_MODULE_19__["FilterPipe"],
                _directives_text_format_directive__WEBPACK_IMPORTED_MODULE_20__["TextFormatDirective"],
                _components_selectize_selectize_component__WEBPACK_IMPORTED_MODULE_21__["SelectizeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"]
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog-home/blog-home.component.css":
/*!***************************************************!*\
  !*** ./src/app/blog-home/blog-home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog-home/blog-home.component.html":
/*!****************************************************!*\
  !*** ./src/app/blog-home/blog-home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<search-bar (name)=\"getName($event)\">\r\n</search-bar>\r\n<br>\r\n<div class=\"container\">\r\n<blog [filterText]=\"filterText\">\r\n</blog>\r\n</div>"

/***/ }),

/***/ "./src/app/blog-home/blog-home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/blog-home/blog-home.component.ts ***!
  \**************************************************/
/*! exports provided: BlogHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogHomeComponent", function() { return BlogHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogHomeComponent = /** @class */ (function () {
    function BlogHomeComponent() {
    }
    BlogHomeComponent.prototype.ngOnInit = function () {
    };
    BlogHomeComponent.prototype.getName = function ($event) {
        this.filterText = $event;
    };
    BlogHomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog-home',
            template: __webpack_require__(/*! ./blog-home.component.html */ "./src/app/blog-home/blog-home.component.html"),
            styles: [__webpack_require__(/*! ./blog-home.component.css */ "./src/app/blog-home/blog-home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogHomeComponent);
    return BlogHomeComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-details/blog-item-details.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/components/blog-item-details/blog-item-details.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item-details/blog-item-details.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/components/blog-item-details/blog-item-details.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"card\" style=\"width: 72rem;\">\r\n\t\t<div class=\"card-body\">\r\n<img [src]=\"image\" class=\"card-img-top\">\r\n\t<p class=\"card-text\">\r\n {{ text}}\r\n</p>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/blog-item-details/blog-item-details.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/components/blog-item-details/blog-item-details.component.ts ***!
  \*****************************************************************************/
/*! exports provided: BlogItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemDetailsComponent", function() { return BlogItemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BlogItemDetailsComponent = /** @class */ (function () {
    function BlogItemDetailsComponent(dataService, route) {
        this.dataService = dataService;
        this.route = route;
    }
    BlogItemDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id;
        this.route.paramMap
            .subscribe(function (params) {
            id = params.get('id');
        });
        if (id) {
            this.dataService.getById(id).subscribe(function (res) {
                _this.image = res['image'];
                _this.text = res['text'];
            });
        }
        else {
            this.id = 1;
        }
    };
    BlogItemDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog-item-details',
            template: __webpack_require__(/*! ./blog-item-details.component.html */ "./src/app/components/blog-item-details/blog-item-details.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-details.component.css */ "./src/app/components/blog-item-details/blog-item-details.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlogItemDetailsComponent);
    return BlogItemDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"image\" class=\"card-img-top\">"

/***/ }),

/***/ "./src/app/components/blog-item-image/blog-item-image.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-item-image/blog-item-image.component.ts ***!
  \*************************************************************************/
/*! exports provided: BlogItemImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemImageComponent", function() { return BlogItemImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogItemImageComponent = /** @class */ (function () {
    function BlogItemImageComponent() {
    }
    BlogItemImageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemImageComponent.prototype, "image", void 0);
    BlogItemImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog-item-image',
            template: __webpack_require__(/*! ./blog-item-image.component.html */ "./src/app/components/blog-item-image/blog-item-image.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-image.component.css */ "./src/app/components/blog-item-image/blog-item-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemImageComponent);
    return BlogItemImageComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-body\">\r\n<p class=\"card-text\">\r\n{{ text | summary:35 }}\r\n</p>\r\n<a [routerLink]=\"['/blog/detail/', id]\" class=\"btn btn-primary\">\r\n  Więcej\r\n </a>\r\n</div>"

/***/ }),

/***/ "./src/app/components/blog-item-text/blog-item-text.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/blog-item-text/blog-item-text.component.ts ***!
  \***********************************************************************/
/*! exports provided: BlogItemTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemTextComponent", function() { return BlogItemTextComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogItemTextComponent = /** @class */ (function () {
    function BlogItemTextComponent() {
    }
    BlogItemTextComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemTextComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BlogItemTextComponent.prototype, "id", void 0);
    BlogItemTextComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog-item-text',
            template: __webpack_require__(/*! ./blog-item-text.component.html */ "./src/app/components/blog-item-text/blog-item-text.component.html"),
            styles: [__webpack_require__(/*! ./blog-item-text.component.css */ "./src/app/components/blog-item-text/blog-item-text.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemTextComponent);
    return BlogItemTextComponent;
}());



/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<blog-item-image [image]=\"image\"></blog-item-image>\r\n<blog-item-text  [id]=\"id\" [text]=\"text\"></blog-item-text>"

/***/ }),

/***/ "./src/app/components/blog-item/blog-item.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/blog-item/blog-item.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogItemComponent", function() { return BlogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogItemComponent = /** @class */ (function () {
    function BlogItemComponent() {
    }
    BlogItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemComponent.prototype, "image", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogItemComponent.prototype, "text", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], BlogItemComponent.prototype, "id", void 0);
    BlogItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog-item',
            template: __webpack_require__(/*! ./blog-item.component.html */ "./src/app/components/blog-item/blog-item.component.html"),
            styles: [__webpack_require__(/*! ./blog-item.component.css */ "./src/app/components/blog-item/blog-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogItemComponent);
    return BlogItemComponent;
}());



/***/ }),

/***/ "./src/app/components/blog/blog.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/blog/blog.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/blog/blog.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/blog/blog.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<selectize></selectize>\r\n<div *ngFor=\"let item of items$  | filter: filterText\">\r\n    <div class=\"card\" style=\"width: 72rem;\">\r\n      <blog-item [id]=\"item.id\" [image]=\"item.image\" [text]=\"item.title\">\r\n      </blog-item>\r\n  <br>\r\n  </div>\r\n  <br><br>\r\n </div>"

/***/ }),

/***/ "./src/app/components/blog/blog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/blog/blog.component.ts ***!
  \***************************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogComponent = /** @class */ (function () {
    function BlogComponent(service) {
        this.service = service;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    BlogComponent.prototype.getAll = function () {
        var _this = this;
        this.service.getAll().subscribe(function (response) {
            _this.items$ = response;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], BlogComponent.prototype, "filterText", void 0);
    BlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/components/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/components/blog/blog.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/components/contact/contact.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/contact/contact.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\"></div>\r\n\r\n<div class=\"container\">\r\n\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputFirstName\">Imię: </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputFirstName\" aria-describedby=\"emailHelp\" placeholder=\"Podaj imię\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputLastName\">Nazwisko: </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputLastName\" aria-describedby=\"emailHelp\" placeholder=\"Podaj nazwisko\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputEmail\">E-mail</label>\r\n      <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail\" placeholder=\"Podaj email:\">\r\n    </div>\r\n\r\n    <input type=\"radio\" name=\"plec1\" value=\"plecMezczyzna\" >Mężczyzna\r\n    <input type=\"radio\" name=\"plec2\" value=\"plecKobieta\" >Kobieta\r\n\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputDescription\">Opis: </label>\r\n      <input type=\"text\" class=\"form-control\" id=\"exampleInputDescription\" aria-describedby=\"emailHelp\">\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"exampleInputAge\">Wiek: </label>\r\n      <input type=\"number\" class=\"form-control\" id=\"exampleInputAge\" aria-describedby=\"emailHelp\" value=\"18\">\r\n    </div>\r\n\r\n    <select>\r\n      <option value=\"wartość1\">panna / kawaler</option>\r\n      <option value=\"wartość2\">żona / mąż</option>\r\n      <option value=\"wartość3\">wdowa / wdowiec</option>\r\n    </select>\r\n\r\n    <br><br>\r\n    <button type=\"reset\" class=\"btn btn-primary\">Wyczyść</button>\r\n    <button type=\"submit\" class=\"btn btn-primary\">Wyślij</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n\r\n<div id=\"myFoot1\">\r\n  <span>Copyrights © Maciej Kardel | 2019</span>\r\n</div>\r\n\r\n<script src=\"js/navbar.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/components/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/components/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\"></div>\r\n\r\n<div class=\"row\">\r\n\r\n  <div class=\"col col-xl-9 col-lg-9 col-md-9 col-sm-9\">\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis mattis sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque facilisis iaculis dui vitae dictum. Donec in ullamcorper lacus. Phasellus ut massa sed quam semper feugiat. Nunc vitae gravida quam, vitae vestibulum sem. Morbi et dapibus erat. Morbi fringilla gravida tellus, at luctus augue. Suspendisse sapien libero, euismod eget pretium tristique, tristique in metus. Nam dictum in tellus a ultrices. Curabitur iaculis pharetra velit eget mollis. Ut at iaculis velit. Fusce faucibus nisi nisl, eu pharetra neque convallis nec.\r\n\r\n    Ut suscipit dolor odio, tempus pellentesque nisi vestibulum molestie. Aenean mollis mattis sapien in auctor. Morbi rhoncus sagittis tellus, nec cursus est. Sed consequat, elit et sollicitudin porttitor, justo elit consectetur urna, in tempus mi est vitae velit. Nunc a viverra nibh, convallis facilisis lectus. Ut suscipit risus id risus bibendum lobortis aliquam ut sem. Quisque sit amet iaculis magna. Integer suscipit id diam et pulvinar. Aenean magna mi, fermentum nec aliquam quis, ultricies id tellus.\r\n\r\n    Suspendisse ultricies quis massa porttitor dictum. Duis euismod feugiat malesuada. Fusce justo turpis, aliquam in blandit vel, dapibus ac erat. Sed magna sapien, vulputate ac condimentum malesuada, sagittis et risus. Morbi consectetur, nunc eget lacinia ultricies, urna sapien eleifend lorem, auctor consectetur orci lorem at quam. Donec dignissim, leo a rutrum venenatis, leo lectus lacinia nunc, non ornare erat tellus vitae ligula. Phasellus vulputate blandit lacus. Maecenas vel urna placerat, lobortis orci nec, dapibus sem. Aenean nec maximus libero.\r\n\r\n    Nullam vestibulum sed justo in porttitor. Etiam in sagittis erat. Proin consectetur id mi a facilisis. Proin ut ex libero. Nullam sit amet leo sit amet tortor commodo cursus. Suspendisse ut risus sit amet nibh pulvinar venenatis. In et auctor nisi, eu posuere nisi. Duis ut molestie mi. Nulla enim turpis, suscipit ac est eu, aliquet lobortis nulla. Phasellus eget ligula pellentesque, aliquet lorem ut, consequat nulla. Pellentesque nibh tortor, luctus ut scelerisque id, suscipit nec enim. Quisque justo risus, feugiat ut rhoncus nec, ultricies et augue. Nam non condimentum lacus. Nunc pulvinar odio est, ut scelerisque augue sagittis sed.\r\n\r\n    Nam eget felis ullamcorper, mattis massa vitae, auctor sapien. Nam facilisis eros felis. Phasellus laoreet laoreet velit vitae egestas. Fusce scelerisque tristique augue et interdum. Quisque sed rhoncus erat. Quisque egestas faucibus leo. Donec ac tincidunt enim, et pretium nisi.\r\n\r\n    Pellentesque interdum felis non mattis facilisis. Morbi ut risus felis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas aliquam velit at elit scelerisque, vitae tincidunt magna laoreet. Sed a enim vel felis aliquet vehicula. Duis eleifend, urna eget mattis cursus, mauris quam sodales purus, eu maximus leo ligula vel justo. Mauris lacus nulla, pretium sed nisi id, dapibus cursus eros. Nunc et feugiat leo.\r\n\r\n    Integer quis magna risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut consequat, lectus non rhoncus lobortis, massa ligula dictum elit, quis venenatis lacus magna sit amet tortor. Fusce rhoncus laoreet rhoncus. Vivamus tempus consectetur nibh, eu pretium diam iaculis sit amet. Sed velit elit, aliquet quis justo et, tristique lacinia odio. Nullam augue dui, egestas vel commodo at, aliquet ac mi. Cras vel malesuada neque. Phasellus volutpat tincidunt posuere.\r\n\r\n    Maecenas pharetra orci id bibendum pretium. Etiam ultrices purus luctus tellus mollis tempus eu eget nibh. Nunc eu mauris est. Suspendisse at quam arcu. Nunc orci mauris, tempus eget leo vitae, dapibus consequat metus. Aliquam ultrices, ipsum eget viverra posuere, diam dui tempor sapien, ac gravida nibh ex sed ipsum. In hac habitasse platea dictumst. Maecenas ac diam quis neque tincidunt ultrices. Vivamus tempor imperdiet massa, in dignissim dui lacinia eu. Integer magna nunc, scelerisque in lacus nec, feugiat sollicitudin libero. Etiam quam quam, volutpat in tincidunt nec, accumsan eget eros. Donec dignissim diam sed mauris auctor cursus a ac sapien. In aliquet tortor ut ex ornare, ut faucibus eros fringilla. Duis blandit, turpis nec convallis auctor, magna ipsum mollis turpis, sed dictum purus urna scelerisque erat. Duis at purus tincidunt, accumsan justo a, mollis odio.\r\n\r\n    Cras pharetra diam id lorem congue, sed condimentum tellus molestie. Maecenas efficitur nibh fermentum nunc feugiat, ut pharetra odio elementum. Vestibulum rhoncus diam velit, eu dignissim nunc elementum et. Vestibulum a faucibus urna. Donec pellentesque tellus mauris, vitae euismod lacus tristique sit amet. Donec mattis non lorem vestibulum dignissim. Phasellus dictum, ligula vitae rhoncus vestibulum, ipsum ligula tincidunt ipsum, vitae aliquet libero ex vitae ligula. Integer nec semper dui. Fusce quis erat tempus, molestie leo faucibus, elementum turpis. Cras fringilla risus ut felis sodales pharetra. Morbi pulvinar mi quis nulla mollis, sed luctus lectus commodo.\r\n\r\n    Integer odio justo, dignissim eu rutrum suscipit, euismod sed eros. Etiam velit lorem, ultrices vitae mi eu, vehicula posuere orci. Maecenas pulvinar pulvinar arcu at lacinia. Proin pulvinar ex sit amet ex porta, a placerat lectus tristique. Aenean imperdiet euismod porttitor. Vestibulum sodales lobortis ligula eget vehicula. Cras tellus nunc, porttitor et dictum faucibus, blandit sit amet metus.\r\n\r\n    Cras cursus euismod tellus a cursus. Donec varius odio ante, sed rutrum est ornare ac. Praesent ornare, massa eu dapibus lacinia, leo lectus tempor metus, ut aliquam metus nisi nec diam. In accumsan eget libero at rhoncus. Sed porttitor felis lacus, in mollis urna consectetur sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut lectus turpis, mattis ut risus a, euismod egestas mi. Ut lobortis egestas ex, eu egestas velit ultricies et. Vestibulum porta lobortis dolor, eget laoreet velit dignissim in. Nulla facilisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.\r\n\r\n    Curabitur non tristique sem. Mauris tortor mi, sodales sed porttitor sed, mattis eget velit. Nam porttitor, sapien non rhoncus aliquam, sem diam venenatis arcu, vitae elementum augue dolor sed diam. Nam ut enim vel turpis suscipit dignissim. Morbi euismod molestie augue at bibendum. Morbi aliquet magna et arcu gravida mollis. Vivamus cursus, purus nec luctus facilisis, arcu libero pellentesque metus, vel interdum leo justo in neque. Proin elit justo, euismod nec lacus non, venenatis vulputate ante. Praesent tincidunt ac nisi eu bibendum.\r\n\r\n    Vivamus massa massa, tristique quis turpis dapibus, scelerisque semper augue. Etiam in leo blandit nisi vestibulum cursus nec a urna. Fusce tristique urna aliquam blandit semper. Aenean pharetra eros mauris, ut luctus purus viverra id. Nullam vitae mi vitae est tincidunt semper. Etiam tempus vitae neque et bibendum. Curabitur ullamcorper finibus sagittis. Praesent placerat sit amet magna nec congue. Vivamus tincidunt sed nisi eu tincidunt.\r\n\r\n    Phasellus aliquet arcu ligula. Nullam vitae dui scelerisque urna ornare ullamcorper non eget metus. Maecenas viverra eget lacus nec sodales. Mauris augue sapien, accumsan sit amet ullamcorper quis, venenatis eu dui. Duis finibus viverra felis, quis tempus ante mollis id. Vivamus sit amet tincidunt neque, ac maximus nunc. Nulla facilisi. Maecenas ultrices mi nulla, a malesuada arcu consectetur ut. Cras velit libero, lobortis quis porta sed, hendrerit et neque. Pellentesque at pharetra sem. Donec consequat quam et leo vulputate dignissim. Donec rutrum diam metus, id dapibus elit sodales eu. In ut maximus metus.\r\n\r\n    Etiam fringilla ipsum sit amet mollis fringilla. Quisque condimentum ipsum a tellus dignissim, sed euismod lectus hendrerit. Duis pulvinar erat in ligula laoreet mollis. In hac habitasse platea dictumst. Phasellus vitae sem elementum, blandit odio vel, iaculis ipsum. In pellentesque facilisis nisl sit amet placerat. Ut eget malesuada sapien, nec ornare tortor. Mauris egestas sit amet metus et facilisis.\r\n\r\n    Vestibulum et velit at urna vulputate ornare. Vestibulum non vestibulum odio, eu gravida ex. Suspendisse vitae euismod libero, ac accumsan erat. Nullam quam enim, porta eget tellus ac, vulputate ornare ante. Sed vulputate imperdiet sapien, id pellentesque risus dapibus sed. Sed auctor orci tellus, quis ultricies mi viverra mollis. Ut tempus gravida tellus, a mollis diam fermentum tristique. Sed id pharetra ligula.\r\n\r\n    Suspendisse molestie, orci sit amet aliquet finibus, elit lacus ornare dolor, ac fringilla eros libero dictum nunc. Donec ante felis, posuere eu dictum eleifend, sollicitudin a lectus. Aenean ipsum massa, malesuada ut justo a, facilisis luctus lectus. Integer pharetra eget mauris ac hendrerit. Suspendisse varius tempor convallis. Fusce nec elementum sapien. Etiam nibh erat, venenatis et vehicula vitae, egestas et sapien. Donec efficitur ultricies sem, in vestibulum lectus commodo suscipit. Curabitur vitae vehicula urna, nec porta mi. Aenean gravida dui libero, quis scelerisque arcu tristique et. Aliquam in ante vel odio varius consectetur. Quisque sollicitudin, neque eu porttitor porttitor, magna ipsum consequat lectus, non finibus dui erat ultricies nulla.\r\n\r\n    Donec mollis lectus sed ante tristique sollicitudin. Maecenas ipsum diam, egestas vitae ipsum porttitor, vulputate mattis justo. Cras eget nunc est. Pellentesque quis orci ut risus elementum finibus ac laoreet risus. Curabitur mattis sagittis tellus, et faucibus nisi finibus vitae. Aliquam sodales nulla nec tortor ullamcorper sollicitudin. Fusce eget arcu eget nibh porttitor vulputate ac at augue. Sed vulputate, eros et faucibus ultricies, nunc quam eleifend lorem, vel blandit dui mauris at lectus. Proin accumsan orci quam, in rhoncus nulla consectetur ultrices. Nullam consequat rhoncus ex, sollicitudin condimentum erat dapibus vitae. Praesent sodales tempus ex, non elementum ipsum iaculis at. Aliquam vitae faucibus velit.\r\n\r\n    Suspendisse ex ligula, elementum in risus et, commodo tincidunt lacus. Mauris enim erat, mollis eget tincidunt vitae, posuere quis eros. Suspendisse ac dictum neque. Donec bibendum, augue ac elementum bibendum, augue massa feugiat magna, at congue enim urna id turpis. Donec sit amet justo lorem. Aliquam erat volutpat. Integer sit amet eros ac massa scelerisque ultricies vitae eget elit. Nunc luctus sapien eget arcu tempor, et pharetra ipsum imperdiet. Sed id odio sollicitudin, pretium lectus in, blandit odio. Duis condimentum lacus leo, sed auctor enim aliquam eget. Proin commodo ligula risus, ut vestibulum felis maximus id.\r\n\r\n    Praesent luctus velit non mollis cursus. Nullam congue pellentesque luctus. Sed at felis justo. Maecenas interdum ac ante ac bibendum. Nunc at sem ipsum. Ut malesuada nunc nec ligula porttitor, id aliquam leo sollicitudin. Duis pharetra in dolor ut aliquam. Nullam dolor justo, elementum sed scelerisque vitae, rutrum vitae nisl.\r\n\r\n    Cras suscipit ultricies dolor non tincidunt. Maecenas at mi vel felis molestie dapibus dignissim sit amet ante. In vitae eros nisl. Nullam vel sem interdum, lobortis purus eget, feugiat justo. Praesent euismod lacus metus. Proin condimentum odio at est maximus, et elementum tortor malesuada. Donec in dapibus risus, non eleifend metus. Donec id aliquet enim. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas libero tortor, ullamcorper et viverra ac, viverra quis turpis. In hendrerit sem quis condimentum hendrerit. Cras vel purus non felis vehicula cursus. Suspendisse fringilla nisl purus, sit amet rutrum dolor hendrerit non. Vivamus convallis ullamcorper ex, sit amet interdum augue lobortis ultrices. Proin pellentesque venenatis mauris, at fringilla ex aliquet ac.\r\n\r\n    Phasellus enim lectus, ultricies sagittis ex eu, pharetra interdum neque. Suspendisse tempus felis vel ex tempus ultrices. Phasellus pretium metus ullamcorper, sagittis justo in, iaculis lacus. Pellentesque volutpat dolor nec justo commodo placerat. Fusce justo ante, scelerisque imperdiet arcu et, efficitur consequat massa. Vestibulum consequat velit ac massa pellentesque porta. In neque odio, eleifend in turpis non, sodales volutpat mauris. Aliquam tincidunt convallis tincidunt.\r\n\r\n    Donec facilisis ante sit amet sem lacinia bibendum. Quisque id scelerisque leo. Vivamus ut convallis libero. Ut at bibendum justo. Cras viverra ullamcorper nisl sed lobortis. Etiam pellentesque nisi quis purus lacinia sodales. Nullam dignissim dapibus diam, id sodales erat mattis nec. Quisque luctus at massa quis tincidunt. Cras accumsan eros eu cursus volutpat. Suspendisse ut lectus quam. Nulla eu lectus mi. Nulla facilisi. Suspendisse potenti. Pellentesque posuere tincidunt turpis vel facilisis. In lobortis erat justo, nec rutrum nulla ultricies eu.\r\n\r\n    Pellentesque fringilla nunc sit amet arcu pretium, sit amet aliquet mi dapibus. Praesent pretium feugiat ligula, quis vehicula diam commodo id. Phasellus et tellus quis massa sodales viverra et ac erat. Proin scelerisque elit non venenatis commodo. Vivamus ut mi ornare, finibus magna vitae, elementum odio. Aenean eu mi iaculis, feugiat libero et, consectetur odio. Nunc et odio viverra, ultricies ligula malesuada, egestas nisi. Quisque imperdiet lectus vitae nulla blandit condimentum. Suspendisse a tellus ac felis ultrices lacinia. Vivamus ultricies facilisis risus, at pharetra est porta vel. Aliquam eu lectus at justo euismod scelerisque. Duis nibh libero, ultricies eget scelerisque nec, pretium vitae mi. Praesent id gravida tortor. Suspendisse varius dui ac diam lobortis tempus. Proin a congue dui, vel laoreet erat. Integer et odio tellus.\r\n\r\n    Integer molestie molestie nisl a dignissim. Vestibulum ut ipsum a tellus cursus dignissim. Nullam efficitur imperdiet ex, porta euismod est. Duis semper sem quis dolor iaculis, a hendrerit erat gravida. Nullam ac condimentum lectus. In bibendum nulla id dictum luctus. Sed nisl magna, ultrices id neque id, tincidunt scelerisque tortor. Nullam lobortis lectus velit, sed porta massa malesuada rutrum. Suspendisse sit amet porta odio, ac posuere dui. Duis consequat arcu quis mi interdum, id tristique dui aliquam. Maecenas aliquam eros ut venenatis ultricies.\r\n\r\n    Donec dictum consectetur lectus mattis ultricies. Cras convallis efficitur lectus, quis iaculis nulla pharetra a. In hac habitasse platea dictumst. Proin eleifend eros nec enim finibus consectetur non vel diam. Suspendisse semper augue ac enim malesuada, eget commodo nibh imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas vitae arcu vitae risus pretium faucibus. Mauris scelerisque justo turpis, sit amet bibendum arcu accumsan tristique. Sed id mauris erat. Morbi quis consectetur lectus. Morbi eu tempus felis. Donec tincidunt nec lectus ac volutpat. Duis at gravida tellus. Suspendisse scelerisque rutrum ipsum, in maximus ex tristique non. Morbi scelerisque, arcu in ultrices lobortis, odio lorem cursus nulla, eu convallis quam leo eget elit. Nulla sit amet placerat sapien, id faucibus elit.\r\n\r\n    In accumsan at purus eget commodo. Nullam at metus risus. Curabitur non lorem maximus, porttitor mi in, sodales urna. Ut eros lectus, accumsan quis odio at, ornare posuere massa. Aenean id elit nulla. Donec luctus lacus eget aliquet tempus. Duis dapibus imperdiet sem, vel tincidunt augue fringilla nec. Curabitur vitae varius diam, a tempus lacus. Maecenas arcu est, cursus sed turpis vel, hendrerit sagittis ex. Phasellus nunc arcu, mollis nec erat auctor, euismod tristique arcu. Maecenas maximus orci et ornare hendrerit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\r\n\r\n    Pellentesque hendrerit tincidunt dui, quis lacinia lacus iaculis eget. Duis non felis consectetur, iaculis mauris at, condimentum arcu. Suspendisse potenti. Maecenas porta fringilla nunc sit amet ultrices. Donec facilisis, mauris ac iaculis consectetur, est augue accumsan dolor, eget dignissim ante est at turpis. Nullam maximus, neque eget egestas ultricies, tellus ligula porttitor enim, sit amet posuere dolor nunc ut nunc. Etiam pretium ut nunc eget efficitur. Quisque sem ex, rhoncus sed urna vel, fringilla venenatis libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed condimentum lacus quis libero eleifend malesuada. Aliquam luctus pharetra erat, at imperdiet tortor pharetra ultrices. Praesent nec urna ac elit egestas lacinia non a nisl. Integer efficitur felis quis arcu feugiat, at vehicula sem ullamcorper. Etiam a egestas turpis. Maecenas feugiat ipsum non quam accumsan sollicitudin. Sed sagittis malesuada lectus sed pellentesque.\r\n\r\n    Proin tristique metus faucibus urna vehicula tempor. Fusce varius convallis sapien, a suscipit enim rhoncus non. Aliquam et dapibus risus. Donec sit amet accumsan quam. Pellentesque consectetur urna diam, non viverra libero ornare a. Praesent fringilla ultricies ornare. Pellentesque hendrerit elit a odio cursus tincidunt. Vivamus euismod efficitur luctus. Ut ac purus purus. Duis ultricies dictum urna, id gravida nunc placerat vel. Quisque placerat semper dui at gravida. Nam ultricies dictum sagittis.\r\n\r\n    Vivamus et nisi tempus, suscipit nunc quis, iaculis purus. Nulla gravida nec turpis feugiat accumsan. Etiam gravida ornare urna a faucibus. Nam placerat neque tellus, nec blandit ligula aliquet pharetra. Sed tempor aliquet feugiat. Nam tristique tincidunt mi in fringilla. Cras dapibus egestas ornare. Curabitur pretium vel dolor ullamcorper luctus. Duis eu odio felis. Nam imperdiet lorem at nunc lacinia, a malesuada nulla mollis. Mauris arcu sem, feugiat sollicitudin gravida vitae, facilisis at augue. Sed ullamcorper bibendum mollis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut volutpat leo sit amet enim efficitur, at molestie massa elementum. Proin commodo, sapien sed semper accumsan, ligula nibh consectetur tortor, a feugiat ex lacus dapibus turpis. Donec a placerat felis.\r\n\r\n    Cras ut aliquam diam. Duis malesuada vulputate mauris et dapibus. Sed ac sapien dapibus, dapibus mi id, ornare dui. Donec finibus faucibus convallis. Pellentesque facilisis ornare neque non efficitur. Quisque laoreet quis lectus maximus euismod. Donec rhoncus ultricies tempus.\r\n\r\n    Aliquam erat volutpat. Nulla tristique dapibus pharetra. Suspendisse non dui sit amet orci eleifend pellentesque. Cras fermentum interdum cursus. Integer id nisl ipsum. Proin tincidunt maximus tempor. Nunc volutpat consectetur imperdiet. Morbi ac dolor vel est facilisis mollis. Quisque sit amet risus nec dolor tempor facilisis quis vel leo. Donec maximus vel metus eu laoreet. Morbi in vehicula lectus, eget euismod ligula. Fusce eros ex, tristique et tellus nec, imperdiet aliquet arcu. Fusce finibus euismod odio, vel efficitur nisi mollis eget.\r\n\r\n    Aliquam ultricies nec nisl sit amet venenatis. Etiam vitae enim sit amet est eleifend porta eget at nisl. Etiam sed tincidunt urna. Sed sed auctor erat. Suspendisse tincidunt cursus sem, eget dignissim lectus consectetur sed. Curabitur consequat non ligula a venenatis. Etiam a nulla a lorem lacinia facilisis non volutpat enim. Praesent et consequat quam. Etiam id varius arcu. Pellentesque dignissim odio felis, eu tincidunt est sollicitudin id. Cras cursus, ligula eget faucibus congue, odio diam bibendum ante, ut efficitur risus mauris at mauris. Donec varius, lacus id ultrices luctus, felis dui scelerisque libero, nec aliquet orci urna vel nibh. Nullam rutrum venenatis metus, non bibendum ipsum iaculis sed. Ut ex lectus, ullamcorper vel accumsan id, varius sed mauris. Sed ut est et purus imperdiet viverra a id elit. Curabitur porta purus quis gravida condimentum.\r\n\r\n    Vivamus id odio id massa tempus finibus. Proin varius urna vel mi ornare, ac commodo ligula congue. Curabitur accumsan vitae nulla nec scelerisque. Nullam quis rhoncus diam. Vestibulum iaculis mollis lectus sit amet laoreet. Nam efficitur erat leo, volutpat tristique ante viverra mattis. Nulla lobortis, augue in consequat ultrices, lectus est interdum tellus, quis dignissim elit neque quis nisl. Nunc eget ornare libero. Maecenas at eros pellentesque, varius leo vel, pellentesque dui.\r\n\r\n    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque condimentum ac nunc volutpat laoreet. Donec interdum, quam non vehicula laoreet, lacus ligula placerat mauris, ac facilisis turpis nisl at enim. Pellentesque luctus vel dui at feugiat. Donec fringilla dolor id nunc porttitor, sit amet dignissim dui commodo. Praesent elementum laoreet sem eget elementum. Sed non tellus euismod, luctus risus a, fringilla leo. Phasellus at quam interdum, semper orci eu, sagittis neque. Suspendisse volutpat nulla vitae nisi pharetra, at lacinia neque dignissim. Integer hendrerit lorem elit, at tempus augue mollis vel.\r\n\r\n    Phasellus vel purus in nisl fermentum sollicitudin id et elit. Nulla volutpat tortor nec mauris dignissim, vel lacinia nisi mollis. Mauris accumsan est lectus, non vehicula elit bibendum sit amet. Aenean vestibulum mi felis. Nullam eu dui et quam semper eleifend. Donec nulla odio, vestibulum vitae nisl quis, tincidunt auctor ipsum. Vestibulum lobortis lacus hendrerit lectus aliquet rutrum. Suspendisse potenti. Mauris blandit sapien eget massa feugiat rutrum. Curabitur in gravida lectus, sit amet molestie lorem. Quisque nulla nulla, elementum in enim ut, vulputate tempus sem.\r\n\r\n    Fusce in odio porta, condimentum nisl a, lacinia nisl. Integer commodo pharetra leo, ut varius massa euismod vitae. Suspendisse sagittis a enim id finibus. Nunc aliquam leo quis arcu eleifend, non faucibus tortor efficitur. In ut fermentum est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Suspendisse potenti. Pellentesque consectetur pharetra nulla malesuada eleifend. Suspendisse eu mauris quis ex ullamcorper elementum eget eu lacus.\r\n\r\n    Aliquam sed velit tortor. In mauris odio, faucibus nec posuere vitae, lobortis ac nisi. Curabitur porta nisl quis elit auctor egestas. Aliquam erat volutpat. Duis vel lacus leo. Praesent accumsan tincidunt tortor scelerisque viverra. Nulla condimentum augue urna, et ullamcorper nibh interdum eget. Pellentesque ut massa dui. Suspendisse potenti. Duis pulvinar est eget metus tincidunt, vel dignissim libero tincidunt. In quis accumsan odio, eget lacinia ex. Vivamus auctor pellentesque neque, nec facilisis metus fringilla ut. Integer sem nibh, ultricies at pretium eu, auctor sed mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam non ante nec eros dictum viverra.\r\n\r\n    Suspendisse et ex lectus. Integer luctus tortor ante. Quisque auctor, odio mollis condimentum vestibulum, lectus mi varius ante, ut tempus orci nunc vitae justo. Quisque venenatis, libero et rhoncus dignissim, nibh metus aliquam dolor, hendrerit cursus lacus erat in nibh. Maecenas molestie convallis leo vitae faucibus. Nulla facilisi. Vivamus sodales gravida fringilla. Sed sit amet augue viverra, porttitor nulla facilisis, egestas lorem. Curabitur eu ornare ligula. Quisque condimentum id ante a rutrum. Phasellus rutrum risus sit amet augue mattis, in porta elit molestie. Ut ac elit convallis augue consequat iaculis sed sit amet tellus. Aliquam sit amet hendrerit massa. Praesent cursus gravida metus quis fermentum. In faucibus ultricies purus eu condimentum. Quisque iaculis neque at sodales fringilla.\r\n\r\n    Aenean pellentesque, lacus a mattis varius, lacus nibh elementum lacus, id iaculis sapien nunc a nulla. Phasellus mattis finibus tristique. Nullam porttitor eros nulla, eu lacinia augue suscipit et. Quisque porttitor, metus nec pretium facilisis, ex nisl egestas orci, ut iaculis diam nunc sed ex. Nulla diam lorem, pulvinar in lorem et, pulvinar condimentum orci. Praesent felis lorem, rhoncus vel tempor vel, pellentesque a ex. Nullam vel efficitur ante. Nullam euismod lorem ac scelerisque molestie. Proin ex risus, rhoncus vel dignissim ut, hendrerit mattis urna. Sed scelerisque quam neque, a aliquet tortor molestie vitae. Aliquam bibendum nunc sed lobortis viverra. Fusce dolor tellus, malesuada in varius in, lacinia id velit.\r\n\r\n    Nullam egestas ex nibh, sit amet pellentesque leo sodales eu. Duis pretium dolor vitae leo venenatis faucibus. Sed nec lacus ac urna pellentesque venenatis a sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pharetra nunc ultrices, vestibulum nisl et, vulputate urna. Praesent consequat nisl vel varius dapibus. In hac habitasse platea dictumst. Mauris egestas luctus scelerisque. Praesent nec enim eget ipsum mollis finibus quis et massa. Nunc vitae velit lorem. Phasellus eu vulputate eros, eu egestas mauris. In orci orci, elementum non tristique id, tempor sodales diam. Donec ante leo, dignissim eget auctor eu, vulputate vitae ante. Etiam mattis neque tincidunt quam dignissim tristique.\r\n\r\n    In ex neque, pretium at neque rhoncus, rutrum ultricies ante. Nullam mollis dapibus facilisis. Praesent tempus mattis varius. Aenean at nibh augue. Nam pretium erat ornare congue pulvinar. Donec tincidunt ultrices nulla ac pellentesque. Mauris purus tortor, scelerisque in accumsan nec, pellentesque et nisi. Etiam id dapibus eros. Duis euismod odio eu tempor pellentesque. Cras auctor, elit ac rutrum elementum, magna nunc maximus lorem, id venenatis velit eros vitae velit.\r\n\r\n    Cras tellus augue, ornare non feugiat euismod, tristique ut risus. Phasellus eget nunc ac augue fermentum lacinia ut vel turpis. Cras vulputate id sapien non finibus. Fusce ornare mi sit amet feugiat vehicula. Etiam diam augue, mollis vitae enim quis, commodo bibendum felis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas scelerisque pharetra iaculis. Vestibulum auctor purus quis justo cursus accumsan. Maecenas non lectus tortor. Nulla semper mi diam, quis scelerisque neque porttitor sit amet. Nulla vitae interdum justo, id rutrum nunc. Vivamus non augue vel massa ultrices condimentum. Morbi dignissim vulputate orci, sed accumsan diam vulputate sed. Cras lacinia suscipit sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat magna efficitur iaculis finibus.\r\n\r\n    Nulla sagittis ornare ante, et finibus dolor dictum sed. Nullam ut lobortis massa. Mauris elementum mattis diam eget euismod. Morbi dictum laoreet dolor, vel dictum neque tempus at. Ut eget ipsum ac est laoreet dapibus sit amet eu lorem. Morbi mollis mi ipsum, eget volutpat sem venenatis vitae. Suspendisse potenti.\r\n\r\n    Cras tempus, ligula sed finibus blandit, libero augue auctor sem, in fermentum ipsum purus sed ex. Maecenas aliquam dictum malesuada. Sed ut fringilla metus. Suspendisse dapibus justo nec tortor tincidunt efficitur. Morbi neque lorem, consequat quis magna eget, semper porta tellus. Fusce dignissim elementum eros, gravida rutrum nibh ultricies vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent sed tellus eu orci bibendum dictum ac nec nulla. Vestibulum tincidunt, diam non elementum tincidunt, quam urna varius libero, vel tincidunt diam mi sit amet lectus. Fusce tincidunt vitae velit ut fringilla. Proin aliquet vehicula consectetur. Fusce finibus tempor justo, sit amet efficitur lacus. In et condimentum tellus. Donec pretium leo nunc, vel imperdiet lacus luctus a. Suspendisse quam erat, semper at tristique at, varius vitae metus.\"</div>\r\n  <div class=\"col col-xl-3 col-lg-3 col-md-3 col-sm-3\">\r\n    <h3>Szybki kontakt</h3>\r\n    <ul class=\"nav flex-column\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link active\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i>Facebook</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i>Instagram</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-envelope-o\" aria-hidden=\"true\"></i>Email</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div id=\"myFoot1\">\r\n  <span>Copyrights © Maciej Kardel | 2019</span>\r\n</div>\r\n\r\n<div class=\"scroll\">\r\n  <button class=\"btn btn-success\"><i class=\"fa fa-arrow-circle-up\" aria-hidden=\"true\"></i>Do góry</button>\r\n</div>\r\n\r\n\r\n<script src=\"js/navbar.js\"></script>\r\n<script src=\"js/scroll.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container list\">\r\n  Question: <h4 class=\"question\"></h4>\r\n\r\n\r\n  Question number: <h4 class=\"questionNumber\"></h4>\r\n\r\n  Answers:\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\"></li>\r\n    <li class=\"list-group-item\"></li>\r\n    <li class=\"list-group-item\"></li>\r\n    <li class=\"list-group-item\"></li>\r\n  </ul>\r\n\r\n  <div class=\"buttons\">\r\n    <button class=\"btn btn-danger previous\">Previous</button>\r\n    <button class=\"btn btn-success next\">Next</button>\r\n  </div>\r\n\r\n  <h4>Your score: <span class=\"score\">0</span>/20 points.</h4>\r\n</div>\r\n<div class=\"container results\" style=\"display: none\">\r\n  <div class=\"btn-group-custom\">\r\n    <button class=\"btn btn-success btn-custom restart\">Retake quiz</button>\r\n  </div>\r\n  <div class=\"score\">\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n      <tr>\r\n        <th>#</th>\r\n        <th>Point/20</th>\r\n        <th>Average</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr>\r\n        <th scope=\"row\">Your score</th>\r\n        <td class=\"userScorePoint\"></td>\r\n        <td class=\"average\"></td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<script src=\"js/navbar.js\"></script>\r\n<script src=\"js/script.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/components/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuizComponent = /** @class */ (function () {
    function QuizComponent() {
    }
    QuizComponent.prototype.ngOnInit = function () {
    };
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/components/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/components/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/components/selectize/selectize.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/selectize/selectize.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/selectize/selectize.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/selectize/selectize.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input #input type=\"text\">\r\n\r\n<ul>\r\n  <li *ngFor=\"let p of posts$\">\r\n\t<a href=\"#\" [routerLink]=\"['/blog/detail/', p.id]\"> {{ p.text }}</a></li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/components/selectize/selectize.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/selectize/selectize.component.ts ***!
  \*************************************************************/
/*! exports provided: SelectizeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectizeComponent", function() { return SelectizeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs-compat/_esm5/observable/fromEvent.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data.service */ "./src/app/services/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SelectizeComponent = /** @class */ (function () {
    function SelectizeComponent(dataService) {
        this.dataService = dataService;
    }
    SelectizeComponent.prototype.ngOnInit = function () {
    };
    SelectizeComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.input.nativeElement, 'keyup')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (event) { return event['target'].value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (value) { return _this.dataService.getByText({ text: value }); })).subscribe(function (results) {
            _this.posts$ = results;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SelectizeComponent.prototype, "input", void 0);
    SelectizeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'selectize',
            template: __webpack_require__(/*! ./selectize.component.html */ "./src/app/components/selectize/selectize.component.html"),
            styles: [__webpack_require__(/*! ./selectize.component.css */ "./src/app/components/selectize/selectize.component.css")]
        }),
        __metadata("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SelectizeComponent);
    return SelectizeComponent;
}());



/***/ }),

/***/ "./src/app/directives/text-format.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/text-format.directive.ts ***!
  \*****************************************************/
/*! exports provided: TextFormatDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFormatDirective", function() { return TextFormatDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TextFormatDirective = /** @class */ (function () {
    function TextFormatDirective(el) {
        this.el = el;
    }
    TextFormatDirective.prototype.onBlur = function () {
        var value = this.el.nativeElement.value;
        this.el.nativeElement.value = value.toLowerCase();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('blur'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], TextFormatDirective.prototype, "onBlur", null);
    TextFormatDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[textFormat]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TextFormatDirective);
    return TextFormatDirective;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav justify-content-center\">\r\n  <li class=\"nav-item\">\r\n    <a href=\"index.html\" class=\"nav-link active\" [routerLink]=\"['']\">Home</a>\r\n    </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\"[routerLink]=\"['/blog']\">Blog</a>\r\n    </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" [routerLink]=\"['/quiz']\">Quiz</a>\r\n    </li>\r\n  <li class=\"nav-item\">\r\n    <a [routerLink]=\"['/contact']\" class=\"nav-link\" href=\"#\">Kontakt</a>\r\n    </li>\r\n  </ul>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/filter.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/filter.pipe.ts ***!
  \**************************************/
/*! exports provided: FilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterPipe", function() { return FilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (value, filterText) {
        if (!value) {
            return [];
        }
        if (!filterText) {
            return value;
        }
        filterText = filterText.toLowerCase();
        return value.filter(function (val) {
            return val.title.toLowerCase().includes(filterText);
        });
    };
    FilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/pipes/summary.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/summary.pipe.ts ***!
  \***************************************/
/*! exports provided: SummaryPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPipe", function() { return SummaryPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SummaryPipe = /** @class */ (function () {
    function SummaryPipe() {
    }
    SummaryPipe.prototype.transform = function (value, limit) {
        if (!value) {
            return null;
        }
        return value.substr(0, limit) + '...';
    };
    SummaryPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'summary'
        })
    ], SummaryPipe);
    return SummaryPipe;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import error from '../../common/application-exceptions/handleError';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'http://localhost:8080';
    }
    /*
    getAll() {
      return this.http.get(this.url + '/api/posts/');
      }
  
      getById(id) {
        return this.http.get(this.url + '/api/posts/' + id);
  }
  */
    DataService.prototype.getByText = function (data) {
        return this.http.post(this.url + '/api/posts/', data);
    };
    DataService.prototype.getAll = function () {
        return this.http.get(this.url + "/api/posts");
    };
    DataService.prototype.getById = function (id) {
        return this.http.get(this.url + "/api/posts/" + id);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/shared/search-bar/search-bar.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/search-bar/search-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/search-bar/search-bar.component.html":
/*!*************************************************************!*\
  !*** ./src/app/shared/search-bar/search-bar.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input [(ngModel)]=\"filterText\" (ngModelChange)=\"sendFilter($event)\"\r\n  \tplaceholder=\"Wpisz nazwę...\" id=\"search\" type=\"search\" class=\"form-control\" textFormat>"

/***/ }),

/***/ "./src/app/shared/search-bar/search-bar.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/search-bar/search-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: SearchBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchBarComponent", function() { return SearchBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchBarComponent = /** @class */ (function () {
    function SearchBarComponent(router, route) {
        this.router = router;
        this.route = route;
        this.name = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    SearchBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.filterText = params['name'];
            _this.sendFilter();
        });
    };
    SearchBarComponent.prototype.sendFilter = function () {
        this.name.emit(this.filterText);
        this.router.navigate(['/blog'], { queryParams: { name: this.filterText } });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SearchBarComponent.prototype, "name", void 0);
    SearchBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'search-bar',
            template: __webpack_require__(/*! ./search-bar.component.html */ "./src/app/shared/search-bar/search-bar.component.html"),
            styles: [__webpack_require__(/*! ./search-bar.component.css */ "./src/app/shared/search-bar/search-bar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SearchBarComponent);
    return SearchBarComponent;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MaciejK\lab11\TAI_LAB8\blog\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map