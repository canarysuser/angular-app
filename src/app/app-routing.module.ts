import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ui/home.component';
import { ProductHomeComponent } from './products/product-home.component';
import { PageNotFoundComponent } from './ui/page-not-found.component';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './admin/login.component';
import { LogoutComponent } from './admin/logout.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"products", component:ProductHomeComponent},
  {path:"login", component: LoginComponent},
  {path:"logout", component: LogoutComponent},
  {path:"", redirectTo:"/home", pathMatch:"full"},
  { path: 'productsapi', 
    loadChildren: () => import('./products-api/products-api.module')
            .then(m => m.ProductsApiModule) }, 
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
