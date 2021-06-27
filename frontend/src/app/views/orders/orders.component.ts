import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Response } from "../../interfaces/response";
import { MedicineService } from "../../services/medicine.service";
import { OrdersService } from "../../services/orders.service";
import { ModalDirective } from "ngx-bootstrap/modal";
@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit, OnDestroy {
  p: number = 1;
  medicines = [];
  orders = [];
  alertsDismiss: any = [];
  public orderForm: FormGroup;
  public submitted = false;
  @ViewChild("orderDateIN") _orderDate;
  @ViewChild("largeModal") public myModal: ModalDirective;

  constructor(
    private medServ: MedicineService,
    private orderserv: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicines();
    this.getOrders();
    setTimeout(() => {
      console.log("this._orderDate: ", this._orderDate);
      this._orderDate.nativeElement.valueAsDate = new Date();
    }, 1000);
  }

  getMedicines() {
    this.medServ.getMedicines().subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      this.medicines = res.data;
      console.log(this.medicines);
    });
  }
  getOrders() {
    this.orderserv.getOrders().subscribe((res: Response) => {
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
  medicine;
  rate;
  quantity;
  orderQuantity;
  // total1;
  subTotal = 0;
  discount;
  gstRate;
  // grandTotal;
  gstAmount;
  disAmount;
  paidAmount;
  listId = 1;
  paymentMethod;
  orderedProduct = [];
  // gstTotal;
  orderDate;
  customerName;
  customerContact;

  onChange(e) {
    console.log(e);
    if (e) {
      this.medicine = this.medicines.find((med) => med._id == e);
      console.log("this.medicine: ", this.medicine);
      this.rate = this.medicine.mrp;
      this.quantity = this.medicine.quantity;
      console.log(this.medicine.rate);
    } else {
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

  // onQuant(ev) {
  //   this.orderQuantity = ev.target.value;
  //   // this.total = this.rate * this.orderQuantity;
  // }

  localMedicine = {};
  orderList = [];

  @ViewChild("select1") select1;
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
    else{
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
    if(this.isValid(this.formValues)){
      this.orderserv.postOrders(this.formValues).subscribe(
        (resp) => {
          if (resp) {
            console.log("success", resp);
            this.reSet();
            this.myModal.hide();
            this.alertNot("success", "Success");
            this.getOrders();
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else{
      this.alertNot("danger", "Please enter all the details");
    }
  }

  ngOnDestroy() {}

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
  alertNot(type, message): void {
    this.alertsDismiss.push({
      type: type,
      message: `${message}`,
      timeout: 5000
    });
  }
}
