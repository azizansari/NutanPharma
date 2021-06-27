import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../../interfaces/response';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
 categories = []
 alertsDismiss: any = [];
 p: number = 1;
 public addCategoryForm: FormGroup;
 public submitted = false;
 isSuccess = false;
 @ViewChild("myModal") public myModal: ModalDirective;

  constructor(
    private catgServ : CategoriesService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getCategories()
    this.buildForm()
  }

  handlePageChange(event) {
    this.p = event;
  }
  getCategories(){
    this.catgServ.getCategories().subscribe((res : Category)=>{
      console.log('catg...', res)
      this.categories = res.data;
    })

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
    if(valObj.category && valObj.desc){
      check = true;
    }
    return check;
  }
  get f() {
    console.log(
      "this.addBrandForm.value.status: ",
      this.addCategoryForm.value.status
    );
    return {
      ...this.addCategoryForm.value,
      status: this.status,
    };
  }
  buildForm(): void {
    this.addCategoryForm = this.fb.group({
      category : [""],
      desc: [""],
      other: [""],
    });
  }


  submit() {
    if(this.isValid(this.f)){
      this.submitted = true;
      this.catgServ.postCategory(this.f).subscribe((resp) =>{
        if(resp){

          this.addCategoryForm.reset();
          this.getCategories();
          this.myModal.hide()
          this.alertNot("success", "Success");
          
        }
        console.log("category>>>",resp)
      })
    }else{
      this.alertNot("danger", "Please enter all the details");
    }
    console.log(this.f);
  }

  deletCategory(id) {
    this.catgServ.deleteCategory(id).subscribe((resp)=>{
      this.getCategories()
    })
  }
  reSet() {
    this.addCategoryForm.reset();
  }
  alertNot(type, message): void {
    this.alertsDismiss.push({
      type: type,
      message: `${message}`,
      timeout: 5000
    });
  }
  
}
