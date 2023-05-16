import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsApiRoutingModule } from './products-api-routing.module';
import { ProductsApiComponent } from './products-api.component';
import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductUpdateComponent } from './product-update.component';
import { ProductDeleteComponent } from './product-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsApiComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsApiRoutingModule
  ]
})
export class ProductsApiModule { }
