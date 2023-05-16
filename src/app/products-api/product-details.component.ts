import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductApiService } from '../services/product-api.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId:number=0;
  model: Product = <Product>{};
  constructor(
    private router: Router,
    private currentRoute: ActivatedRoute, 
    private httpService: ProductApiService
    ){
    }

    //Angular Lifecycle method - called once - after the first ngOnChanges is called 
    //or after the component is loaded if ngOnchanges is not called.
    ngOnInit(): void {
      this.productId = parseInt(this.currentRoute.snapshot.params["id"]);
      this.httpService.getDetails(this.productId)
        .subscribe((data:any)=>this.model=data);
    }

   onFormSubmit(e:any) {
    e.preventDefault();
    e.stopPropagation();
    //complete the DB updates and then 
    this.router.navigate(['/productsapi', "list"]);
  }
}
