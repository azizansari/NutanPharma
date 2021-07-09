import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Brand } from "../../interfaces/response";
import { BrandService } from "../../services/brand.service";
declare let swal : any

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"],
})
export class BrandComponent implements OnInit {
  @ViewChild("myModal") public myModal: ModalDirective;
  @ViewChild("updateModal") public updateModal: ModalDirective;
  public addBrandForm: FormGroup;
  public submitted = false;
  alertsDismiss: any = [];
  brands = [];
  p: number = 1;
  totalBrands;
  searchTerm;
  editBrand = {}
  config = {
    backdrop : 'static'
  }
  constructor(private brandServ: BrandService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getBrands(1);
    this.buildForm();
  }

  getBrands(page) {
    this.brandServ.getBrands(`skip=${page*10 -10}&limit=10`).subscribe((res: Brand) => {
      this.brands = res.data;
      this.totalBrands = res['total']
    });
  }
  searchBrand(e){
    this.brandServ.getBrands(`search=${this.searchTerm}&limit=10`).subscribe((res: Response) => {
      this.brands = res['data'];
      this.totalBrands = res['total']
      this.p = 1
    });
  }
  deleteBrands(id) {

    swal({text : "Do you want to delete this Brand", icon  : 'warning', buttons: true, dangerMode: true,})
    .then((del)=>{
      if(del){
        this.brandServ.deleteBrand(id).subscribe((resp) => {
          this.getBrands(this.p);
          swal({text : "Brand deleted successfully", icon  : 'success'});
        })

      }
    })

  
  }
  handlePageChange(event) {
    this.p = event;
    this.getBrands(this.p);

  }
  buildForm(): void {
    this.addBrandForm = this.fb.group({
      brand: [""],
      desc: [""],
      other: [""],
    });
  }
  status = false;
  onChang(e) {
    if (e.target.value == "true") {
      this.status = true;
    } else {
      this.status = false;
    }
  }

  isValid(valObj){
    var check = false;
    if(valObj.brand && valObj.desc){
      check = true;
    }
    return check;
  }
  get f() {
    console.log(
      "this.addBrandForm.value.status: ",
      this.addBrandForm.value.status
    );
    return {
      ...this.addBrandForm.value,
      status: this.status,
    };
  }

  submit() {
    if(this.isValid(this.f)){
      this.submitted = true;
      this.brandServ.postBrand(this.f).subscribe((resp) =>{
        if(resp){
          this.getBrands(1)
          this.addBrandForm.reset();
          this.alertNot("success", "Success");
          swal({text : "Brand Added successfully", icon  : 'success'});
          this.myModal.hide()
          
        }
      })
    }
    else{
      swal({text : "Please enter all the details", icon  : 'info'});

    }
    console.log(this.f);
  }
  reSet() {
    this.addBrandForm.reset();
  }
  openUpdate(brand){
  this.updateModal.show();
  this.editBrand = brand
  }
  submitUpdate(){
    console.log(this.editBrand)
    this.brandServ.updateBrand(this.editBrand['_id'], this.editBrand).subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      if(res){
        this.getBrands(this.p);
        this.updateModal.hide()
        swal({
          title : `${this.editBrand['brand']}`,
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
