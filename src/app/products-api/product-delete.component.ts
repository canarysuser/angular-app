import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductApiService } from '../services/product-api.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent {
  productId:number = 0;
  model:Product = <Product>{};
  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute,
    private httpService: ProductApiService
  ){
  }
  ngOnInit(): void {
    this.productId = parseInt(this.currentRoute.snapshot.params["id"]);
    this.httpService.getDetails(this.productId)
      .subscribe((data:any)=>this.model=data);
  }


   onFormSubmit(e:any) {
    e.preventDefault();
    e.stopPropagation();
    this.httpService.delete(this.model)
      .subscribe((data:any)=>{
        this.router.navigate(['/productsapi', "list"]);
      });
  }
}
