(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-brand-brand-module"],{

/***/ "9OJM":
/*!*********************************************!*\
  !*** ./src/app/views/brand/brand.module.ts ***!
  \*********************************************/
/*! exports provided: BrandModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandModule", function() { return BrandModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _brand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand.component */ "bH47");
/* harmony import */ var _brand_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brand-routing.module */ "FJfU");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/alert */ "CNMR");











let BrandModule = class BrandModule {
};
BrandModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _brand_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrandRoutingModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot()
        ],
        declarations: [_brand_component__WEBPACK_IMPORTED_MODULE_2__["BrandComponent"]]
    })
], BrandModule);



/***/ }),

/***/ "FJfU":
/*!*****************************************************!*\
  !*** ./src/app/views/brand/brand-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: BrandRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandRoutingModule", function() { return BrandRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./brand.component */ "bH47");




const routes = [
    {
        path: '',
        component: _brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"],
        data: {
            title: 'Brand'
        }
    }
];
let BrandRoutingModule = class BrandRoutingModule {
};
BrandRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], BrandRoutingModule);



/***/ }),

/***/ "IBSX":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/brand/brand.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\n    ><strong>{{alert?.message}}</strong></alert\n  >\n</div>\n<div\n  bsModal\n  #myModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Add New Brand</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"myModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"medicineAddForm\" [formGroup]=\"addBrandForm\">\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"date-input\">Description</label>\n              <input\n                class=\"form-control\"\n                id=\"date-input\"\n                type=\"text\"\n                name=\"date-input\"\n                placeholder=\"desc\"\n                formControlName=\"desc\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                placeholder=\"Select Status\"\n                (change)=\"onChang($event)\"\n              >\n                <option value=\"0\">Select Status</option>\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Brand</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company\"\n                placeholder=\"brand\"\n                formControlName=\"brand\"\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"company\">Other</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"MRP\"\n                formControlName=\"other\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          form:submit\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Add\n        </button>\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"myModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n<div\n  bsModal\n  #updateModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"updateModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Add {{editBrand?.brand}} </h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"updateModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" id=\"medicineAddForm\" >\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"date-input\">Description</label>\n              <input\n                class=\"form-control\"\n                id=\"date-input1\"\n                type=\"text\"\n                name=\"date-input\"\n                placeholder=\"desc\"\n                [(ngModel)]=\"editBrand.desc\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                (change)=\"onChang($event)\"\n                [(ngModel)]=\"editBrand.status\"\n              >\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Brand</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company1\"\n                placeholder=\"brand\"\n                [(ngModel)]=\"editBrand.brand\"\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"company\">Other</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"a\"\n                [(ngModel)]=\"editBrand.other\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submitUpdate()\"\n          type=\"submit\"\n          form:submit\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Update\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"updateModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n\n\n<div class=\"card\" style=\"margin-top: 30px\">\n  <div class=\"card-header\">\n    <h6>Available Brands</h6>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\n      <div class=\"input-group col-md-3\">\n        <input\n          type=\"text\"\n          id=\"input1-group2\"\n          name=\"input1-group2\"\n          class=\"form-control\"\n          placeholder=\"Search Brands\"\n          [(ngModel)]=\"searchTerm\"\n          (ngModelChange)=\"searchBrand($event)\"\n\n        />\n        <span class=\"input-group-append\">\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\n            <i class=\"fa fa-search\"></i> Search\n          </button>\n        </span>\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\n        data-toggle=\"modal\"\n        (click)=\"myModal.show()\"\n      >\n        Add New Brand\n      </button>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>S. No.</th>\n          <th>Brand Name</th>\n          <th>Description</th>\n          <th>status</th>\n          <th>update</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"\n            let brand of brands\n              | paginate\n                : {\n                    itemsPerPage: 10,\n                    currentPage: p,\n                    totalItems: totalBrands\n                  };\n            let i = index\n          \"\n        >\n          <td>{{ i + 1 }}</td>\n          <td>{{ brand?.brand }}</td>\n          <td>{{ brand?.desc }}</td>\n          <td>\n            <span\n              class=\"badge\"\n              [class.badge-success]=\"brand?.status\"\n              [class.badge-danger]=\"!brand?.status\"\n              >{{ brand?.status ? \"Available\" : \"NotAvailable\" }}</span\n            >\n          </td>\n          <td>\n            <div class=\"update row\">\n              <button class=\"btn btn-sm btn-secondary btn-pill\" (click)=\"openUpdate(brand)\">Edit</button>\n              <button\n                class=\"btn btn-sm btn-danger btn-pill\"\n                (click)=\"deleteBrands(brand._id)\"\n              >\n                <span class=\"cil-trash\"></span>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <pagination-controls\n      (pageChange)=\"handlePageChange($event)\"\n    ></pagination-controls>\n  </div>\n</div>\n");

/***/ }),

/***/ "bH47":
/*!************************************************!*\
  !*** ./src/app/views/brand/brand.component.ts ***!
  \************************************************/
/*! exports provided: BrandComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandComponent", function() { return BrandComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_brand_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./brand.component.html */ "IBSX");
/* harmony import */ var _brand_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./brand.component.scss */ "s6uv");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/brand.service */ "S4pr");







let BrandComponent = class BrandComponent {
    constructor(brandServ, fb) {
        this.brandServ = brandServ;
        this.fb = fb;
        this.submitted = false;
        this.alertsDismiss = [];
        this.brands = [];
        this.p = 1;
        this.editBrand = {};
        this.config = {
            backdrop: 'static'
        };
        this.status = false;
    }
    ngOnInit() {
        this.getBrands(1);
        this.buildForm();
    }
    getBrands(page) {
        this.brandServ.getBrands(`skip=${page * 10 - 10}&limit=10`).subscribe((res) => {
            this.brands = res.data;
            this.totalBrands = res['total'];
        });
    }
    searchBrand(e) {
        this.brandServ.getBrands(`search=${this.searchTerm}&limit=10`).subscribe((res) => {
            this.brands = res['data'];
            this.totalBrands = res['total'];
            this.p = 1;
        });
    }
    deleteBrands(id) {
        swal({ text: "Do you want to delete this Brand", icon: 'warning', buttons: true, dangerMode: true, })
            .then((del) => {
            if (del) {
                this.brandServ.deleteBrand(id).subscribe((resp) => {
                    this.getBrands(this.p);
                    swal({ text: "Brand deleted successfully", icon: 'success' });
                });
            }
        });
    }
    handlePageChange(event) {
        this.p = event;
        this.getBrands(this.p);
    }
    buildForm() {
        this.addBrandForm = this.fb.group({
            brand: [""],
            desc: [""],
            other: [""],
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
    isValid(valObj) {
        var check = false;
        if (valObj.brand && valObj.desc) {
            check = true;
        }
        return check;
    }
    get f() {
        console.log("this.addBrandForm.value.status: ", this.addBrandForm.value.status);
        return Object.assign(Object.assign({}, this.addBrandForm.value), { status: this.status });
    }
    submit() {
        if (this.isValid(this.f)) {
            this.submitted = true;
            this.brandServ.postBrand(this.f).subscribe((resp) => {
                if (resp) {
                    this.getBrands(1);
                    this.addBrandForm.reset();
                    this.alertNot("success", "Success");
                    swal({ text: "Brand Added successfully", icon: 'success' });
                    this.myModal.hide();
                }
            });
        }
        else {
            swal({ text: "Please enter all the details", icon: 'info' });
        }
        console.log(this.f);
    }
    reSet() {
        this.addBrandForm.reset();
    }
    openUpdate(brand) {
        this.updateModal.show();
        this.editBrand = brand;
    }
    submitUpdate() {
        console.log(this.editBrand);
        this.brandServ.updateBrand(this.editBrand['_id'], this.editBrand).subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
            if (res) {
                this.getBrands(this.p);
                this.updateModal.hide();
                swal({
                    title: `${this.editBrand['brand']}`,
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
BrandComponent.ctorParameters = () => [
    { type: _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
BrandComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal",] }],
    updateModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["updateModal",] }]
};
BrandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-brand",
        template: _raw_loader_brand_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brand_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], BrandComponent);



/***/ }),

/***/ "s6uv":
/*!**************************************************!*\
  !*** ./src/app/views/brand/brand.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=views-brand-brand-module-es2015.js.map