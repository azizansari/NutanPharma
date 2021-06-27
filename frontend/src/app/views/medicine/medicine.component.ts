import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Brand, Category, Response } from "../../interfaces/response";
import { BrandService } from "../../services/brand.service";
import { CategoriesService } from "../../services/categories.service";
import { MedicineService } from "../../services/medicine.service";

@Component({
  selector: "app-medicine",
  templateUrl: "./medicine.component.html",
  styleUrls: ["./medicine.component.scss"],
})
export class MedicineComponent implements OnInit {
  medicines = [];
  categories = [];
  brands = [];
  alertsDismiss: any = [];
  p: number = 1;
  totalData;
  status = false;
  public medicineAddForm: FormGroup;
  public submitted = false;
  constructor(
    private medServ: MedicineService,
    private fb: FormBuilder,
    private catgServ: CategoriesService,
    private brandServ: BrandService
  ) {}

  ngOnInit(): void {
    this.getMedicines(1);
    this.buildForm();
    this.getCategories();
    this.getBrands();
  }
  @ViewChild("myModal") public myModal: ModalDirective;

  handlePageChange(event) {
    this.p = event;
    this.getMedicines(this.p)
  }
  getMedicines(page) {
    this.medServ.getMedicines(10*page, 10).subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      this.medicines = res.data;
      this.totalData = res['total']
      console.log(this.medicines);
    });
  }

  getCategories() {
    this.catgServ.getCategories().subscribe((res: Category) => {
      this.categories = res.data;
    });
  }
  getBrands() {
    this.brandServ.getBrands().subscribe((res: Brand) => {
      this.brands = res.data;
    });
  }
  deleteMed(id) {
    this.medServ.deleteMedicine(id).subscribe((resp) => {
      this.getMedicines(1);
    });
  }
  onChang(e) {
    if (e.target.value == "true") {
      this.status = true;
    } else {
      this.status = false;
    }
  }
  buildForm(): void {
    this.medicineAddForm = this.fb.group({
      brand: ["", Validators.required],
      packing: ["", Validators.required],
      expiry: [""],
      rate: [""],
      productName: [""],
      categories: [""],
      batchNo: [""],
      quantity: [""],
      mrp: [""],
    });
  }

  isValid(valObj) {
    var check = false;
    if (
      valObj.brand &&
      valObj.categories &&
      valObj.productName &&
      valObj.expiry &&
      valObj.mrp &&
      valObj.quantity &&
      valObj.rate &&
      valObj.batchNo &&
      valObj.packing
    ){
      check = true;
    }
      return check;
  }

  get f() {
    return {
      ...this.medicineAddForm.value,
      status: this.status,
    };
  }

  submit() {
    console.log(this.isValid(this.f));
    if(this.isValid(this.f)){
      this.submitted = true;
      this.medServ.postMedicine(this.f).subscribe((resp) => {
        if (resp) {
          this.getMedicines(1);
          this.medicineAddForm.reset();
          this.myModal.hide();
          this.alertNot("success", "Success");
        }
      });
      console.log(this.f);
    }
    else{
      this.alertNot("danger", "Please enter all the details");
    }
  }

  reSet() {
    this.medicineAddForm.reset();
  }
  alertNot(type, message): void {
    this.alertsDismiss.push({
      type: type,
      message: `${message}`,
      timeout: 5000
    });
  }
}
