import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Product } from '../models/product';
import { ProductAction } from '../models/product-action';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnChanges {
  @Input() model:Product = <Product>{};
  @Input() currentAction:ProductAction = ProductAction.None;
  @Output() saveEvent:EventEmitter<any> = new EventEmitter();
  isDisabled=false;

ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
    this.currentAction=changes['currentAction'].currentValue;
    if(this.currentAction==ProductAction.View||this.currentAction==ProductAction.Delete)
      this.isDisabled=true;
    else 
      this.isDisabled=false;
}
  diagnostic(){
    return this.model;
  }
  onFormSubmit(e:any) { 
    e.preventDefault(); 
    console.log(this.model);
    this.saveEvent.emit({});
  }
}
