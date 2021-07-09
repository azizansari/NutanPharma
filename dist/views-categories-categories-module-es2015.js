(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-categories-categories-module"],{

/***/ "19Qk":
/*!**********************************************************!*\
  !*** ./src/app/views/categories/categories.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories.component.html */ "8Hwp");
/* harmony import */ var _categories_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component.scss */ "ZXtq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/categories.service */ "ycII");







let CategoriesComponent = class CategoriesComponent {
    constructor(catgServ, fb) {
        this.catgServ = catgServ;
        this.fb = fb;
        this.categories = [];
        this.alertsDismiss = [];
        this.p = 1;
        this.submitted = false;
        this.isSuccess = false;
        this.editCategory = {};
        this.config = {
            backdrop: 'static'
        };
        this.status = false;
    }
    ngOnInit() {
        this.getCategories(1);
        this.buildForm();
    }
    handlePageChange(event) {
        this.p = event;
        this.getCategories(this.p);
    }
    getCategories(page) {
        this.catgServ.getCategories(`skip=${page * 10 - 10}&limit=10`).subscribe((res) => {
            console.log('catg...', res);
            this.categories = res.data;
            this.totalCatg = res['total'];
        });
    }
    searchCatg(e) {
        this.catgServ.getCategories(`search=${this.searchTerm}&limit=10`).subscribe((res) => {
            this.categories = res['data'];
            this.totalCatg = res['total'];
            this.p = 1;
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
        if (valObj.category && valObj.desc) {
            check = true;
        }
        return check;
    }
    get f() {
        console.log("this.addBrandForm.value.status: ", this.addCategoryForm.value.status);
        return Object.assign(Object.assign({}, this.addCategoryForm.value), { status: this.status });
    }
    buildForm() {
        this.addCategoryForm = this.fb.group({
            category: [""],
            desc: [""],
            other: [""],
        });
    }
    submit() {
        if (this.isValid(this.f)) {
            this.submitted = true;
            this.catgServ.postCategory(this.f).subscribe((resp) => {
                if (resp) {
                    this.addCategoryForm.reset();
                    this.getCategories(1);
                    this.myModal.hide();
                    swal({ text: "Brand Added successfully", icon: 'success' });
                }
                console.log("category>>>", resp);
            });
        }
        else {
            swal({ text: "Please enter all the details", icon: 'info' });
        }
        console.log(this.f);
    }
    deletCategory(id) {
        swal({ text: "Do you want to delete this Category", icon: 'warning', buttons: true, dangerMode: true, })
            .then((del) => {
            if (del) {
                this.catgServ.deleteCategory(id).subscribe((resp) => {
                    this.getCategories(this.p);
                    swal({ text: "Category deleted successfully", icon: 'success' });
                });
            }
        });
    }
    reSet() {
        this.addCategoryForm.reset();
    }
    openUpdate(category) {
        this.updateModal.show();
        this.editCategory = category;
    }
    submitUpdate() {
        console.log(">>>>", this.editCategory);
        this.catgServ.updateCategory(this.editCategory['_id'], this.editCategory).subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
            if (res) {
                this.getCategories(this.p);
                this.updateModal.hide();
                swal({
                    title: `${this.editCategory['category']}`,
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
CategoriesComponent.ctorParameters = () => [
    { type: _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CategoriesComponent.propDecorators = {
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["myModal",] }],
    updateModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["updateModal",] }]
};
CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], CategoriesComponent);



/***/ }),

/***/ "8Hwp":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\n    ><strong>{{alert?.message}}</strong></alert\n  >\n</div>\n<div\n  bsModal\n  #myModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Add New category</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"myModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div\n        class=\"modal-body\"\n        id=\"medicineAddForm\"\n        [formGroup]=\"addCategoryForm\"\n      >\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"desc\">Description</label>\n              <input\n                class=\"form-control\"\n                id=\"desc\"\n                type=\"text\"\n                name=\"desc\"\n                placeholder=\"desc\"\n                formControlName=\"desc\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                placeholder=\"Select Status\"\n                (change)=\"onChang($event)\"\n              >\n                <option value=\"0\">Select Status</option>\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Category</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company\"\n                placeholder=\"category\"\n                formControlName=\"category\"\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"company\">Other</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"other\"\n                formControlName=\"other\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          form:submit\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Add\n        </button>\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"myModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n\n<div\n  bsModal\n  #updateModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"updateModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Update {{editCategory.category}}</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"updateModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div\n        class=\"modal-body\"\n        id=\"medicineAddForm\"\n      >\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"desc\">Description</label>\n              <input\n                class=\"form-control\"\n                id=\"desc1\"\n                type=\"text\"\n                name=\"desc\"\n                placeholder=\"desc\"\n                [(ngModel)] = \"editCategory.desc\"\n                required\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company1\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                placeholder=\"Select Status\"\n                (change)=\"onChang($event)\"\n                [(ngModel)] = \"editCategory.status\"\n\n              >\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Category</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company1\"\n                placeholder=\"category\"\n                [(ngModel)] = \"editCategory.category\"\n\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"company1\">Other</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"other1\"\n                [(ngModel)] = \"editCategory.other\"\n\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submitUpdate()\"\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Update\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"updateModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div class=\"card\" style=\"margin-top: 30px;\">\n  <div class=\"card-header\">\n    <h6>Available Categories</h6>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\n      <div class=\"input-group col-md-3\">\n        <input\n          type=\"text\"\n          id=\"input1-group2\"\n          name=\"input1-group2\"\n          class=\"form-control\"\n          placeholder=\"Search Categories\"\n          [(ngModel)]=\"searchTerm\"\n          (ngModelChange)=\"searchCatg($event)\"\n        />\n        <span class=\"input-group-append\">\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\n            <i class=\"fa fa-search\"></i> Search\n          </button>\n        </span>\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\n        data-toggle=\"modal\"\n        (click)=\"myModal.show()\"\n      >\n        Add New Category\n      </button>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>S. No.</th>\n          <th>Category</th>\n          <th>Description</th>\n          <th>status</th>\n          <th>update</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"let category of categories | paginate\n        : {\n            itemsPerPage: 10,\n            currentPage: p,\n            totalItems: totalCatg\n          }; let i = index;\"\n        >\n          <td>{{ i + 1 }}</td>\n          <td>{{ category?.category }}</td>\n          <td>{{ category?.desc }}</td>\n          <td>\n            <span\n              class=\"badge\"\n              [class.badge-success]=\"category?.status\"\n              [class.badge-danger]=\"!category?.status\"\n              >{{ category?.status ? \"Available\" : \"NotAvailable\" }}</span\n            >\n          </td>\n          <td>\n            <div class=\"update row\">\n              <button class=\"btn btn-sm btn-secondary btn-pill\" (click) =\"openUpdate(category)\">Edit</button>\n              <button\n                class=\"btn btn-sm btn-danger btn-pill\"\n                (click)=\"deletCategory(category._id)\"\n              >\n                <span class=\"cil-trash\"></span>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <pagination-controls\n      (pageChange)=\"handlePageChange($event)\"\n    ></pagination-controls>\n  </div>\n</div>\n");

/***/ }),

/***/ "X7qy":
/*!*******************************************************!*\
  !*** ./src/app/views/categories/categories.module.ts ***!
  \*******************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ "19Qk");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "rltd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/alert */ "CNMR");











let CategoriesModule = class CategoriesModule {
};
CategoriesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot()
        ],
        declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]]
    })
], CategoriesModule);



/***/ }),

/***/ "ZXtq":
/*!************************************************************!*\
  !*** ./src/app/views/categories/categories.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "rltd":
/*!***************************************************************!*\
  !*** ./src/app/views/categories/categories-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories.component */ "19Qk");




const routes = [
    {
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
        data: {
            title: 'Category'
        }
    }
];
let CategoriesRoutingModule = class CategoriesRoutingModule {
};
CategoriesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CategoriesRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-categories-categories-module-es2015.js.map