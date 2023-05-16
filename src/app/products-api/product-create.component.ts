import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  model:Product = <Product>{};
  productForm:any;
  constructor(
    private router: Router,
    private httpService: ProductApiService
  ){

  }
  ngOnInit(): void {
    this.model = new Product(0, 'EMPTY', 0,0,false);
    this.productForm = new FormGroup({
      productName: new FormControl(this.model.productName),
      unitPrice: new FormControl(this.model.unitPrice),
      unitsInStock: new FormControl(this.model.unitsInStock)
    });
  }

   onFormSubmit(e:any) {
    e.preventDefault();
    e.stopPropagation();
    //complete the DB updates and then 
    console.log(this.productForm.value);
    this.model = {...this.model, ...this.productForm.value }
    console.log(this.productForm.value, this.model);
    this.httpService.create(this.model).subscribe(async (data:any) => {
      await this.router.navigate(['/productsapi']);
    })
  }
}
