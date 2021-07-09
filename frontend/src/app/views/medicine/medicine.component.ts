import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Brand, Category, Response } from "../../interfaces/response";
import { BrandService } from "../../services/brand.service";
import { CategoriesService } from "../../services/categories.service";
import { MedicineService } from "../../services/medicine.service";
declare let swal : any
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
  searchTerm = '';
  status = false;
  searchTermBrnd = ''
  public medicineAddForm: FormGroup;
  public submitted = false;
  editMedicine ={}
  config = {
    backdrop : 'static'
  }
  constructor(
    private medServ: MedicineService,
    private fb: FormBuilder,
    private catgServ: CategoriesService,
    private brandServ: BrandService
  ) {}

  ngOnInit(): void {
    this.getMedicines(1);
    this.buildForm();
  }
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("updateModal") public updateModal: ModalDirective;

  handlePageChange(event) {
    this.p = event;
    this.getMedicines(this.p)
  }
  getMedicines(page) {
    this.medServ.getMedicines(`skip=${page*10-10}&limit=10`).subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      this.medicines = res.data;
      this.totalData = res['total']
      console.log(this.medicines);
    });
  }
  searchMed(e){
    this.medServ.getMedicines(`search=${this.searchTerm}&limit=10`).subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", e, res);
      this.medicines = res.data;
      this.totalData = res['total']
      this.p = 1
      console.log(this.medicines);
    });
  }
  getCategories(e) {
    this.catgServ.getCategories(`search=${e.target.value}&limit=20`).subscribe((res: Category) => {
      this.categories = res.data;
    });
  }
  getBrands(e) {
    this.brandServ.getBrands(`search=${e.target.value}&limit=20`).subscribe((res: Brand) => {
      this.brands = res.data;
      console.log(this.brands, e.target.value  )
    });
  }
  deleteMed(id) {
    swal({text : "Do you want to delete this Medicine", icon  : 'warning', buttons: true, dangerMode: true,})
    .then((del)=>{
      if(del){
        this.medServ.deleteMedicine(id).subscribe((resp) => {
          this.getMedicines(this.p);
          swal({text : "Medicine deleted successfully", icon  : 'success'});
        });

      }
    })

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
          this.getMedicines(this.p);
          this.medicineAddForm.reset();
          this.myModal.hide();
          swal({text : "Medicine Added successfully", icon  : 'success'});
        }
      });
      console.log(this.f);
    }
    else{
      swal({text : "Please enter all the details", icon  : 'info'});
    }
  }

  reSet() {
    this.medicineAddForm.reset();
  }
  openUpdate(medicine){
    this.updateModal.show()
    console.log(">>>update", medicine)
    this.editMedicine = medicine
    this.editMedicine['expiry'] = new Date(this.editMedicine['expiry']).toISOString().split('T')[0];

  }
  submitUpdate(){
    console.log(this.editMedicine)
    if(this.editMedicine['quantity']<=0){
      this.editMedicine['status'] = false
    }
    else{
      this.editMedicine['status'] = true
    }
    this.medServ.updateMedicine(this.editMedicine['_id'], this.editMedicine).subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      if(res){
        this.getMedicines(this.p);
        this.updateModal.hide()
        swal({
          title : `${this.editMedicine['productName']}`,
          text : `Updated successfully`, 
          icon  : 'success'
        });
      }
      else{
      swal({text : "Please enter all the details", icon  : 'info'});
      }
    });
  }
  alertNot(type, message): void {
    this.alertsDismiss.push({
      type: type,
      message: `${message}`,
      timeout: 5000
    });
  }
}
