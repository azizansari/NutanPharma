(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-brand-brand-module"], {
    /***/
    "9OJM":
    /*!*********************************************!*\
      !*** ./src/app/views/brand/brand.module.ts ***!
      \*********************************************/

    /*! exports provided: BrandModule */

    /***/
    function OJM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandModule", function () {
        return BrandModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _brand_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand.component */
      "bH47");
      /* harmony import */


      var _brand_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brand-routing.module */
      "FJfU");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-search-filter */
      "KeVr");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-pagination */
      "xkgV");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "CNMR");

      var BrandModule = function BrandModule() {
        _classCallCheck(this, BrandModule);
      };

      BrandModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_brand_routing_module__WEBPACK_IMPORTED_MODULE_3__["BrandRoutingModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_10__["AlertModule"].forRoot()],
        declarations: [_brand_component__WEBPACK_IMPORTED_MODULE_2__["BrandComponent"]]
      })], BrandModule);
      /***/
    },

    /***/
    "FJfU":
    /*!*****************************************************!*\
      !*** ./src/app/views/brand/brand-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: BrandRoutingModule */

    /***/
    function FJfU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandRoutingModule", function () {
        return BrandRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _brand_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./brand.component */
      "bH47");

      var routes = [{
        path: '',
        component: _brand_component__WEBPACK_IMPORTED_MODULE_3__["BrandComponent"],
        data: {
          title: 'Brand'
        }
      }];

      var BrandRoutingModule = function BrandRoutingModule() {
        _classCallCheck(this, BrandRoutingModule);
      };

      BrandRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], BrandRoutingModule);
      /***/
    },

    /***/
    "IBSX":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/brand/brand.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function IBSX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\r\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\r\n    ><strong>{{alert?.message}}</strong></alert\r\n  >\r\n</div>\r\n<div\r\n  bsModal\r\n  #myModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header card-header\">\r\n        <h4 class=\"modal-title\">Add New Brand</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"myModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" id=\"medicineAddForm\" [formGroup]=\"addBrandForm\">\r\n        <div class=\"form-group row\" style=\"margin: 20px\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"date-input\">Description</label>\r\n              <input\r\n                class=\"form-control\"\r\n                id=\"date-input\"\r\n                type=\"text\"\r\n                name=\"date-input\"\r\n                placeholder=\"desc\"\r\n                formControlName=\"desc\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Status</label>\r\n              <select\r\n                id=\"select1\"\r\n                name=\"select1\"\r\n                class=\"form-control\"\r\n                placeholder=\"Select Status\"\r\n                (change)=\"onChang($event)\"\r\n              >\r\n                <option value=\"0\">Select Status</option>\r\n                <option [value]=\"true\">Available</option>\r\n                <option [value]=\"false\">Not Available</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Brand</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"company\"\r\n                placeholder=\"brand\"\r\n                formControlName=\"brand\"\r\n              />\r\n            </div>\r\n\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Other</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"MRP\"\r\n                formControlName=\"other\"\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-primary col-md-3\"\r\n          (click)=\"submit()\"\r\n          type=\"submit\"\r\n          form:submit\r\n        >\r\n          <i class=\"fa fa-dot-circle-o\"></i> Add\r\n        </button>\r\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\r\n          <i class=\"fa fa-ban\"></i> Reset\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary col-md-3\"\r\n          (click)=\"myModal.hide()\"\r\n        >\r\n          Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n<div class=\"card\" style=\"margin-top: 30px\">\r\n  <div class=\"card-header\">\r\n    <h6>Available Brands</h6>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\r\n      <div class=\"input-group col-md-3\">\r\n        <input\r\n          type=\"text\"\r\n          id=\"input1-group2\"\r\n          name=\"input1-group2\"\r\n          class=\"form-control\"\r\n          placeholder=\"Search Brands\"\r\n          [(ngModel)]=\"term\"\r\n        />\r\n        <span class=\"input-group-append\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\r\n            <i class=\"fa fa-search\"></i> Search\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\r\n        data-toggle=\"modal\"\r\n        (click)=\"myModal.show()\"\r\n      >\r\n        Add New Brand\r\n      </button>\r\n    </div>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S. No.</th>\r\n          <th>Brand Name</th>\r\n          <th>Description</th>\r\n          <th>status</th>\r\n          <th>update</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"\r\n            let brand of brands\r\n              | filter: term\r\n              | paginate\r\n                : {\r\n                    itemsPerPage: 10,\r\n                    currentPage: p,\r\n                    totalItems: brands.length\r\n                  };\r\n            let i = index\r\n          \"\r\n        >\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ brand?.brand }}</td>\r\n          <td>{{ brand?.desc }}</td>\r\n          <td>\r\n            <span\r\n              class=\"badge\"\r\n              [class.badge-success]=\"brand?.status\"\r\n              [class.badge-danger]=\"!brand?.status\"\r\n              >{{ brand?.status ? \"Available\" : \"NotAvailable\" }}</span\r\n            >\r\n          </td>\r\n          <td>\r\n            <div class=\"update row\">\r\n              <button class=\"btn btn-sm btn-secondary btn-pill\">Edit</button>\r\n              <button\r\n                class=\"btn btn-sm btn-danger btn-pill\"\r\n                (click)=\"deleteBrands(brand._id)\"\r\n              >\r\n                <span class=\"cil-trash\"></span>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <pagination-controls\r\n      (pageChange)=\"handlePageChange($event)\"\r\n    ></pagination-controls>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "bH47":
    /*!************************************************!*\
      !*** ./src/app/views/brand/brand.component.ts ***!
      \************************************************/

    /*! exports provided: BrandComponent */

    /***/
    function bH47(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandComponent", function () {
        return BrandComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_brand_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./brand.component.html */
      "IBSX");
      /* harmony import */


      var _brand_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./brand.component.scss */
      "s6uv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var _services_brand_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/brand.service */
      "S4pr");

      var BrandComponent = /*#__PURE__*/function () {
        function BrandComponent(brandServ, fb) {
          _classCallCheck(this, BrandComponent);

          this.brandServ = brandServ;
          this.fb = fb;
          this.submitted = false;
          this.alertsDismiss = [];
          this.brands = [];
          this.p = 1;
          this.status = false;
        }

        _createClass(BrandComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBrands();
            this.buildForm();
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            var _this = this;

            this.brandServ.getBrands().subscribe(function (res) {
              _this.brands = res.data;
            });
          }
        }, {
          key: "deleteBrands",
          value: function deleteBrands(id) {
            var _this2 = this;

            this.brandServ.deleteBrand(id).subscribe(function (resp) {
              _this2.getBrands();
            });
          }
        }, {
          key: "handlePageChange",
          value: function handlePageChange(event) {
            this.p = event;
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.addBrandForm = this.fb.group({
              brand: [""],
              desc: [""],
              other: [""]
            });
          }
        }, {
          key: "onChang",
          value: function onChang(e) {
            if (e.target.value == "true") {
              this.status = true;
            } else {
              this.status = false;
            }
          }
        }, {
          key: "isValid",
          value: function isValid(valObj) {
            var check = false;

            if (valObj.brand && valObj.desc) {
              check = true;
            }

            return check;
          }
        }, {
          key: "f",
          get: function get() {
            console.log("this.addBrandForm.value.status: ", this.addBrandForm.value.status);
            return Object.assign(Object.assign({}, this.addBrandForm.value), {
              status: this.status
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this3 = this;

            if (this.isValid(this.f)) {
              this.submitted = true;
              this.brandServ.postBrand(this.f).subscribe(function (resp) {
                if (resp) {
                  _this3.getBrands();

                  _this3.addBrandForm.reset();

                  _this3.alertNot("success", "Success");

                  _this3.myModal.hide();
                }
              });
            } else {
              this.alertNot("danger", "Please enter all the details");
            }

            console.log(this.f);
          }
        }, {
          key: "reSet",
          value: function reSet() {
            this.addBrandForm.reset();
          }
        }, {
          key: "alertNot",
          value: function alertNot(type, message) {
            this.alertsDismiss.push({
              type: type,
              message: "".concat(message),
              timeout: 5000
            });
          }
        }]);

        return BrandComponent;
      }();

      BrandComponent.ctorParameters = function () {
        return [{
          type: _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      BrandComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["myModal"]
        }]
      };
      BrandComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-brand",
        template: _raw_loader_brand_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_brand_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], BrandComponent);
      /***/
    },

    /***/
    "s6uv":
    /*!**************************************************!*\
      !*** ./src/app/views/brand/brand.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function s6uv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJicmFuZC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-brand-brand-module-es5.js.map