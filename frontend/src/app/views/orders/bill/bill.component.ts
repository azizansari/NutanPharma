import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Response } from "../../../interfaces/response";
import { BillService } from "../../../services/bills.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-dashboard",
  templateUrl: "./bill.component.html",
  styleUrls: ["./bill.component.scss"],
})
export class BillComponent implements OnInit {
  invoiceId = null;
  bill;
  billId;
  items = [];
  constructor(
    private route: ActivatedRoute, 
    private billServ: BillService,
    private router: Router
    ) {
    this.route.params.subscribe(({ id }) => {
      this.invoiceId = id;
      console.log("      this.invoiceId: ", this.invoiceId);
    });
  }

  ngOnInit(): void {
    this.getBills();
  }

  get paymentDate() {
    try {
      console.log('this.bill.invoiceId: ', this.bill.invoiceId);
      return new Date(this.bill.invoiceId);
    } catch (error) {
      return null;
    }
  }

  getBills() {
    this.billServ.getOrders(this.invoiceId).subscribe((resp: Response) => {
      this.bill = resp.data;
      this.items = this.bill.orderedItem;
    });
  }
  printBill() {
    window.print();
  }
  goBack(){
  this.router.navigate(["/orders"]);
}
}
