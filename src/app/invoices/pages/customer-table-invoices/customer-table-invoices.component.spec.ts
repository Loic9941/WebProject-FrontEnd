import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTableInvoicesComponent } from './customer-table-invoices.component';

describe('CustomerTableInvoicesComponent', () => {
  let component: CustomerTableInvoicesComponent;
  let fixture: ComponentFixture<CustomerTableInvoicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerTableInvoicesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerTableInvoicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
