(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ntnnmsh/Documents/Masters Academy/frontend-course-2020/homeworks/anton.nemesh_AntonNemesh/8-components-templates/src/main.ts */"zUnb");


/***/ }),

/***/ "1wVk":
/*!******************************************!*\
  !*** ./src/app/image/image.component.ts ***!
  \******************************************/
/*! exports provided: ImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComponent", function() { return ImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ImageComponent {
    constructor() {
        this.isLoaded = true;
    }
    imageUploaded() {
        this.isLoaded = false;
    }
    ngOnInit() {
    }
}
ImageComponent.ɵfac = function ImageComponent_Factory(t) { return new (t || ImageComponent)(); };
ImageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageComponent, selectors: [["app-image"]], inputs: { currentImage: "currentImage" }, decls: 2, vars: 3, consts: [["src", "https://i.gifer.com/4V0b.gif", 1, "gallery__img--contain", 3, "hidden"], [1, "gallery__img--contain", 3, "hidden", "src", "load"]], template: function ImageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function ImageComponent_Template_img_load_1_listener() { return ctx.imageUploaded(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.isLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.currentImage.urls.regular, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.isLoaded);
    } }, styles: [".gallery__img--contain[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJpbWFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmdhbGxlcnlfX2ltZy0tY29udGFpbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image',
                templateUrl: './image.component.html',
                styleUrls: ['./image.component.css']
            }]
    }], function () { return []; }, { currentImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "4QQZ":
/*!**********************************************************!*\
  !*** ./src/app/image-details/image-details.component.ts ***!
  \**********************************************************/
/*! exports provided: ImageDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageDetailsComponent", function() { return ImageDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "AVqD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function ImageDetailsComponent_img_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.dataImages[ctx_r0.numberOfCurrentItem].urls.regular, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class ImageDetailsComponent {
    constructor() {
        this.dataImages = _data__WEBPACK_IMPORTED_MODULE_1__["dataImages"];
    }
    ngOnInit() {
    }
}
ImageDetailsComponent.ɵfac = function ImageDetailsComponent_Factory(t) { return new (t || ImageDetailsComponent)(); };
ImageDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageDetailsComponent, selectors: [["app-image-details"]], inputs: { numberOfCurrentItem: "numberOfCurrentItem" }, decls: 1, vars: 1, consts: [["class", "gallery__img--contain", 3, "src", 4, "ngIf"], [1, "gallery__img--contain", 3, "src"]], template: function ImageDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ImageDetailsComponent_img_0_Template, 1, 1, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.numberOfCurrentItem !== undefined);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".gallery__img--contain[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLWRldGFpbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCIiwiZmlsZSI6ImltYWdlLWRldGFpbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nYWxsZXJ5X19pbWctLWNvbnRhaW4ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-details',
                templateUrl: './image-details.component.html',
                styleUrls: ['./image-details.component.css']
            }]
    }], function () { return []; }, { numberOfCurrentItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "AVqD":
/*!*************************!*\
  !*** ./src/app/data.ts ***!
  \*************************/
/*! exports provided: dataImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataImages", function() { return dataImages; });
const dataImages = [
    {
        id: 'YhWRSEdBXUE',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHwxfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/YhWRSEdBXUE',
            html: 'https://unsplash.com/photos/YhWRSEdBXUE',
            download: 'https://unsplash.com/photos/YhWRSEdBXUE/download',
            download_location: 'https://api.unsplash.com/photos/YhWRSEdBXUE/download',
        },
        likes: 86,
    }, {
        id: '02F0ExnlZus',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607332742884-3cea04bf9a6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/02F0ExnlZus',
            html: 'https://unsplash.com/photos/02F0ExnlZus',
            download: 'https://unsplash.com/photos/02F0ExnlZus/download',
            download_location: 'https://api.unsplash.com/photos/02F0ExnlZus/download',
        },
        likes: 0,
    }, {
        id: 'CtJxZ1hHepM',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607344635159-59930e3330b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwzfHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/CtJxZ1hHepM',
            html: 'https://unsplash.com/photos/CtJxZ1hHepM',
            download: 'https://unsplash.com/photos/CtJxZ1hHepM/download',
            download_location: 'https://api.unsplash.com/photos/CtJxZ1hHepM/download',
        },
        likes: 2,
    }, {
        id: 'YJ00hhEtEAo',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607286942757-d24fa3d66afb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw0fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/YJ00hhEtEAo',
            html: 'https://unsplash.com/photos/YJ00hhEtEAo',
            download: 'https://unsplash.com/photos/YJ00hhEtEAo/download',
            download_location: 'https://api.unsplash.com/photos/YJ00hhEtEAo/download',
        },
        likes: 6,
    }, {
        id: 'XviljSeFYzU',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607105794278-a7eb7236776b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw1fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/XviljSeFYzU',
            html: 'https://unsplash.com/photos/XviljSeFYzU',
            download: 'https://unsplash.com/photos/XviljSeFYzU/download',
            download_location: 'https://api.unsplash.com/photos/XviljSeFYzU/download',
        },
        likes: 33,
    }, {
        id: 'JDoa_IajZYA',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1606518559059-5fecead22c43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw2fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/JDoa_IajZYA',
            html: 'https://unsplash.com/photos/JDoa_IajZYA',
            download: 'https://unsplash.com/photos/JDoa_IajZYA/download',
            download_location: 'https://api.unsplash.com/photos/JDoa_IajZYA/download',
        },
        likes: 24,
    }, {
        id: 'lJKohd2k1h8',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607304021641-5cd8b6f6f894?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw3fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/lJKohd2k1h8',
            html: 'https://unsplash.com/photos/lJKohd2k1h8',
            download: 'https://unsplash.com/photos/lJKohd2k1h8/download',
            download_location: 'https://api.unsplash.com/photos/lJKohd2k1h8/download',
        },
        likes: 36,
    }, {
        id: '9AXjbDt49jc',
        description: 'Feminine and girly pink and gold styled stock photo flat lays for bloggers, online entrepreneurs, and social media managers.',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607144273105-a821fe2cf636?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHw4fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/9AXjbDt49jc',
            html: 'https://unsplash.com/photos/9AXjbDt49jc',
            download: 'https://unsplash.com/photos/9AXjbDt49jc/download',
            download_location: 'https://api.unsplash.com/photos/9AXjbDt49jc/download',
        },
        likes: 14,
    }, {
        id: '1gLdTsX3_70',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MXwxfGFsbHw5fHx8fHx8Mnw&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/1gLdTsX3_70',
            html: 'https://unsplash.com/photos/1gLdTsX3_70',
            download: 'https://unsplash.com/photos/1gLdTsX3_70/download',
            download_location: 'https://api.unsplash.com/photos/1gLdTsX3_70/download',
        },
        likes: 600,
    }, {
        id: '_-7dN56lCEs',
        description: 'Let’s have a photoshoot ',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607190695232-7556d12bb0ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/_-7dN56lCEs',
            html: 'https://unsplash.com/photos/_-7dN56lCEs',
            download: 'https://unsplash.com/photos/_-7dN56lCEs/download',
            download_location: 'https://api.unsplash.com/photos/_-7dN56lCEs/download',
        },
        likes: 15,
    }, {
        id: 's-hveG5XATM',
        description: 'Face',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607038523484-203fe00e2465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/s-hveG5XATM',
            html: 'https://unsplash.com/photos/s-hveG5XATM',
            download: 'https://unsplash.com/photos/s-hveG5XATM/download',
            download_location: 'https://api.unsplash.com/photos/s-hveG5XATM/download',
        },
        likes: 11,
    }, {
        id: '3CM1ntpVSYs',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607297501620-f120874ab1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxMnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/3CM1ntpVSYs',
            html: 'https://unsplash.com/photos/3CM1ntpVSYs',
            download: 'https://unsplash.com/photos/3CM1ntpVSYs/download',
            download_location: 'https://api.unsplash.com/photos/3CM1ntpVSYs/download',
        },
        likes: 31,
    }, {
        id: 'wiUe8qH09-E',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607292976966-c2a9aa8cbc28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxM3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/wiUe8qH09-E',
            html: 'https://unsplash.com/photos/wiUe8qH09-E',
            download: 'https://unsplash.com/photos/wiUe8qH09-E/download',
            download_location: 'https://api.unsplash.com/photos/wiUe8qH09-E/download',
        },
        likes: 11,
    }, {
        id: 'nI3W64cJNLk',
        description: 'Horror pasta',
        urls: {
            raw: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1593114630390-e35acaa7d7d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/nI3W64cJNLk',
            html: 'https://unsplash.com/photos/nI3W64cJNLk',
            download: 'https://unsplash.com/photos/nI3W64cJNLk/download',
            download_location: 'https://api.unsplash.com/photos/nI3W64cJNLk/download',
        },
        likes: 62,
    }, {
        id: 'FJMqqEOWJCI',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607298634018-b9cce0c71989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/FJMqqEOWJCI',
            html: 'https://unsplash.com/photos/FJMqqEOWJCI',
            download: 'https://unsplash.com/photos/FJMqqEOWJCI/download',
            download_location: 'https://api.unsplash.com/photos/FJMqqEOWJCI/download',
        },
        likes: 8,
    }, {
        id: 'CZ9d8gh4nVk',
        description: 'Christmas paper star DIY, still life',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607253852325-7b7c623a253e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxNnx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/CZ9d8gh4nVk',
            html: 'https://unsplash.com/photos/CZ9d8gh4nVk',
            download: 'https://unsplash.com/photos/CZ9d8gh4nVk/download',
            download_location: 'https://api.unsplash.com/photos/CZ9d8gh4nVk/download',
        },
        likes: 18,
    }, {
        id: 'X_-ZkzoYkUc',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607292987892-7314d9c5f428?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxN3x8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/X_-ZkzoYkUc',
            html: 'https://unsplash.com/photos/X_-ZkzoYkUc',
            download: 'https://unsplash.com/photos/X_-ZkzoYkUc/download',
            download_location: 'https://api.unsplash.com/photos/X_-ZkzoYkUc/download',
        },
        likes: 7,
    }, {
        id: 'bCA_0q625Qw',
        description: 'Carrots are for closers.',
        urls: {
            raw: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607038072407-a2fe22551a0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/bCA_0q625Qw',
            html: 'https://unsplash.com/photos/bCA_0q625Qw',
            download: 'https://unsplash.com/photos/bCA_0q625Qw/download',
            download_location: 'https://api.unsplash.com/photos/bCA_0q625Qw/download',
        },
        likes: 14,
    }, {
        id: 'rMhTw17rVKw',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607293861433-5d03a3e9fdd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwxOXx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/rMhTw17rVKw',
            html: 'https://unsplash.com/photos/rMhTw17rVKw',
            download: 'https://unsplash.com/photos/rMhTw17rVKw/download',
            download_location: 'https://api.unsplash.com/photos/rMhTw17rVKw/download',
        },
        likes: 17,
    }, {
        id: 'kM9HOMCULcQ',
        description: null,
        urls: {
            raw: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1',
            full: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=srgb&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=85',
            regular: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=1080',
            small: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=400',
            thumb: 'https://images.unsplash.com/photo-1607292990250-63c6585e45e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxODg5MjR8MHwxfGFsbHwyMHx8fHx8fDJ8&ixlib=rb-1.2.1&q=80&w=200',
        },
        links: {
            self: 'https://api.unsplash.com/photos/kM9HOMCULcQ',
            html: 'https://unsplash.com/photos/kM9HOMCULcQ',
            download: 'https://unsplash.com/photos/kM9HOMCULcQ/download',
            download_location: 'https://api.unsplash.com/photos/kM9HOMCULcQ/download',
        },
        likes: 19,
    },
];


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Ij5Q":
/*!**********************************************!*\
  !*** ./src/app/gallery/gallery.component.ts ***!
  \**********************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data */ "AVqD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-details/image-details.component */ "4QQZ");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image/image.component */ "1wVk");






function GalleryComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const i_r2 = ctx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onSelect(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const imageItem_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("gallery__item--active", ctx_r0.checkNumberOfCurrentItem(i_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentImage", imageItem_r1);
} }
class GalleryComponent {
    constructor() {
        this.dataImages = _data__WEBPACK_IMPORTED_MODULE_1__["dataImages"];
    }
    onSelect(i) {
        this.numberOfCurrentItem = i;
    }
    increaseNumberOfCurrentItem() {
        if (this.numberOfCurrentItem === _data__WEBPACK_IMPORTED_MODULE_1__["dataImages"].length - 1 || this.numberOfCurrentItem === undefined) {
            this.numberOfCurrentItem = 0;
        }
        else {
            this.numberOfCurrentItem++;
        }
    }
    decreaseNumberOfCurrentItem() {
        if (this.numberOfCurrentItem <= 0 || this.numberOfCurrentItem === undefined) {
            this.numberOfCurrentItem = _data__WEBPACK_IMPORTED_MODULE_1__["dataImages"].length - 1;
        }
        else {
            this.numberOfCurrentItem--;
        }
    }
    checkNumberOfCurrentItem(i) {
        return this.numberOfCurrentItem === i;
    }
    ngOnInit() {
    }
}
GalleryComponent.ɵfac = function GalleryComponent_Factory(t) { return new (t || GalleryComponent)(); };
GalleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GalleryComponent, selectors: [["app-gallery"]], decls: 12, vars: 3, consts: [[1, "container"], [1, "gallery-wrapper"], [1, "container__button", 3, "click"], [1, "gallery"], ["class", "gallery__item", 3, "gallery__item--active", "click", 4, "ngFor", "ngForOf"], [1, "image-full-box"], [3, "numberOfCurrentItem"], [1, "gallery__item", 3, "click"], [3, "currentImage"]], template: function GalleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_2_listener() { return ctx.decreaseNumberOfCurrentItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Prev");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GalleryComponent_Template_button_click_4_listener() { return ctx.increaseNumberOfCurrentItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, GalleryComponent_li_9_Template, 2, 3, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-image-details", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Image #", ctx.numberOfCurrentItem, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataImages);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("numberOfCurrentItem", ctx.numberOfCurrentItem);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_3__["ImageDetailsComponent"], _image_image_component__WEBPACK_IMPORTED_MODULE_4__["ImageComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.container__button[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding: 5px 20px;\n}\n\n.gallery[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.gallery__item[_ngcontent-%COMP%] {\n  float: left;\n  width: 100px;\n  height: 100px;\n  border: 4px solid #FFF;\n  font-size: 12px;\n  list-style-type: none;\n  background-color: #EEE;\n}\n\n.gallery__item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.gallery__item--active[_ngcontent-%COMP%] {\n  border: 4px solid #00F;\n}\n\n.gallery-wrapper[_ngcontent-%COMP%] {\n  width: 40%;\n}\n\n.image-full-box[_ngcontent-%COMP%] {\n  width: 60%;\n  height: 640px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImdhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0FBQ2YiLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXJfX2J1dHRvbiB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG59XG5cbi5nYWxsZXJ5IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5nYWxsZXJ5X19pdGVtIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm9yZGVyOiA0cHggc29saWQgI0ZGRjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG59XG5cbi5nYWxsZXJ5X19pdGVtOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZ2FsbGVyeV9faXRlbS0tYWN0aXZlIHtcbiAgYm9yZGVyOiA0cHggc29saWQgIzAwRjtcbn1cblxuLmdhbGxlcnktd3JhcHBlciB7XG4gIHdpZHRoOiA0MCU7XG59XG5cbi5pbWFnZS1mdWxsLWJveCB7XG4gIHdpZHRoOiA2MCU7XG4gIGhlaWdodDogNjQwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GalleryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gallery',
                templateUrl: './gallery.component.html',
                styleUrls: ['./gallery.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");



class AppComponent {
    constructor() {
        this.title = 'Gallery of Images!';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-gallery");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__["GalleryComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHNCQUFzQiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qZW1wdHkgY3NzIGNvbXBvbmVudCovXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ "Ij5Q");
/* harmony import */ var _image_image_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./image/image.component */ "1wVk");
/* harmony import */ var _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image-details/image-details.component */ "4QQZ");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
        _image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"],
        _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__["ImageDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                    _image_image_component__WEBPACK_IMPORTED_MODULE_5__["ImageComponent"],
                    _image_details_image_details_component__WEBPACK_IMPORTED_MODULE_6__["ImageDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map