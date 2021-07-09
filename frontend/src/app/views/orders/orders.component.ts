import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Response } from "../../interfaces/response";
import { MedicineService } from "../../services/medicine.service";
import { OrdersService } from "../../services/orders.service";
import { ModalDirective } from "ngx-bootstrap/modal";
declare let swal : any
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
  searchTerm;
  public orderForm: FormGroup;
  public submitted = false;
  totalOrders;
  config = {
    backdrop : 'static'
  }
  @ViewChild("orderDateIN") _orderDate;
  @ViewChild("largeModal") public myModal: ModalDirective;
  
  constructor(
    private medServ: MedicineService,
    private orderserv: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getOrders(1);
    setTimeout(() => {
      console.log("this._orderDate: ", this._orderDate);
      this._orderDate.nativeElement.valueAsDate = new Date();
    }, 1000);
  }

  getMedicines(e) {
    this.medServ.getMedicines(`search=${e.target.value}`).subscribe((res: Response) => {
      this.medicines = res.data;
      console.log(this.medicines, e.target.value);
    });
  }
  getOrders(page) {
    this.orderserv.getOrders(`skip=${page*10 -10}&limit=10`).subscribe((res: Response) => {
      this.orders = res.data;
      this.totalOrders = res['total']
      console.log(this.orders);
    });
  }
  searchOrd(e){
    this.orderserv.getOrders(`search=${this.searchTerm}&limit=10`).subscribe((res: Response) => {
      this.orders = res['data'];
      this.totalOrders = res['total']
      this.p = 1
    });
  }
  deleteOrder(id) {
    swal({text : "Do you want to delete this Bill", icon  : 'warning', buttons: true, dangerMode: true,})
    .then((del)=>{
      if(del){
        this.orderserv.deleteOrder(id).subscribe((resp) => {
        this.getOrders(1);
        swal({text : "Bill deleted successfully", icon  : 'success'});
        });
      }
    })

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
      if(this.orderQuantity <= this.medicine.quantity){
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
          qty : this.medicine.quantity
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
        var setQty = (this.medicine.quantity - this.localMedicine['orderQuantity'])
  
        this.updateMed(this.medicine._id, setQty)
      }else{
        swal({text : "Insufficient Stock", icon  : 'info'});
        
      }

    }
    else{
      swal({text : "Please add order quantity", icon  : 'info'});

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
    var removedItem = this.orderList.find((itm)=> itm.medicine_id == id)
    this.orderList = this.orderList.filter((orderitem) => id != orderitem.medicine_id);
    this.subTotal = 0;
    this.orderTotal();
    var updateQty = removedItem.qty
    console.log(">>update", removedItem)
    this.updateMed(id, updateQty)
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
            swal({text : "Order has been placed successfully", icon  : 'success'});
            this.getOrders(1);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
    else{
      swal({text : "Please enter all the details", icon  : 'info'});

    }
  }

  ngOnDestroy() {}
  updateMed(id, data){
    var status = true
    var q = data
    if(data <= 0){
      status = false
      q = 0
    }
    this.medicines = []
    this.medServ.updateMedicine(id, {quantity : q, status : status}).subscribe((res: Response) => {
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
  alertNot(type, message): void {
    this.alertsDismiss.push({
      type: type,
      message: `${message}`,
      timeout: 5000
    });
  }
}
