(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-medicine-medicine-module"],{

/***/ "7YCm":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/medicine/medicine.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\n    ><strong>{{alert?.message}}</strong></alert\n  >\n</div>\n<div\n  bsModal\n  #myModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Add New Medicine</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"myModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div\n        class=\"modal-body\"\n        id=\"medicineAddForm\"\n        [formGroup]=\"medicineAddForm\"\n      >\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                placeholder=\"Select Status\"\n                (change)=\"onChang($event)\"\n              >\n                <option value=\"0\">Select Status</option>\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Category</label>\n              <ng-select class=\"form-control custom\"\n              (keypress)=\"getCategories($event)\"           \n              formControlName=\"categories\" required>\n                <ng-option\n                  *ngFor=\"let category of categories\"\n                  [value]=\"category?.category\"\n                >\n                  {{ category?.category }}\n                </ng-option>\n              </ng-select>\n              <!-- <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                formControlName=\"categories\"\n                placeholder =\"Select Categories\"\n              >\n                <option [value]=\"category?.category\" *ngFor=\"let category of categories\">\n                  {{ category?.category }}\n                </option>\n              </select> -->\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Packing</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"packing\"\n                formControlName=\"packing\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Expiry</label>\n              <input\n                type=\"date\"\n                class=\"form-control\"\n                id=\"expiry\"\n                formControlName=\"expiry\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Rate</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"rate\"\n                placeholder=\"\"\n                formControlName=\"rate\"\n                required\n              />\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Product Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company\"\n                placeholder=\"Product Name\"\n                formControlName=\"productName\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Brand</label>\n              <ng-select class=\"form-control custom\" \n              formControlName=\"brand\" \n              (keypress)=\"getBrands($event)\"          \n              required>\n                <ng-option *ngFor=\"let brand of brands\" [value]=\"brand?.brand\">\n                  {{ brand?.brand }}\n                </ng-option>\n              </ng-select>\n              <!-- <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                formControlName=\"brand\"\n              >\n                <option value=\"0\">Select Brands</option>\n                <option [value]=\"brand?.brand\" *ngFor=\"let brand of brands\">{{brand?.brand}}</option>\n    \n              </select> -->\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Batch No.</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"batch no\"\n                formControlName=\"batchNo\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Quantity</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"quantity\"\n                formControlName=\"quantity\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">MRP</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"MRP\"\n                formControlName=\"mrp\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          form:submit\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Add\n        </button>\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"myModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n\n\n\n<!-- update -->\n\n<div\n  bsModal\n  #updateModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"updateModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Update {{editMedicine.productName}}</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"updateModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div\n        class=\"modal-body\"\n        id=\"medicineAddForm\"\n      >\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                placeholder=\"Select Status\"\n                (change)=\"onChang($event)\"\n                [(ngModel)] = \"editMedicine.status\"\n              >\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Category</label>\n              <ng-select class=\"form-control custom\"\n              (keypress)=\"getCategories($event)\"           \n              [(ngModel)]=\"editMedicine.categories\"\n              required>\n                <ng-option\n                  *ngFor=\"let category of categories\"\n                  [value]=\"category.category\"\n                >\n                  {{ category?.category }}\n                </ng-option>\n              </ng-select>\n              <!-- <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                formControlName=\"categories\"\n                placeholder =\"Select Categories\"\n              >\n                <option [value]=\"category?.category\" *ngFor=\"let category of categories\">\n                  {{ category?.category }}\n                </option>\n              </select> -->\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Packing</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"packing1\"\n                [(ngModel)]=\"editMedicine.packing\"\n\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Expiry</label>\n              <input\n                type=\"date\"\n                class=\"form-control\"\n                id=\"expiry\"\n              [(ngModel)]=\"editMedicine.expiry\"\n                required\n\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Rate</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"rate\"\n                placeholder=\"\"\n                [(ngModel)]=\"editMedicine.rate\"\n                required\n              />\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Product Name</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company1\"\n                placeholder=\"Product Name\"\n                [(ngModel)]=\"editMedicine.productName\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Brand</label>\n              <ng-select class=\"form-control custom\" \n              [(ngModel)]=\"editMedicine.brand\"\n              (keypress)=\"getBrands($event)\"\n              required>\n                <ng-option *ngFor=\"let brand of brands\" \n                [value]=\"brand?.brand\">\n                  {{ brand?.brand }}\n                </ng-option>\n              </ng-select>\n              <!-- <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                formControlName=\"brand\"\n              >\n                <option value=\"0\">Select Brands</option>\n                <option [value]=\"brand?.brand\" *ngFor=\"let brand of brands\">{{brand?.brand}}</option>\n    \n              </select> -->\n            </div>\n            <div class=\"form-group\">\n              <label for=\"batchno\">Batch No.</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"batchno\"\n                [(ngModel)]=\"editMedicine.batchNo\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"quantity1\">Quantity</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"quantity1\"\n                [(ngModel)]=\"editMedicine.quantity\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">MRP</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"MRP\"\n                [(ngModel)]=\"editMedicine.mrp\"\n                required\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submitUpdate()\"\n          type=\"submit\"\n          form:submit\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Update\n        </button>\n        <!-- <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button> -->\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"updateModel.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div class=\"card\" style=\"margin-top: 30px;\">\n  <div class=\"card-header\">\n    <h6>Available Medicines</h6>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\n      <div class=\"input-group col-md-3\">\n        <input\n          type=\"text\"\n          id=\"input1-group2\"\n          name=\"input1-group2\"\n          class=\"form-control\"\n          placeholder=\"Search Medicines\"\n          [(ngModel)]=\"searchTerm\"\n          (ngModelChange)=\"searchMed($event)\"\n        />\n        <span class=\"input-group-append\">\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\n            <i class=\"fa fa-search\"></i> Search\n          </button>\n        </span>\n      </div>\n      <div class=\"col-md-3\">\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary btn-pill mr-1\"\n          data-toggle=\"modal\"\n          (click)=\"myModal.show()\"\n        >\n          Add New Medicine\n        </button>\n      </div>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>Product Name</th>\n          <th>Packing</th>\n          <th>Batch No.</th>\n          <th>Expiry</th>\n          <th>Quantity</th>\n          <th>Brand</th>\n          <th>Category</th>\n          <th>MRP</th>\n          <th>Rate</th>\n          <th>status</th>\n          <th>update</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let medicine of medicines| paginate\n        : {\n            itemsPerPage: 10,\n            currentPage: p,\n            totalItems: totalData\n          }\"\n        >\n          <td>{{ medicine?.productName }}</td>\n          <td>{{ medicine?.packing }}</td>\n          <td>{{ medicine?.batchNo }}</td>\n          <td>{{ medicine?.expiry | amDateFormat: \"DD/MM/YYYY\" }}</td>\n          <td>{{ medicine?.quantity }}</td>\n          <td>{{ medicine?.brand }}</td>\n          <td>{{ medicine?.categories }}</td>\n          <td>{{ medicine?.mrp }}</td>\n          <td>{{ medicine?.rate }}</td>\n          <td>\n            <span\n              class=\"badge\"\n              [class.badge-success]=\"medicine?.status\"\n              [class.badge-danger]=\"!medicine?.status\"\n              >{{ medicine?.status ? \"Avail\" : \"NotAvail\" }}</span\n            >\n          </td>\n          <td>\n            <div class=\"update row\">\n              <button class=\"btn btn-sm btn-secondary btn-pill\" (click)=\"openUpdate(medicine)\">Edit</button>\n              <button class=\"btn btn-sm btn-danger btn-pill\">\n                <span\n                  class=\"cil-trash\"\n                  (click)=\"deleteMed(medicine._id)\"\n                ></span>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <pagination-controls\n      (pageChange)=\"handlePageChange($event)\"\n    ></pagination-controls>\n  </div>\n</div>\n");

/***/ }),

/***/ "7vMa":
/*!***********************************************************!*\
  !*** ./src/app/views/medicine/medicine-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: MedicineRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineRoutingModule", function() { return MedicineRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _medicine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicine.component */ "yDBF");




const routes = [
    {
        path: '',
        component: _medicine_component__WEBPACK_IMPORTED_MODULE_3__["MedicineComponent"],
        data: {
            title: 'Medicine'
        }
    }
];
let MedicineRoutingModule = class MedicineRoutingModule {
};
MedicineRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MedicineRoutingModule);



/***/ }),

/***/ "P8Yz":
/*!***************************************************!*\
  !*** ./src/app/views/medicine/medicine.module.ts ***!
  \***************************************************/
/*! exports provided: MedicineModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineModule", function() { return MedicineModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _medicine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicine.component */ "yDBF");
/* harmony import */ var _medicine_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicine-routing.module */ "7vMa");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "St1U");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular2-moment */ "YcbE");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap/alert */ "CNMR");














let MedicineModule = class MedicineModule {
};
MedicineModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _medicine_routing_module__WEBPACK_IMPORTED_MODULE_3__["MedicineRoutingModule"],
            ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(),
            angular2_moment__WEBPACK_IMPORTED_MODULE_9__["MomentModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__["AlertModule"].forRoot()
        ],
        declarations: [_medicine_component__WEBPACK_IMPORTED_MODULE_2__["MedicineComponent"]],
    })
], MedicineModule);



/***/ }),

/***/ "nZeC":
/*!********************************************************!*\
  !*** ./src/app/views/medicine/medicine.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.custom ::ng-deep .ng-dropdown-panel {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  margin-top: 8px;\n  margin-left: -12px;\n  background: white;\n  border: 1px solid #e4e7ea;\n  border-radius: 4px;\n  border-top: none;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option:hover {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  background: #f0f3f5;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  cursor: pointer;\n  padding-left: 15px;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21lZGljaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFBSiIsImZpbGUiOiJtZWRpY2luZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLm5nLXNlbGVjdC5jdXN0b20gOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCAge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICBtYXJnaW4tbGVmdDogLTEycHg7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2U0ZTdlYTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcblxufVxuXG4ubmctc2VsZWN0LmN1c3RvbSA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uOmhvdmVyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBiYWNrZ3JvdW5kOiAjZjBmM2Y1O1xufVxuLm5nLXNlbGVjdC5jdXN0b20gOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbiB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICBwYWRkaW5nOiA2cHg7XG59Il19 */");

/***/ }),

/***/ "yDBF":
/*!******************************************************!*\
  !*** ./src/app/views/medicine/medicine.component.ts ***!
  \******************************************************/
/*! exports provided: MedicineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineComponent", function() { return MedicineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_medicine_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./medicine.component.html */ "7YCm");
/* harmony import */ var _medicine_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medicine.component.scss */ "nZeC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/brand.service */ "S4pr");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/categories.service */ "ycII");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/medicine.service */ "gHm9");









let MedicineComponent = class MedicineComponent {
    constructor(medServ, fb, catgServ, brandServ) {
        this.medServ = medServ;
        this.fb = fb;
        this.catgServ = catgServ;
        this.brandServ = brandServ;
        this.medicines = [];
        this.categories = [];
        this.brands = [];
        this.alertsDismiss = [];
        this.p = 1;
        this.searchTerm = '';
        this.status = false;
        this.searchTermBrnd = '';
        this.submitted = false;
        this.editMedicine = {};
        this.config = {
            backdrop: 'static'
        };
    }
    ngOnInit() {
        this.getMedicines(1);
        this.buildForm();
    }
    handlePageChange(event) {
        this.p = event;
        this.getMedicines(this.p);
    }
    getMedicines(page) {
        this.medServ.getMedicines(`skip=${page * 10 - 10}&limit=10`).subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
            this.medicines = res.data;
            this.totalData = res['total'];
            console.log(this.medicines);
        });
    }
    searchMed(e) {
        this.medServ.getMedicines(`search=${this.searchTerm}&limit=10`).subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", e, res);
            this.medicines = res.data;
            this.totalData = res['total'];
            this.p = 1;
            console.log(this.medicines);
        });
    }
    getCategories(e) {
        this.catgServ.getCategories(`search=${e.target.value}&limit=20`).subscribe((res) => {
            this.categories = res.data;
        });
    }
    getBrands(e) {
        this.brandServ.getBrands(`search=${e.target.value}&limit=20`).subscribe((res) => {
            this.brands = res.data;
            console.log(this.brands, e.target.value);
        });
    }
    deleteMed(id) {
        swal({ text: "Do you want to delete this Medicine", icon: 'warning', buttons: true, dangerMode: true, })
            .then((del) => {
            if (del) {
                this.medServ.deleteMedicine(id).subscribe((resp) => {
                    this.getMedicines(this.p);
                    swal({ text: "Medicine deleted successfully", icon: 'success' });
                });
            }
        });
    }
    onChang(e) {
        if (e.target.value == "true") {
            this.status = true;
        }
        else {
            this.status = false;
        }
    }
    buildForm() {
        this.medicineAddForm = this.fb.group({
            brand: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            packing: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            expiry: [""],
            rate: [""],
            productName: [""],
            categories: [""],
            batchNo: [""],
            quantity: [""],
            mrp: [""],
        });
    }
    isValid(valObj) {
        var check = false;
        if (valObj.brand &&
            valObj.categories &&
            valObj.productName &&
            valObj.expiry &&
            valObj.mrp &&
            valObj.quantity &&
            valObj.rate &&
            valObj.batchNo &&
            valObj.packing) {
            check = true;
        }
        return check;
    }
    get f() {
        return Object.assign(Object.assign({}, this.medicineAddForm.value), { status: this.status });
    }
    submit() {
        console.log(this.isValid(this.f));
        if (this.isValid(this.f)) {
            this.submitted = true;
            this.medServ.postMedicine(this.f).subscribe((resp) => {
                if (resp) {
                    this.getMedicines(this.p);
                    this.medicineAddForm.reset();
                    this.myModal.hide();
                    swal({ text: "Medicine Added successfully", icon: 'success' });
                }
            });
            console.log(this.f);
        }
        else {
            swal({ text: "Please enter all the details", icon: 'info' });
        }
    }
    reSet() {
        this.medicineAddForm.reset();
    }
    openUpdate(medicine) {
        this.updateModal.show();
        console.log(">>>update", medicine);
        this.editMedicine = medicine;
        this.editMedicine['expiry'] = new Date(this.editMedicine['expiry']).toISOString().split('T')[0];
    }
    submitUpdate() {
        console.log(this.editMedicine);
        if (this.editMedicine['quantity'] <= 0) {
            this.editMedicine['status'] = false;
        }
        else {
            this.editMedicine['status'] = true;
        }
        this.medServ.updateMedicine(this.editMedicine['_id'], this.editMedicine).subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
            if (res) {
                this.getMedicines(this.p);
                this.updateModal.hide();
                swal({
                    title: `${this.editMedicine['productName']}`,
                    text: `Updated successfully`,
                    icon: 'success'
                });
            }
            else {
                swal({ text: "Please enter all the details", icon: 'info' });
            }
        });
    }
    alertNot(type, message) {
        this.alertsDismiss.push({
            type: type,
            message: `${message}`,
            timeout: 5000
        });
    }
};
MedicineComponent.ctorParameters = () => [
    { type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_8__["MedicineService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"] },
    { type: _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"] }
];
MedicineComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal",] }],
    updateModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["updateModal",] }]
};
MedicineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-medicine",
        template: _raw_loader_medicine_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicine_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_medicine_service__WEBPACK_IMPORTED_MODULE_8__["MedicineService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
        _services_categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"],
        _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"]])
], MedicineComponent);



/***/ })

}]);
//# sourceMappingURL=views-medicine-medicine-module-es2015.js.map