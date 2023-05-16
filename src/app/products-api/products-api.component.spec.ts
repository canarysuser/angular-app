import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsApiComponent } from './products-api.component';

describe('ProductsApiComponent', () => {
  let component: ProductsApiComponent;
  let fixture: ComponentFixture<ProductsApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductsApiComponent]
    });
    fixture = TestBed.createComponent(ProductsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
