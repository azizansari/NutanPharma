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
    getOrders(data) {
        return this.http.get(`${this.apiUrl}api/c/orders?${data}`);
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
        this.config = {
            backdrop: 'static'
        };
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
        this.getOrders(1);
        setTimeout(() => {
            console.log("this._orderDate: ", this._orderDate);
            this._orderDate.nativeElement.valueAsDate = new Date();
        }, 1000);
    }
    getMedicines(e) {
        this.medServ.getMedicines(`search=${e.target.value}`).subscribe((res) => {
            this.medicines = res.data;
            console.log(this.medicines, e.target.value);
        });
    }
    getOrders(page) {
        this.orderserv.getOrders(`skip=${page * 10 - 10}&limit=10`).subscribe((res) => {
            this.orders = res.data;
            this.totalOrders = res['total'];
            console.log(this.orders);
        });
    }
    searchOrd(e) {
        this.orderserv.getOrders(`search=${this.searchTerm}&limit=10`).subscribe((res) => {
            this.orders = res['data'];
            this.totalOrders = res['total'];
            this.p = 1;
        });
    }
    deleteOrder(id) {
        swal({ text: "Do you want to delete this Bill", icon: 'warning', buttons: true, dangerMode: true, })
            .then((del) => {
            if (del) {
                this.orderserv.deleteOrder(id).subscribe((resp) => {
                    this.getOrders(1);
                    swal({ text: "Bill deleted successfully", icon: 'success' });
                });
            }
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
            if (this.orderQuantity <= this.medicine.quantity) {
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
                    qty: this.medicine.quantity
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
                var setQty = (this.medicine.quantity - this.localMedicine['orderQuantity']);
                this.updateMed(this.medicine._id, setQty);
            }
            else {
                swal({ text: "Insufficient Stock", icon: 'info' });
            }
        }
        else {
            swal({ text: "Please add order quantity", icon: 'info' });
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
        var removedItem = this.orderList.find((itm) => itm.medicine_id == id);
        this.orderList = this.orderList.filter((orderitem) => id != orderitem.medicine_id);
        this.subTotal = 0;
        this.orderTotal();
        var updateQty = removedItem.qty;
        console.log(">>update", removedItem);
        this.updateMed(id, updateQty);
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
                    swal({ text: "Order has been placed successfully", icon: 'success' });
                    this.getOrders(1);
                }
            }, (err) => {
                console.log(err);
            });
        }
        else {
            swal({ text: "Please enter all the details", icon: 'info' });
        }
    }
    ngOnDestroy() { }
    updateMed(id, data) {
        var status = true;
        var q = data;
        if (data <= 0) {
            status = false;
            q = 0;
        }
        this.medicines = [];
        this.medServ.updateMedicine(id, { quantity: q, status: status }).subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
        });
    }
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
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"notification-alert\" *ngFor=\"let alert of alertsDismiss\" style=\"position: absolute; left: 0; right: 0; margin: auto; z-index: 999999 !important; width: 20%;\">\n  <alert [type]=\"alert.type\" dismissOnTimeout=\"5000\" [dismissible]=\"true\"\n    ><strong>{{alert?.message}}</strong></alert\n  >\n</div>\n\n<div\n  bsModal\n  #largeModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n  [config]=\"config\"\n>\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">New Order</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"largeModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-3\">\n            <label for=\"date-input\">Order Date</label>\n            <input\n              #orderDateIN\n              class=\"form-control\"\n              id=\"date-input\"\n              type=\"date\"\n              name=\"date-input\"\n              placeholder=\"date\"\n              [(ngModel)]=\"orderDate\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"form-group col-md-5\">\n            <label for=\"cutomerName\">Customer Name</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Customer Name\"\n              [(ngModel)]=\"customerName\"\n              name=\"customerName\"\n              id=\"customerName\"\n            />\n          </div>\n          <div class=\"form-group col-md-5\">\n            <label for=\"customerContact\">Contact</label>\n            <input\n              type=\"number\"\n              class=\"form-control\"\n              id=\"customerContact\"\n              placeholder=\"Contact\"\n              [(ngModel)]=\"customerContact\"\n            />\n          </div>\n        </div>\n        <div class=\"table\" style=\"border-bottom: 2px solid grey\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Product</th>\n                <th>MRP</th>\n                <th>Available Quantity</th>\n                <th>Quantity</th>\n                <th>Total</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <div class=\"form-group\">\n                    <ng-select\n                      #select1\n                      style=\"width: 150px;\"\n                      name=\"select1\"\n                      class=\"form-control custom\"\n                      (keypress)=\"getMedicines($event)\"          \n                      (change)=\"onChange($event)\"\n                    >\n                      <ng-option\n                        *ngFor=\"let medicine of medicines\"\n                        [value]=\"medicine?._id\"\n\n                      >\n                      <span style=\"font-size: 14px; font-weight: bold;\">{{ medicine?.productName }}\n                      </span>\n                        <span \n                        class=\"badge badge-primary badge-pill\"\n                        style=\"color: white;\"\n                        >{{ medicine?.brand }}</span>\n                        <span\n                        class=\"badge badge-pill\"\n                        [class.badge-success]=\"medicine?.status\"\n                        [class.badge-danger]=\"!medicine?.status\"\n                        >{{ medicine?.status ? \"Avail\" : \"NotAvail\" }}</span\n                      >\n                      </ng-option>\n                    </ng-select>\n\n                    <!-- <select\n                      #select1\n                      name=\"select1\"\n                      class=\"form-control\"\n                      (change)=\"onChange($event)\"\n                    >\n                      <option value=\"0\">Select Medicine</option>\n                      <option\n                        [value]=\"medicine?._id\"\n                        *ngFor=\"let medicine of medicines\"\n                      >\n                        {{ medicine?.productName }}\n                      </option>\n                    </select> -->\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      disabled\n                      [(ngModel)]=\"rate\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      disabled\n                      [(ngModel)]=\"quantity\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"number\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"orderQuantity\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      disabled\n                      [(ngModel)]=\"total\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <Button class=\"btn btn-success\" (click)=\"onAdd()\"\n                    ><span class=\"cil-plus\"></span\n                  ></Button>\n                </td>\n              </tr>\n              <tr *ngFor=\"let orderitem of orderList\">\n                <td>{{ orderitem?.medicine }}</td>\n                <td>{{ orderitem?.rate }}</td>\n                <td></td>\n                <td>{{ orderitem?.orderQuantity }}</td>\n                <td>{{ orderitem?.total }}</td>\n                <td>\n                  <button\n                    class=\"btn btn-danger\"\n                    (click)=\"removeItem(orderitem?.medicine_id)\"\n                  >\n                    <span class=\"cil-trash\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"subtotal\">Sub Total</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"subtotal\"\n                disabled\n                [(ngModel)]=\"subTotal\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"gst\">GST</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"gst\"\n                placeholder=\"GST %\"\n                [(ngModel)]=\"gstRate\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"total\">Total</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"total\"\n                disabled\n                [(ngModel)]=\"gstTotal\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"discount\">Discount (in %)</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"discount\"\n                placeholder=\"Discount %\"\n                [(ngModel)]=\"discount\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"grandtotal\">Grand Total</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"grangtotal\"\n                disabled\n                [(ngModel)]=\"grandTotal\"\n              />\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"paidamount\">Paid Amount</label>\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                id=\"paidamount\"\n                placeholder=\"Amount\"\n                [(ngModel)]=\"paidAmount\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"dueamount\">Due Amount</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"dueamount\"\n                disabled\n                [(ngModel)]=\"dueAmount\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"paymentType\">Payment Type</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                [(ngModel)]=\"paymentMethod\"\n              >\n                <option value=\"0\">Please select</option>\n                <option value=\"Cash\">Cash</option>\n                <option value=\"Card\">Card</option>\n                <option value=\"UPI\">UPI</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submit()\"\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Submit\n        </button>\n        <button type=\"reset\" (click)=\"reSet()\" class=\"btn btn-danger col-md-3\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"largeModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div class=\"card\" style=\"margin-top: 30px\">\n  <div class=\"card-header\">\n    <h6>Order datails</h6>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\n      <div class=\"input-group col-md-3\">\n        <input\n          type=\"text\"\n          id=\"input1-group2\"\n          name=\"input1-group2\"\n          class=\"form-control\"\n          placeholder=\"Search Orders\"\n          [(ngModel)]=\"searchTerm\"\n          (ngModelChange)=\"searchOrd($event)\"\n        />\n        <span class=\"input-group-append\">\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\n            <i class=\"fa fa-search\"></i> Search\n          </button>\n        </span>\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\n        data-toggle=\"modal\"\n        (click)=\"largeModal.show()\"\n      >\n        New Order\n      </button>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>S.No.</th>\n          <th>Invoice Id</th>\n          <th>Order Date</th>\n          <th>Customer Name</th>\n          <th>Contact</th>\n          <th>Payment status</th>\n          <th>update</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr\n          *ngFor=\"\n            let order of orders\n              | paginate\n                : {\n                    itemsPerPage: 10,\n                    currentPage: p,\n                    totalItems: totalOrders\n                  };\n            let i = index\n          \"\n        >\n          <td>{{ i + 1 }}</td>\n          <td>{{ order?.invoiceId }}</td>\n          <td>{{ order?.createdAt | amDateFormat: \"DD/MM/YYYY\" }}</td>\n          <td>{{ order?.customerName }}</td>\n          <td>{{ order?.customerContact }}</td>\n          <td>{{ order?.paymentType }}</td>\n          <td>\n            <div class=\"update row\">\n              <button\n                class=\"btn btn-sm btn-secondary btn-pill\"\n                (click)=\"toGetPrint(order?._id)\"\n              >\n                Print\n              </button>\n              <button\n                class=\"btn btn-sm btn-danger btn-pill\"\n                (click)=\"deleteOrder(order?._id)\"\n              >\n                <span class=\"cil-trash\"></span>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <pagination-controls\n      (pageChange)=\"handlePageChange($event)\"\n    ></pagination-controls>\n  </div>\n</div>\n");

/***/ }),

/***/ "UQSn":
/*!****************************************************!*\
  !*** ./src/app/views/orders/orders.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".ng-select.custom ::ng-deep .ng-dropdown-panel {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  margin-top: 8px;\n  margin-left: -12px;\n  background: white;\n  border: 1px solid #e4e7ea;\n  min-width: -webkit-fit-content;\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  border-radius: 4px;\n  border-top: none;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option:hover {\n  box-sizing: border-box;\n  cursor: pointer;\n  display: block;\n  background: #f0f3f5;\n}\n\n.ng-select.custom ::ng-deep .ng-dropdown-panel .ng-dropdown-panel-items .ng-option {\n  cursor: pointer;\n  padding-left: 15px;\n  padding: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFBQSwyQkFBQTtFQUFBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksc0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0E7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoib3JkZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubmctc2VsZWN0LmN1c3RvbSA6Om5nLWRlZXAgLm5nLWRyb3Bkb3duLXBhbmVsICB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTJweDtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTRlN2VhO1xuICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG5cbn1cblxuLm5nLXNlbGVjdC5jdXN0b20gOjpuZy1kZWVwIC5uZy1kcm9wZG93bi1wYW5lbCAubmctZHJvcGRvd24tcGFuZWwtaXRlbXMgLm5nLW9wdGlvbjpob3ZlciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYmFja2dyb3VuZDogI2YwZjNmNTtcbn1cbi5uZy1zZWxlY3QuY3VzdG9tIDo6bmctZGVlcCAubmctZHJvcGRvd24tcGFuZWwgLm5nLWRyb3Bkb3duLXBhbmVsLWl0ZW1zIC5uZy1vcHRpb24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgcGFkZGluZzogNnB4O1xufSJdfQ== */");

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
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");
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