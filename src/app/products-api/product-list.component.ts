import { Component } from '@angular/core';
import { Product } from '../models/product';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:Product[] = <Product[]>[];

  constructor(private service: ProductApiService) {
    this.service.getAll().subscribe((data:any)=>this.products=data);
   } 



}
