import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTableInvoiceItemsComponent } from './admin-table-invoice-items.component';

describe('AdminTableInvoiceItemsComponent', () => {
  let component: AdminTableInvoiceItemsComponent;
  let fixture: ComponentFixture<AdminTableInvoiceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminTableInvoiceItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminTableInvoiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
