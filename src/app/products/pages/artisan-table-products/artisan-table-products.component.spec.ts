import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanTableProductsComponent } from './artisan-table-products.component';

describe('ArtisanTableProductsComponent', () => {
  let component: ArtisanTableProductsComponent;
  let fixture: ComponentFixture<ArtisanTableProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanTableProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanTableProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
