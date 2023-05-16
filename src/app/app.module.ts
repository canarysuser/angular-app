import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer.component';
import { HomeComponent } from './ui/home.component';
import { ProductHomeComponent } from './products/product-home.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './admin/login.component';
import { LogoutComponent } from './admin/logout.component';



/* provides the module metadata lists various components or resources within the app*/
@NgModule({
  /* declarations lists all the directives, pipes and components defined as part of the module
     here*/
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductHomeComponent,
    ProductListComponent,
    ProductDetailsComponent,
    LoginComponent,
    LogoutComponent,
    
  ],
  /*refers to any external modules required for the execution of this module */
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  /* exports: [] makes this module available for imports in other modules */
  /*providers lists all the services/injectables defined as part of the module */ 
  providers: [],
  /* bootstrap section can be defined only in the root module. Only one module in the 
  application can contain the bootstrap section. THis section lists all the components, 
  that should be displayed when the application starts.  */
  bootstrap: [AppComponent]
})
export class AppModule { }
