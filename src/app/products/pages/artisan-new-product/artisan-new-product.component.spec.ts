import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanNewProductComponent } from './artisan-new-product.component';

describe('ArtisanNewProductComponent', () => {
  let component: ArtisanNewProductComponent;
  let fixture: ComponentFixture<ArtisanNewProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanNewProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
