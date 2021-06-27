import { NgModule } from '@angular/core';
import { MedicineComponent } from './medicine.component';
import { MedicineRoutingModule } from './medicine-routing.module';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { MomentModule } from 'angular2-moment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    MedicineRoutingModule,
    CollapseModule.forRoot(),
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    MomentModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    NgxPaginationModule,
    AlertModule.forRoot()

  ],
  declarations: [ MedicineComponent ],
})
export class MedicineModule { }
