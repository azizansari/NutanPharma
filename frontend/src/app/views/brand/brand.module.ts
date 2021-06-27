import { NgModule } from '@angular/core';
import { BrandComponent} from './brand.component';
import { BrandRoutingModule } from './brand-routing.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    BrandRoutingModule,
    ModalModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AlertModule.forRoot()

  ],
  declarations: [ BrandComponent ]
})
export class BrandModule { }
