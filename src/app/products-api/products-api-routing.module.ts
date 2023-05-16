import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsApiComponent } from './products-api.component';
import { ProductListComponent } from './product-list.component';
import { ProductCreateComponent } from './product-create.component';
import { ProductDeleteComponent } from './product-delete.component';
import { ProductUpdateComponent } from './product-update.component';
import { ProductDetailsComponent } from './product-details.component';
import { authGuard } from '../admin/auth.guard';

// ==> /productsapi/*
const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', component: ProductsApiComponent },
      { path: 'list', component: ProductListComponent },
      { path: 'create', component: ProductCreateComponent },
      { path: 'delete/:id', component: ProductDeleteComponent },
      { path: 'edit/:id', component: ProductUpdateComponent },
      { path: 'details/:id', component: ProductDetailsComponent }
    ]
  
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsApiRoutingModule { }
