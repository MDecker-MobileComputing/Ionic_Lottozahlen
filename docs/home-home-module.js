(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\r\n  <ion-toolbar>\r\n    <ion-title>Lottozahlen-Generator</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n  <ion-button expand=\"block\"\r\n              color=\"success\"\r\n              (click)=\"onLottozahlenErzeugen()\">Lottozahlen erzeugen</ion-button>\r\n\r\n  &nbsp;\r\n\r\n  <ion-grid>\r\n    <ion-row *ngFor=\"let nummerZeile of nullBisSechs\">\r\n        <ion-col *ngFor=\"let nummerSpalte of nullBisSechs\"\r\n                 [style.background]=\"hintergrundFarbeArray[nummerZeile*7 + nummerSpalte + 1]\">{{nummerZeile*7 + nummerSpalte + 1}}</ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-col {\n  border: solid 1px #ddd;\n  width: 3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQU1BO0VBQ0ksc0JBQUE7RUFDQSxVQUFBO0FBSEoiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxufVxyXG5cclxuI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4vLyBcIkvDpHN0Y2hlblwiIHVtIGplZGUgTG90dG96YWhsIHplaWNoZW5cclxuaW9uLWNvbCB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDFweCAjZGRkO1xyXG4gICAgd2lkdGg6IDNlbTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    /**
     * Initialisiert den Array mit den Hintergrundfarben.
     */
    constructor() {
        /**
         * Array enthält unter Index mit Lottozahl die aktuelle Hintergrundfarbe (String für CSS-Farbnamen)
         * für diese Zahl, also ob die jeweilige Zahl ausgewählt wurde oder nicht; 1-basierter Index!
         */
        this.hintergrundFarbeArray = [];
        /** Array enthält Zahlen 0 bis einschl. 6 für die Anzahl der Zeilen bzw. Spalten. */
        this.nullBisSechs = [...new Array(7)].map((_, i) => i);
        this.hintergrundFarbeArray.push("dummy"); // Element mit Index=0 wird nicht verwendet um 1-basierten index zu erhalten
        for (let i = 1; i <= 49; i++) {
            this.hintergrundFarbeArray.push("white");
        }
        ;
    }
    /**
     * Setzt Hintergrund für alle 49 Zahlen auf weiß, d.h. alle Zahlen sind "abgewählt".
     */
    alleZahlenWeiss() {
        for (let i = 1; i <= 49; i++) {
            this.hintergrundFarbeArray[i] = "white";
        }
    }
    /**
     * Event-Handler-Methode für Button, der Erzeugung der Zufallszahlen auslöst.
     */
    onLottozahlenErzeugen() {
        this.alleZahlenWeiss();
        const lottoZahlenArray = this.lottoZahlenErzeugen();
        for (let i = 0; i < lottoZahlenArray.length; i++) {
            const zahl = lottoZahlenArray[i];
            this.hintergrundFarbeArray[zahl] = "orange";
        }
    }
    /**
     * Methode erzeugt die anzuzeigenden Zufallszahlen (6 Zahlen von 1 bis 49).
     *
     * @return  Array mit sechs zufällig ausgewählten Lottozahlen, aufsteigend sortiert.
     */
    lottoZahlenErzeugen() {
        const meinArray = [];
        for (let i = 1; i <= 49; i++) {
            const lottozahlUndZufallszahl = { lottozahl: i, zufallszahl: Math.random() };
            meinArray.push(lottozahlUndZufallszahl);
        }
        meinArray.sort(function (a, b) {
            if (a.zufallszahl === b.zufallszahl) {
                return 0;
            }
            if (a.zufallszahl < b.zufallszahl) {
                return -1;
            }
            if (a.zufallszahl > b.zufallszahl) {
                return 1;
            }
        });
        const ergebnisArray = [];
        for (let i = 0; i < 6; i++) {
            ergebnisArray.push(meinArray[i].lottozahl);
        }
        ergebnisArray.sort(function (a, b) {
            if (a < b) {
                return -1;
            }
            if (a > b) {
                return 1;
            }
        });
        return ergebnisArray;
    }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map