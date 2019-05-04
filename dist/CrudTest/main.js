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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<nav class=\"navbar navbar-default\">\r\n    <ul class=\"nav navbar-nav\">\r\n        <li>\r\n            <a routerLink=\"listOptions\">Listoption</a>\r\n        </li>\r\n       <!--  <li>\r\n            <a routerLink=\"list\">List</a>\r\n        </li>\r\n        <li>\r\n            <a routerLink=\"create\">Create</a>\r\n        </li> \r\n        <li>\r\n            <a routerLink=\"edit\">edit</a>\r\n        </li>    --> \r\n    </ul>\r\n</nav>\r\n<router-outlet></router-outlet>\r\n</div>\r\n<!--<div class=\"container\">\r\n<app-list-employees></app-list-employees>\r\n</div> -->"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import * as io from 'socket.io-client';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Option Test';
        //this.socket = io("http://localhost:5000");
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.socket.on('data1',(res)=>{
        //console.log("data emitted" + res);
        //});
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employees/list-employees.component */ "./src/app/employees/list-employees.component.ts");
/* harmony import */ var _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employees/create-employee.component */ "./src/app/employees/create-employee.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employees_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./employees/employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _employees_display_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./employees/display-employee.component */ "./src/app/employees/display-employee.component.ts");
/* harmony import */ var _employees_create_employee_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employees/create-employee-can-deactivate-guard-service */ "./src/app/employees/create-employee-can-deactivate-guard-service.ts");
/* harmony import */ var _options_list_options_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./options/list-options.component */ "./src/app/options/list-options.component.ts");
/* harmony import */ var _options_display_option_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./options/display-option.component */ "./src/app/options/display-option.component.ts");
/* harmony import */ var _options_option_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./options/option.service */ "./src/app/options/option.service.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    { path: 'listOptions', component: _options_list_options_component__WEBPACK_IMPORTED_MODULE_10__["ListOptionsComponent"] },
    // { path:'list',component:ListEmployeesComponent},
    //{ path:'create', component:CreateEmployeeComponent,canDeactivate:[CreateEmployeeCanDeactivateGuardService]},
    { path: '', redirectTo: '/listOptions', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _employees_list_employees_component__WEBPACK_IMPORTED_MODULE_3__["ListEmployeesComponent"],
                _employees_create_employee_component__WEBPACK_IMPORTED_MODULE_4__["CreateEmployeeComponent"],
                _employees_display_employee_component__WEBPACK_IMPORTED_MODULE_8__["DisplayEmployeeComponent"],
                _options_list_options_component__WEBPACK_IMPORTED_MODULE_10__["ListOptionsComponent"],
                _options_display_option_component__WEBPACK_IMPORTED_MODULE_11__["DisplayOptionComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_13__["NgxPaginationModule"],
            ],
            providers: [_employees_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"], _employees_create_employee_can_deactivate_guard_service__WEBPACK_IMPORTED_MODULE_9__["CreateEmployeeCanDeactivateGuardService"], _options_option_service__WEBPACK_IMPORTED_MODULE_12__["OptionService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/employees/create-employee-can-deactivate-guard-service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/employees/create-employee-can-deactivate-guard-service.ts ***!
  \***************************************************************************/
/*! exports provided: CreateEmployeeCanDeactivateGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeCanDeactivateGuardService", function() { return CreateEmployeeCanDeactivateGuardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreateEmployeeCanDeactivateGuardService = /** @class */ (function () {
    function CreateEmployeeCanDeactivateGuardService() {
    }
    CreateEmployeeCanDeactivateGuardService.prototype.canDeactivate = function (component) {
        console.log("component");
        console.log(component);
        if (component.createEmployeeForm.dirty) {
            return confirm('Are you want to discard your changes?');
        }
        // if (component.employee.name===null)
        // {
        //     return confirm('Are you want to discard your changes?');
        // }
        return true;
    };
    CreateEmployeeCanDeactivateGuardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], CreateEmployeeCanDeactivateGuardService);
    return CreateEmployeeCanDeactivateGuardService;
}());



/***/ }),

/***/ "./src/app/employees/create-employee.component.css":
/*!*********************************************************!*\
  !*** ./src/app/employees/create-employee.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9jcmVhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/employees/create-employee.component.html":
/*!**********************************************************!*\
  !*** ./src/app/employees/create-employee.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- <form #employeeForm=\"ngForm\" (ngSubmit)=\"saveEmployee(employeeForm)\"> -->\n\n<form #employeeForm=\"ngForm\" (ngSubmit)=\"saveEmployee()\">\n<div class=\"panel panel-primary\" >\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">Create employee</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"form-group\">\n        <label for=\"fullName\">Full Name</label>\n        <input id=\"fullName\" [(ngModel)]=\"employee.name\" name=\"fullName\" type=\"text\" class=\"form-control\">\n      </div>\n        \n      <div class=\"form-group\">\n        <label for=\"email\">Email</label>\n        <input id=\"email\" type=\"text\" [(ngModel)]=\"employee.email\" name=\"email\" class=\"form-control\">\n      </div>\n      \n      <div class=\"form-group\">\n          <label for=\"phoneNumber\">Phone Number</label>\n          <input id=\"phoneNumber\" type=\"text\" [(ngModel)]=\"employee.phoneNumber\" name=\"phoneNumber\" class=\"form-control\">\n      </div>\n      \n      <div class=\"form-group\">\n          <label>contactPreference</label>\n        <div class=\"form-control\">\n            <label class =\"radio-inline\">\n              <input type=\"radio\" value=\"phone\" [(ngModel)] = \"employee.contactPreference\" name =\"contactPreference\">\n              Phone\n            </label>\n          \n          <label class =\"radio-inline\">\n              <input type=\"radio\" value=\"email\" [(ngModel)] = \"employee.contactPreference\" name =\"contactPreference\">\n            Email\n            </label>\n          </div>\n      </div>\n\n      <div class=\"form-group\">\n          <label>Gender</label>\n        <div class=\"form-control\">\n            <label class =\"radio-inline\">\n              <input type=\"radio\" value=\"male\" [(ngModel)] = \"employee.gender\" name =\"gender\">\n              Male\n            </label>\n          \n          <label class =\"radio-inline\">\n              <input type=\"radio\" value=\"female\" [(ngModel)] = \"employee.gender\" name =\"gender\">\n            Female\n            </label>\n          </div>\n          \n          <div class=\"form-group\" >\n              <label for=\"department\">Department</label>\n\n            <select id=\"department\" name =\"department\" [(ngModel)]=\"employee.department\" class=\"form-control\">\n            <option  *ngFor=\"let dept of departments\" [value]=\"dept.id\">    \n              {{dept.name}}\n            </option>\n            </select>  \n          </div>\n             \n\n      </div>\n      \n\n    </div>\n    <div class=\"panel-footer\">\n        <button type=\"submit\" class =\"btn btn-primary\">Save</button>  \n    </div>\n</div>\n</form>\n<div>\n  {{employeeForm.value | json }}\n</div>"

/***/ }),

/***/ "./src/app/employees/create-employee.component.ts":
/*!********************************************************!*\
  !*** ./src/app/employees/create-employee.component.ts ***!
  \********************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateEmployeeComponent = /** @class */ (function () {
    function CreateEmployeeComponent(_employeeService, _router) {
        this._employeeService = _employeeService;
        this._router = _router;
        this.employee = {
            id: null,
            name: null,
            gender: null,
            email: '',
            phoneNumber: null,
            contactPreference: null,
            dateOfBirth: null,
            department: null,
            isActive: false,
            photoPath: null
        };
        this.departments = [
            { id: 1, name: "Help Desk" },
            { id: 2, name: "HR" },
            { id: 3, name: "IT" },
            { id: 4, name: "Payroll" },
        ];
    }
    Object.defineProperty(CreateEmployeeComponent.prototype, "createEmployeeForm", {
        get: function () {
            return this._createEmployeeForm;
        },
        enumerable: true,
        configurable: true
    });
    CreateEmployeeComponent.prototype.ngOnInit = function () {
    };
    CreateEmployeeComponent.prototype.saveEmployee = function () {
        this.employee.photoPath = 'assets/images/image4.png';
        this._employeeService.saveEmployees(this.employee);
        this._router.navigate(['list']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('employeeForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], CreateEmployeeComponent.prototype, "_createEmployeeForm", void 0);
    CreateEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-employee',
            template: __webpack_require__(/*! ./create-employee.component.html */ "./src/app/employees/create-employee.component.html"),
            styles: [__webpack_require__(/*! ./create-employee.component.css */ "./src/app/employees/create-employee.component.css")]
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CreateEmployeeComponent);
    return CreateEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/display-employee.component.css":
/*!**********************************************************!*\
  !*** ./src/app/employees/display-employee.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9kaXNwbGF5LWVtcGxveWVlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/employees/display-employee.component.html":
/*!***********************************************************!*\
  !*** ./src/app/employees/display-employee.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"panel panel-primary\">\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{employee.name}}</h3>\n      \n      \n    </div>\n    <div class=\"panel-body\">\n      <div class=\"col-xs-10\">\n        <div class=\"row\">\n          <div class=\"col-xs-4\">\n            <img [src] =\"employee.photoPath\" />\n          </div>\n          <div class=\"col-xs-8\">\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                   name\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.name}}\"\n                </div>\n            </div>\n            \n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    gender\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.gender}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    email\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.email}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    phoneNumber\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.phoneNumber}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    contactPreference\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.contactPreference}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    dateOfBirth\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.dateOfBirth | date}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    department\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.department}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    isActive\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{employee.isActive}}\"\n                </div>\n            </div>\n           \n          </div>\n        </div>\n      </div>\n    \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/employees/display-employee.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/employees/display-employee.component.ts ***!
  \*********************************************************/
/*! exports provided: DisplayEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayEmployeeComponent", function() { return DisplayEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_employee_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/employee.model */ "./src/app/models/employee.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayEmployeeComponent = /** @class */ (function () {
    function DisplayEmployeeComponent() {
    }
    DisplayEmployeeComponent.prototype.ngOnInit = function () {
    };
    DisplayEmployeeComponent.prototype.editEmployee = function () {
        alert("hello");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_employee_model__WEBPACK_IMPORTED_MODULE_1__["Employee"])
    ], DisplayEmployeeComponent.prototype, "employee", void 0);
    DisplayEmployeeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-employee',
            template: __webpack_require__(/*! ./display-employee.component.html */ "./src/app/employees/display-employee.component.html"),
            styles: [__webpack_require__(/*! ./display-employee.component.css */ "./src/app/employees/display-employee.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayEmployeeComponent);
    return DisplayEmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employee.service.ts":
/*!***********************************************!*\
  !*** ./src/app/employees/employee.service.ts ***!
  \***********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.listEmployee = [
            {
                id: 1,
                name: 'Praveen',
                gender: 'male',
                email: 'abc@abc.com',
                phoneNumber: 12345678,
                contactPreference: 'Email',
                dateOfBirth: new Date('10/25/988'),
                department: 'IT',
                isActive: true,
                photoPath: 'assets/images/image1.png'
            },
            {
                id: 2,
                name: 'Raman',
                gender: 'male',
                email: 'abc@abc.com',
                phoneNumber: 12345678,
                contactPreference: 'Phone',
                dateOfBirth: new Date('10/25/988'),
                department: 'IT',
                isActive: true,
                photoPath: 'assets/images/image2.png'
            },
            {
                id: 3,
                name: 'Ramesh',
                gender: 'male',
                email: 'abc@abc.com',
                phoneNumber: 12345678,
                contactPreference: 'Email',
                dateOfBirth: new Date('10/25/988'),
                department: 'IT',
                isActive: true,
                photoPath: 'assets/images/image3.png'
            }
        ];
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.listEmployee;
    };
    EmployeeService.prototype.saveEmployees = function (employee) {
        this.listEmployee.push(employee);
    };
    EmployeeService.prototype.editEmployees = function (employee) {
        employee.name = "Praveen Singh edited";
    };
    EmployeeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/employees/list-employees.component.css":
/*!********************************************************!*\
  !*** ./src/app/employees/list-employees.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlcy9saXN0LWVtcGxveWVlcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/employees/list-employees.component.html":
/*!*********************************************************!*\
  !*** ./src/app/employees/list-employees.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"sendata()\">send data</button>\n\n<div  *ngFor =\"let employee of employees\">\n<app-display-employee [employee]=\"employee\"></app-display-employee>   \n<button (click)=\"editEmployee(employee)\">editEmployee</button>\n</div>\n"

/***/ }),

/***/ "./src/app/employees/list-employees.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/employees/list-employees.component.ts ***!
  \*******************************************************/
/*! exports provided: ListEmployeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListEmployeesComponent", function() { return ListEmployeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employee.service */ "./src/app/employees/employee.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListEmployeesComponent = /** @class */ (function () {
    function ListEmployeesComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__("http://localhost:5000");
    }
    ListEmployeesComponent.prototype.ngOnInit = function () {
        this.employees = this._employeeService.getEmployees();
        this.socket.on('data1', function (res) {
            console.log("data emitted" + res.id + ";" + ";" + res.name);
        });
    };
    ListEmployeesComponent.prototype.sendata = function () {
        this.socket.emit('getdata', "client to server");
    };
    ListEmployeesComponent.prototype.editEmployee = function (employee) {
        this._employeeService.editEmployees(employee);
    };
    ListEmployeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-employees',
            template: __webpack_require__(/*! ./list-employees.component.html */ "./src/app/employees/list-employees.component.html"),
            styles: [__webpack_require__(/*! ./list-employees.component.css */ "./src/app/employees/list-employees.component.css")]
        }),
        __metadata("design:paramtypes", [_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]])
    ], ListEmployeesComponent);
    return ListEmployeesComponent;
}());



/***/ }),

/***/ "./src/app/models/employee.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/employee.model.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/models/option.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/option.model.ts ***!
  \****************************************/
/*! exports provided: Option */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
// export class Option {
//     id : number;
//     name:string;
//     expiryDate:Date;
//     strikePrice?:number;
//     premium?:number;
//     format:number;
//     formatColor:string;
// }
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());



/***/ }),

/***/ "./src/app/options/display-option.component.css":
/*!******************************************************!*\
  !*** ./src/app/options/display-option.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvZGlzcGxheS1vcHRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/options/display-option.component.html":
/*!*******************************************************!*\
  !*** ./src/app/options/display-option.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- \n<div class=\"panel panel-primary\">\n        \n    \n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">{{option.name}}</h3>\n    </div>\n    <div class=\"panel-body\">\n      <div class=\"col-xs-10\">\n        <div class=\"row\">\n          <div class=\"col-xs-8\">\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                   name\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{option.name}}\"\n                </div>\n            </div>\n            \n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    ExpiryDate\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{option.expiryDate | date}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    Strike Price\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{option.strikePrice}}\"\n                </div>\n            </div>\n            <div class=\"row\" >\n                <div class=\"col-xs-6\">\n                    Premium\n                </div>\n                <div class=\"col-xs-6\">\n                    : \"{{option.premium}}\"\n                </div>\n            </div>\n            \n          </div>\n        </div>\n      </div>\n    \n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/options/display-option.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/options/display-option.component.ts ***!
  \*****************************************************/
/*! exports provided: DisplayOptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayOptionComponent", function() { return DisplayOptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_option_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/option.model */ "./src/app/models/option.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DisplayOptionComponent = /** @class */ (function () {
    function DisplayOptionComponent() {
    }
    DisplayOptionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_option_model__WEBPACK_IMPORTED_MODULE_1__["Option"])
    ], DisplayOptionComponent.prototype, "option", void 0);
    DisplayOptionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-display-option',
            template: __webpack_require__(/*! ./display-option.component.html */ "./src/app/options/display-option.component.html"),
            styles: [__webpack_require__(/*! ./display-option.component.css */ "./src/app/options/display-option.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DisplayOptionComponent);
    return DisplayOptionComponent;
}());



/***/ }),

/***/ "./src/app/options/list-options.component.css":
/*!****************************************************!*\
  !*** ./src/app/options/list-options.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29wdGlvbnMvbGlzdC1vcHRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/options/list-options.component.html":
/*!*****************************************************!*\
  !*** ./src/app/options/list-options.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<button (click)=\"addOption(option)\">New Option</button>-->\n<!--<button (click)=\"randOption()\">Calculate Price</button>-->\n \n<!--<div  *ngFor =\"let option of options\">-->\n  <!--  <button (click)=\"editOption(option)\">editOption</button> !-->\n  <div>\n    <label>Min Time: {{minTime | date:'yyyy-MM-dd hh:mm:ss'}}</label>\n    <br/>\n    <label> Max Time: {{maxTime | date:'yyyy-MM-dd hh:mm:ss'}}</label>\n    <br/>\n    <label [style.background-color]=\"'yellow'\">Total Time: {{totalTime}}</label>\n\n  </div>\n  <div  class =\"container\">\n    <table class=\"table table-bordered tabl>e-striped\" >\n        <thead class=\"thead-dark\">\n          <tr>\n            \n            <th scope=\"col\">Stock Name</th>\n            <th scope=\"col\">Option Name</th>\n            <th scope=\"col\">Strike</th>\n            <th scope=\"col\">volatility</th>\n            <th scope=\"col\">Expiry Date</th>\n            <th scope=\"col\">Stock Price</th>\n            <th scope=\"col\">Option Price</th>\n            \n            <th scope=\"col\">Last Update Time</th>\n          </tr>\n        </thead> \n\n        \n         <tbody *ngFor =\"let option of options  | paginate: {  id:'listing_pagination', itemsPerPage: 25, currentPage: page };trackBy:trackByOptionCode\"> \n          <!-- <tbody *ngFor =\"let option of options;trackBy:trackByOptionCode\">  -->\n                          \n          <tr *ngIf=\"option.formatColor === 'White'\" [style.background-color]=\"'white'\">\n                  <th scope=\"row\">{{option.stockName}}</th>\n                  <td>{{option.optionName}}</td>\n                  <td>{{option.strike}}</td>\n                  <td>{{option.volatility}}</td>\n                  <td>{{option.expiryDate | date}}</td>\n                  <td>{{option.stockPrice}}</td>\n                  <td>{{option.optionPrice}}</td>\n                  <!-- <td *ngIf=\"option.formatColor === 'White'\" [style.background-color]=\"'white'\">{{option.optionPrice}}</td>\n                  <td *ngIf=\"option.formatColor === 'Green'\" [style.background-color]=\"'green'\">{{option.optionPrice}}</td>\n                  <td *ngIf=\"option.formatColor === 'Red'\" [style.background-color]=\"'red'\">{{option.optionPrice}}</td>\n                  -->\n                  <td >{{option.lastUpdatedTime | date}}</td>\n          </tr>\n          <tr *ngIf=\"option.formatColor === 'Green'\" [style.background-color]=\"'green'\">\n            <th scope=\"row\">{{option.stockName}}</th>\n                  <td>{{option.optionName}}</td>\n                  <td>{{option.strike}}</td>\n                  <td>{{option.volatility}}</td>\n                  <td>{{option.expiryDate | date}}</td>\n                  <td>{{option.stockPrice}}</td>\n                  <td>{{option.optionPrice}}</td>\n                  <td>{{option.lastUpdatedTime | date}}</td>\n        </tr>\n          <tr *ngIf=\"option.formatColor === 'Red'\" [style.background-color]=\"'red'\">\n            <th scope=\"row\">{{option.stockName}}</th>\n                  <td>{{option.optionName}}</td>\n                  <td>{{option.strike}}</td>\n                  <td>{{option.volatility}}</td>\n                  <td>{{option.expiryDate | date}}</td>\n                  <td>{{option.stockPrice}}</td>\n                  <td>{{option.optionPrice}}</td>\n                 \n                  <td>{{option.lastUpdatedTime | date}}</td>\n        </tr>\n        </tbody>\n        </table>\n        <div>\n           <pagination-controls  id=\"listing_pagination\" maxSize=\"5\" directionLinks=\"true\" (pageChange)=\"page = $event\"></pagination-controls>\n        </div>\n      </div>\n    <!--<app-display-option [option]=\"option\"></app-display-option>-->   \n<!--</div>-->\n"

/***/ }),

/***/ "./src/app/options/list-options.component.ts":
/*!***************************************************!*\
  !*** ./src/app/options/list-options.component.ts ***!
  \***************************************************/
/*! exports provided: ListOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListOptionsComponent", function() { return ListOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_option_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/option.model */ "./src/app/models/option.model.ts");
/* harmony import */ var _option_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./option.service */ "./src/app/options/option.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListOptionsComponent = /** @class */ (function () {
    function ListOptionsComponent(_optionService) {
        this._optionService = _optionService;
        this.opnew = new _models_option_model__WEBPACK_IMPORTED_MODULE_1__["Option"]();
        this.minTime = ""; // = Date.now();
        this.maxTime = ""; //=Date.now();
        this.totalRec = 100;
        this.page = 1;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_3__(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].webSocketURL);
    }
    ListOptionsComponent.prototype.trackByOptionCode = function (index, option) {
        return option.id;
    };
    ListOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        //this.totalRec =100;
        //this.options = this._optionService.getOption();
        this._optionService.getOption().subscribe(function (optionList) {
            _this.options = optionList;
        });
        //  this.addOption();
        this.socket.on('data1', function (res) {
            console.log("data emitted from server OpName: " + res.optionName);
            if (_this.minTime == "")
                _this.minTime = res.lastUpdatedTime;
            if (_this.maxTime == "")
                _this.maxTime = res.lastUpdatedTime;
            if (res.optionName.toLowerCase().startsWith("start")) {
                _this.maxTime = "";
                _this.minTime = "";
                _this.totalTime = "";
                _this.options = [];
                return;
            }
            var selOptions = _this.options.filter(function (op) { return op.optionName.toLowerCase().indexOf(res.optionName.toLowerCase()) != -1; });
            //alert("lenght" + selOptions.length);
            if (selOptions.length <= 0) {
                _this.opnew = new _models_option_model__WEBPACK_IMPORTED_MODULE_1__["Option"]();
                _this.opnew.stockName = res.stockName;
                _this.opnew.optionName = res.optionName;
                _this.opnew.strike = res.strike;
                _this.opnew.volatility = res.volatility;
                _this.opnew.expiryDate = res.expirtyDate;
                _this.opnew.stockPrice = res.stockPrice;
                _this.opnew.optionPrice = res.optionPrice;
                _this.opnew.lastUpdatedTime = res.lastUpdatedTime;
                if (res.lastUpdatedTime >= _this.minTime) {
                    _this.maxTime = res.lastUpdatedTime;
                    _this.totalTime = Date.parse(_this.maxTime) - Date.parse(_this.minTime) + " MS";
                }
                // else
                // {
                //   this.minTime = res.lastUpdatedTime;
                // }
                _this.opnew.format = 0;
                _this.opnew.formatColor = "White";
                _this.options.push(_this.opnew);
            }
            else {
                var selOption = selOptions[0];
                //alert(selOption.optionPrice);
                if (res.optionPrice > selOption.optionPrice)
                    selOption.formatColor = "Red";
                else if (res.optionPrice == selOption.optionPrice)
                    selOption.formatColor = "White";
                else
                    selOption.formatColor = "Green";
                //this.minTime = res.lastUpdatedTime ;
                selOption.optionPrice = res.optionPrice;
                //console.log(selOption.formatColor);
                if (res.lastUpdatedTime >= _this.minTime) {
                    _this.maxTime = res.lastUpdatedTime;
                    _this.totalTime = Date.parse(_this.maxTime) - Date.parse(_this.minTime) + " MS";
                }
            }
        });
    };
    ListOptionsComponent.prototype.editOption = function (option) {
        this._optionService.editOption(option);
    };
    ListOptionsComponent.prototype.datediff = function (dateStart, dateStop) {
        var diffInMs = Date.parse(dateStart) - Date.parse(dateStop);
        return diffInMs;
    };
    ListOptionsComponent.prototype.addOption = function () {
        //var len = this.options.length;
        for (var i = 1; i < 100; i++) {
            this.op = new _models_option_model__WEBPACK_IMPORTED_MODULE_1__["Option"]();
            //this.op.id = i.toString();
            this.op.stockName = "AAPL";
            this.op.optionName = "AAPL190412C00130000-" + i;
            this.op.strike = i * 100;
            this.op.volatility = .05;
            this.op.expiryDate = new Date('12/25/1988');
            this.op.stockPrice = 100;
            this.op.optionPrice = 10;
            this.op.lastUpdatedTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_5__["formatDate"])(Date.now(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '');
            this.op.format = 0;
            this.op.formatColor = "White";
            this._optionService.newOption(this.op);
        }
    };
    ListOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-options',
            template: __webpack_require__(/*! ./list-options.component.html */ "./src/app/options/list-options.component.html"),
            styles: [__webpack_require__(/*! ./list-options.component.css */ "./src/app/options/list-options.component.css")]
        }),
        __metadata("design:paramtypes", [_option_service__WEBPACK_IMPORTED_MODULE_2__["OptionService"]])
    ], ListOptionsComponent);
    return ListOptionsComponent;
}());



/***/ }),

/***/ "./src/app/options/option.service.ts":
/*!*******************************************!*\
  !*** ./src/app/options/option.service.ts ***!
  \*******************************************/
/*! exports provided: OptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionService", function() { return OptionService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var OptionService = /** @class */ (function () {
    function OptionService() {
        this.listOption = [];
    }
    //=[
    //   {
    //     id : 1,
    //     name:'OP-1',
    //     expiryDate:new Date('10/25/1988'),
    //     strikePrice:300,
    //     premium:10,
    //     format:0,
    //     formatColor:"White"
    //   } 
    // ];
    OptionService.prototype.getOption = function () {
        return Object(_node_modules_rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.listOption);
    };
    OptionService.prototype.newOption = function (option) {
        this.listOption.push(option);
    };
    OptionService.prototype.editOption = function (option) {
        option.optionName = "Option  changed";
        option.format = 1;
    };
    OptionService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], OptionService);
    return OptionService;
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
    production: false,
    webSocketURL: 'http://localhost:5000/'
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

module.exports = __webpack_require__(/*! C:\Users\praveen\angulartest\CrudTest\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map