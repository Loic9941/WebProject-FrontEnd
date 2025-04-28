import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryPartnerEditInvoiceItemComponent } from './delivery-partner-edit-invoice-item.component';

describe('DeliveryPartnerEditInvoiceItemComponent', () => {
  let component: DeliveryPartnerEditInvoiceItemComponent;
  let fixture: ComponentFixture<DeliveryPartnerEditInvoiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeliveryPartnerEditInvoiceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryPartnerEditInvoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
