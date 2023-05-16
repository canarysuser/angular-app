import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductListService } from '../services/product-list.service';
import { ProductAction } from '../models/product-action';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css']
})
export class ProductHomeComponent implements OnInit {
  model: Product  = new Product(0, '', 0, 0, true);
  products : Product[] = <Product[]>[];
  currentAction : ProductAction = ProductAction.None;


  constructor(
    // public service:ProductListService
    public service:ProductApiService
  ) {

  }
  //Angular Lifecycle Method. 
  ngOnInit() {
    // this.products = this.service.getAll(); 
    this.service.getAll()
      .subscribe((data:any)=>this.products = data);
    
  }
  selectProduct ( data : any) { 
    this.currentAction = data.action;
    console.log(this.currentAction)
    if(data.id==0) 
      this.model = new Product(0, '', 0, 0, false);
    else 
      //this.model = this.service.getDetails(data.id);
      this.service.getDetails(data.id).subscribe((data:any)=>this.model=data);
  }

  populateProducts=()=>{
    this.service.getAll()
    .subscribe((data:any)=>{
      this.products = data;
      //console.log('reloaded')
    });
  }

  saveDetails(e:any): void { 
    console.log(this.model)
    if(this.currentAction===ProductAction.View) {

    } else if (this.currentAction===ProductAction.Edit) { 
      this.service.edit(this.model).subscribe((data:any)=>this.populateProducts());
    } else if (this.currentAction===ProductAction.Create) { 
      this.service.create(this.model).subscribe((data:any)=>this.populateProducts());
    } else if(this.currentAction===ProductAction.Delete) { 
      this.service.delete(this.model).subscribe((data:any)=>this.populateProducts());
    }
   
  }


}
