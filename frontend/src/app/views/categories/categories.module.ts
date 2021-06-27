import { NgModule } from '@angular/core';
import { CategoriesComponent} from './categories.component';
import { CategoriesRoutingModule } from './categories-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  imports: [
    CategoriesRoutingModule,
    HttpClientModule,
    CommonModule,
    ModalModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AlertModule.forRoot()

  ],
  declarations: [ CategoriesComponent ]
})
export class CategoriesModule { }
