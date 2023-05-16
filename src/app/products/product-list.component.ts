import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { Product } from '../models/product';
import { ProductAction } from '../models/product-action';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products:Product[]=<Product[]>[];
  //@Input() currentAction:ProductAction=ProductAction.View;
  @Output() selectEvent = new EventEmitter();

  // model:Product=<Product>{}; //initialize with an empty object.
  // action: string="";

  constructor(
    public service: ProductListService
  ) {
    //this.products = service.getAll();
  }
  viewDetails(productId : number) {
    //this.currentAction = ProductAction.View;
    this.selectEvent.emit({action:ProductAction.View, id: productId});
    //this.model = this.service.getDetails(productId)
    //this.action='View';
  }
  editDetails(productId: number) { 
    //this.currentAction = ProductAction.Edit;
    this.selectEvent.emit({action:ProductAction.Edit, id: productId});
    // this.model = this.service.getDetails(productId)
    // this.action='Edit';
  } 
  deleteProduct(productId: number) { 
    //this.currentAction = ProductAction.Delete;
    this.selectEvent.emit({action:ProductAction.Delete, id: productId});
    // this.model = this.service.getDetails(productId)
    // this.action='Delete';
  }
  createProduct() { 
    //this.currentAction = ProductAction.Create;
    this.selectEvent.emit({action:ProductAction.Create, id: 0});
  }
  diagnostic(){
    //return {action:this.action, ...this.model};
  }

}
