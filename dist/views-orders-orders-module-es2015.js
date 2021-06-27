(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-orders-orders-module"],{

/***/ "MOE4":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    postOrders(payload) {
        return this.http.post(`${this.apiUrl}api/c/orders/create`, payload);
    }
    getOrders() {
        return this.http.get(`${this.apiUrl}api/c/orders`);
    }
    deleteOrder(id) {
        return this.http.delete(`${this.apiUrl}api/c/orders/${id}`);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], OrdersService);



/***/ }),

/***/ "N8wx":
/*!**************************************************!*\
  !*** ./src/app/views/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.component.html */ "SLuX");
/* harmony import */ var _orders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component.scss */ "UQSn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/medicine.service */ "gHm9");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/orders.service */ "MOE4");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");








let OrdersComponent = class OrdersComponent {
    constructor(medServ, orderserv, router) {
        this.medServ = medServ;
        this.orderserv = orderserv;
        this.router = router;
        this.p = 1;
        this.medicines = [];
        this.orders = [];
        this.alertsDismiss = [];
        this.submitted = false;
        // total1;
        this.subTotal = 0;
        this.listId = 1;
        this.orderedProduct = [];
        // onQuant(ev) {
        //   this.orderQuantity = ev.target.value;
        //   // this.total = this.rate * this.orderQuantity;
        // }
        this.localMedicine = {};
        this.orderList = [];
    }
    ngOnInit() {
        this.getMedicines();
        this.getOrders();
        setTimeout(() => {
            console.log("this._orderDate: ", this._orderDate);
            this._orderDate.nativeElement.valueAsDate = new Date();
        }, 1000);
    }
    getMedicines() {
        this.medServ.getMedicines().subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
            this.medicines = res.data;
            console.log(this.medicines);
        });
    }
    getOrders() {
        this.orderserv.getOrders().subscribe((res) => {
            this.orders = res.data;
            console.log(this.orders);
        });
    }
    deleteOrder(id) {
        this.orderserv.deleteOrder(id).subscribe((resp) => {
            this.getOrders();
        });
    }
    handlePageChange(event) {
        this.p = event;
    }
    onChange(e) {
        console.log(e);
        if (e) {
            this.medicine = this.medicines.find((med) => med._id == e);
            console.log("this.medicine: ", this.medicine);
            this.rate = this.medicine.mrp;
            this.quantity = this.medicine.quantity;
            console.log(this.medicine.rate);
        }
        else {
            this.rate = "";
            this.quantity = "";
        }
    }
    get total() {
        const val = this.rate * this.orderQuantity;
        return isNaN(val) ? "" : val;
    }
    get gstTotal() {
        const val = 0.01 * this.gstRate * this.subTotal;
        this.gstAmount = isNaN(val) ? "" : val;
        return this.subTotal + this.gstAmount;
    }
    get grandTotal() {
        const val = 0.01 * this.discount * this.subTotal;
        this.disAmount = isNaN(val) ? "" : val;
        const gt = this.subTotal + this.gstAmount - this.disAmount;
        return gt;
    }
    get dueAmount() {
        const val = this.grandTotal - this.paidAmount;
        return isNaN(val) ? "" : val;
    }
    get invoiceId() {
        return Math.floor(Math.random() * 1000000 + 1);
    }
    onAdd() {
        if (this.orderQuantity) {
            this.localMedicine = {
                brand: this.medicine.brand,
                batchNo: this.medicine.batchNo,
                expiry: this.medicine.expiry,
                pcaking: this.medicine.packing,
                medicine: this.medicine.productName,
                mrp: this.rate,
                orderQuantity: this.orderQuantity,
                total: this.total,
                medicine_id: this.medicine._id,
            };
            this.orderList.push(this.localMedicine);
            console.log(this.orderList);
            this.rate = "";
            this.quantity = "";
            this.orderQuantity = "";
            this.subTotal =
                this.subTotal + this.orderList[this.orderList.length - 1].total;
            console.log(this.subTotal);
            console.log("check>>>", this.select1);
            this.subTotal = 0;
            this.orderTotal();
        }
        else {
            this.alertNot("danger", "Please add order quantity");
        }
    }
    orderTotal() {
        for (let i = 0; i < this.orderList.length; i++) {
            if (this.orderList[i].total) {
                this.subTotal = this.subTotal + this.orderList[i].total;
            }
        }
        // this.grandTotal = this.subTotal;
        // this.gstTotal = this.subTotal;
    }
    removeItem(id) {
        this.orderList = this.orderList.filter((orderitem) => id != orderitem.medicine_id);
        this.subTotal = 0;
        this.orderTotal();
    }
    isValid(valObj) {
        var check = false;
        if (valObj.customerName && valObj.paidAmount && valObj.orderedItem.length > 0) {
            check = true;
        }
        return check;
    }
    submit() {
        console.log();
        console.log(this.formValues);
        if (this.isValid(this.formValues)) {
            this.orderserv.postOrders(this.formValues).subscribe((resp) => {
                if (resp) {
                    console.log("success", resp);
                    this.reSet();
                    this.myModal.hide();
                    this.alertNot("success", "Success");
                    this.getOrders();
                }
            }, (err) => {
                console.log(err);
            });
        }
        else {
            this.alertNot("danger", "Please enter all the details");
        }
    }
    ngOnDestroy() { }
    reSet() {
        this.customerContact = "";
        this.customerName = "";
        this.paymentMethod = "";
        this.subTotal = 0;
        this.discount = null;
        this.gstRate = null;
        this.paidAmount = null;
        this.orderList = [];
    }
    toGetPrint(id) {
        this.router.navigate([]).then((result) => {
            location.replace(`#/orders/${id}`);
        });
    }
    get formValues() {
        return {
            orderDate: this.orderDate,
            customerName: this.customerName,
            customerContact: this.customerContact,
            orderedItem: this.orderList,
            subTotal: this.subTotal,
            gstRate: this.gstRate,
            gstAmount: this.gstAmount,
            discount: this.disAmount,
            dueAmount: this.dueAmount,
            paidAmount: this.paidAmount,
            grandTotal: this.grandTotal,
            paymentType: this.paymentMethod,
            invoiceId: this.invoiceId,
        };
    }
    alertNot(type, message) {
        this.alertsDismiss.push({
            type: type,
            message: `${message}`,
            timeout: 5000
        });
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_5__["MedicineService"] },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrdersComponent.propDecorators = {
    _orderDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["orderDateIN",] }],
    myModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["largeModal",] }],
    select1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["select1",] }]
};
OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-orders",
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_medicine_service__WEBPACK_IMPORTED_MODULE_5__["MedicineService"],
        _services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], OrdersComponent);



/***/ }),

/***/ "SLuX":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/orders/orders.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\r\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\r\n    ><strong>{{alert?.message}}</strong></alert\r\n  >\r\n</div>\r\n\r\n<div\r\n  bsModal\r\n  #largeModal=\"bs-modal\"\r\n  class=\"modal fade\"\r\n  tabindex=\"-1\"\r\n  role=\"dialog\"\r\n  aria-labelledby=\"myModalLabel\"\r\n  aria-hidden=\"true\"\r\n>\r\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header card-header\">\r\n        <h4 class=\"modal-title\">New Order</h4>\r\n        <button\r\n          type=\"button\"\r\n          class=\"close\"\r\n          (click)=\"largeModal.hide()\"\r\n          aria-label=\"Close\"\r\n        >\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"form-group row\" style=\"margin: 20px\">\r\n          <div class=\"col-md-3\">\r\n            <label for=\"date-input\">Order Date</label>\r\n            <input\r\n              #orderDateIN\r\n              class=\"form-control\"\r\n              id=\"date-input\"\r\n              type=\"date\"\r\n              name=\"date-input\"\r\n              placeholder=\"date\"\r\n              [(ngModel)]=\"orderDate\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group row\" style=\"margin: 20px\">\r\n          <div class=\"form-group col-md-5\">\r\n            <label for=\"cutomerName\">Customer Name</label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              placeholder=\"Customer Name\"\r\n              [(ngModel)]=\"customerName\"\r\n              name=\"customerName\"\r\n              id=\"customerName\"\r\n            />\r\n          </div>\r\n          <div class=\"form-group col-md-5\">\r\n            <label for=\"customerContact\">Contact</label>\r\n            <input\r\n              type=\"number\"\r\n              class=\"form-control\"\r\n              id=\"customerContact\"\r\n              placeholder=\"Contact\"\r\n              [(ngModel)]=\"customerContact\"\r\n            />\r\n          </div>\r\n        </div>\r\n        <div class=\"table\" style=\"border-bottom: 2px solid grey\">\r\n          <table class=\"table table-striped\">\r\n            <thead>\r\n              <tr>\r\n                <th>Product</th>\r\n                <th>MRP</th>\r\n                <th>Available Quantity</th>\r\n                <th>Quantity</th>\r\n                <th>Total</th>\r\n                <th>Add</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr>\r\n                <td>\r\n                  <div class=\"form-group\">\r\n                    <ng-select\r\n                      #select1\r\n                      name=\"select1\"\r\n                      class=\"form-control custom\"\r\n                      (change)=\"onChange($event)\"\r\n                    >\r\n                      <ng-option\r\n                        *ngFor=\"let medicine of medicines\"\r\n                        [value]=\"medicine?._id\"\r\n\r\n                      >\r\n                        {{ medicine?.productName }}\r\n                      </ng-option>\r\n                    </ng-select>\r\n\r\n                    <!-- <select\r\n                      #select1\r\n                      name=\"select1\"\r\n                      class=\"form-control\"\r\n                      (change)=\"onChange($event)\"\r\n                    >\r\n                      <option value=\"0\">Select Medicine</option>\r\n                      <option\r\n                        [value]=\"medicine?._id\"\r\n                        *ngFor=\"let medicine of medicines\"\r\n                      >\r\n                        {{ medicine?.productName }}\r\n                      </option>\r\n                    </select> -->\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      disabled\r\n                      [(ngModel)]=\"rate\"\r\n                    />\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      disabled\r\n                      [(ngModel)]=\"quantity\"\r\n                    />\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"number\"\r\n                      class=\"form-control\"\r\n                      [(ngModel)]=\"orderQuantity\"\r\n                    />\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"text\"\r\n                      class=\"form-control\"\r\n                      disabled\r\n                      [(ngModel)]=\"total\"\r\n                    />\r\n                  </div>\r\n                </td>\r\n                <td>\r\n                  <Button class=\"btn btn-success\" (click)=\"onAdd()\"\r\n                    ><span class=\"cil-plus\"></span\r\n                  ></Button>\r\n                </td>\r\n              </tr>\r\n              <tr *ngFor=\"let orderitem of orderList\">\r\n                <td>{{ orderitem?.medicine }}</td>\r\n                <td>{{ orderitem?.rate }}</td>\r\n                <td></td>\r\n                <td>{{ orderitem?.orderQuantity }}</td>\r\n                <td>{{ orderitem?.total }}</td>\r\n                <td>\r\n                  <button\r\n                    class=\"btn btn-danger\"\r\n                    (click)=\"removeItem(orderitem?.medicine_id)\"\r\n                  >\r\n                    <span class=\"cil-trash\"></span>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"form-group row\" style=\"margin: 20px\">\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"subtotal\">Sub Total</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"subtotal\"\r\n                disabled\r\n                [(ngModel)]=\"subTotal\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"gst\">GST</label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                id=\"gst\"\r\n                placeholder=\"GST %\"\r\n                [(ngModel)]=\"gstRate\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"total\">Total</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"total\"\r\n                disabled\r\n                [(ngModel)]=\"gstTotal\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"discount\">Discount (in %)</label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                id=\"discount\"\r\n                placeholder=\"Discount %\"\r\n                [(ngModel)]=\"discount\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"grandtotal\">Grand Total</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"grangtotal\"\r\n                disabled\r\n                [(ngModel)]=\"grandTotal\"\r\n              />\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-5\">\r\n            <div class=\"form-group\">\r\n              <label for=\"paidamount\">Paid Amount</label>\r\n              <input\r\n                type=\"number\"\r\n                class=\"form-control\"\r\n                id=\"paidamount\"\r\n                placeholder=\"Amount\"\r\n                [(ngModel)]=\"paidAmount\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"dueamount\">Due Amount</label>\r\n              <input\r\n                type=\"text\"\r\n                class=\"form-control\"\r\n                id=\"dueamount\"\r\n                disabled\r\n                [(ngModel)]=\"dueAmount\"\r\n              />\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <label for=\"paymentType\">Payment Type</label>\r\n              <select\r\n                id=\"select1\"\r\n                name=\"select1\"\r\n                class=\"form-control\"\r\n                [(ngModel)]=\"paymentMethod\"\r\n              >\r\n                <option value=\"0\">Please select</option>\r\n                <option value=\"Cash\">Cash</option>\r\n                <option value=\"Card\">Card</option>\r\n                <option value=\"UPI\">UPI</option>\r\n              </select>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-footer\">\r\n        <button\r\n          type=\"submit\"\r\n          class=\"btn btn-primary col-md-3\"\r\n          (click)=\"submit()\"\r\n        >\r\n          <i class=\"fa fa-dot-circle-o\"></i> Submit\r\n        </button>\r\n        <button type=\"reset\" (click)=\"reSet()\" class=\"btn btn-danger col-md-3\">\r\n          <i class=\"fa fa-ban\"></i> Reset\r\n        </button>\r\n        <button\r\n          type=\"button\"\r\n          class=\"btn btn-secondary col-md-3\"\r\n          (click)=\"largeModal.hide()\"\r\n        >\r\n          Close\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <!-- /.modal-content -->\r\n  </div>\r\n  <!-- /.modal-dialog -->\r\n</div>\r\n<!-- /.modal -->\r\n\r\n<div class=\"card\" style=\"margin-top: 30px\">\r\n  <div class=\"card-header\">\r\n    <h6>Order datails</h6>\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\r\n      <div class=\"input-group col-md-3\">\r\n        <input\r\n          type=\"text\"\r\n          id=\"input1-group2\"\r\n          name=\"input1-group2\"\r\n          class=\"form-control\"\r\n          placeholder=\"Search Orders\"\r\n          [(ngModel)]=\"term\"\r\n        />\r\n        <span class=\"input-group-append\">\r\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\r\n            <i class=\"fa fa-search\"></i> Search\r\n          </button>\r\n        </span>\r\n      </div>\r\n      <button\r\n        type=\"button\"\r\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\r\n        data-toggle=\"modal\"\r\n        (click)=\"largeModal.show()\"\r\n      >\r\n        New Order\r\n      </button>\r\n    </div>\r\n    <table class=\"table table-striped\">\r\n      <thead>\r\n        <tr>\r\n          <th>S.No.</th>\r\n          <th>Invoice Id</th>\r\n          <th>Order Date</th>\r\n          <th>Customer Name</th>\r\n          <th>Contact</th>\r\n          <th>Payment status</th>\r\n          <th>update</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr\r\n          *ngFor=\"\r\n            let order of orders\r\n              | filter: term\r\n              | paginate\r\n                : {\r\n                    itemsPerPage: 10,\r\n                    currentPage: p,\r\n                    totalItems: orders.length\r\n                  };\r\n            let i = index\r\n          \"\r\n        >\r\n          <td>{{ i + 1 }}</td>\r\n          <td>{{ order?.invoiceId }}</td>\r\n          <td>{{ order?.createdAt | amDateFormat: \"DD/MM/YYYY\" }}</td>\r\n          <td>{{ order?.customerName }}</td>\r\n          <td>{{ order?.customerContact }}</td>\r\n          <td>{{ order?.paymentType }}</td>\r\n          <td>\r\n            <div class=\"update row\">\r\n              <button\r\n                class=\"btn btn-sm btn-secondary btn-pill\"\r\n                (click)=\"toGetPrint(order?._id)\"\r\n              >\r\n                Print\r\n              </button>\r\n              <button\r\n                class=\"btn btn-sm btn-danger btn-pill\"\r\n                (click)=\"deleteOrder(order?._id)\"\r\n              >\r\n                <span class=\"cil-trash\"></span>\r\n              </button>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"card-footer\">\r\n    <pagination-controls\r\n      (pageChange)=\"handlePageChange($event)\"\r\n    ></pagination-controls>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "UQSn":
/*!****************************************************!*\
  !*** ./src/app/views/orders/orders.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.custom ::ng-deep .ng-dropdown-panel {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  margin-top: 8px;\n  margin-left: -12px;\n  background: white;\n  border: 1px solid #e4e7ea;\n  min-width: 150px;\n  border-radius: 4px;\n  border-top: none;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option:hover {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  background: #f0f3f5;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  cursor: pointer;\n  padding-left: 15px;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxvcmRlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmctc2VsZWN0LmN1c3RvbSA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsICB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VhO1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG5cbn1cblxuLm5nLXNlbGVjdC5jdXN0b20gOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpob3ZlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2YwZjNmNTtcbn1cbi5uZy1zZWxlY3QuY3VzdG9tIDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZzogNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "lpX+":
/*!***********************************************!*\
  !*** ./src/app/views/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "N8wx");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "zFpL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "LqlI");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-moment */ "YcbE");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "KeVr");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "wTG2");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "xkgV");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap/alert */ "CNMR");













let OrdersModule = class OrdersModule {
};
OrdersModule.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['largeModal',] }]
};
OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            angular2_moment__WEBPACK_IMPORTED_MODULE_8__["MomentModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot()
        ],
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]]
    })
], OrdersModule);



/***/ }),

/***/ "zFpL":
/*!*******************************************************!*\
  !*** ./src/app/views/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "N8wx");




const routes = [
    {
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"],
        data: {
            title: 'Orders'
        }
    }
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrdersRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-orders-orders-module-es2015.js.map