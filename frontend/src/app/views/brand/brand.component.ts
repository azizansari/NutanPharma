import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Brand } from "../../interfaces/response";
import { BrandService } from "../../services/brand.service";

@Component({
  selector: "app-brand",
  templateUrl: "./brand.component.html",
  styleUrls: ["./brand.component.scss"],
})
export class BrandComponent implements OnInit {
  @ViewChild("myModal") public myModal: ModalDirective;
  public addBrandForm: FormGroup;
  public submitted = false;
  alertsDismiss: any = [];
  brands = [];
  p: number = 1;
  constructor(private brandServ: BrandService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.getBrands();
    this.buildForm();
  }

  getBrands() {
    this.brandServ.getBrands().subscribe((res: Brand) => {
      this.brands = res.data;
    });
  }
  deleteBrands(id) {
    this.brandServ.deleteBrand(id).subscribe((resp) => {
      this.getBrands();
    });
  }
  handlePageChange(event) {
    this.p = event;
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
          this.getBrands()
          this.addBrandForm.reset();
          this.alertNot("success", "Success");
          this.myModal.hide()
          
        }
      })
    }
    else{
      this.alertNot("danger", "Please enter all the details");
    }
    console.log(this.f);
  }
  reSet() {
    this.addBrandForm.reset();
  }
  alertNot(type, message): void {
    this.alertsDismiss.push({
      type: type,
      message: `${message}`,
      timeout: 5000
    });
  }
}
