(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\Muskan Ansari\Desktop\f-project\testapp\inventoryNutanPharma\Np\nutanPharmaBack\frontend\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "4XPS":
    /*!******************************************************!*\
      !*** ./src/app/views/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function XPS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bVw4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var RegisterComponent = function RegisterComponent() {
        _classCallCheck(this, RegisterComponent);
      };

      RegisterComponent.ctorParameters = function () {
        return [];
      };

      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], RegisterComponent);
      /***/
    },

    /***/
    "8gg5":
    /*!**********************************************!*\
      !*** ./src/app/views/error/404.component.ts ***!
      \**********************************************/

    /*! exports provided: P404Component */

    /***/
    function gg5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P404Component", function () {
        return P404Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./404.component.html */
      "nAJl");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P404Component = function P404Component() {
        _classCallCheck(this, P404Component);
      };

      P404Component.ctorParameters = function () {
        return [];
      };

      P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P404Component);
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // The file contents for the current environment will overwrite these during build.
      // The build system defaults to the dev environment which uses `environment.ts`, but if you do
      // `ng build --env=prod` then `environment.prod.ts` will be used instead.
      // The list of which env maps to which file can be found in `.angular-cli.json`.


      var environment = {
        production: false,
        apiUrl: "http://localhost:3001/"
      };
      /***/
    },

    /***/
    "DodC":
    /*!****************************************************!*\
      !*** ./src/app/containers/default-layout/index.ts ***!
      \****************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function DodC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout.component */
      "JPqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "G/4p":
    /*!*************************************!*\
      !*** ./src/app/containers/index.ts ***!
      \*************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function G4p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./default-layout */
      "DodC");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"];
      });
      /***/

    },

    /***/
    "JPqG":
    /*!***********************************************************************!*\
      !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
      \***********************************************************************/

    /*! exports provided: DefaultLayoutComponent */

    /***/
    function JPqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function () {
        return DefaultLayoutComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./default-layout.component.html */
      "lm8q");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../_nav */
      "c2Qq");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var DefaultLayoutComponent = /*#__PURE__*/function () {
        function DefaultLayoutComponent(router) {
          _classCallCheck(this, DefaultLayoutComponent);

          this.router = router;
          this.sidebarMinimized = false;
          this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
          setTimeout(function () {
            document.getElementsByClassName("navbar-brand-full")[0].remove();
            document.getElementsByClassName("d-md-block d-none navbar-toggler")[0].remove();
          }, 500);
        }

        _createClass(DefaultLayoutComponent, [{
          key: "toggleMinimize",
          value: function toggleMinimize(e) {
            this.sidebarMinimized = e;
          }
        }, {
          key: "logOut",
          value: function logOut() {
            this.router.navigate([""]);
          }
        }]);

        return DefaultLayoutComponent;
      }();

      DefaultLayoutComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], DefaultLayoutComponent);
      /***/
    },

    /***/
    "Lrxh":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function Lrxh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\r\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\r\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "MWds":
    /*!*****************************************************!*\
      !*** ./src/app/views/orders/bill/bill.component.ts ***!
      \*****************************************************/

    /*! exports provided: BillComponent */

    /***/
    function MWds(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillComponent", function () {
        return BillComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bill_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bill.component.html */
      "gCzM");
      /* harmony import */


      var _bill_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bill.component.scss */
      "PWp1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _services_bills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../services/bills.service */
      "vmt5");

      var BillComponent = /*#__PURE__*/function () {
        function BillComponent(route, billServ, router) {
          var _this = this;

          _classCallCheck(this, BillComponent);

          this.route = route;
          this.billServ = billServ;
          this.router = router;
          this.invoiceId = null;
          this.items = [];
          this.route.params.subscribe(function (_ref) {
            var id = _ref.id;
            _this.invoiceId = id;
            console.log("      this.invoiceId: ", _this.invoiceId);
          });
        }

        _createClass(BillComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBills();
          }
        }, {
          key: "paymentDate",
          get: function get() {
            try {
              console.log('this.bill.invoiceId: ', this.bill.invoiceId);
              return new Date(this.bill.invoiceId);
            } catch (error) {
              return null;
            }
          }
        }, {
          key: "getBills",
          value: function getBills() {
            var _this2 = this;

            this.billServ.getOrders(this.invoiceId).subscribe(function (resp) {
              _this2.bill = resp.data;
              _this2.items = _this2.bill.orderedItem;
            });
          }
        }, {
          key: "printBill",
          value: function printBill() {
            window.print();
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(["/orders"]);
          }
        }]);

        return BillComponent;
      }();

      BillComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _services_bills_service__WEBPACK_IMPORTED_MODULE_5__["BillService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      BillComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_bill_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bill_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_bills_service__WEBPACK_IMPORTED_MODULE_5__["BillService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], BillComponent);
      /***/
    },

    /***/
    "PWp1":
    /*!*******************************************************!*\
      !*** ./src/app/views/orders/bill/bill.component.scss ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function PWp1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".receipt-content .logo a:hover {\n  text-decoration: none;\n  color: #7793c4;\n}\n\n.receipt-content .invoice-wrapper {\n  background: #fff;\n  border: 1px solid #c8ced3;\n  box-shadow: 0px 0px 1px #ccc;\n  padding: 0px 10px 20px;\n  margin-top: 25px;\n  border-radius: 4px;\n}\n\n.receipt-content .invoice-wrapper .payment-details span {\n  color: #a9b0bb;\n  display: block;\n}\n\n.receipt-content .invoice-wrapper .payment-details a {\n  display: inline-block;\n  margin-top: 5px;\n}\n\n.receipt-content .invoice-wrapper .line-items .print a {\n  display: inline-block;\n  border: 1px solid #c8ced3;\n  padding: 13px 13px;\n  border-radius: 5px;\n  color: #708dc0;\n  font-size: 13px;\n  transition: all 0.2s linear;\n}\n\n.receipt-content .invoice-wrapper .line-items .print a:hover {\n  text-decoration: none;\n  border-color: #c8ced3;\n  color: #333;\n}\n\n.receipt-content {\n  background: #eceef4;\n}\n\n@media (min-width: 1200px) {\n  .receipt-content .container {\n    width: 900px;\n  }\n}\n\n.receipt-content .logo {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.receipt-content .logo a {\n  font-family: Myriad Pro, Lato, Helvetica Neue, Arial;\n  font-size: 36px;\n  letter-spacing: 0.1px;\n  color: #555;\n  font-weight: 300;\n  transition: all 0.2s linear;\n}\n\n.receipt-content .invoice-wrapper .intro {\n  line-height: 25px;\n  color: #444;\n}\n\n.receipt-content .invoice-wrapper .payment-info {\n  margin-top: 25px;\n  padding-top: 15px;\n}\n\n.receipt-content .invoice-wrapper .payment-info span {\n  color: #a9b0bb;\n}\n\n.receipt-content .invoice-wrapper .payment-info strong {\n  display: block;\n  color: #444;\n  margin-top: 3px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .payment-info .text-right {\n    text-align: left;\n    margin-top: 20px;\n  }\n}\n\n.receipt-content .invoice-wrapper .payment-details {\n  margin-top: 15px;\n  padding-top: 20px;\n  line-height: 22px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .payment-details .text-right {\n    text-align: left;\n    margin-top: 20px;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items {\n  margin-top: 30px;\n}\n\n.receipt-content .invoice-wrapper .line-items .headers {\n  color: #a9b0bb;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  border-bottom: 2px solid #ebecee;\n  padding-bottom: 4px;\n}\n\n.receipt-content .invoice-wrapper .line-items .items {\n  margin-top: 8px;\n  border-bottom: 2px solid #ebecee;\n  padding-bottom: 8px;\n}\n\n.receipt-content .invoice-wrapper .line-items .items .item {\n  padding: 10px 0;\n  color: #696969;\n  font-size: 15px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .line-items .items .item {\n    font-size: 13px;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items .items .item .amount {\n  letter-spacing: 0.1px;\n  color: #84868a;\n  font-size: 16px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .line-items .items .item .amount {\n    font-size: 13px;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items .total {\n  margin-top: 30px;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .extra-notes {\n  float: left;\n  width: 40%;\n  text-align: left;\n  font-size: 13px;\n  color: #7a7a7a;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .line-items .total .extra-notes {\n    width: 100%;\n    margin-bottom: 30px;\n    float: none;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items .total .extra-notes strong {\n  display: block;\n  margin-bottom: 5px;\n  color: #454545;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field {\n  margin-bottom: 7px;\n  font-size: 14px;\n  color: #555;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field.grand-total {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field.grand-total span {\n  color: #20a720;\n  font-size: 16px;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field span {\n  display: inline-block;\n  margin-left: 20px;\n  min-width: 85px;\n  color: #84868a;\n  font-size: 15px;\n}\n\n.receipt-content .invoice-wrapper .line-items .print {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.receipt-content .invoice-wrapper .line-items .print a i {\n  margin-right: 3px;\n  font-size: 14px;\n}\n\n.receipt-content .footer {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 12px;\n  color: #969cad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYmlsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUNBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBRUY7O0FBQ0E7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxZQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLG9EQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBS0EsMkJBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUVGOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtBQUVGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBRUY7O0FBQ0E7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUFFRjtBQUNGOztBQUFBO0VBQ0UsZ0JBQUE7QUFFRjs7QUFBQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQUlGOztBQUZBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBSEE7RUFDRTtJQUNFLGVBQUE7RUFNRjtBQUNGOztBQUpBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0U7SUFDRSxlQUFBO0VBT0Y7QUFDRjs7QUFKQTtFQUNFLGdCQUFBO0FBTUY7O0FBSEE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQU1GOztBQUhBO0VBQ0U7SUFDRSxXQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0VBTUY7QUFDRjs7QUFIQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFLRjs7QUFGQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQUtGOztBQUZBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtBQUtGOztBQUZBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUtGIiwiZmlsZSI6ImJpbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjZWlwdC1jb250ZW50IC5sb2dvIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogIzc3OTNjNDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjOGNlZDM7O1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMXB4ICNjY2M7XHJcbiAgcGFkZGluZzogMHB4IDEwcHggMjBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5wYXltZW50LWRldGFpbHMgc3BhbiB7XHJcbiAgY29sb3I6ICNhOWIwYmI7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5wYXltZW50LWRldGFpbHMgYSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5wcmludCBhIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2M4Y2VkMzs7XHJcbiAgcGFkZGluZzogMTNweCAxM3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBjb2xvcjogIzcwOGRjMDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG4ucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnByaW50IGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBib3JkZXItY29sb3I6ICNjOGNlZDM7O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG59XHJcblxyXG4ucmVjZWlwdC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kOiAjZWNlZWY0O1xyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAucmVjZWlwdC1jb250ZW50IC5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAubG9nbyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWNvbnRlbnQgLmxvZ28gYSB7XHJcbiAgZm9udC1mYW1pbHk6IE15cmlhZCBQcm8sIExhdG8sIEhlbHZldGljYSBOZXVlLCBBcmlhbDtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgLW1zLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xyXG59XHJcblxyXG4ucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmludHJvIHtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICBjb2xvcjogIzQ0NDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5wYXltZW50LWluZm8ge1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAucGF5bWVudC1pbmZvIHNwYW4ge1xyXG4gIGNvbG9yOiAjYTliMGJiO1xyXG59XHJcblxyXG4ucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLnBheW1lbnQtaW5mbyBzdHJvbmcge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiAjNDQ0O1xyXG4gIG1hcmdpbi10b3A6IDNweDtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5wYXltZW50LWluZm8gLnRleHQtcmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAucGF5bWVudC1kZXRhaWxzIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLnBheW1lbnQtZGV0YWlscyAudGV4dC1yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbn1cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaGVhZGVycyB7XHJcbiAgY29sb3I6ICNhOWIwYmI7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjNweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ViZWNlZTtcclxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG59XHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaXRlbXMge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ViZWNlZTtcclxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xyXG59XHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaXRlbXMgLml0ZW0ge1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxuICBjb2xvcjogIzY5Njk2OTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5pdGVtcyAuaXRlbSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG59XHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaXRlbXMgLml0ZW0gLmFtb3VudCB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gIGNvbG9yOiAjODQ4NjhhO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLml0ZW1zIC5pdGVtIC5hbW91bnQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCB7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZXh0cmEtbm90ZXMge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICM3YTdhN2E7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAudG90YWwgLmV4dHJhLW5vdGVzIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGZsb2F0OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZXh0cmEtbm90ZXMgc3Ryb25nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgY29sb3I6ICM0NTQ1NDU7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAudG90YWwgLmZpZWxkIHtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNTU1O1xyXG59XHJcblxyXG4ucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnRvdGFsIC5maWVsZC5ncmFuZC10b3RhbCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZmllbGQuZ3JhbmQtdG90YWwgc3BhbiB7XHJcbiAgY29sb3I6ICMyMGE3MjA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4ucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnRvdGFsIC5maWVsZCBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgbWluLXdpZHRoOiA4NXB4O1xyXG4gIGNvbG9yOiAjODQ4NjhhO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5wcmludCB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAucHJpbnQgYSBpIHtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5yZWNlaXB0LWNvbnRlbnQgLmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM5NjljYWQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "QB/w":
    /*!************************************************!*\
      !*** ./src/app/views/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function QBW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "nSew");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.isPassword = "123";
          this.isUsername = "test";
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](""),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("")
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log(this.loginForm.value);
          }
        }, {
          key: "isAuth",
          value: function isAuth() {
            if (this.loginForm.value.username === this.isUsername && this.loginForm.value.password === this.isPassword) {
              console.log("auth success");
              this.router.navigate(["dashboard"]);
            } else {
              console.log("auth failure");
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      };

      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])], LoginComponent);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
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


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @coreui/icons */
      "t17N");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, iconSet) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.iconSet = iconSet; // iconSet singleton

          iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.router.events.subscribe(function (evt) {
              if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
              }

              window.scrollTo(0, 0);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: "body",
        template: "<router-outlet></router-outlet>",
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])], AppComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "omvX");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @coreui/icons-angular */
      "rVqu");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS");
      /* harmony import */


      var _coreui_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @coreui/angular */
      "Iluq");
      /* harmony import */


      var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./app.routing */
      "beVS");
      /* harmony import */


      var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ngx-bootstrap/dropdown */
      "FE24");
      /* harmony import */


      var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ngx-bootstrap/tabs */
      "2ZVE");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ng2-charts */
      "hrfs");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./views/orders/bill/bill.component */
      "MWds");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! angular2-moment */
      "YcbE");
      /* harmony import */


      var angular2_moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_20__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");

      var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
        suppressScrollX: true
      }; // Import containers

      var APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutComponent"]]; // Import routing module
      // Import 3rd party components

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppAsideModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppBreadcrumbModule"].forRoot(), _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppFooterModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppHeaderModule"], _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppSidebarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"], ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(), ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(), ng2_charts__WEBPACK_IMPORTED_MODULE_17__["ChartsModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_20__["MomentModule"]],
        declarations: [_views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_19__["BillComponent"], _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]].concat(APP_CONTAINERS, [_views_error_404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"], _views_error_500_component__WEBPACK_IMPORTED_MODULE_10__["P500Component"], _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"], _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"]]),
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
          useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
        }, _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "bVw4":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function bVw4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 mx-auto\">\r\n          <div class=\"card mx-4\">\r\n            <div class=\"card-body p-4\">\r\n              <form>\r\n                <h1>Register</h1>\r\n                <p class=\"text-muted\">Create your account</p>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\r\n                </div>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\">@</span>\r\n                  </div>\r\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\r\n                </div>\r\n                <div class=\"input-group mb-3\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                  </div>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\r\n                </div>\r\n                <div class=\"input-group mb-4\">\r\n                  <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\r\n                  </div>\r\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\r\n                </div>\r\n                <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\r\n              </form>\r\n            </div>\r\n            <div class=\"card-footer p-4\">\r\n              <div class=\"row\">\r\n                <div class=\"col-6\">\r\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\r\n                </div>\r\n                <div class=\"col-6\">\r\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n";
      /***/
    },

    /***/
    "beVS":
    /*!********************************!*\
      !*** ./src/app/app.routing.ts ***!
      \********************************/

    /*! exports provided: routes, AppRoutingModule */

    /***/
    function beVS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
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


      var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./containers */
      "G/4p");
      /* harmony import */


      var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./views/error/404.component */
      "8gg5");
      /* harmony import */


      var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./views/error/500.component */
      "dxhq");
      /* harmony import */


      var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./views/login/login.component */
      "QB/w");
      /* harmony import */


      var _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./views/orders/bill/bill.component */
      "MWds");
      /* harmony import */


      var _views_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./views/register/register.component */
      "4XPS"); // Import Containers


      var routes = [{
        path: 'orders/:id',
        component: _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_7__["BillComponent"],
        data: {
          title: 'Orders'
        }
      }, {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }, {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
          title: 'Page 404'
        }
      }, {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
          title: 'Page 500'
        }
      }, {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
          title: 'Login Page'
        }
      }, {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        data: {
          title: 'Register Page'
        }
      }, {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
          title: 'Home'
        },
        children: [{
          path: 'reports',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-reports-reports-module */
            "views-reports-reports-module").then(__webpack_require__.bind(null,
            /*! ./views/reports/reports.module */
            "qUkX")).then(function (m) {
              return m.ReportsModule;
            });
          }
        }, {
          path: 'orders',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-orders-orders-module */
            [__webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~eefa8a60"), __webpack_require__.e("default~views-medicine-medicine-module~views-orders-orders-module"), __webpack_require__.e("views-orders-orders-module")]).then(__webpack_require__.bind(null,
            /*! ./views/orders/orders.module */
            "lpX+")).then(function (m) {
              return m.OrdersModule;
            });
          }
        }, {
          path: 'categories',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-categories-categories-module */
            [__webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~eefa8a60"), __webpack_require__.e("common"), __webpack_require__.e("views-categories-categories-module")]).then(__webpack_require__.bind(null,
            /*! ./views/categories/categories.module */
            "X7qy")).then(function (m) {
              return m.CategoriesModule;
            });
          }
        }, {
          path: 'brands',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-brand-brand-module */
            [__webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~eefa8a60"), __webpack_require__.e("common"), __webpack_require__.e("views-brand-brand-module")]).then(__webpack_require__.bind(null,
            /*! ./views/brand/brand.module */
            "9OJM")).then(function (m) {
              return m.BrandModule;
            });
          }
        }, {
          path: 'medicines',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-medicine-medicine-module */
            [__webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~eefa8a60"), __webpack_require__.e("default~views-medicine-medicine-module~views-orders-orders-module"), __webpack_require__.e("default~views-base-base-module~views-medicine-medicine-module"), __webpack_require__.e("common"), __webpack_require__.e("views-medicine-medicine-module")]).then(__webpack_require__.bind(null,
            /*! ./views/medicine/medicine.module */
            "P8Yz")).then(function (m) {
              return m.MedicineModule;
            });
          }
        }, {
          path: 'base',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-base-base-module */
            [__webpack_require__.e("default~views-base-base-module~views-medicine-medicine-module"), __webpack_require__.e("views-base-base-module")]).then(__webpack_require__.bind(null,
            /*! ./views/base/base.module */
            "Cvcy")).then(function (m) {
              return m.BaseModule;
            });
          }
        }, {
          path: 'buttons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-buttons-buttons-module */
            "views-buttons-buttons-module").then(__webpack_require__.bind(null,
            /*! ./views/buttons/buttons.module */
            "Reju")).then(function (m) {
              return m.ButtonsModule;
            });
          }
        }, {
          path: 'charts',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-chartjs-chartjs-module */
            "views-chartjs-chartjs-module").then(__webpack_require__.bind(null,
            /*! ./views/chartjs/chartjs.module */
            "Y+KY")).then(function (m) {
              return m.ChartJSModule;
            });
          }
        }, {
          path: 'dashboard',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-dashboard-dashboard-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null,
            /*! ./views/dashboard/dashboard.module */
            "6dU7")).then(function (m) {
              return m.DashboardModule;
            });
          }
        }, {
          path: 'icons',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | views-icons-icons-module */
            "views-icons-icons-module").then(__webpack_require__.bind(null,
            /*! ./views/icons/icons.module */
            "aPNi")).then(function (m) {
              return m.IconsModule;
            });
          }
        }, {
          path: 'notifications',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-notifications-notifications-module */
            [__webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("views-notifications-notifications-module")]).then(__webpack_require__.bind(null,
            /*! ./views/notifications/notifications.module */
            "KpDv")).then(function (m) {
              return m.NotificationsModule;
            });
          }
        }, {
          path: 'theme',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-theme-theme-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("views-theme-theme-module")]).then(__webpack_require__.bind(null,
            /*! ./views/theme/theme.module */
            "AgMk")).then(function (m) {
              return m.ThemeModule;
            });
          }
        }, {
          path: 'widgets',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | views-widgets-widgets-module */
            [__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-widgets-widgets-module")]).then(__webpack_require__.bind(null,
            /*! ./views/widgets/widgets.module */
            "XVX6")).then(function (m) {
              return m.WidgetsModule;
            });
          }
        }]
      }, {
        path: '**',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "c2Qq":
    /*!*************************!*\
      !*** ./src/app/_nav.ts ***!
      \*************************/

    /*! exports provided: navItems */

    /***/
    function c2Qq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "navItems", function () {
        return navItems;
      });

      var navItems = [{
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
          variant: 'info',
          text: 'NEW'
        }
      }, {
        title: true,
        name: 'Operation'
      }, {
        name: 'Medicine',
        url: '/medicines',
        icon: 'cil-medical-cross'
      }, {
        name: 'Category',
        url: '/categories',
        icon: 'cil-map'
      }, {
        name: 'Brand',
        url: '/brands',
        icon: 'cil-description'
      }, {
        name: 'Orders',
        url: '/orders',
        icon: 'cil-hand-point-up'
      }, {
        name: 'Reports',
        url: '/reports',
        icon: 'cil-library'
      }];
      /***/
    },

    /***/
    "dxhq":
    /*!**********************************************!*\
      !*** ./src/app/views/error/500.component.ts ***!
      \**********************************************/

    /*! exports provided: P500Component */

    /***/
    function dxhq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "P500Component", function () {
        return P500Component;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./500.component.html */
      "Lrxh");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var P500Component = function P500Component() {
        _classCallCheck(this, P500Component);
      };

      P500Component.ctorParameters = function () {
        return [];
      };

      P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], P500Component);
      /***/
    },

    /***/
    "gCzM":
    /*!*********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/orders/bill/bill.component.html ***!
      \*********************************************************************************************/

    /*! exports provided: default */

    /***/
    function gCzM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"receipt-content\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"container bootstrap snippets bootdey\">\r\n\r\n      <div class=\"col-md-12\">\r\n        <div class=\"invoice-wrapper\">\r\n          <div class=\"watermark\" style=\"display: flex;justify-content: center; position: absolute; z-index: 5; top: 20px; left: 400px;\">\r\n            <img src=\"assets/nutanPharmlogo.svg\" alt=\"\" style=\"width: 150px; height: 150px;\">\r\n          </div>\r\n          <div class=\"payment-details\">\r\n            <div class=\"row\">\r\n              <div class=\"col-sm-8\">\r\n                <h2>M/s Nutan Pharma</h2>\r\n                <p>\r\n                   In front of Shreenath HP petrol pump<br >\r\n                   Old Bhopal Road Ashta - 466116<br>\r\n                  Mob. No. 7869559992 <br >\r\n                  <br>\r\n                </p>\r\n              </div>\r\n              <div class=\"col-sm-4 text-right\">\r\n                <strong>DL No.</strong> : 20/695/30/2020 <br>\r\n                <strong>Date</strong> : {{ bill?.createdAt | amDateFormat: \"DD/MM/YYYY\" }}\r\n\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"line-items\">\r\n            <div class=\"invoice-heading row\" style=\"border: 1px solid #c8ced3;; margin-left: 1px; margin-right: 1px; \">\r\n              <div class=\"item1 col-sm-4\" style=\"padding-top: 5px; padding-bottom: 5px;\">\r\n                <strong>Customer Name</strong> : {{ bill?.customerName }}<br />\r\n                <strong>Contact No.</strong>  : {{ bill?.customerContact }}\r\n              </div>\r\n              <div class=\"item2 col-sm-4\" style=\"padding: 12px; border-left: 1px solid #c8ced3; ; border-right: 1px solid #c8ced3; ; text-align: center;\" >\r\n                <h4>INVOICE</h4>\r\n              </div>\r\n              <div class=\"item3 col-sm-4\" style=\"padding-top: 5px; padding-bottom: 5px;\">\r\n               <strong>Invoice No.</strong> : NP{{ bill?.invoiceId }}\r\n              </div>\r\n            </div>\r\n\r\n            <table class=\"table table-bordered\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S. No.</th>\r\n                  <th>Product Name</th>\r\n                  <th>Packing</th>\r\n                  <th>Batch No.</th>\r\n                  <th>Expiry</th>\r\n                  <th>Quantity</th>\r\n                  <th>MRP</th>\r\n                  <th>GST</th>\r\n                  <th>Amount</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let item of items; let i = index\">\r\n                  <td>{{ i + 1 }}</td>\r\n                  <td>{{ item?.medicine }}</td>\r\n                  <td>{{ item?.pcaking }}</td>\r\n                  <td>{{ item?.batchNo }}</td>\r\n                  <td>{{ item?.expiry | amDateFormat: \"MMM YYYY\" }}</td>\r\n                  <td>{{ item?.orderQuantity }}</td>\r\n                  <td>{{ item?.mrp }}</td>\r\n                  <td>{{bill?.gstRate}} %</td>\r\n                  <td>{{ item?.total | currency: \"INR\" }}</td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n            <div class=\"row\" style=\"border: 2px solid #c8ced3;; margin: 1px; margin-top: 0px;\">\r\n              <div class=\"col-sm-6 text-left\">\r\n                <p >\r\n\r\n                  A/C No. : 20223859460<br/>\r\n                  IFSC Code : SBIN0030498, State Bank India\r\n\r\n                </p>\r\n                <div class=\"terms\" style=\"margin-top: 5rem; margin-bottom: 10px;\">\r\n                  <strong>\r\n                    Terms & Conditions\r\n                  </strong><br />\r\n                  Goods once sold will not be taken back or exchanged.\r\n                  Bills not paid due date will attract 24% interest.\r\n                  All disputes subjected to ASHTA Jurisdiction only.\r\n                  Prescribed Sales  Tax declaration will be given.\r\n                </div>\r\n              </div>\r\n              <div class=\"col-sm-6\">\r\n                <table class=\"table\" style=\"margin: 0px; padding: 0px;\">\r\n                  <thead>\r\n                    <tr>\r\n                      <th>Sub Total</th>\r\n                      <th>\r\n                        {{ bill?.subTotal | currency: \"INR\" }}\r\n                      </th>\r\n                    </tr>\r\n                    <tr *ngIf=\"bill?.gstRate\">\r\n                      <th>GST @ {{ bill?.gstRate }} %</th>\r\n                      <th>\r\n                        {{ bill?.gstAmount  | currency: \"INR\" }}\r\n                      </th>\r\n                    </tr>\r\n                    <tr *ngIf=\"bill?.discount\" >\r\n                      <th>Discount</th>\r\n                      <th>\r\n                        {{ bill?.discount  | currency: \"INR\" }}\r\n                      </th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>Grand Total</th>\r\n                      <th>\r\n                        {{ bill?.grandTotal | currency: \"INR\" }}\r\n                      </th>\r\n                    </tr>\r\n                    <tr>\r\n                      <th>Paid Amount</th>\r\n                      <th>\r\n                        {{ bill?.paidAmount | currency: \"INR\" }}\r\n                      </th>\r\n                    </tr>\r\n                    <tr *ngIf=\"bill?.dueAmount\">\r\n                      <th>Due Amount</th>\r\n                      <th>\r\n                        {{ bill?.dueAmount | currency: \"INR\" }}\r\n                      </th>\r\n                    </tr>\r\n                  </thead>\r\n                </table>\r\n              </div>\r\n   \r\n              \r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n\r\n\r\n            </div>\r\n            <span>This is an auto generated invoice no signature required</span>\r\n            <div class=\"print\">\r\n              <button class=\"btn btn-secondary\" (click)=\"printBill()\">print</button>\r\n              <button class=\"btn btn-success\" (click)=\"goBack()\">Back</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"footer\">Copyright © Nutan Pharma</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "lm8q":
    /*!***************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
      \***************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lm8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header\r\n  [navbarBrandRouterLink]=\"['/dashboard']\"\r\n  [fixed]=\"true\"\r\n  [sidebarToggler]=\"'lg'\">\r\n  <button class=\"btn btn-secondary\" (click)= \"logOut()\" style=\"margin-right: 10px;\">Log Out</button>\r\n\r\n</app-header>\r\n<div class=\"app-body\">\r\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\r\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\r\n  </app-sidebar>\r\n  <!-- Main content -->\r\n  <main class=\"main\">\r\n\r\n    <div class=\"container-fluid\">\r\n      <router-outlet></router-outlet>\r\n    </div><!-- /.container-fluid -->\r\n  </main>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "nAJl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function nAJl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app flex-row align-items-center\">\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"clearfix\">\r\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\r\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\r\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\r\n        </div>\r\n        <div class=\"input-prepend input-group\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\r\n          </div>\r\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\r\n          <span class=\"input-group-append\">\r\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\r\n          </span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
      /***/
    },

    /***/
    "nSew":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function nSew(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"app-body\">\r\n  <main class=\"main d-flex align-items-center\">\r\n    <div class=\"container\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 mx-auto\">\r\n          <div class=\"card-group\">\r\n            <div class=\"card p-4\">\r\n              <div class=\"card-body\">\r\n                <form [formGroup]=\"loginForm\">\r\n                  <h1>Login</h1>\r\n                  <p class=\"text-muted\">Sign In to your account</p>\r\n                  <div class=\"input-group mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"\r\n                        ><i class=\"icon-user\"></i\r\n                      ></span>\r\n                    </div>\r\n                    <input\r\n                      formControlName=\"username\"\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Username\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                  <div class=\"input-group mb-4\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"\r\n                        ><i class=\"icon-lock\"></i\r\n                      ></span>\r\n                    </div>\r\n                    <input\r\n                      formControlName=\"password\"\r\n                      type=\"password\"\r\n                      class=\"form-control\"\r\n                      placeholder=\"Password\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-6\">\r\n                      <button\r\n                        type=\"button\"\r\n                        class=\"btn btn-primary px-4\"\r\n                        (click)=\"isAuth()\"\r\n                      >\r\n                        Login\r\n                      </button>\r\n                    </div>\r\n                    <div class=\"col-6 text-right\">\r\n                      <button type=\"button\" class=\"btn btn-link px-0\">\r\n                        Forgot password?\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"watermark\" style=\"display: flex; justify-content: center;\">\r\n        <img src=\"assets/nutanPharmaversion.svg\" alt=\"\" height=\"300px\" width=\"250px\">\r\n    </div>\r\n    </div>\r\n  </main>\r\n</div>\r\n";
      /***/
    },

    /***/
    "vmt5":
    /*!*******************************************!*\
      !*** ./src/app/services/bills.service.ts ***!
      \*******************************************/

    /*! exports provided: BillService */

    /***/
    function vmt5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BillService", function () {
        return BillService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var BillService = /*#__PURE__*/function () {
        function BillService(http) {
          _classCallCheck(this, BillService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(BillService, [{
          key: "getOrders",
          value: function getOrders(id) {
            return this.http.get("".concat(this.apiUrl, "api/c/orders/").concat(id));
          }
        }]);

        return BillService;
      }();

      BillService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      };

      BillService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root"
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], BillService);
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "wAiw");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
        useJit: true,
        preserveWhitespaces: true
      })["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map