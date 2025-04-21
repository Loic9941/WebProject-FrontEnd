import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtisanProductsComponent } from './atisan-products.component';

describe('AtisanProductsComponent', () => {
  let component: AtisanProductsComponent;
  let fixture: ComponentFixture<AtisanProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtisanProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtisanProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
