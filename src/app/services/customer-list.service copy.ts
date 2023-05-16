import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

const productList : Customer[] = [
  new Customer('101', 'Product 1', '200', '20', 'true'),
  new Customer('102', 'Product 2', '300', '30', 'true'),
  new Customer('103', 'Product 3', '400', '40', 'true'),
  new Customer('104', 'Product 4', '500', '50', 'true'),
];

// COMPONENT : ng g service services/customer-list --skip-tests --flat 
@Injectable({
  providedIn: 'root'
})
export class CustomerListService {

  constructor() { }
  products  = productList;
  getAll() : Customer[] {
    return this.products;
  } 
  getDetails( CustomerId: string) : Customer { 
    var filteredItems = this.products.filter(c=>c.customerId==CustomerId);
    if(filteredItems) //!=null
      return filteredItems[0];
    else 
      throw Error("No items found.");
  }
}
