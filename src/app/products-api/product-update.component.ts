import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {
  productId: number = 0;
  productForm: any;
  model: Product = <Product>{};

  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private httpService: ProductApiService
  ) {
    this.productId = parseInt(this.currentRoute.snapshot.params["id"]);
    this.model = new Product(0, '', 0, 0, false);
    this.productForm = new FormGroup({
      productId: new FormControl(this.model.productId),
      productName: new FormControl(this.model.productName),
      unitPrice: new FormControl(this.model.unitPrice),
      unitsInStock: new FormControl(this.model.unitsInStock),
      discontinued: new FormControl(this.model.discontinued)
    });
  }
  ngOnInit(): void {
    this.httpService.getDetails(this.productId).subscribe((data: any) => {
      this.model = data;
      console.log('Inside ngOnInit', this.model);
      this.productForm.patchValue({
        productId: this.model.productId,
        productName: this.model.productName,
        unitPrice: this.model.unitPrice,
        unitsInStock: this.model.unitsInStock,
        discontinued: this.model.discontinued
      })
    });
  }
  onFormSubmit(e: any) {
    e.preventDefault();
    e.stopPropagation();
    //complete the DB updates and then 
    this.model = { ...this.productForm.value };
    this.httpService.edit(this.model).subscribe((data: any) => {
      this.router.navigate(['/productsapi', "list"]);
    })

  }
}
