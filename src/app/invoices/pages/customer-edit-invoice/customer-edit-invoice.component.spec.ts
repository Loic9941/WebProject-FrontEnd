import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEditInvoiceComponent } from './customer-edit-invoice.component';

describe('CustomerEditInvoiceComponent', () => {
  let component: CustomerEditInvoiceComponent;
  let fixture: ComponentFixture<CustomerEditInvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerEditInvoiceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerEditInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
