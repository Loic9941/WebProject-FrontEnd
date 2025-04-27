import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtisanRateCommentComponent } from './artisan-rate-comment.component';

describe('ArtisanRateCommentComponent', () => {
  let component: ArtisanRateCommentComponent;
  let fixture: ComponentFixture<ArtisanRateCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtisanRateCommentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtisanRateCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
