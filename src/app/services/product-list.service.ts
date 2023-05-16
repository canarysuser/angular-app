import { Injectable } from '@angular/core';
import { Product } from '../models/product';

const productList : Product[] = [
  new Product(101, 'Product 1', 200, 20, true),
  new Product(102, 'Product 2', 300, 30, true),
  new Product(103, 'Product 3', 400, 40, true),
  new Product(104, 'Product 4', 500, 50, true),
];

// COMPONENT : ng g service services/product-list --skip-tests --flat 
@Injectable({
  providedIn: 'root'
})
export class ProductListService {

  constructor() { }
  products  = productList;
  getAll() : Product[] {
    return this.products;
  } 
  getDetails( productId: number) : Product { 
    var filteredItems = this.products.filter(c=>c.productId==productId);
    if(filteredItems) //!=null
      return filteredItems[0];
    else 
      throw Error("No items found.");
  }
  create(item:Product) : void { 
    this.products.push(item);
  }
  edit(item:Product) : void { 
    var lastIndex = this.products.findIndex(c=>c.productId==item.productId);
    if(lastIndex>-1)
      this.products.splice(lastIndex, 1, item);
  }
  delete(item:Product) : void { 
    var lastIndex = this.products.findIndex(c=>c.productId==item.productId);
    
    if(lastIndex>-1)
      this.products.splice(lastIndex, 1);
  }
  
}
