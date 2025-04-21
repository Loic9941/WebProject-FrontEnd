import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanEditProductComponent } from './artisan-edit-product.component';

describe('ArtisanEditProductComponent', () => {
  let component: ArtisanEditProductComponent;
  let fixture: ComponentFixture<ArtisanEditProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanEditProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanEditProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
