import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanFinancialReportsComponent } from './artisan-financial-reports.component';

describe('ArtisanFinancialReportsComponent', () => {
  let component: ArtisanFinancialReportsComponent;
  let fixture: ComponentFixture<ArtisanFinancialReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanFinancialReportsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanFinancialReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
