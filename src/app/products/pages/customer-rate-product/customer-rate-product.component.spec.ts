import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRateProductComponent } from './customer-rate-product.component';

describe('CustomerRateProductComponent', () => {
  let component: CustomerRateProductComponent;
  let fixture: ComponentFixture<CustomerRateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerRateProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerRateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
