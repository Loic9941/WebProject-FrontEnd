import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableInvoiceItemsComponent } from './table-invoice-items.component';

describe('TableInvoiceItemsComponent', () => {
  let component: TableInvoiceItemsComponent;
  let fixture: ComponentFixture<TableInvoiceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableInvoiceItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableInvoiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
