import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableProductsComponent } from './customer-table-products.component';

describe('CustomerTableProductsComponent', () => {
  let component: CustomerTableProductsComponent;
  let fixture: ComponentFixture<CustomerTableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTableProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
