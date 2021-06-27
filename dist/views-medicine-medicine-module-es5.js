(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-medicine-medicine-module"], {
    /***/
    "7YCm":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/medicine/medicine.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function YCm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\r\n<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\r\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\r\n    ><strong>{{alert?.message}}</strong></alert\r\n  >\r\n</div>\r\n<div\r\n  bsModal\r\n  #myModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header card-header\">\r\n        <h4 class=\"modal-title\">Add New Medicine</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"myModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div\r\n        class=\"modal-body\"\r\n        id=\"medicineAddForm\"\r\n        [formGroup]=\"medicineAddForm\"\r\n      >\r\n        <div class=\"form-group row\" style=\"margin: 20px\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Status</label>\r\n              <select\r\n                id=\"select1\"\r\n                name=\"select1\"\r\n                class=\"form-control\"\r\n                placeholder=\"Select Status\"\r\n                (change)=\"onChang($event)\"\r\n              >\r\n                <option value=\"0\">Select Status</option>\r\n                <option [value]=\"true\">Available</option>\r\n                <option [value]=\"false\">Not Available</option>\r\n              </select>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Category</label>\r\n              <ng-select class=\"form-control custom\" formControlName=\"categories\" required>\r\n                <ng-option\r\n                  *ngFor=\"let category of categories\"\r\n                  [value]=\"category?.category\"\r\n                >\r\n                  {{ category?.category }}\r\n                </ng-option>\r\n              </ng-select>\r\n              <!-- <select\r\n                id=\"select1\"\r\n                name=\"select1\"\r\n                class=\"form-control\"\r\n                formControlName=\"categories\"\r\n                placeholder =\"Select Categories\"\r\n              >\r\n                <option [value]=\"category?.category\" *ngFor=\"let category of categories\">\r\n                  {{ category?.category }}\r\n                </option>\r\n              </select> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Packing</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"packing\"\r\n                formControlName=\"packing\"\r\n                required\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Expiry</label>\r\n              <input\r\n                type=\"date\"\r\n                class=\"form-control\"\r\n                id=\"expiry\"\r\n                formControlName=\"expiry\"\r\n                required\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Rate</label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                id=\"rate\"\r\n                placeholder=\"\"\r\n                formControlName=\"rate\"\r\n                required\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Product Name</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"company\"\r\n                placeholder=\"Product Name\"\r\n                formControlName=\"productName\"\r\n                required\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Brand</label>\r\n              <ng-select class=\"form-control custom\" formControlName=\"brand\" required>\r\n                <ng-option *ngFor=\"let brand of brands\" [value]=\"brand?.brand\">\r\n                  {{ brand?.brand }}\r\n                </ng-option>\r\n              </ng-select>\r\n              <!-- <select\r\n                id=\"select1\"\r\n                name=\"select1\"\r\n                class=\"form-control\"\r\n                formControlName=\"brand\"\r\n              >\r\n                <option value=\"0\">Select Brands</option>\r\n                <option [value]=\"brand?.brand\" *ngFor=\"let brand of brands\">{{brand?.brand}}</option>\r\n    \r\n              </select> -->\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Batch No.</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"batch no\"\r\n                formControlName=\"batchNo\"\r\n                required\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">Quantity</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"quantity\"\r\n                formControlName=\"quantity\"\r\n                required\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"company\">MRP</label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                id=\"MRP\"\r\n                formControlName=\"mrp\"\r\n                required\r\n              />\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-primary col-md-3\"\r\n          (click)=\"submit()\"\r\n          type=\"submit\"\r\n          form:submit\r\n        >\r\n          <i class=\"fa fa-dot-circle-o\"></i> Add\r\n        </button>\r\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\r\n          <i class=\"fa fa-ban\"></i> Reset\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary col-md-3\"\r\n          (click)=\"myModal.hide()\"\r\n        >\r\n          Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n<div class=\"card\" style=\"margin-top: 30px;\">\r\n  <div class=\"card-header\">\r\n    <h6>Available Medicines</h6>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\r\n      <div class=\"input-group col-md-3\">\r\n        <input\r\n          type=\"text\"\r\n          id=\"input1-group2\"\r\n          name=\"input1-group2\"\r\n          class=\"form-control\"\r\n          placeholder=\"Search Medicines\"\r\n          [(ngModel)]=\"term\"\r\n        />\r\n        <span class=\"input-group-append\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\r\n            <i class=\"fa fa-search\"></i> Search\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary btn-pill mr-1\"\r\n          data-toggle=\"modal\"\r\n          (click)=\"myModal.show()\"\r\n        >\r\n          Add New Medicine\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>Product Name</th>\r\n          <th>Packing</th>\r\n          <th>Batch No.</th>\r\n          <th>Expiry</th>\r\n          <th>Quantity</th>\r\n          <th>Brand</th>\r\n          <th>Category</th>\r\n          <th>MRP</th>\r\n          <th>Rate</th>\r\n          <th>status</th>\r\n          <th>update</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"let medicine of medicines | filter:term | paginate\r\n        : {\r\n            itemsPerPage: 10,\r\n            currentPage: p,\r\n            totalItems: medicines.length\r\n          }\"\r\n        >\r\n          <td>{{ medicine?.productName }}</td>\r\n          <td>{{ medicine?.packing }}</td>\r\n          <td>{{ medicine?.batchNo }}</td>\r\n          <td>{{ medicine?.expiry | amDateFormat: \"DD/MM/YYYY\" }}</td>\r\n          <td>{{ medicine?.quantity }}</td>\r\n          <td>{{ medicine?.brand }}</td>\r\n          <td>{{ medicine?.categories }}</td>\r\n          <td>{{ medicine?.mrp }}</td>\r\n          <td>{{ medicine?.rate }}</td>\r\n          <td>\r\n            <span\r\n              class=\"badge\"\r\n              [class.badge-success]=\"medicine?.status\"\r\n              [class.badge-danger]=\"!medicine?.status\"\r\n              >{{ medicine?.status ? \"Avail\" : \"NotAvail\" }}</span\r\n            >\r\n          </td>\r\n          <td>\r\n            <div class=\"update row\">\r\n              <button class=\"btn btn-sm btn-secondary btn-pill\">Edit</button>\r\n              <button class=\"btn btn-sm btn-danger btn-pill\">\r\n                <span\r\n                  class=\"cil-trash\"\r\n                  (click)=\"deleteMed(medicine._id)\"\r\n                ></span>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <pagination-controls\r\n      (pageChange)=\"handlePageChange($event)\"\r\n    ></pagination-controls>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "7vMa":
    /*!***********************************************************!*\
      !*** ./src/app/views/medicine/medicine-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: MedicineRoutingModule */

    /***/
    function vMa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicineRoutingModule", function () {
        return MedicineRoutingModule;
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


      var _medicine_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicine.component */
      "yDBF");

      var routes = [{
        path: '',
        component: _medicine_component__WEBPACK_IMPORTED_MODULE_3__["MedicineComponent"],
        data: {
          title: 'Medicine'
        }
      }];

      var MedicineRoutingModule = function MedicineRoutingModule() {
        _classCallCheck(this, MedicineRoutingModule);
      };

      MedicineRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MedicineRoutingModule);
      /***/
    },

    /***/
    "P8Yz":
    /*!***************************************************!*\
      !*** ./src/app/views/medicine/medicine.module.ts ***!
      \***************************************************/

    /*! exports provided: MedicineModule */

    /***/
    function P8Yz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicineModule", function () {
        return MedicineModule;
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


      var _medicine_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medicine.component */
      "yDBF");
      /* harmony import */


      var _medicine_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./medicine-routing.module */
      "7vMa");
      /* harmony import */


      var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-bootstrap/collapse */
      "St1U");
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


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "LqlI");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! angular2-moment */
      "YcbE");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ng2-search-filter */
      "KeVr");
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-select/ng-select */
      "wTG2");
      /* harmony import */


      var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-pagination */
      "xkgV");
      /* harmony import */


      var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-bootstrap/alert */
      "CNMR");

      var MedicineModule = function MedicineModule() {
        _classCallCheck(this, MedicineModule);
      };

      MedicineModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_medicine_routing_module__WEBPACK_IMPORTED_MODULE_3__["MedicineRoutingModule"], ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_4__["CollapseModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_8__["ModalModule"].forRoot(), angular2_moment__WEBPACK_IMPORTED_MODULE_9__["MomentModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__["NgSelectModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"], ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_13__["AlertModule"].forRoot()],
        declarations: [_medicine_component__WEBPACK_IMPORTED_MODULE_2__["MedicineComponent"]]
      })], MedicineModule);
      /***/
    },

    /***/
    "nZeC":
    /*!********************************************************!*\
      !*** ./src/app/views/medicine/medicine.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function nZeC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".ng-select.custom ::ng-deep .ng-dropdown-panel {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  margin-top: 8px;\n  margin-left: -12px;\n  background: white;\n  border: 1px solid #e4e7ea;\n  border-radius: 4px;\n  border-top: none;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option:hover {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  background: #f0f3f5;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  cursor: pointer;\n  padding-left: 15px;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtZWRpY2luZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoibWVkaWNpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5nLXNlbGVjdC5jdXN0b20gOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCAge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMnB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcclxuXHJcbn1cclxuXHJcbi5uZy1zZWxlY3QuY3VzdG9tIDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb246aG92ZXIge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2YwZjNmNTtcclxufVxyXG4ubmctc2VsZWN0LmN1c3RvbSA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsIC5uZy1kcm9wZG93bi1wYW5lbC1pdGVtcyAubmctb3B0aW9uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxufSJdfQ== */";
      /***/
    },

    /***/
    "yDBF":
    /*!******************************************************!*\
      !*** ./src/app/views/medicine/medicine.component.ts ***!
      \******************************************************/

    /*! exports provided: MedicineComponent */

    /***/
    function yDBF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MedicineComponent", function () {
        return MedicineComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_medicine_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./medicine.component.html */
      "7YCm");
      /* harmony import */


      var _medicine_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./medicine.component.scss */
      "nZeC");
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
      /* harmony import */


      var _services_categories_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../services/categories.service */
      "ycII");
      /* harmony import */


      var _services_medicine_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../services/medicine.service */
      "gHm9");

      var MedicineComponent = /*#__PURE__*/function () {
        function MedicineComponent(medServ, fb, catgServ, brandServ) {
          _classCallCheck(this, MedicineComponent);

          this.medServ = medServ;
          this.fb = fb;
          this.catgServ = catgServ;
          this.brandServ = brandServ;
          this.medicines = [];
          this.categories = [];
          this.brands = [];
          this.alertsDismiss = [];
          this.p = 1;
          this.status = false;
          this.submitted = false;
        }

        _createClass(MedicineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getMedicines();
            this.buildForm();
            this.getCategories();
            this.getBrands();
          }
        }, {
          key: "handlePageChange",
          value: function handlePageChange(event) {
            this.p = event;
          }
        }, {
          key: "getMedicines",
          value: function getMedicines() {
            var _this = this;

            this.medServ.getMedicines().subscribe(function (res) {
              console.log("res: >>>>>>>>>>>>", res);
              _this.medicines = res.data;
              console.log(_this.medicines);
            });
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this2 = this;

            this.catgServ.getCategories().subscribe(function (res) {
              _this2.categories = res.data;
            });
          }
        }, {
          key: "getBrands",
          value: function getBrands() {
            var _this3 = this;

            this.brandServ.getBrands().subscribe(function (res) {
              _this3.brands = res.data;
            });
          }
        }, {
          key: "deleteMed",
          value: function deleteMed(id) {
            var _this4 = this;

            this.medServ.deleteMedicine(id).subscribe(function (resp) {
              _this4.getMedicines();
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
          key: "buildForm",
          value: function buildForm() {
            this.medicineAddForm = this.fb.group({
              brand: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              packing: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              expiry: [""],
              rate: [""],
              productName: [""],
              categories: [""],
              batchNo: [""],
              quantity: [""],
              mrp: [""]
            });
          }
        }, {
          key: "isValid",
          value: function isValid(valObj) {
            var check = false;

            if (valObj.brand && valObj.categories && valObj.productName && valObj.expiry && valObj.mrp && valObj.quantity && valObj.rate && valObj.batchNo && valObj.packing) {
              check = true;
            }

            return check;
          }
        }, {
          key: "f",
          get: function get() {
            return Object.assign(Object.assign({}, this.medicineAddForm.value), {
              status: this.status
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this5 = this;

            console.log(this.isValid(this.f));

            if (this.isValid(this.f)) {
              this.submitted = true;
              this.medServ.postMedicine(this.f).subscribe(function (resp) {
                if (resp) {
                  _this5.getMedicines();

                  _this5.medicineAddForm.reset();

                  _this5.myModal.hide();

                  _this5.alertNot("success", "Success");
                }
              });
              console.log(this.f);
            } else {
              this.alertNot("danger", "Please enter all the details");
            }
          }
        }, {
          key: "reSet",
          value: function reSet() {
            this.medicineAddForm.reset();
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

        return MedicineComponent;
      }();

      MedicineComponent.ctorParameters = function () {
        return [{
          type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_8__["MedicineService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }, {
          type: _services_categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"]
        }, {
          type: _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"]
        }];
      };

      MedicineComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["myModal"]
        }]
      };
      MedicineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-medicine",
        template: _raw_loader_medicine_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_medicine_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_medicine_service__WEBPACK_IMPORTED_MODULE_8__["MedicineService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_categories_service__WEBPACK_IMPORTED_MODULE_7__["CategoriesService"], _services_brand_service__WEBPACK_IMPORTED_MODULE_6__["BrandService"]])], MedicineComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-medicine-medicine-module-es5.js.map