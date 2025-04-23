import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanTableRatingsComponent } from './artisan-table-ratings.component';

describe('ArtisanTableRatingsComponent', () => {
  let component: ArtisanTableRatingsComponent;
  let fixture: ComponentFixture<ArtisanTableRatingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanTableRatingsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanTableRatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
