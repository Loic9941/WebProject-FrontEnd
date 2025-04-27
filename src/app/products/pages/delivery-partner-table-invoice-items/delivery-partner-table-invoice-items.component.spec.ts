import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPartnerTableInvoiceItemsComponent } from './delivery-partner-table-invoice-items.component';

describe('DeliveryPartnerTableInvoiceItemsComponent', () => {
  let component: DeliveryPartnerTableInvoiceItemsComponent;
  let fixture: ComponentFixture<DeliveryPartnerTableInvoiceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryPartnerTableInvoiceItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPartnerTableInvoiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
