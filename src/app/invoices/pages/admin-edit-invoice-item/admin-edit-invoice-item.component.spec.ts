import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditInvoiceItemComponent } from './admin-edit-invoice-item.component';

describe('AdminEditInvoiceItemComponent', () => {
  let component: AdminEditInvoiceItemComponent;
  let fixture: ComponentFixture<AdminEditInvoiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminEditInvoiceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditInvoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
