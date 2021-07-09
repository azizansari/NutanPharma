import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Category } from '../../interfaces/response';
import { CategoriesService } from '../../services/categories.service';
declare let swal : any
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
 totalCatg;
 searchTerm;
 editCategory = {};
 config = {
  backdrop : 'static'
}
 @ViewChild("myModal") public myModal: ModalDirective;
 @ViewChild("updateModal") public updateModal: ModalDirective;

  constructor(
    private catgServ : CategoriesService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.getCategories(1)
    this.buildForm()
  }

  handlePageChange(event) {
    this.p = event;
    this.getCategories(this.p)
    
  }
  getCategories(page){
    this.catgServ.getCategories(`skip=${page*10 -10}&limit=10`).subscribe((res : Category)=>{
      console.log('catg...', res)
      this.categories = res.data;
      this.totalCatg = res['total']
    })

  }
  searchCatg(e){
    this.catgServ.getCategories(`search=${this.searchTerm}&limit=10`).subscribe((res: Response) => {
      this.categories = res['data'];
      this.totalCatg = res['total']
      this.p = 1
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
          this.getCategories(1);
          this.myModal.hide()
          swal({text : "Brand Added successfully", icon  : 'success'});
          
        }
        console.log("category>>>",resp)
      })
    }else{
      swal({text : "Please enter all the details", icon  : 'info'});

    }
    console.log(this.f);
  }

  deletCategory(id) {

    swal({text : "Do you want to delete this Category", icon  : 'warning', buttons: true, dangerMode: true,})
    .then((del)=>{
      if(del){
        this.catgServ.deleteCategory(id).subscribe((resp)=>{
          this.getCategories(this.p)
          swal({text : "Category deleted successfully", icon  : 'success'});
        })

      }
    })

  }
  reSet() {
    this.addCategoryForm.reset();
  }

  openUpdate(category){
    this.updateModal.show();
    this.editCategory = category
    }

  
  submitUpdate(){
    console.log(">>>>",this.editCategory)
    this.catgServ.updateCategory(this.editCategory['_id'], this.editCategory).subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      if(res){
        this.getCategories(this.p);
        this.updateModal.hide()
        swal({
          title : `${this.editCategory['category']}`,
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
