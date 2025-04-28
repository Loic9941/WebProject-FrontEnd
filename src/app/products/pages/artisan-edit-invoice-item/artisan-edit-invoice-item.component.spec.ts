import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanEditInvoiceItemComponent } from './artisan-edit-invoice-item.component';

describe('ArtisanEditInvoiceItemComponent', () => {
  let component: ArtisanEditInvoiceItemComponent;
  let fixture: ComponentFixture<ArtisanEditInvoiceItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanEditInvoiceItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanEditInvoiceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
