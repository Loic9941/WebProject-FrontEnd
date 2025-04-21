import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewInvoiceComponent } from './customer-view-invoice.component';

describe('CustomerViewInvoiceComponent', () => {
  let component: CustomerViewInvoiceComponent;
  let fixture: ComponentFixture<CustomerViewInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerViewInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerViewInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
