import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanTableInvoiceItemsComponent } from './artisan-table-invoice-items.component';

describe('ArtisanTableInvoiceItemsComponent', () => {
  let component: ArtisanTableInvoiceItemsComponent;
  let fixture: ComponentFixture<ArtisanTableInvoiceItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanTableInvoiceItemsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanTableInvoiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
